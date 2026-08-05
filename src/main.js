import { LinkedInClient } from './services/linkedInClient.js';
import { ADKClient } from './services/adkClient.js';

// Instantiate Clients
const linkedIn = new LinkedInClient();
const adk = new ADKClient();

// Sample Initial Leads Database
const SAMPLE_LEADS = [
  {
    id: "lead_1001",
    company_name: "Apex Commerce Ltd",
    domain: "apexcommerce.store",
    contact_name: "Sarah Jenkins",
    contact_title: "Head of Growth",
    email: "sarah.j@apexcommerce.store",
    linkedin_url: "https://linkedin.com/in/sarahjenkins-growth",
    industry: "E-Commerce",
    tech_stack: ["Shopify Plus", "Klaviyo", "Stripe"],
    company_size: "50-200",
    lead_score: 96
  },
  {
    id: "lead_1002",
    company_name: "CloudSync Technologies",
    domain: "cloudsync-app.io",
    contact_name: "Marcus Vance",
    contact_title: "CEO & Founder",
    email: "marcus@cloudsync-app.io",
    linkedin_url: "https://linkedin.com/in/marcusvance-tech",
    industry: "SaaS",
    tech_stack: ["React", "PostgreSQL", "HubSpot"],
    company_size: "10-50",
    lead_score: 98
  },
  {
    id: "lead_1003",
    company_name: "Nexus Media Agency",
    domain: "nexusmedia.agency",
    contact_name: "Elena Rostova",
    contact_title: "VP of Digital Strategy",
    email: "elena.r@nexusmedia.agency",
    linkedin_url: "https://linkedin.com/in/elenarostova",
    industry: "Digital Agency",
    tech_stack: ["WordPress", "Google Ads", "Zapier"],
    company_size: "20-100",
    lead_score: 89
  },
  {
    id: "lead_1004",
    company_name: "Veloce Fitness Gear",
    domain: "velocefit.com",
    contact_name: "David Thorne",
    contact_title: "Chief Marketing Officer",
    email: "david@velocefit.com",
    linkedin_url: "https://linkedin.com/in/davidthorne-cmo",
    industry: "E-Commerce",
    tech_stack: ["WooCommerce", "Mailchimp", "Meta Ads"],
    company_size: "100-500",
    lead_score: 92
  },
  {
    id: "lead_1005",
    company_name: "EduPulse Academy",
    domain: "edupulse.co",
    contact_name: "Dr. Aris Thorne",
    contact_title: "Director of Admissions",
    email: "aris@edupulse.co",
    linkedin_url: "https://linkedin.com/in/draristhorne",
    industry: "EdTech",
    tech_stack: ["Kajabi", "Webflow", "Intercom"],
    company_size: "15-50",
    lead_score: 87
  }
];

