import { config } from 'dotenv';
import { cloudflareManager } from './services/cloudflareManager.js';

// Load environment variables from .env
config();

async function runMegaSteroidsTest() {
  console.log("🚀 Initializing Cloudflare MEGA STEROIDS SDK Test...");
  try {
    console.log("Fetching account details...");
    const account = await cloudflareManager.getAccountDetails();
    console.log("✅ Successfully connected to Cloudflare Account:", account.name, `(ID: ${account.id})`);

    console.log("\nFetching deployed Workers...");
    const workers = await cloudflareManager.listWorkers();
    
    // Cloudflare SDK V3 returns Paginated Responses which are iterables or arrays.
    const scripts = workers.result || workers;
    if (Array.isArray(scripts) && scripts.length > 0) {
      console.log(`✅ Found ${scripts.length} deployed Workers:`);
      scripts.forEach((w: any) => console.log(`   - ${w.id}`));
    } else {
      console.log("✅ Connected successfully, but no Workers found in this account.");
    }
    
    console.log("\nMEGA STEROIDS SDK INTEGRATION COMPLETE! 🎉");
  } catch (err: any) {
    console.error("❌ Test Failed:", err.message || err);
  }
}

runMegaSteroidsTest();
