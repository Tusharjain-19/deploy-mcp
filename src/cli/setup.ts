import { setVercelToken, loadConfig } from "../utils/config.js";
import { checkForUpdates } from "../utils/version-checker.js";
import { c, cyanMagentaGradient, lineGradient } from "../utils/colors.js";
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

  // Asynchronously check for updates
  const updateInfo = await checkForUpdates();

  const rawAsciiLogo = `  ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗   ███╗   ███╗ ██████╗██████╗ 
  ██╔══██╗██╔════╝██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝   ████╗ ████║██╔════╝██╔══██╗
  ██║  ██║█████╗  ██████╔╝██║     ██║  ██║ ╚████╔╝    ██╔████╔██║██║     ██████╔╝
  ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║  ██║  ╚██╔╝     ██║╚██╔╝██║██║     ██╔═══╝ 
  ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║     ██║ ╚═╝ ██║╚██████╗██║     
  ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝     ╚═╝     ╚═╝ ╚═════╝╚═╝     `;

  const coloredLogo = cyanMagentaGradient(rawAsciiLogo);

  const topBorder = c.gray("┌─ ") + lineGradient("Welcome to Deploy MCP") + c.gray(" ────────────────────────────────────────────────────────┐");
  const bottomBorder = c.gray("└─────────────────────────────────────────────────────────────────────────────────────────┘");

  console.log(`
${topBorder}
│                                                                                         │
${coloredLogo}
│                                                                                         │
│  ${c.badge(` v${updateInfo.currentVersion} `, 0, 150, 255)}  ${c.italic(c.gray("Your agent deploys your site. We make sure it goes live."))}                    │
│                                                                                         │
│  ${c.brightCyan("Deploy MCP")} connects your AI assistant (${c.cyan("Claude")} / ${c.blue("Cursor")} / ${c.magenta("Antigravity")}) directly to      │
│  ${c.white("Vercel")} — zero server costs, environment syncing, and auto-diagnostics handled.         │
│                                                                                         │
${bottomBorder}
  `);

  if (updateInfo.hasUpdate) {
    console.log(`\n  ${c.badge(" UPDATE AVAILABLE ", 255, 165, 0)} ${c.yellow(`v${updateInfo.latestVersion} is ready!`)}`);
    console.log(`  ${c.gray("Run update:")} ${c.code(updateInfo.updateCommand)}\n`);
  }

  if (config.vercelToken) {
    console.log(`  ${c.success("●")}  ${c.bold("Status:")} ${c.green("CONFIGURED")} ${c.gray("(token saved in ~/.deploy-mcp/config.json)")}`);
  } else {
    console.log(`  ${c.warn("●")}  ${c.bold("Status:")} ${c.yellow("NOT CONFIGURED")} ${c.gray("- run npx @tusharjain-19/deploy-mcp setup")}`);
  }
  console.log(`  ${c.gray("Directory:")} ${c.dim(currentWorkingDir)}\n`);

  if (config.vercelToken) {
    const reconfig = await question(
      `  ${c.yellow("⚡ Vercel token is already configured. Reconfigure? (y/N): ")}`
    );
    if (reconfig.trim().toLowerCase() !== "y") {
      console.log(`\n  ${c.success("✅ Keeping existing Vercel configuration. You're ready to deploy!")}\n`);
      rl.close();
      return;
    }
  }

  console.log(`  ${c.gray("─".repeat(70))}\n`);
  console.log(`  ${c.badge(" STEP 1 OF 3 ", 0, 180, 216)}  ${c.bold("Get Your Vercel Personal Access Token")}`);
  console.log(`  ${c.gray("› Open in browser:")} ${c.underline(c.brightCyan("https://vercel.com/account/tokens"))}`);
  console.log(`  ${c.gray("› Click")} ${c.bold("'Create Token'")}${c.gray(", enter name")} ${c.code("deploy-mcp")}${c.gray(", choose")} ${c.bold("'Full Access'")}.\n`);

  console.log(`  ${c.gray("─".repeat(70))}\n`);
  console.log(`  ${c.badge(" STEP 2 OF 3 ", 0, 180, 216)}  ${c.bold("Connect Your Vercel Account")}\n`);

  const token = await question(`  ${c.highlight("👉 Paste your Vercel token: ")}`);

  if (!token || token.trim().length === 0) {
    console.log(`\n  ${c.error("❌ No token provided. Setup cancelled.")}\n`);
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
    console.log(`\n  ${c.success("🎉 Success!")} Connected Vercel account: ${c.highlight(user.user.email)}`);

    // Save token
    await setVercelToken(cleanToken);

    console.log(`\n  ${c.gray("─".repeat(70))}\n`);
    console.log(`  ${c.badge(" STEP 3 OF 3 ", 0, 180, 216)}  ${c.bold("Add Deploy MCP to Your AI IDE")}\n`);
    console.log(`  Copy and paste the config snippet below into your IDE settings:\n`);

    console.log(`  ${c.badge(" CURSOR IDE ", 0, 122, 255)} ${c.gray("(%APPDATA%\\Cursor\\User\\settings\\cursor_settings.json):")}`);
    console.log(c.code(`
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}
    `));

    console.log(`  ${c.badge(" VS CODE / CLAUDE / ANTIGRAVITY ", 46, 160, 67)} ${c.gray("(settings.json):")}`);
    console.log(c.code(`
{
  "claude.mcp.servers": [
    {
      "name": "deploy",
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  ]
}
    `));

    console.log(`  ${c.gray("─".repeat(70))}\n`);
    console.log(`  ${c.success("✨ ALL DONE! HOW TO DEPLOY YOUR WEBSITE:")}\n`);
    console.log(`  1. Open your website project folder.`);
    console.log(`  2. In your AI Chat (${c.cyan("Claude")} / ${c.blue("Cursor")} / ${c.magenta("Antigravity")}), type:`);
    console.log(`     ${c.highlight("👉 \"Use Deploy MCP to deploy my website\"")}\n`);
    console.log(`  ${c.italic(c.brightCyan("🤖 Your AI assistant will handle 100% of the building, checking, and deploying for you!"))}\n`);
  } catch (error) {
    console.log(`\n  ${c.error("❌ Authentication failed:")} ${error instanceof Error ? error.message : error}`);
    console.log(`  Please check your token at ${c.underline(c.brightCyan("https://vercel.com/account/tokens"))} and re-run: ${c.code("npx @tusharjain-19/deploy-mcp setup")}\n`);
  }

  rl.close();
}