// Social Ads Data
const SOCIAL_ADS_DATA = [
  {
    id: "li_ad_01",
    platform: "linkedin",
    format: "Single Image / Sponsored Content",
    headline: "Stop Losing 60% of Online Business Leads to Slow Response Times",
    body: "9 out of 10 online store and SaaS leads go cold within 15 minutes of non-response. Swarm Group deploys autonomous agent swarms that qualify prospects, handle objections, and close plan purchases 24/7.\n\n⚡ Zero coding required.\n⚡ 3.4x higher pipeline velocity.\n⚡ Seamless CRM & Netlify funnel integration.",
    cta: "Start Free Preview",
    targeting: "Founders, CEOs, CMOs, VPs of Growth (Company size: 10-500)",
    url: "https://swarmy-ai-leads-engine.pages.dev/"
  },
  {
    id: "li_ad_02",
    platform: "linkedin",
    format: "InMail / Conversation Ad",
    headline: "Exclusive Preview: Deploying AI Swarms for Your Business",
    body: "Hi {first_name},\n\nManaging lead acquisition manually can easily consume 40+ hours every month.\n\nWe built Swarm Group to solve this exact problem: autonomous AI agents that act as your 24/7 sales team, qualifying leads and guiding prospects to purchase.\n\nWould you be open to checking out our live funnel demo?\n\nhttps://swarmy-ai-leads-engine.pages.dev/",
    cta: "Explore Swarm Group",
    targeting: "E-commerce Founders, SaaS Executives",
    url: "https://swarmy-ai-leads-engine.pages.dev/"
  },
  {
    id: "tw_ad_01",
    platform: "twitter",
    format: "Viral B2B Thread & Promoted Tweet",
    headline: "Traditional Chatbots Are Dead",
    body: "Traditional chatbots are dead. AI Agent Swarms are replacing 40-hour sales workweeks for online business owners.\n\nHere is how Swarm Group automates lead qualification and closes $149/mo subscribers automatically 🧵👇\n\n1/ Autonomous lead discovery\n2/ Dynamic funnel routing\n3/ Instant objection handling\n\nTry it live: https://swarmy-ai-leads-engine.pages.dev/",
    cta: "Read Thread & Try Demo",
    targeting: "Tech Founders, #VibeCoding, IndieHackers, Ecom Growth",
    url: "https://swarmy-ai-leads-engine.pages.dev/"
  },
  {
    id: "meta_ad_01",
    platform: "meta",
    format: "Instagram & Facebook Carousel",
    headline: "Put Your Online Business Growth on Autopilot",
    body: "Turn website visitors into paying plan subscribers with Swarm Group. Deploy autonomous sales agents in under 5 minutes.\n\n👉 Live Demo: https://swarmy-ai-leads-engine.pages.dev/",
    cta: "Claim Your Plan",
    targeting: "E-Commerce Merchants, Digital Agency Owners",
    url: "https://swarmy-ai-leads-engine.pages.dev/"
  },
  {
    id: "yt_ad_01",
    platform: "youtube",
    format: "30-Second Video Ad Script",
    headline: "What If Your Sales Team Never Slept?",
    body: "[SCENE: Sleek dark-mode dashboard showing Swarm Group swarms converting leads in real-time]\n\nVOICEOVER: 'While your competitors sleep, Swarm Group swarms are qualifying leads, answering buyer questions, and booking plans for your online business.'\n\n[TEXT ON SCREEN: 3.4x Conversion Increase | 5-Minute Setup]\n\nVOICEOVER: 'Click the link below to launch your Swarm Group funnel now.'",
    cta: "Watch Demo",
    targeting: "Business Software, Marketing & Sales Tools Audiences",
    url: "https://swarmy-ai-leads-engine.pages.dev/"
  }
];

