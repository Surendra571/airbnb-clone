import { spawn } from 'node:child_process';
import fs from 'node:fs';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const USER_DATA_DIR = "C:\\Users\\akkis\\.gemini\\antigravity\\brain\\021a6cca-08d4-4c12-b992-91158e8f8671\\scratch\\chrome_profile";
const PORT = 9222;

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

  console.log('Navigating to http://localhost:3000...');
  await sendSession('Page.navigate', { url: 'http://localhost:3000' });
  await sleep(4000);

  const shot1 = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/local_listing_viewport.png', Buffer.from(shot1.data, 'base64'));
  console.log('Saved scratch/local_listing_viewport.png');

  const shot2 = await sendSession('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
  fs.writeFileSync('scratch/local_listing_fullpage.png', Buffer.from(shot2.data, 'base64'));
  console.log('Saved scratch/local_listing_fullpage.png');

  await send('Target.closeTarget', { targetId });
  ws.close();
  chrome.kill();
  process.exit(0);
}

capture().catch((e) => {
  console.error('Error:', e);
  process.exit(1);
});

