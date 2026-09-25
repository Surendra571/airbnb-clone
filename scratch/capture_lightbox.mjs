import { spawn } from 'node:child_process';
import fs from 'node:fs';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const USER_DATA_DIR = "C:\\Users\\akkis\\.gemini\\antigravity\\brain\\021a6cca-08d4-4c12-b992-91158e8f8671\\scratch\\chrome_profile_lightbox";
const PORT = 9224;

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function capture() {
  const chrome = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA_DIR}`,
    '--window-size=1440,1080',
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
  await sendSession('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 1080,
    deviceScaleFactor: 1,
    mobile: false,
  });

  // 1. Capture First Photo (id: 1000)
  console.log('Navigating to first photo (1000)...');
  await sendSession('Page.navigate', { url: 'http://localhost:3000/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1000' });
  await sleep(3500);
  const shot1 = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/local_lightbox_first.png', Buffer.from(shot1.data, 'base64'));
  console.log('Saved scratch/local_lightbox_first.png');

  // 2. Capture Middle Photo (id: 1008)
  console.log('Navigating to middle photo (1008)...');
  await sendSession('Page.navigate', { url: 'http://localhost:3000/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1008' });
  await sleep(2000);
  await sendSession('Runtime.evaluate', {
    expression: 'new Promise(r => { const img = document.querySelector("img[alt=\'Bedroom photo\']"); if (img && img.complete && img.naturalWidth) r(); else if (img) { img.onload = r; img.onerror = r; setTimeout(r, 4000); } else setTimeout(r, 2000); })',
    awaitPromise: true
  });
  await sleep(500);
  const shot2 = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/local_lightbox_middle.png', Buffer.from(shot2.data, 'base64'));
  console.log('Saved scratch/local_lightbox_middle.png');

  // 3. Capture Last Photo (id: 1020)
  console.log('Navigating to last photo (1020)...');
  await sendSession('Page.navigate', { url: 'http://localhost:3000/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1020' });
  await sleep(3000);
  const shot3 = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/local_lightbox_last.png', Buffer.from(shot3.data, 'base64'));
  console.log('Saved scratch/local_lightbox_last.png');

  await send('Target.closeTarget', { targetId });
  ws.close();
  chrome.kill();
  process.exit(0);
}

capture().catch((e) => {
  console.error('Error:', e);
  process.exit(1);
});