// Email Master Sequence Data
const EMAIL_SEQUENCE_DATA = [
  {
    stage: 1,
    name: "The Disruptive Hook",
    send_delay: "Immediate",
    subject: "Why manual lead response is costing your business $10k+/month",
    body: "Hi {first_name},\n\nDid you know 78% of B2B online business leads buy from the vendor that responds first?\n\nIf {company_name} relies on manual follow-ups, high-value buyers are slipping through the cracks.\n\nWe created Swarm Group (https://swarmy-ai-leads-engine.pages.dev/) to eliminate lead drop-off completely. Our autonomous AI swarm agents qualify prospects, answer technical questions, and guide them directly to purchase a plan 24/7.\n\nCheck out our live conversion engine in action: https://swarmy-ai-leads-engine.pages.dev/\n\nAlso, let's connect on LinkedIn: {linkedin_url}\n\nBest regards,\n[Your Name]\nSwarm Group Team"
  },
  {
    stage: 2,
    name: "Social Proof & Case Study",
    send_delay: "Day 2",
    subject: "Case Study: How online businesses boost conversion by 3.4x",
    body: "Hi {first_name},\n\nWhen online businesses integrate Swarm Group into their tech stack ({tech_stack}), three major shifts happen:\n\n1. Response time drops from hours to < 3 seconds.\n2. Lead qualification accuracy hits 98.4%.\n3. Sales pipeline velocity increases by 3.4x.\n\nYou can select the plan that fits {company_name}'s growth trajectory ($49/mo Starter, $149/mo Pro Growth, or $499/mo Enterprise) directly on our live portal:\n\n👉 https://swarmy-ai-leads-engine.pages.dev/\n\nLet's connect: {linkedin_url}\n\nCheers,\n[Your Name]"
  },
  {
    stage: 3,
    name: "Inside the AI Swarm Engine",
    send_delay: "Day 4",
    subject: "Inside Swarm Group: How autonomous agents close deals for {company_name}",
    body: "Hi {first_name},\n\nTraditional chatbots follow rigid decision trees. Swarm Group is fundamentally different—deploying collaborative multi-agent swarms:\n\n- Agent 1 analyzes visitor intent & company size.\n- Agent 2 resolves objections & presents tailored features.\n- Agent 3 handles plan checkout & CRM synchronization.\n\nTest the full experience live right now:\n👉 https://swarmy-ai-leads-engine.pages.dev/\n\nLinkedIn: {linkedin_url}"
  },
  {
    stage: 4,
    name: "Risk Reversal & 5-Min Setup",
    send_delay: "Day 6",
    subject: "Zero coding required: Launch Swarm Group for {company_name} in 5 mins",
    body: "Hi {first_name},\n\nOne common question we get from founders: 'Will this take weeks of dev work to set up?'\n\nThe answer is a resounding NO. Swarm Group requires zero coding experience and connects directly to your existing Netlify, web, or CRM stack in under 5 minutes.\n\nClaim your plan and launch today:\n👉 https://swarmy-ai-leads-engine.pages.dev/\n\nBest,\n[Your Name]\nLinkedIn: {linkedin_url}"
  },
  {
    stage: 5,
    name: "Urgent Call to Action & Plan Selection",
    send_delay: "Day 8",
    subject: "Final invitation: Scale {company_name} with Swarm Group today",
    body: "Hi {first_name},\n\nIf you're ready to put your lead qualification, customer conversion, and sales pipeline on 24/7 autopilot, pick your plan now:\n\n🚀 Starter Swarm ($49/mo)\n🚀 Pro Growth Swarm ($149/mo)\n🚀 Enterprise Swarm ($499/mo)\n\n👉 Access live plans: https://swarmy-ai-leads-engine.pages.dev/\n\nLooking forward to seeing your growth,\n[Your Name]\nLinkedIn: {linkedin_url}"
  }
];

let leads = [...SAMPLE_LEADS];

function initLeadsDatabase() {
  const industries = ["E-Commerce", "SaaS", "Digital Agency", "EdTech"];
  const techPool = ["Shopify", "React", "WordPress", "HubSpot", "Stripe", "Klaviyo", "Intercom", "Zapier"];
  const names = [
    { f: "Alex", l: "Rivera" }, { f: "Jordan", l: "Lee" }, { f: "Morgan", l: "Taylor" },
    { f: "Sam", l: "Patel" }, { f: "Chris", l: "Zhang" }, { f: "Riley", l: "Campbell" },
    { f: "Casey", l: "Novak" }, { f: "Dakota", l: "Smith" }
  ];

  for (let i = 6; i <= 105; i++) {
    const person = names[i % names.length];
    const company = `${person.l} ${["Digital", "Commerce", "Systems", "Media", "Labs"][i % 5]}`;
    const domain = `${person.l.toLowerCase()}${i}.io`;
    const ind = industries[i % industries.length];
    const tech = [techPool[i % techPool.length], techPool[(i + 2) % techPool.length]];

    leads.push({
      id: `lead_${1000 + i}`,
      company_name: company,
      domain: domain,
      contact_name: `${person.f} ${person.l}`,
      contact_title: i % 2 === 0 ? "Founder & CEO" : "Head of Growth",
      email: `${person.f.toLowerCase()}@${domain}`,
      linkedin_url: `https://linkedin.com/in/${person.f.toLowerCase()}${person.l.toLowerCase()}`,
      industry: ind,
      tech_stack: tech,
      company_size: "10-100",
      lead_score: Math.floor(75 + (i * 7) % 25)
    });
  }
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLeadsDatabase();
  setupTabs();
  renderLeadsTable();
  renderSocialAds('all');
  renderEmailSequences();
  renderAgentFleet();
  setupLinkedInAndADK();
  setupEventListeners();
});

// Tab Navigation
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabViews = document.querySelectorAll('.tab-view');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabViews.forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      const targetView = document.getElementById(`tab-${target}`);
      if (targetView) targetView.classList.add('active');
    });
  });
}

