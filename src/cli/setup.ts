import { setVercelToken, loadConfig } from "../utils/config.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

export async function runSetup(): Promise<void> {
  const config = await loadConfig();
  const currentWorkingDir = process.cwd();

  console.log(`
┌─ Welcome to Deploy MCP ─────────────────────────────────────────────────────────────────┐
│                                                                                         │
│  ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗   ███╗   ███╗ ██████╗██████╗        │
│  ██╔══██╗██╔════╝██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝   ████╗ ████║██╔════╝██╔══██╗       │
│  ██║  ██║█████╗  ██████╔╝██║     ██║  ██║ ╚████╔╝    ██╔████╔██║██║     ██████╔╝       │
│  ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║  ██║  ╚██╔╝     ██║╚██╔╝██║██║     ██╔═══╝        │
│  ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║     ██║ ╚═╝ ██║╚██████╗██║            │
│  ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝     ╚═╝     ╚═╝ ╚═════╝╚═╝            │
│                                                                                         │
│  v1.0.0                                                                                 │
│                                                                                         │
│             Your agent deploys your site. We make sure it goes live.                    │
│                                                                                         │
│  Deploy MCP connects your AI assistant (Claude / Cursor / Antigravity) directly to      │
│  Vercel — zero server costs, environment syncing, and auto-diagnostics handled.         │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
  `);

  if (config.vercelToken) {
    console.log(`●  status: configured (token saved in ~/.deploy-mcp/config.json)`);
  } else {
    console.log(`●  status: not configured - run npx @tusharjain-19/deploy-mcp setup`);
  }
  console.log(`${currentWorkingDir}\n`);

  console.log(`get started`);
  console.log(`  ›  npx @tusharjain-19/deploy-mcp setup  set up Vercel authentication & IDE config\n`);

  if (config.vercelToken) {
    const reconfig = await question(
      "⚡ Vercel token is already configured. Reconfigure? (y/N): "
    );
    if (reconfig.trim().toLowerCase() !== "y") {
      console.log("\n✅ Keeping existing Vercel configuration. You're ready to deploy!");
      rl.close();
      return;
    }
  }

  console.log(`  ─────────────────────────────────────────────\n`);
  console.log(`  Step 1 of 3  -  Get Vercel Personal Access Token`);
  console.log(`  › Open: https://vercel.com/account/tokens`);
  console.log(`  › Click 'Create Token', enter name 'deploy-mcp', choose 'Full Access'.\n`);

  console.log(`  ─────────────────────────────────────────────\n`);
  console.log(`  Step 2 of 3  -  Connect Your Vercel Account\n`);

  const token = await question("  👉 Paste your Vercel token: ");

  if (!token || token.trim().length === 0) {
    console.log("\n  ❌ No token provided. Setup cancelled.");
    rl.close();
    return;
  }

  try {
    const cleanToken = token.trim();
    // Verify token works
    const response = await fetch("https://api.vercel.com/v2/user", {
      headers: {
        Authorization: `Bearer ${cleanToken}`
      }
    });

    if (!response.ok) {
      throw new Error("Invalid Vercel Personal Access Token.");
    }

    const user = await response.json();
    console.log(`\n  🎉 Success! Connected Vercel account: ${user.user.email}`);

    // Save token
    await setVercelToken(cleanToken);

    console.log(`\n  ─────────────────────────────────────────────\n`);
    console.log(`  Step 3 of 3  -  Add Deploy MCP to Your AI IDE\n`);
    console.log(`  Copy and paste the config snippet below into your IDE settings:\n`);

    console.log(`  🟦 CURSOR IDE (%APPDATA%\\Cursor\\User\\settings\\cursor_settings.json):`);
    console.log(`
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}
    `);

    console.log(`  🟩 VS CODE / CLAUDE EXTENSION / ANTIGRAVITY AI (settings.json):`);
    console.log(`
{
  "claude.mcp.servers": [
    {
      "name": "deploy",
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  ]
}
    `);

    console.log(`  ─────────────────────────────────────────────\n`);
    console.log(`  ✨ ALL DONE! HOW TO DEPLOY YOUR WEBSITE:\n`);
    console.log(`  1. Open your website project folder.`);
    console.log(`  2. In your AI Chat (Claude / Cursor / Antigravity), type:`);
    console.log(`     👉 "Use Deploy MCP to deploy my website"\n`);
    console.log(`  🤖 Your AI assistant will handle 100% of the building, checking, and deploying for you!\n`);
  } catch (error) {
    console.log(`\n  ❌ Authentication failed: ${error instanceof Error ? error.message : error}`);
    console.log(`  Please check your token at https://vercel.com/account/tokens and re-run: npx @tusharjain-19/deploy-mcp setup\n`);
  }

  rl.close();
}
