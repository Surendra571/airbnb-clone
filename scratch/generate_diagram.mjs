import fs from 'node:fs';
import { spawn } from 'node:child_process';

const diagramHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #0F172A;
    color: #F8FAFC;
    padding: 32px;
    width: 1700px;
    height: 1150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #334155;
    padding-bottom: 16px;
    margin-bottom: 20px;
  }
  .header h1 {
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .badge {
    background: #FF385C;
    color: white;
    font-size: 13px;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .header-meta {
    font-size: 14px;
    color: #94A3B8;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 240px 1fr 340px;
    gap: 20px;
    flex: 1;
  }

  /* Layers & Columns */
  .section-card {
    background: #1E293B;
    border: 1px solid #334155;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .section-title {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #38BDF8;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Client & Edge Column */
  .col-edge {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .node-box {
    background: #0F172A;
    border: 1px solid #475569;
    border-radius: 8px;
    padding: 12px 14px;
  }
  .node-box.highlight {
    border-color: #FF385C;
    background: rgba(255, 56, 92, 0.08);
  }
  .node-box.blue {
    border-color: #38BDF8;
    background: rgba(56, 189, 248, 0.08);
  }
  .node-box.emerald {
    border-color: #10B981;
    background: rgba(16, 185, 129, 0.08);
  }
  .node-box.amber {
    border-color: #F59E0B;
    background: rgba(245, 158, 11, 0.08);
  }
  .node-box.purple {
    border-color: #A855F7;
    background: rgba(168, 85, 247, 0.08);
  }

  .node-title {
    font-size: 14px;
    font-weight: 600;
    color: #F1F5F9;
    margin-bottom: 4px;
  }
  .node-desc {
    font-size: 11.5px;
    color: #94A3B8;
    line-height: 1.4;
  }

  /* Center Column: App, Gateway & Microservices */
  .col-center {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .service-card {
    background: #0F172A;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 10px 12px;
    border-top: 3px solid #38BDF8;
  }
  .service-card.red { border-top-color: #FF385C; }
  .service-card.green { border-top-color: #10B981; }
  .service-card.yellow { border-top-color: #F59E0B; }
  .service-card.purple { border-top-color: #A855F7; }
  .service-title {
    font-size: 13px;
    font-weight: 600;
    color: #F8FAFC;
    margin-bottom: 4px;
  }
  .service-desc {
    font-size: 11px;
    color: #94A3B8;
    line-height: 1.35;
  }

  /* Data Layer */
  .data-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr;
    gap: 12px;
  }

  /* Right Column: Async, Storage, External */
  .col-right {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  /* Bottom Bar: Security & Observability */
  .bottom-bar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 14px;
  }
  .bar-card {
    background: #1E293B;
    border: 1px solid #334155;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .bar-icon {
    font-size: 20px;
  }
  .bar-info h4 {
    font-size: 13px;
    color: #E2E8F0;
    margin-bottom: 2px;
  }
  .bar-info p {
    font-size: 11.5px;
    color: #94A3B8;
  }

  .flow-arrow {
    text-align: center;
    color: #64748B;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
  }
</style>
</head>
<body>

  <!-- Header -->
  <div class="header">
    <h1>
      <span>Production-Scale Vacation Rental Marketplace Architecture</span>
      <span class="badge">Target Production Scale</span>
    </h1>
    <div class="header-meta">High-Availability &bull; Horizontally Scaled &bull; Multi-Region Edge</div>
  </div>

  <div class="grid-container">

    <!-- LEFT COLUMN: Client, Edge, & Web Frontend -->
    <div class="col-edge">
      <!-- Client Tier -->
      <div class="section-card">
        <div class="section-title">Client Tier</div>
        <div class="node-box highlight">
          <div class="node-title">Desktop Web Browser</div>
          <div class="node-desc">1440&times;900 Desktop-optimized SPA / SSR Viewport, Keyboard & A11y Traps</div>
        </div>
        <div class="node-box">
          <div class="node-title">Mobile Web / Apps</div>
          <div class="node-desc">Responsive Viewports, Mobile Browsers & Native Apps</div>
        </div>
      </div>

      <div class="flow-arrow">&darr; HTTPS / TLS 1.3 &darr;</div>

      <!-- Edge / CDN Tier -->
      <div class="section-card">
        <div class="section-title">Edge & CDN Tier</div>
        <div class="node-box blue">
          <div class="node-title">Global Anycast CDN</div>
          <div class="node-desc">Static JS/CSS Caching, Geo-Routing, SSL Offloading, DDoS & WAF Protection</div>
        </div>
        <div class="node-box emerald">
          <div class="node-title">Edge Image Optimization</div>
          <div class="node-desc">On-the-fly WebP/AVIF transcoding, responsive resize, edge caching</div>
        </div>
      </div>

      <div class="flow-arrow">&darr; Cached / Origin &darr;</div>

      <!-- Web Frontend Tier -->
      <div class="section-card">
        <div class="section-title">Web Application Tier</div>
        <div class="node-box">
          <div class="node-title">Next.js Web Frontend</div>
          <div class="node-desc">React 19, Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), App Router</div>
        </div>
      </div>
    </div>

    <!-- CENTER COLUMN: API Gateway, Microservices, & Data Tier -->
    <div class="col-center">

      <!-- API Gateway -->
      <div class="section-card">
        <div class="section-title">API Management & Ingress Layer</div>
        <div class="node-box purple" style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div class="node-title">API Gateway / Envoy / NGINX Load Balancer</div>
            <div class="node-desc">Reverse Proxy, JWT Authentication, Global Rate Limiting, Circuit Breakers, Request Routing</div>
          </div>
          <div style="font-size: 11px; background: #334155; padding: 4px 8px; border-radius: 4px; color: #E2E8F0;">
            gRPC / REST / GraphQL
          </div>
        </div>
      </div>

      <div class="flow-arrow">&darr; Authenticated / Routed Workloads &darr;</div>

      <!-- Logical Microservices -->
      <div class="section-card">
        <div class="section-title">Core Domain Services (Stateless Microservices)</div>
        <div class="services-grid">
          <div class="service-card red">
            <div class="service-title">Listing Service</div>
            <div class="service-desc">Property metadata, room taxonomy, amenities, photos, pricing rules</div>
          </div>
          <div class="service-card green">
            <div class="service-title">Booking Service</div>
            <div class="service-desc">Calendar availability, holds, reservation state machine, cancellations</div>
          </div>
          <div class="service-card yellow">
            <div class="service-title">Payment Service</div>
            <div class="service-desc">Auth, capture, refunds, escrow, idempotency, webhook handling</div>
          </div>
          <div class="service-card purple">
            <div class="service-title">Search Service</div>
            <div class="service-desc">Geo-spatial queries, pricing/dates filtering, listing ranking, indexing</div>
          </div>
          <div class="service-card">
            <div class="service-title">User & Auth Service</div>
            <div class="service-desc">Guest & Host accounts, Superhost status, credentials, session lifecycle</div>
          </div>
          <div class="service-card">
            <div class="service-title">Review Service</div>
            <div class="service-desc">Sub-ratings (Cleanliness, Check-in, etc.), aggregate scoring, badge rules</div>
          </div>
          <div class="service-card">
            <div class="service-title">Notification Service</div>
            <div class="service-desc">Transactional emails, push notifications, SMS booking updates</div>
          </div>
          <div class="service-card">
            <div class="service-title">Pricing & Tax Service</div>
            <div class="service-desc">Dynamic seasonal pricing, service fees, occupancy taxes, discounts</div>
          </div>
        </div>
      </div>

      <div class="flow-arrow">&darr; Read / Write Queries &amp; Cache-Aside &darr;</div>

      <!-- Data Persistence Tier -->
      <div class="section-card">
        <div class="section-title">Data Storage & Caching Tier</div>
        <div class="data-grid">
          <div class="node-box emerald">
            <div class="node-title">Primary Relational DB (PostgreSQL)</div>
            <div class="node-desc">
              <strong>Entities:</strong> Users, Properties, Availability, Reservations, Payments, Reviews<br>
              <strong>Scale:</strong> Primary + Multi-AZ Read Replicas, Connection Pooling (PgBouncer)
            </div>
          </div>
          <div class="node-box amber">
            <div class="node-title">Redis Cluster (Distributed Cache)</div>
            <div class="node-desc">
              <strong>Uses:</strong> Session cache, fast availability lookups, distributed locks (Redlock), API rate limiting
            </div>
          </div>
          <div class="node-box blue">
            <div class="node-title">Search Engine (OpenSearch / ES)</div>
            <div class="node-desc">
              <strong>Capabilities:</strong> Geo-distance search, faceted filtering (amenities, dates), listing ranking
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- RIGHT COLUMN: Object Storage, Async Processing, & External Integrations -->
    <div class="col-right">

      <!-- Object Storage & Media -->
      <div class="section-card">
        <div class="section-title">Object Storage & Media Pipeline</div>
        <div class="node-box">
          <div class="node-title">S3-Compatible Object Storage</div>
          <div class="node-desc">High-res photos (21+ room images), host avatars, documents, versioned storage</div>
        </div>
        <div class="flow-arrow">&darr; Upload &bull; CDN Fetch &darr;</div>
        <div class="node-box emerald">
          <div class="node-title">Global Media CDN</div>
          <div class="node-desc">Signed URLs, caching, image compression, ultra-low TTFB delivery to browser</div>
        </div>
      </div>

      <!-- Async Layer -->
      <div class="section-card">
        <div class="section-title">Asynchronous & Event Streaming</div>
        <div class="node-box purple">
          <div class="node-title">Message Broker (Kafka / SQS / RabbitMQ)</div>
          <div class="node-desc">Event bus for booking events, payment updates, and domain event publishing</div>
        </div>
        <div class="flow-arrow">&darr; Event Consumers &darr;</div>
        <div class="node-box">
          <div class="node-title">Background Worker Fleet</div>
          <div class="node-desc">
            &bull; Image transcoding & thumbnail creation<br>
            &bull; Search engine re-indexing<br>
            &bull; Email / SMS notification dispatch<br>
            &bull; Analytics & booking expiry handlers
          </div>
        </div>
      </div>

      <!-- External Services -->
      <div class="section-card">
        <div class="section-title">External Providers & Gateways</div>
        <div class="node-box highlight">
          <div class="node-title">Payment Gateways (Stripe / Adyen)</div>
          <div class="node-desc">PCI-compliant tokenization, payment webhooks, payout transfers</div>
        </div>
        <div class="node-box">
          <div class="node-title">Communication APIs (Twilio / SendGrid)</div>
          <div class="node-desc">Transactional SMS, confirmation emails</div>
        </div>
      </div>

    </div>

  </div>

  <!-- Bottom Bar: Cross-Cutting Concerns -->
  <div class="bottom-bar">
    <div class="bar-card">
      <div class="bar-icon" style="color: #38BDF8;">&#x1F512;</div>
      <div class="bar-info">
        <h4>Enterprise Security & Compliance</h4>
        <p>End-to-End TLS 1.3, Zero Trust Network, Secrets Vault (KMS), Role-Based Access Control (RBAC), PCI-DSS Isolation, JWT Session Invalidation.</p>
      </div>
    </div>
    <div class="bar-card">
      <div class="bar-icon" style="color: #10B981;">&#x1F4CA;</div>
      <div class="bar-info">
        <h4>Observability & Reliability</h4>
        <p>OpenTelemetry distributed tracing, Prometheus metrics, centralized ELK/Grafana logging, synthetic monitoring, auto-scaling &amp; circuit breakers.</p>
      </div>
    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync('scratch/diagram.html', diagramHtml);
console.log('Saved scratch/diagram.html');

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const USER_DATA_DIR = "C:\\Users\\akkis\\.gemini\\antigravity\\brain\\021a6cca-08d4-4c12-b992-91158e8f8671\\scratch\\chrome_profile_diag";
const PORT = 9228;

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function render() {
  const chrome = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA_DIR}`,
    '--window-size=1750,1220',
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
    width: 1700,
    height: 1150,
    deviceScaleFactor: 2, // High resolution retina capture
    mobile: false,
  });

  const fileUrl = 'file:///' + process.cwd().replace(/\\\\/g, '/') + '/scratch/diagram.html';
  console.log(`Navigating to ${fileUrl}...`);
  await sendSession('Page.navigate', { url: fileUrl });
  await sleep(2000);

  const shot = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('docs/architecture-diagram.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved docs/architecture-diagram.png successfully!');

  await send('Target.closeTarget', { targetId });
  ws.close();
  chrome.kill();
  process.exit(0);
}

render().catch((err) => {
  console.error('Failed to render architecture diagram:', err);
  process.exit(1);
});

