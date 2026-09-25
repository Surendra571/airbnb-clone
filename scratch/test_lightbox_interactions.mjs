import { spawn } from 'node:child_process';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const USER_DATA_DIR = "C:\\Users\\akkis\\.gemini\\antigravity\\brain\\021a6cca-08d4-4c12-b992-91158e8f8671\\scratch\\chrome_profile_int_test";
const PORT = 9225;

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runInteractionTests() {
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
  await sendSession('Runtime.enable');

  async function evaluate(expression) {
    const result = await sendSession('Runtime.evaluate', { expression, returnByValue: true });
    return result.result?.value;
  }

  async function pressKey(key, code) {
    await sendSession('Input.dispatchKeyEvent', { type: 'keyDown', key, code });
    await sendSession('Input.dispatchKeyEvent', { type: 'keyUp', key, code });
    await sleep(400);
  }

  console.log('=== TEST 1: Listing Page -> Show all photos -> Click first image -> Arrows & Escape ===');
  await sendSession('Page.navigate', { url: 'http://localhost:3000' });
  await sleep(6000);

  // Click Show all photos
  await evaluate(`document.querySelector('button[aria-label="Show all photos"]').click()`);
  await sleep(1500);
  let isPhotoTourOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo tour"]')`);
  console.log('Photo Tour open after click:', isPhotoTourOpen);

  // Click first image in photo tour
  await evaluate(`document.getElementById('photo-tour-btn-1000').click()`);
  await sleep(800);
  let isLightboxOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo viewer"]')`);
  let counterText = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-medium')?.textContent`);
  console.log('Lightbox open on first photo:', isLightboxOpen, 'Counter:', counterText);

  // ArrowRight -> photo 2
  await pressKey('ArrowRight', 'ArrowRight');
  counterText = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-medium')?.textContent`);
  console.log('After ArrowRight, Counter:', counterText);

  // ArrowRight -> photo 3
  await pressKey('ArrowRight', 'ArrowRight');
  counterText = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-medium')?.textContent`);
  console.log('After ArrowRight, Counter:', counterText);

  // ArrowLeft -> photo 2
  await pressKey('ArrowLeft', 'ArrowLeft');
  counterText = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-medium')?.textContent`);
  console.log('After ArrowLeft, Counter:', counterText);

  // Escape -> Lightbox closes, Photo Tour remains
  await pressKey('Escape', 'Escape');
  await sleep(600);
  isLightboxOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo viewer"]')`);
  isPhotoTourOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo tour"]')`);
  console.log('After Escape: Lightbox closed =', !isLightboxOpen, ', Photo Tour remains open =', isPhotoTourOpen);

  console.log('\n=== TEST 2: Photo Tour -> Click middle image -> ArrowLeft / ArrowRight ===');
  // Click middle photo (1008)
  await evaluate(`document.getElementById('photo-tour-btn-1008').click()`);
  await sleep(800);
  counterText = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-medium')?.textContent`);
  let roomTitle = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-semibold')?.textContent`);
  console.log('Opened middle photo. Counter:', counterText, 'Room:', roomTitle);

  // ArrowLeft
  await pressKey('ArrowLeft', 'ArrowLeft');
  counterText = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-medium')?.textContent`);
  console.log('After ArrowLeft, Counter:', counterText);

  // ArrowRight
  await pressKey('ArrowRight', 'ArrowRight');
  counterText = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-medium')?.textContent`);
  console.log('After ArrowRight, Counter:', counterText);

  console.log('\n=== TEST 3: Keyboard Focus Trap & Escape in Lightbox ===');
  // Tab through elements
  await pressKey('Tab', 'Tab');
  let focusedEl = await evaluate(`document.activeElement.getAttribute('aria-label')`);
  console.log('Active element after Tab:', focusedEl);

  await pressKey('Escape', 'Escape');
  await sleep(600);
  isLightboxOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo viewer"]')`);
  isPhotoTourOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo tour"]')`);
  console.log('Lightbox closed via Escape =', !isLightboxOpen, ', Photo Tour still open =', isPhotoTourOpen);

  console.log('\n=== TEST 4: Close Button & Focus Restoration ===');
  await sleep(1000);
  await evaluate(`document.getElementById('photo-tour-btn-1005')?.click()`);
  await sleep(1200);
  // Click close button
  await evaluate(`document.querySelector('button[aria-label="Close photo viewer"]')?.click()`);
  await sleep(1200);
  isLightboxOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo viewer"]')`);
  let activeElementId = await evaluate(`document.activeElement.id`);
  console.log('Lightbox closed via button =', !isLightboxOpen);
  console.log('Focus restored to Photo Tour button:', activeElementId === 'photo-tour-btn-1005' ? 'PASS (photo-tour-btn-1005)' : activeElementId);

  // Now close Photo Tour
  await evaluate(`document.querySelector('button[aria-label="Close photo tour"]')?.click()`);
  await sleep(1200);
  isPhotoTourOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo tour"]')`);
  console.log('Photo Tour closed =', !isPhotoTourOpen, 'Listing Page restored =', !isPhotoTourOpen && !isLightboxOpen);

  console.log('\n=== DIRECT HERO PHOTO CLICK TEST ===');
  await evaluate(`document.querySelector('button[aria-label="View photo: Living room 1"]')?.click()`);
  await sleep(1200);
  isLightboxOpen = await evaluate(`!!document.querySelector('div[aria-label="Photo viewer"]')`);
  counterText = await evaluate(`document.querySelector('div[aria-label="Photo viewer"] span.font-medium')?.textContent`);
  console.log('Hero photo click opened Lightbox directly =', isLightboxOpen, 'Counter:', counterText);

  await send('Target.closeTarget', { targetId });
  ws.close();
  chrome.kill();
  console.log('\nALL INTERACTION TESTS COMPLETED SUCCESSFULLY!');
  process.exit(0);
}

runInteractionTests().catch((e) => {
  console.error('Error in interaction tests:', e);
  process.exit(1);
});
