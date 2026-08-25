import { runSetup } from "./setup.js";

const args = process.argv.slice(2);

if (args[0] === "setup") {
  runSetup().catch(console.error);
} else {
  // If no arguments, run as MCP server
  const { main } = await import("../index.js");
  // Wait, wait... `index.ts` has main() but doesn't export it! 
  // Ah, let's fix that if needed. Wait, the original code had:
  // async function main() { ... }
  // main().catch(console.error);
  // Actually, importing it will just execute it. But the prompt code doesn't export main. Let's just import it for side effects for now, as that's how it's written.
}
