import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";
import { detectProject } from "./utils/framework-detector.js";
import { checkProject } from "./tools/check-project.js";
import { deployToVercel, getDeploymentStatus } from "./tools/deploy.js";
import { getDeploymentLogs } from "./tools/logs.js";
import { validateEnvironmentVariables, scanEnv, compareEnv, syncEnv, createEnvExample } from "./tools/env-vars.js";
import { gitStatus, gitCommitAndPush, checkEnvLeak } from "./tools/git.js";
import { diagnoseBuildFailure } from "./tools/diagnose.js";
import { projectReport } from "./tools/project-report.js";
import { smartDeploy } from "./tools/smart-deploy.js";
import { deleteProject } from "./tools/delete-project.js";

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
          name: "smart_deploy",
          description: "Deploy to Vercel with auto-polling. On failure, automatically fetches logs and diagnoses the error so the AI can fix it and redeploy.",
          inputSchema: {
            type: "object",
            properties: {
              projectPath: { type: "string", description: "Absolute path to the project" },
              projectName: { type: "string", description: "Vercel project name" },
              maxPollSeconds: { type: "number", description: "Max seconds to wait for deployment (default 180)" }
            },
            required: ["projectPath", "projectName"]
          } as any
        },
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
          name: "delete_project",
          description: "Permanently delete a Vercel project. Triggers a secure native OS prompt that the user MUST manually click to approve.",
          inputSchema: {
            type: "object",
            properties: { projectName: { type: "string" } },
            required: ["projectName"]
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
        },
        {
          name: "get_deployment_logs",
          description: "Get deployment logs for a project",
          inputSchema: {
            type: "object",
            properties: { projectName: { type: "string" } },
            required: ["projectName"]
          } as any
        },
        {
          name: "scan_env",
          description: "Scan local environment variables (redacted for security)",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" } },
            required: ["projectPath"]
          } as any
        },
        {
          name: "compare_env",
          description: "Compare local environment variables against Vercel",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" }, projectName: { type: "string" } },
            required: ["projectPath", "projectName"]
          } as any
        },
        {
          name: "sync_env",
          description: "Safely sync missing environment variables to Vercel",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" }, projectName: { type: "string" }, keysToSync: { type: "array", items: { type: "string" } }, overwrite: { type: "boolean" } },
            required: ["projectPath", "projectName", "keysToSync"]
          } as any
        },
        {
          name: "create_env_example",
          description: "Automatically generate a .env.example file",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" } },
            required: ["projectPath"]
          } as any
        },
        {
          name: "check_env_leak",
          description: "Check if .env files are accidentally tracked by Git",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" } },
            required: ["projectPath"]
          } as any
        },
        {
          name: "project_report",
          description: "Get a comprehensive pre-flight project report",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" }, projectName: { type: "string" } },
            required: ["projectPath"]
          } as any
        },
        {
          name: "validate_environment_variables",
          description: "Validate required environment variables for a project",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" } },
            required: ["projectPath"]
          } as any
        },
        {
          name: "git_status",
          description: "Check the git status of a project",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" } },
            required: ["projectPath"]
          } as any
        },
        {
          name: "git_commit_and_push",
          description: "Commit and push changes to git",
          inputSchema: {
            type: "object",
            properties: { projectPath: { type: "string" }, message: { type: "string" } },
            required: ["projectPath", "message"]
          } as any
        },
        {
          name: "diagnose_build_failure",
          description: "Diagnose a build failure from logs",
          inputSchema: {
            type: "object",
            properties: { logs: { type: "array", items: { type: "string" } } },
            required: ["logs"]
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

    if (name === "smart_deploy") {
      const { projectPath, projectName, maxPollSeconds } = args as {
        projectPath: string;
        projectName: string;
        maxPollSeconds?: number;
      };
      const result = await smartDeploy(projectPath, projectName, maxPollSeconds);
      // If failed, aiInstruction is what the AI should read and act on immediately
      const text = result.failed && result.aiInstruction
        ? result.aiInstruction + "\n\n--- Full Result ---\n" + JSON.stringify(result, null, 2)
        : JSON.stringify(result, null, 2);
      return { content: [{ type: "text", text }] };
    }

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

    if (name === "delete_project") {
      const { projectName } = args as { projectName: string };
      const result = await deleteProject(projectName);
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
    
    if (name === "get_deployment_logs") {
      const { projectName } = args as { projectName: string };
      const result = await getDeploymentLogs(projectName);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    }
    
    if (name === "scan_env") {
      const { projectPath } = args as { projectPath: string };
      const result = await scanEnv(projectPath);
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    }

    if (name === "compare_env") {
      const { projectPath, projectName } = args as { projectPath: string; projectName: string };
      const result = await compareEnv(projectPath, projectName);
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    }

    if (name === "sync_env") {
      const { projectPath, projectName, keysToSync, overwrite } = args as { projectPath: string; projectName: string; keysToSync: string[]; overwrite?: boolean };
      const result = await syncEnv(projectPath, projectName, keysToSync, overwrite);
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    }

    if (name === "create_env_example") {
      const { projectPath } = args as { projectPath: string };
      const result = await createEnvExample(projectPath);
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    }

    if (name === "check_env_leak") {
      const { projectPath } = args as { projectPath: string };
      const result = await checkEnvLeak(projectPath);
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    }

    if (name === "project_report") {
      const { projectPath, projectName } = args as { projectPath: string; projectName?: string };
      const result = await projectReport(projectPath, projectName);
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    }
    
    if (name === "validate_environment_variables") {
      const { projectPath } = args as { projectPath: string };
      const result = await validateEnvironmentVariables(projectPath);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    }

    if (name === "git_status") {
      const { projectPath } = args as { projectPath: string };
      const result = await gitStatus(projectPath);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    }

    if (name === "git_commit_and_push") {
      const { projectPath, message } = args as { projectPath: string; message: string };
      const result = await gitCommitAndPush(projectPath, message);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    }

    if (name === "diagnose_build_failure") {
      const { logs } = args as { logs: string[] };
      const result = await diagnoseBuildFailure(logs);
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
