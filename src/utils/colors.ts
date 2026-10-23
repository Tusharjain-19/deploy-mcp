/**
 * Deploy MCP Terminal Aesthetics & Brand Color System
 * Signature Brand Palette:
 * - Yellow: #E7BA05 (rgb: 231, 186, 5)
 * - Butter: #F6E3B8 (rgb: 246, 227, 184)
 * - Leaf:   #6B9E5A (rgb: 107, 158, 90)
 * - Brown:  #906342 (rgb: 144, 99, 66)
 * - Black:  #000000 (rgb: 0, 0, 0) - Pure OLED black for dark mode
 */

// Basic ANSI escape codes
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const ITALIC = "\x1b[3m";
const UNDERLINE = "\x1b[4m";

// Brand RGB Color Palette (Strict Signature Colors)
export const BRAND_YELLOW_RGB = { r: 231, g: 186, b: 5 };
export const BRAND_BUTTER_RGB = { r: 246, g: 227, b: 184 };
export const BRAND_LEAF_RGB = { r: 107, g: 158, b: 90 };
export const BRAND_BROWN_RGB = { r: 144, g: 99, b: 66 };
export const BRAND_BLACK_RGB = { r: 0, g: 0, b: 0 };

// Backward-compatible aliases
export const BRAND_ORANGE_RGB = BRAND_YELLOW_RGB;
export const BRAND_IVORY_RGB = BRAND_BUTTER_RGB;
export const BRAND_GOLD_RGB = BRAND_YELLOW_RGB;
export const BRAND_DARK_RGB = BRAND_BLACK_RGB;

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

  // Solid Signature Brand Colors
  brand: (s: string) => `\x1b[38;2;231;186;5m\x1b[1m${s}${RESET}`,
  brandYellow: (s: string) => `\x1b[38;2;231;186;5m\x1b[1m${s}${RESET}`,
  brandButter: (s: string) => `\x1b[38;2;246;227;184m${s}${RESET}`,
  brandLeaf: (s: string) => `\x1b[38;2;107;158;90m\x1b[1m${s}${RESET}`,
  brandBrown: (s: string) => `\x1b[38;2;144;99;66m${s}${RESET}`,
  brandBlack: (s: string) => `\x1b[38;2;0;0;0m${s}${RESET}`,

  // Backward-compatible brand aliases
  brandOrange: (s: string) => `\x1b[38;2;231;186;5m\x1b[1m${s}${RESET}`,
  brandGold: (s: string) => `\x1b[38;2;231;186;5m\x1b[1m${s}${RESET}`,
  brandIvory: (s: string) => `\x1b[38;2;246;227;184m${s}${RESET}`,

  // Brand-safe Aliases (No blue or cyan - pure black/butter/yellow/leaf/brown system)
  cyan: (s: string) => `\x1b[38;2;246;227;184m${s}${RESET}`,
  brightCyan: (s: string) => `\x1b[38;2;231;186;5m\x1b[1m${s}${RESET}`,
  blue: (s: string) => `\x1b[38;2;246;227;184m${s}${RESET}`,
  magenta: (s: string) => `\x1b[38;2;231;186;5m${s}${RESET}`,
  green: (s: string) => `\x1b[38;2;107;158;90m\x1b[1m${s}${RESET}`,
  yellow: (s: string) => `\x1b[38;2;231;186;5m\x1b[1m${s}${RESET}`,
  red: (s: string) => `\x1b[38;2;144;99;66m\x1b[1m${s}${RESET}`,
  white: (s: string) => `\x1b[38;2;246;227;184m\x1b[1m${s}${RESET}`,
  gray: (s: string) => `\x1b[38;2;144;99;66m${s}${RESET}`,
  brown: (s: string) => `\x1b[38;2;144;99;66m${s}${RESET}`,

  // Compound Badges & Highlights
  badge: (label: string, bgR = 231, bgG = 186, bgB = 5, textR = 0, textG = 0, textB = 0) => 
    `\x1b[48;2;${bgR};${bgG};${bgB}m\x1b[38;2;${textR};${textG};${textB}m\x1b[1m ${label} ${RESET}`,
  
  badgeLeaf: (label: string) => 
    `\x1b[48;2;107;158;90m\x1b[38;2;0;0;0m\x1b[1m ${label} ${RESET}`,

  badgeBrown: (label: string) => 
    `\x1b[48;2;144;99;66m\x1b[38;2;246;227;184m\x1b[1m ${label} ${RESET}`,

  badgeButter: (label: string) => 
    `\x1b[48;2;246;227;184m\x1b[38;2;0;0;0m\x1b[1m ${label} ${RESET}`,

  code: (s: string) => `\x1b[38;2;231;186;5m${s}${RESET}`,
  highlight: (s: string) => `\x1b[38;2;231;186;5m\x1b[1m${s}${RESET}`,
  success: (s: string) => `\x1b[38;2;107;158;90m\x1b[1m${s}${RESET}`,
  warn: (s: string) => `\x1b[38;2;231;186;5m\x1b[1m${s}${RESET}`,
  error: (s: string) => `\x1b[38;2;144;99;66m\x1b[1m${s}${RESET}`,
};

/**
 * Signature Brand Yellow (#E7BA05) styling for ASCII banners.
 */
export function cyanMagentaGradient(text: string): string {
  return text
    .split("\n")
    .map(line => `\x1b[38;2;231;186;5m\x1b[1m${line}${RESET}`)
    .join("\n");
}

export function yellowGradient(text: string): string {
  return cyanMagentaGradient(text);
}

/**
 * Signature Brand styling for header lines.
 */
export function lineGradient(text: string): string {
  return `\x1b[38;2;231;186;5m\x1b[1m${text}${RESET}`;
}
