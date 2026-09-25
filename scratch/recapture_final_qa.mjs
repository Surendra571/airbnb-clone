import { spawn } from 'node:child_process';
import fs from 'node:fs';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const USER_DATA_DIR = "C:\\Users\\akkis\\.gemini\\antigravity\\brain\\021a6cca-08d4-4c12-b992-91158e8f8671\\scratch\\chrome_profile_qa";
const PORT = 9227;

const LOCAL_BASE = 'http://localhost:3000';

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function run() {
  const chrome = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA_DIR}`,
    '--window-size=1440,900',
    '--no-first-run',
    '--no-default-browser-check',
  ], { stdio: 'ignore' });

  let version = null;
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) {
        version = await res.json();
        break;
      }
    } catch (e) {
      await sleep(500);
    }
  }

  if (!version) {
    chrome.kill();
    throw new Error('Chrome failed to start');
  }

  const ws = new WebSocket(version.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise((r) => ws.onopen = r);

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });

  function sendSession(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, sessionId, method, params }));
    });
  }

  await sendSession('Page.enable');
  await sendSession('Runtime.enable');
  await sendSession('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });

  if (!fs.existsSync('scratch/qa')) {
    fs.mkdirSync('scratch/qa', { recursive: true });
  }

  async function snap(url, scrollY, filename, waitMs = 3000) {
    console.log(`Navigating to ${url}...`);
    await sendSession('Page.navigate', { url });
    await sleep(waitMs);
    if (scrollY > 0) {
      await sendSession('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY})` });
      await sleep(1000);
    }
    const shot = await sendSession('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`scratch/qa/${filename}`, Buffer.from(shot.data, 'base64'));
    console.log(`Saved scratch/qa/${filename}`);
  }

  // Final updated Local Screenshots
  console.log('=== CAPTURING FINAL LOCAL SCREENSHOTS ===');
  await snap(`${LOCAL_BASE}/`, 0, 'L1_listing.png', 3000);
  await snap(`${LOCAL_BASE}/`, 650, 'L2_listing_details.png', 2000);
  await snap(`${LOCAL_BASE}/`, 1500, 'L3_listing_amenities.png', 2000);
  await snap(`${LOCAL_BASE}/?modal=PHOTO_TOUR_SCROLLABLE`, 0, 'L4_photo_tour.png', 3000);
  await snap(`${LOCAL_BASE}/?modal=PHOTO_TOUR_SCROLLABLE`, 700, 'L5_photo_tour_scrolled.png', 2000);
  await snap(`${LOCAL_BASE}/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1000`, 0, 'L6_lightbox_first.png', 3000);
  await snap(`${LOCAL_BASE}/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1008`, 0, 'L7_lightbox_middle.png', 2500);
  await snap(`${LOCAL_BASE}/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1020`, 0, 'L8_lightbox_last.png', 2500);

  await send('Target.closeTarget', { targetId });
  ws.close();
  chrome.kill();
  console.log('=== ALL FINAL LOCAL SCREENSHOTS CAPTURED! ===');
  process.exit(0);
}

run().catch((e) => {
  console.error('Error in recapture_final_qa:', e);
  process.exit(1);
});

