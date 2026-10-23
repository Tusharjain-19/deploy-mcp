import { setVercelToken, loadConfig } from "../utils/config.js";
import { checkForUpdates } from "../utils/version-checker.js";
import { c } from "../utils/colors.js";
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

  const rawAsciiLines = [
    `  ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗    ███╗   ███╗  ██████╗  ██████╗ `,
    `  ██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝    ████╗ ████║ ██╔════╝  ██╔══██╗`,
    `  ██║  ██║█████╗  ██████╔╝██║     ██║   ██║ ╚████╔╝     ██╔████╔██║ ██║       ██████╔╝`,
    `  ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║   ██║  ╚██╔╝      ██║╚██╔╝██║ ██║       ██╔═══╝ `,
    `  ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║       ██║ ╚═╝ ██║ ╚██████╗  ██║     `,
    `  ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝       ╚═╝     ╚═╝  ╚═════╝  ╚═╝     `
  ];

  const coloredLogo = rawAsciiLines
    .map(line => c.brand(line))
    .join("\n");

  const divider = c.gray("─".repeat(78));

  console.log(`
${coloredLogo}

  ${c.bold(c.brandYellow("Deploy your website in seconds directly from your AI editor."))}
  ${c.gray("Documentation:")} ${c.underline(c.brandButter("https://github.com/Tusharjain-19/deploy-mcp#readme"))}

  ${divider}
  `);

  if (updateInfo.hasUpdate) {
    console.log(`  ${c.badge(" UPDATE AVAILABLE ", 231, 186, 5, 0, 0, 0)} ${c.yellow(`Newer version is ready: v${updateInfo.latestVersion}`)}`);
    console.log(`  ${c.gray("Run update:")} ${c.code(updateInfo.updateCommand)}\n`);
  }

  if (config.vercelToken) {
    console.log(`  ${c.success("[OK]")}  ${c.bold("Status:")} ${c.green("CONFIGURED")} ${c.gray("(token saved in ~/.deploy-mcp/config.json)")}`);
  } else {
    console.log(`  ${c.warn("[!]")}  ${c.bold("Status:")} ${c.yellow("NOT CONFIGURED")} ${c.gray("- run npx deploymcp setup")}`);
  }
  console.log(`  ${c.gray("[*]")}  ${c.bold("Directory:")} ${c.dim(currentWorkingDir)}\n`);
  console.log(`  ${divider}\n`);

  if (config.vercelToken) {
    const reconfig = await question(
      `  ${c.yellow("[?] Vercel token is already configured. Reconfigure? (y/N): ")}`
    );
    if (reconfig.trim().toLowerCase() !== "y") {
      console.log(`\n  ${c.success("[OK] Keeping existing Vercel configuration. Ready to deploy.")}\n`);
      rl.close();
      return;
    }
  }

  console.log(`  ${c.badge(" STEP 1 OF 3 ", 231, 186, 5, 0, 0, 0)}  ${c.bold("Get Your Vercel Personal Access Token")}`);
  console.log(`  ${c.gray("-> Open in browser:")} ${c.underline(c.brandYellow("https://vercel.com/account/tokens"))}`);
  console.log(`  ${c.gray("-> Click")} ${c.bold("'Create Token'")}${c.gray(", enter name")} ${c.code("deploy-mcp")}${c.gray(", choose")} ${c.bold("'Full Access'")}.\n`);

  console.log(`  ${divider}\n`);
  console.log(`  ${c.badge(" STEP 2 OF 3 ", 107, 158, 90, 0, 0, 0)}  ${c.bold("Connect Your Vercel Account")}\n`);

  const token = await question(`  ${c.highlight("-> Paste your Vercel token: ")}`);

  if (!token || token.trim().length === 0) {
    console.log(`\n  ${c.error("[ERROR] No token provided. Setup cancelled.")}\n`);
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

    const userData = await response.json() as { user: { username?: string; email?: string } };
    const username = userData.user?.username || userData.user?.email || "Authenticated User";

    console.log(`\n  ${c.success("[OK]")}  ${c.bold("Token verified successfully for user:")} ${c.brandYellow(username)}`);

    // Save token
    await setVercelToken(cleanToken);

    console.log(`\n  ${divider}\n`);
    console.log(`  ${c.badge(" STEP 3 OF 3 ", 144, 99, 66, 246, 227, 184)}  ${c.bold("Add Deploy MCP to Your AI IDE")}\n`);
    console.log(`  Copy and paste the config snippet below into your IDE settings:\n`);

    console.log(`  ${c.badge(" CURSOR IDE ", 231, 186, 5, 0, 0, 0)} ${c.gray("(%APPDATA%\\Cursor\\User\\settings\\cursor_settings.json):")}`);
    console.log(c.code(`
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "deploymcp"]
    }
  }
}
    `));

    console.log(`  ${c.badge(" VS CODE / CLAUDE / ANTIGRAVITY ", 107, 158, 90, 0, 0, 0)} ${c.gray("(settings.json):")}`);
    console.log(c.code(`
{
  "claude.mcp.servers": [
    {
      "name": "deploy",
      "command": "npx",
      "args": ["-y", "deploymcp"]
    }
  ]
}
    `));

    console.log(`  ${divider}\n`);
    console.log(`  ${c.success("[OK] SETUP COMPLETE: HOW TO DEPLOY YOUR WEBSITE")}\n`);
    console.log(`  1. Open your website project folder.`);
    console.log(`  2. In your AI Chat (${c.brandYellow("Claude")} / ${c.brandButter("Cursor")} / ${c.brandLeaf("Antigravity")}), type:`);
    console.log(`     ${c.highlight("-> \"Deploy my website with Deploy MCP\"")}\n`);
    console.log(`  ${c.italic(c.brandYellow("Your AI assistant handles building, verifying, and deploying directly."))}\n`);
  } catch (error) {
    console.log(`\n  ${c.error("[ERROR] Authentication failed:")} ${error instanceof Error ? error.message : error}`);
    console.log(`  Please check your token at ${c.underline(c.brandYellow("https://vercel.com/account/tokens"))} and re-run: ${c.code("npx deploymcp setup")}\n`);
  }

  rl.close();
}
