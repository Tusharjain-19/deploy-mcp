import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";
import { detectProject } from "./utils/framework-detector.js";
import { checkProject } from "./tools/check-project.js";
import { deployToVercel, getDeploymentStatus } from "./tools/deploy.js";

const server = new McpServer({
  name: "deploy-mcp",
  version: "1.0.0"
});

server.server.setRequestHandler(
  "tools/list",
  async () => {
    return {
      tools: [
        {
          name: "detect_project",
          description: "Detect framework and build configuration",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" } },
            required: ["projectPath"]
          } as any
        },
        {
          name: "check_project",
          description: "Validate project can be deployed",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" } },
            required: ["projectPath"]
          } as any
        },
        {
          name: "deploy_to_vercel",
          description: "Deploy project to Vercel",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" }, projectName: { type: "string" } },
            required: ["projectPath", "projectName"]
          } as any
        },
        {
          name: "get_deployment_status",
          description: "Check deployment status",
          inputSchema: {
            type: "object",
            properties: { projectName: { type: "string" } },
            required: ["projectName"]
          } as any
        }
      ]
    };
  }
);

server.server.setRequestHandler(
  "tools/call",
  async (request) => {
    const { name, arguments: args } = request as any;

    if (name === "detect_project") {
      const { projectPath } = args as { projectPath: string };
      const result = await detectProject(projectPath);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    }

    if (name === "check_project") {
      const { projectPath } = args as { projectPath: string };
      const result = await checkProject(projectPath);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    }

    if (name === "deploy_to_vercel") {
      const { projectPath, projectName } = args as {
        projectPath: string;
        projectName: string;
      };
      const result = await deployToVercel(projectPath, projectName);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    }

    if (name === "get_deployment_status") {
      const { projectName } = args as { projectName: string };
      const result = await getDeploymentStatus(projectName);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    }

    throw new Error(`Unknown tool: ${name}`);
  }
);

export async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Deploy MCP server running on stdio");
}

main().catch(console.error);
