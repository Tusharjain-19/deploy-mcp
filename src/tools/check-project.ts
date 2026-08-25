import { spawn } from "child_process";
import path from "path";
import { fileExists, readJsonFile } from "../utils/filesystem.js";

export interface ProjectCheck {
  packageJsonExists: boolean;
  buildSucceeds: boolean;
  gitRepository: boolean;
  warnings: string[];
  errors: string[];
  framework?: string;
}

export async function checkProject(
  projectPath: string
): Promise<ProjectCheck> {
  const result: ProjectCheck = {
    packageJsonExists: false,
    buildSucceeds: false,
    gitRepository: false,
    warnings: [],
    errors: []
  };

  // Check package.json exists
  const packageJsonPath = path.join(projectPath, "package.json");
  if (await fileExists(packageJsonPath)) {
    result.packageJsonExists = true;
  } else {
    result.errors.push("package.json not found");
    return result;
  }

  // Check if git repository exists
  const gitPath = path.join(projectPath, ".git");
  if (await fileExists(gitPath)) {
    result.gitRepository = true;
  } else {
    result.warnings.push("Not a Git repository. Consider running 'git init'");
  }

  // Check if node_modules exists
  const nodeModulesPath = path.join(projectPath, "node_modules");
  if (!(await fileExists(nodeModulesPath))) {
    result.warnings.push("node_modules not found. Consider running 'npm install'");
  }

  // Test build command
  result.buildSucceeds = await testBuild(projectPath);

  return result;
}

async function testBuild(projectPath: string): Promise<boolean> {
  return new Promise((resolve) => {
    const child = spawn("npm", ["run", "build"], {
      cwd: projectPath,
      stdio: "pipe",
      timeout: 60000 // 60 second timeout
    });

    let buildOutput = "";
    let buildError = "";

    child.stdout?.on("data", (data) => {
      buildOutput += data.toString();
    });

    child.stderr?.on("data", (data) => {
      buildError += data.toString();
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    });

    child.on("error", () => {
      resolve(false);
    });
  });
}
