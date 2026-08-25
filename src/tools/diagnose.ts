export interface DiagnosisResult {
  errorType: string;
  file?: string;
  line?: number;
  issue: string;
  suggestion: string;
}

export async function diagnoseBuildFailure(
  logs: string[]
): Promise<DiagnosisResult> {
  // A simple heuristic-based log parser for MVP
  const logStr = logs.join('\n');
  
  if (logStr.includes("Module not found:")) {
    const match = logStr.match(/Module not found: Error: Can't resolve '(.*?)' in '(.*?)'/);
    return {
      errorType: "MISSING_MODULE",
      file: match ? match[2] : "unknown",
      issue: `Missing module: ${match ? match[1] : "unknown"}`,
      suggestion: `Run 'npm install ${match ? match[1] : "module_name"}' to install the missing dependency.`
    };
  }
  
  if (logStr.includes("Command failed with exit code") || logStr.includes("npm ERR!")) {
    return {
      errorType: "BUILD_COMMAND_FAILED",
      issue: "The build command exited with an error.",
      suggestion: "Check your build script in package.json and ensure all dependencies are correctly installed."
    };
  }
  
  if (logStr.includes("SyntaxError") || logStr.includes("Type error:")) {
    return {
      errorType: "CODE_ERROR",
      issue: "There is a syntax or type error in your code.",
      suggestion: "Review the logs for the exact line number and fix the code error."
    };
  }

  return {
    errorType: "UNKNOWN_ERROR",
    issue: "An unknown error occurred during deployment.",
    suggestion: "Review the full deployment logs to identify the issue."
  };
}
