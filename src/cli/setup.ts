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
  console.log("\n🚀 Deploy MCP Setup\n");
  console.log("This wizard will configure Vercel authentication.\n");

  const config = await loadConfig();

  if (config.vercelToken) {
    const reconfig = await question(
      "Vercel is already configured. Reconfigure? (y/n): "
    );
    if (reconfig.toLowerCase() !== "y") {
      console.log("✅ Setup cancelled");
      rl.close();
      return;
    }
  }

  console.log("\n📝 Getting your Vercel token...\n");
  console.log("Visit: https://vercel.com/account/tokens");
  console.log("Create a new Personal Access Token");
  console.log("(Choose 'Full Access')\n");

  const token = await question("Paste your Vercel token: ");

  if (!token) {
    console.log("❌ No token provided");
    rl.close();
    return;
  }

  try {
    // Verify token works
    const response = await fetch("https://api.vercel.com/v9/user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("Invalid token");
    }

    const user = await response.json();
    console.log(`\n✅ Authenticated as: ${user.user.email}`);

    // Save token
    await setVercelToken(token);

    console.log("\n📝 Adding to your IDE config:\n");
    console.log("For Cursor, add to cursor_settings.json:");
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

    console.log("\nFor VS Code Claude extension, add to settings.json:");
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

    console.log("\n✅ Setup complete! Restart your IDE.\n");
  } catch (error) {
    console.log(`\n❌ Authentication failed: ${error}`);
  }

  rl.close();
}
