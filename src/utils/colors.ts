/**
 * Deploy MCP Terminal Aesthetics & Brand Color System
 * Unified solid brand color palette: Electric Cyan (#00E5FF) & Vercel Blue (#0070F3).
 */

// Basic ANSI escape codes
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const ITALIC = "\x1b[3m";
const UNDERLINE = "\x1b[4m";

// Brand RGB Color Palette (Solid Signature Colors)
// Electric Cyan: rgb(0, 229, 255) | Vercel Blue: rgb(0, 118, 255)
export const BRAND_CYAN_RGB = { r: 0, g: 229, b: 255 };
export const BRAND_BLUE_RGB = { r: 0, g: 118, b: 255 };

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

  // Solid Brand Colors
  brand: (s: string) => `\x1b[38;2;0;229;255m\x1b[1m${s}${RESET}`,
  brandBlue: (s: string) => `\x1b[38;2;0;118;255m\x1b[1m${s}${RESET}`,
  
  cyan: (s: string) => `\x1b[38;2;0;229;255m${s}${RESET}`,
  brightCyan: (s: string) => `\x1b[38;2;0;229;255m\x1b[1m${s}${RESET}`,
  blue: (s: string) => `\x1b[38;2;0;118;255m\x1b[1m${s}${RESET}`,
  magenta: (s: string) => `\x1b[38;2;168;85;247m${s}${RESET}`,
  green: (s: string) => `\x1b[38;2;16;185;129m${s}${RESET}`,
  yellow: (s: string) => `\x1b[38;2;245;158;11m${s}${RESET}`,
  red: (s: string) => `\x1b[38;2;239;68;68m${s}${RESET}`,
  white: (s: string) => `\x1b[38;2;255;255;255m\x1b[1m${s}${RESET}`,
  gray: (s: string) => `\x1b[38;2;148;163;184m${s}${RESET}`,

  // Compound Badges & Highlights
  badge: (label: string, bgR = 0, bgG = 118, bgB = 255) => 
    `\x1b[48;2;${bgR};${bgG};${bgB}m\x1b[97m\x1b[1m ${label} ${RESET}`,
  
  code: (s: string) => `\x1b[38;2;240;225;140m${s}${RESET}`,
  highlight: (s: string) => `\x1b[38;2;0;229;255m\x1b[1m${s}${RESET}`,
  success: (s: string) => `\x1b[38;2;16;185;129m\x1b[1m${s}${RESET}`,
  warn: (s: string) => `\x1b[38;2;245;158;11m\x1b[1m${s}${RESET}`,
  error: (s: string) => `\x1b[38;2;239;68;68m\x1b[1m${s}${RESET}`,
};

/**
 * Renders solid Electric Cyan (#00E5FF) bold styling for ASCII banners.
 */
export function cyanMagentaGradient(text: string): string {
  return text
    .split("\n")
    .map(line => `\x1b[38;2;0;229;255m\x1b[1m${line}${RESET}`)
    .join("\n");
}

/**
 * Solid Electric Cyan styling for header lines.
 */
export function lineGradient(text: string): string {
  return `\x1b[38;2;0;229;255m\x1b[1m${text}${RESET}`;
}
