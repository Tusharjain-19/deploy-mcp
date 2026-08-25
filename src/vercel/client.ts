import { getVercelToken } from "../utils/config.js";

const VERCEL_API_BASE = "https://api.vercel.com";

export interface VercelDeployment {
  uid: string;
  name: string;
  url: string;
  state: "BUILDING" | "READY" | "ERROR" | "CANCELLED";
  createdAt: number;
}

export class VercelClient {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  private async request(
    method: string,
    path: string,
    body?: any
  ): Promise<any> {
    const url = `${VERCEL_API_BASE}${path}`;
    
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Vercel API error: ${error.message || response.statusText}`);
    }

    return response.json();
  }

  async deployProject(
    projectPath: string,
    projectName: string
  ): Promise<{ deploymentId: string; url: string }> {
    try {
      // Create or get project
      const project = await this.ensureProject(projectName);

      // Deploy using Vercel CLI wrapper
      // For MVP, we'll use the CLI as this is simpler than Git integration
      const { execSync } = await import("child_process");
      
      const deployResult = execSync(
        `cd "${projectPath}" && vercel --token=${this.token} --confirm`,
        { encoding: "utf-8" }
      );

      // Parse deployment URL from output
      const urlMatch = deployResult.match(
        /https:\/\/[a-zA-Z0-9\-\.]+\.vercel\.app/
      );
      const deploymentUrl = urlMatch ? urlMatch[0] : "";

      return {
        deploymentId: project.id,
        url: deploymentUrl
      };
    } catch (error) {
      throw new Error(
        `Deployment failed: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  async getDeploymentStatus(
    projectName: string
  ): Promise<{ status: string; url: string }> {
    try {
      const project = await this.getProject(projectName);
      
      if (!project) {
        return { status: "NOT_FOUND", url: "" };
      }

      // Get latest deployment
      const deployments = await this.request(
        "GET",
        `/v6/deployments?projectId=${project.id}`
      );

      if (!deployments.deployments || deployments.deployments.length === 0) {
        return { status: "NO_DEPLOYMENTS", url: "" };
      }

      const latest = deployments.deployments[0];
      return {
        status: latest.state,
        url: `https://${latest.url}`
      };
    } catch (error) {
      throw new Error(
        `Status check failed: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  private async ensureProject(name: string): Promise<any> {
    // Try to get existing project
    const existing = await this.getProject(name);
    if (existing) return existing;

    // Create new project
    const response = await this.request("POST", "/v10/projects", {
      name
    });

    return response;
  }

  private async getProject(name: string): Promise<any> {
    try {
      return await this.request("GET", `/v9/projects/${name}`);
    } catch {
      return null;
    }
  }
}

export async function getVercelClient(): Promise<VercelClient | null> {
  const token = await getVercelToken();
  if (!token) return null;
  return new VercelClient(token);
}
