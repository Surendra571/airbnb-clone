---
name: cdp-screenshot
description: Automated high-resolution viewport and fullpage screenshot capture via Chrome DevTools Protocol (CDP) for pixel-perfect visual QA.
---

# CDP Screenshot Skill

## Purpose
Enables deterministic, automated screenshot capture of local and reference web applications at precise desktop viewport dimensions (`1440 × 900`) and device scale factors without requiring manual browser interaction.

## When to Use
- Capturing baseline screenshots of the reference application.
- Capturing verification screenshots of the local Next.js application after frontend changes.
- Rendering high-resolution architecture diagrams and visual documentation assets.

## Standard Execution Pattern
```javascript
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const chrome = spawn("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", [
  '--remote-debugging-port=9222',
  '--user-data-dir=scratch/chrome_profile',
  '--window-size=1440,900',
  '--no-first-run',
]);

// Connect via WebSocket, set emulation metrics:
await send('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
});

// Navigate, wait for paint/transitions, and capture screenshot:
const shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync('scratch/qa/screenshot.png', Buffer.from(shot.data, 'base64'));
```

## Key Guidelines
- Always verify that the dev server is active and responding before initiating capture.
- Allow adequate settling time (`2000ms`–`3500ms`) for lazy-loaded imagery and animations.