// Setup LinkedIn & ADK Studio UI
function setupLinkedInAndADK() {
  const cfg = linkedIn.config;
  document.getElementById('liConfigProfile').value = cfg.profileUrl || 'https://linkedin.com/in/darren-paas';
  document.getElementById('liConfigClientId').value = cfg.clientId || '';
  document.getElementById('liConfigClientSecret').value = cfg.clientSecret || '';
  document.getElementById('liConfigToken').value = cfg.accessToken || '';

  // Render ADK Agents
  adk.getSwarmStatus().then(status => {
    const list = document.getElementById('adkAgentsList');
    if (!list) return;
    list.innerHTML = '';
    status.agents.forEach(agent => {
      const div = document.createElement('div');
      div.className = 'adk-agent-item';
      div.innerHTML = `
        <div class="adk-agent-info">
          <span class="adk-agent-name"><i class="fa-solid fa-robot"></i> ${agent.name}</span>
          <span class="adk-agent-role">${agent.role}</span>
        </div>
        <span class="badge-active"><i class="fa-solid fa-circle-check"></i> ${agent.status}</span>
      `;
      list.appendChild(div);
    });
  });

  // Action listeners
  const quickActivate = () => {
    const profUrl = document.getElementById('liConfigProfile').value.trim() || 'https://linkedin.com/in/darren-paas';
    linkedIn.saveConfig({ profileUrl: profUrl });
    document.getElementById('linkedinBtnText').textContent = 'Profile Connected';
    showToast(`LinkedIn profile active: ${profUrl}`, 'success');
  };

  const btnQuick = document.getElementById('btnQuickActivateLinkedIn');
  if (btnQuick) btnQuick.addEventListener('click', quickActivate);

  document.getElementById('btnSaveLinkedInApi').addEventListener('click', () => {
    linkedIn.saveConfig({
      profileUrl: document.getElementById('liConfigProfile').value.trim(),
      clientId: document.getElementById('liConfigClientId').value.trim(),
      clientSecret: document.getElementById('liConfigClientSecret').value.trim(),
      accessToken: document.getElementById('liConfigToken').value.trim()
    });
    showToast('LinkedIn API & Profile credentials saved!', 'success');
  });

  document.getElementById('btnTestLinkedInApi').addEventListener('click', async () => {
    const btn = document.getElementById('btnTestLinkedInApi');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Testing...';
    const res = await linkedIn.testConnection();
    btn.innerHTML = '<i class="fa-solid fa-vial"></i> Test Connection';

    if (res.success) {
      showToast(`${res.message} (${res.latency}ms)`, 'success');
    } else {
      showToast(`LinkedIn API Error: ${res.message}`, 'error');
    }
  });

  document.getElementById('btnRunAdkPipeline').addEventListener('click', async () => {
    const btn = document.getElementById('btnRunAdkPipeline');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Executing ADK Swarm...';
    const res = await adk.runAgentTask('agent_01', { company_name: 'Apex Commerce Ltd' });
    btn.innerHTML = '<i class="fa-solid fa-play"></i> Trigger ADK Swarm Pipeline';
    showToast(res.output, 'success');
  });
}

