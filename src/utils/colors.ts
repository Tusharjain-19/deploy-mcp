/**
 * Deploy MCP Terminal Aesthetics & Color System
 * Provides rich ANSI styling, vibrant gradients, and aesthetic formatting for the CLI.
 */

// Basic ANSI escape codes
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const ITALIC = "\x1b[3m";
const UNDERLINE = "\x1b[4m";

// Standard & Bright ANSI Colors
const CYAN = "\x1b[36m";
const BRIGHT_CYAN = "\x1b[96m";
const BRIGHT_BLUE = "\x1b[94m";
const BRIGHT_MAGENTA = "\x1b[95m";
const BRIGHT_GREEN = "\x1b[92m";
const BRIGHT_YELLOW = "\x1b[93m";
const BRIGHT_RED = "\x1b[91m";
const WHITE = "\x1b[97m";
const GRAY = "\x1b[90m";

// RGB Truecolor helpers
export function rgb(r: number, g: number, b: number, text: string): string {
  return `\x1b[38;2;${r};${g};${b}m${text}${RESET}`;
}

export function bgRgb(r: number, g: number, b: number, text: string): string {
  return `\x1b[48;2;${r};${g};${b}m${text}${RESET}`;
}

export const c = {
  reset: (s: string) => `${RESET}${s}`,
  bold: (s: string) => `${BOLD}${s}${RESET}`,
  dim: (s: string) => `${DIM}${s}${RESET}`,
  italic: (s: string) => `${ITALIC}${s}${RESET}`,
  underline: (s: string) => `${UNDERLINE}${s}${RESET}`,
  
  cyan: (s: string) => `${CYAN}${s}${RESET}`,
  brightCyan: (s: string) => `${BRIGHT_CYAN}${s}${RESET}`,
  blue: (s: string) => `${BRIGHT_BLUE}${s}${RESET}`,
  magenta: (s: string) => `${BRIGHT_MAGENTA}${s}${RESET}`,
  green: (s: string) => `${BRIGHT_GREEN}${s}${RESET}`,
  yellow: (s: string) => `${BRIGHT_YELLOW}${s}${RESET}`,
  red: (s: string) => `${BRIGHT_RED}${s}${RESET}`,
  white: (s: string) => `${WHITE}${s}${RESET}`,
  gray: (s: string) => `${GRAY}${s}${RESET}`,

  // Compound styles
  badge: (label: string, bgR = 0, bgG = 118, bgB = 209) => 
    `\x1b[48;2;${bgR};${bgG};${bgB}m\x1b[97m\x1b[1m ${label} ${RESET}`,
  
  code: (s: string) => `\x1b[38;2;240;225;140m${s}${RESET}`,
  highlight: (s: string) => `\x1b[38;2;0;229;255m\x1b[1m${s}${RESET}`,
  success: (s: string) => `\x1b[38;2;76;209;55m\x1b[1m${s}${RESET}`,
  warn: (s: string) => `\x1b[38;2;251;197;49m\x1b[1m${s}${RESET}`,
  error: (s: string) => `\x1b[38;2;232;65;24m\x1b[1m${s}${RESET}`,
};

/**
 * Creates a cyan-to-magenta multi-line gradient effect for ASCII text/banners
 */
export function cyanMagentaGradient(text: string): string {
  const lines = text.split("\n");
  const total = lines.length;
  
  return lines
    .map((line, index) => {
      // Calculate color step from Cyan (0, 229, 255) to Magenta (217, 70, 239)
      const factor = total > 1 ? index / (total - 1) : 0;
      const r = Math.round(0 + (217 - 0) * factor);
      const g = Math.round(229 + (70 - 229) * factor);
      const b = Math.round(255 + (239 - 255) * factor);
      return `\x1b[38;2;${r};${g};${b}m${line}${RESET}`;
    })
    .join("\n");
}

/**
 * Creates a vibrant rainbow gradient across a single line of text
 */
export function lineGradient(text: string): string {
  const chars = text.split("");
  const total = chars.length;
  return chars
    .map((char, i) => {
      const ratio = i / Math.max(total - 1, 1);
      // Spectrum: Cyan (0,230,255) -> Blue (50,130,255) -> Purple (180,70,255) -> Pink (255,70,200)
      let r = 0, g = 0, b = 255;
      if (ratio < 0.33) {
        const local = ratio / 0.33;
        r = Math.round(0 + (50 - 0) * local);
        g = Math.round(230 + (130 - 230) * local);
        b = 255;
      } else if (ratio < 0.66) {
        const local = (ratio - 0.33) / 0.33;
        r = Math.round(50 + (180 - 50) * local);
        g = Math.round(130 + (70 - 130) * local);
        b = 255;
      } else {
        const local = (ratio - 0.66) / 0.34;
        r = Math.round(180 + (255 - 180) * local);
        g = Math.round(70 + (70 - 70) * local);
        b = Math.round(255 + (200 - 255) * local);
      }
      return `\x1b[38;2;${r};${g};${b}m${char}${RESET}`;
    })
    .join("");
}