// Render Social Ads
function renderSocialAds(filterPlatform = 'all') {
  const grid = document.getElementById('socialAdsGrid');
  if (!grid) return;

  const filtered = filterPlatform === 'all' 
    ? SOCIAL_ADS_DATA 
    : SOCIAL_ADS_DATA.filter(a => a.platform === filterPlatform);

  grid.innerHTML = '';
  filtered.forEach(ad => {
    let tagClass = 'tag-linkedin';
    let icon = 'fa-linkedin';
    if (ad.platform === 'twitter') { tagClass = 'tag-twitter'; icon = 'fa-x-twitter'; }
    if (ad.platform === 'meta') { tagClass = 'tag-meta'; icon = 'fa-meta'; }
    if (ad.platform === 'youtube') { tagClass = 'tag-youtube'; icon = 'fa-youtube'; }

    const card = document.createElement('div');
    card.className = 'ad-card';
    card.innerHTML = `
      <div>
        <div class="ad-header">
          <span class="platform-tag ${tagClass}"><i class="fa-brands ${icon}"></i> ${ad.platform.toUpperCase()}</span>
          <span class="ad-format">${ad.format}</span>
        </div>
        <div class="ad-title">${escapeHtml(ad.headline)}</div>
        <div class="ad-body-text">${escapeHtml(ad.body)}</div>
      </div>
      <div class="ad-footer">
        <span class="ad-targeting"><i class="fa-solid fa-crosshair"></i> ${ad.targeting}</span>
        <button class="btn btn-secondary btn-sm copy-ad-btn" data-text="${escapeHtml(ad.body)}">
          <i class="fa-solid fa-copy"></i> Copy Ad
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.copy-ad-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-text');
      navigator.clipboard.writeText(text);
      showToast('Social Ad Copy copied to clipboard!', 'success');
    });
  });
}

// Render Email Sequences
function renderEmailSequences() {
  const container = document.getElementById('emailSequenceContainer');
  if (!container) return;

  container.innerHTML = '';
  EMAIL_SEQUENCE_DATA.forEach(seq => {
    const card = document.createElement('div');
    card.className = 'email-card';
    card.innerHTML = `
      <div class="email-header">
        <span class="email-stage-badge"><i class="fa-solid fa-paper-plane"></i> Stage ${seq.stage}: ${seq.name}</span>
        <span style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-solid fa-clock"></i> Delay: ${seq.send_delay}</span>
      </div>
      <div class="email-subject"><i class="fa-solid fa-envelope"></i> Subject: ${escapeHtml(seq.subject)}</div>
      <div class="email-preview-box">${escapeHtml(seq.body)}</div>
      <div class="email-actions">
        <button class="btn btn-secondary btn-sm copy-email-seq-btn" data-text="${escapeHtml(seq.body)}">
          <i class="fa-solid fa-copy"></i> Copy Sequence Email
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('.copy-email-seq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-text');
      navigator.clipboard.writeText(text);
      showToast(`Email Stage copy copied!`, 'success');
    });
  });
}

// Render Leads Table
function renderLeadsTable() {
  const tbody = document.getElementById('leadsTableBody');
  const search = document.getElementById('leadSearchInput').value.toLowerCase();
  const industry = document.getElementById('industryFilter').value;

  const filtered = leads.filter(l => {
    const matchesSearch = l.company_name.toLowerCase().includes(search) ||
                          l.domain.toLowerCase().includes(search) ||
                          l.contact_name.toLowerCase().includes(search) ||
                          l.tech_stack.some(t => t.toLowerCase().includes(search));
    const matchesInd = industry === 'ALL' || l.industry === industry;
    return matchesSearch && matchesInd;
  });

  tbody.innerHTML = '';
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: var(--text-muted); padding: 2rem;">No matching business leads found.</td></tr>`;
    return;
  }

  filtered.slice(0, 20).forEach(lead => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div style="font-weight: 600;">${escapeHtml(lead.company_name)}</div>
        <a href="https://${lead.domain}" target="_blank" style="font-size: 0.78rem; color: var(--secondary); text-decoration:none;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> ${lead.domain}
        </a>
      </td>
      <td>
        <div style="font-weight: 500;">${escapeHtml(lead.contact_name)}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(lead.contact_title)}</div>
        <div style="font-size: 0.78rem; color: var(--primary);">${escapeHtml(lead.email)}</div>
      </td>
      <td><span class="badge-status" style="background:rgba(255,255,255,0.06); padding:0.2rem 0.5rem; border-radius:10px;">${lead.industry}</span></td>
      <td>
        ${lead.tech_stack.map(t => `<span style="font-size:0.75rem; background:rgba(139,92,246,0.15); color:#c084fc; padding:0.15rem 0.4rem; border-radius:4px; margin-right:4px;">${t}</span>`).join('')}
      </td>
      <td><span class="score-tag">${lead.lead_score}% Match</span></td>
      <td>
        <button class="btn btn-primary btn-sm btn-outreach" data-id="${lead.id}">
          <i class="fa-solid fa-paper-plane"></i> Pitch Funnel
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.btn-outreach').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      openOutreachModal(id);
    });
  });
}

// Render Agent Fleet
function renderAgentFleet() {
  const grid = document.getElementById('agentFleetGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const agentRoles = [
    'Inbound Lead Scraper', 'Cold Outreach Specialist', 'Email Copywriter',
    'Social Media Manager', 'Closing Negotiator', 'Data Enrichment Bot',
    'SEO Content Writer', 'Customer Support Tech', 'Churn Prevention Bot',
    'Onboarding Specialist'
  ];

  for (let i = 1; i <= 40; i++) {
    const role = agentRoles[i % agentRoles.length];
    const isOnline = Math.random() > 0.2;
    const tasksCompleted = Math.floor(Math.random() * 500) + 10;
    
    const card = document.createElement('div');
    card.className = 'email-card'; // Reuse styling
    card.innerHTML = `
      <div class="email-header" style="justify-content: space-between;">
        <span class="email-stage-badge" style="background: ${isOnline ? 'rgba(74, 222, 128, 0.15)' : 'rgba(239, 68, 68, 0.15)'}; color: ${isOnline ? '#4ade80' : '#ef4444'}; border: 1px solid ${isOnline ? '#4ade80' : '#ef4444'};">
          <i class="fa-solid fa-circle"></i> ${isOnline ? 'ONLINE' : 'OFFLINE'}
        </span>
        <span style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-solid fa-microchip"></i> v4.2</span>
      </div>
      <h4 style="margin: 0.5rem 0; font-size: 1.1rem; font-weight: 600;"><i class="fa-solid fa-robot" style="color: var(--primary);"></i> Agent ${String(i).padStart(2, '0')}</h4>
      <div style="font-size: 0.85rem; color: var(--secondary); margin-bottom: 1rem;">Role: ${role}</div>
      <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center;">
        <span><i class="fa-solid fa-check-double"></i> ${tasksCompleted} Tasks Done</span>
        <button class="btn btn-sm ${isOnline ? 'btn-secondary' : 'btn-primary'}" onclick="alert('Agent status toggled!')">${isOnline ? 'Pause' : 'Wake'}</button>
      </div>
    `;
    grid.appendChild(card);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  document.getElementById('leadSearchInput').addEventListener('input', renderLeadsTable);
  document.getElementById('industryFilter').addEventListener('change', renderLeadsTable);

  document.querySelectorAll('.platform-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.platform-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const platform = chip.getAttribute('data-platform');
      renderSocialAds(platform);
    });
  });

  const linkedInModal = document.getElementById('linkedInModal');
  document.getElementById('openLinkedInModal').addEventListener('click', () => linkedInModal.classList.add('active'));
  document.getElementById('closeLinkedInModal').addEventListener('click', () => linkedInModal.classList.remove('active'));
  document.getElementById('btnSaveLinkedIn').addEventListener('click', () => {
    const val = document.getElementById('linkedInUrlInput').value.trim();
    linkedIn.saveConfig({ profileUrl: val });
    document.getElementById('linkedinBtnText').textContent = 'Profile Connected';
    linkedInModal.classList.remove('active');
    showToast(`LinkedIn profile activated: ${val}`, 'success');
  });

  const outreachModal = document.getElementById('outreachModal');
  document.getElementById('closeOutreachModal').addEventListener('click', () => {
    outreachModal.classList.remove('active');
    currentLead = null;
  });
  document.getElementById('btnCopyEmail').addEventListener('click', () => {
    const text = document.getElementById('emailCopyText').value;
    navigator.clipboard.writeText(text);
    showToast('Cold email copy copied to clipboard!', 'success');
  });
  document.getElementById('btnCopyLinkedIn').addEventListener('click', () => {
    const text = document.getElementById('linkedInCopyText').value;
    navigator.clipboard.writeText(text);
    showToast('LinkedIn message copied to clipboard!', 'success');
  });

  document.getElementById('btnExportCSV').addEventListener('click', exportToCSV);
  document.getElementById('btnRefreshLeads').addEventListener('click', () => {
    showToast('Mined 100+ fresh online business leads!', 'success');
    renderLeadsTable();
  });

  document.getElementById('btnSendSwarmEmail').addEventListener('click', async () => {
    if (!currentLead) return;
    const btn = document.getElementById('btnSendSwarmEmail');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    try {
      const response = await fetch('/api/swarm-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: currentLead.contact_name,
          email: currentLead.email,
          company: currentLead.company_name,
          techStack: currentLead.tech_stack,
          profileUrl: linkedIn.config.profileUrl
        })
      });

      if (response.ok) {
        showToast(`Automated email successfully sent to ${currentLead.contact_name}!`, 'success');
        document.getElementById('outreachModal').classList.remove('active');
      } else {
        showToast('Failed to send automated email. Check logs.', 'error');
      }
    } catch (err) {
      showToast('Network error while sending email.', 'error');
    } finally {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });

  document.querySelectorAll('.select-plan-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan');
      const price = btn.getAttribute('data-price');
      showToast(`Selected ${plan} (${price}). Pitch link ready!`, 'success');
    });
  });
}

let currentLead = null;

function openOutreachModal(leadId) {
  const lead = leads.find(l => l.id === leadId);
  if (!lead) return;

  currentLead = lead;

  const msg = linkedIn.generateOutreachMessage(lead.contact_name, lead.company_name, lead.tech_stack);
  const fname = lead.contact_name.split(' ')[0];
  
  const emailTemplate = `Subject: Automating ${lead.company_name}'s sales funnel with Swarm Group\n\nHi ${fname},\n\nI noticed ${lead.company_name} is using ${lead.tech_stack.join(', ')}. Managing customer onboarding and lead qualification manually can consume dozens of hours each week.\n\nWe built Swarm Group (https://swarmy-ai-leads-engine.pages.dev/) to deploy autonomous AI agents that qualify leads, handle customer inquiries, and convert prospects 24/7.\n\nYou can pick a plan for ${lead.company_name} directly on our Netlify funnel: https://swarmy-ai-leads-engine.pages.dev/\n\nAlso feel free to connect with me on LinkedIn: ${linkedIn.config.profileUrl}\n\nBest regards,\n[Your Name]`;

  document.getElementById('emailCopyText').value = emailTemplate;
  document.getElementById('linkedInCopyText').value = msg.inMail;
  document.getElementById('outreachModal').classList.add('active');
}

function exportToCSV() {
  if (leads.length === 0) return;
  const headers = Object.keys(leads[0]).join(',');
  const rows = leads.map(l => Object.values(l).map(val => `"${Array.isArray(val) ? val.join(';') : val}"`).join(','));
  const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `swarmy_ai_b2b_leads_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`Exported ${leads.length} leads to CSV`, 'success');
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Wire up Swarm Agent Sequence Generator
const btnGenerateSequence = document.getElementById('btnGenerateSequence');
if (btnGenerateSequence) {
  btnGenerateSequence.addEventListener('click', async () => {
    const promptInput = document.getElementById('agentPrompt');
    const promptText = promptInput.value.trim();
    if (!promptText) {
      showToast('Please enter a campaign goal first.', 'error');
      return;
    }

    const originalText = btnGenerateSequence.innerHTML;
    btnGenerateSequence.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
    btnGenerateSequence.disabled = true;

    try {
      const response = await fetch('/api/swarm-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          agentRole: 'Email Sequence Agent',
          leadContext: { company_name: 'Target Market', contact_name: 'Prospect' }
        })
      });

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Agent generation failed');
      }

      // Display the generated sequence
      const container = document.getElementById('emailSequenceContainer');
      container.innerHTML = `
        <div class="email-card" style="border: 1px solid var(--primary);">
          <div class="email-header" style="background: rgba(139, 92, 246, 0.1);">
            <span class="email-stage-badge"><i class="fa-solid fa-robot"></i> AI Generated Sequence</span>
            <span style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-solid fa-bolt"></i> Delivered via Swarm Agent</span>
          </div>
          <div class="email-preview-box" style="white-space: pre-wrap; font-family: monospace;">${escapeHtml(data.content)}</div>
        </div>
      `;
      
      showToast('Swarm Agent successfully drafted your sequence!', 'success');
      promptInput.value = '';

    } catch (err) {
      console.error(err);
      showToast('Error generating sequence: ' + err.message, 'error');
    } finally {
      btnGenerateSequence.innerHTML = originalText;
      btnGenerateSequence.disabled = false;
    }
  });
}

