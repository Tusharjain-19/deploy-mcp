import React from 'react';

export interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

/**
 * Bespoke Hand-Crafted SVG Icon Suite for Deploy MCP
 * Pure geometric SVGs crafted for crisp rendering at any size.
 * Zero external icon library dependencies.
 */

// Terminal Window Icon
export const IconTerminal: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2.5" y="3.5" width="19" height="17" rx="3" />
    <path d="M7 9l4 3-4 3" />
    <line x1="13.5" y1="15" x2="17" y2="15" />
  </svg>
);

// Shield / Zero-Trust Security Icon
export const IconShield: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2.5L4 6v6.5c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-3.5z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// Documentation / Blueprint Booklet Icon
export const IconBook: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v18H6.5a2.5 2.5 0 0 0-2.5 2.5z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
    <path d="M6 14h6" />
  </svg>
);

// Global Edge Network Sphere Icon
export const IconGlobe: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9.5" />
    <ellipse cx="12" cy="12" rx="4.5" ry="9.5" />
    <line x1="2.5" y1="12" x2="21.5" y2="12" />
  </svg>
);

// Copy to Clipboard Dual-Layer Icon
export const IconCopy: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
    <path d="M5 15.5H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.5a2 2 0 0 1 2 2v1" />
  </svg>
);

// Success Verification Check Icon
export const IconCheck: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2.5,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4.5 12.5l5 5L19.5 6" />
  </svg>
);

// Upward Scroll / Elevation Arrow
export const IconArrowUp: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

// Forward Action Arrow
export const IconArrowRight: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// Backward Navigation Arrow
export const IconArrowLeft: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

// External Link Outward Arrow
export const IconExternalLink: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// GitHub Official Octocat Silhouette
export const IconGithub: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// High-Speed Deployment Bolt / Energy Node Icon
export const IconBolt: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// CPU / Build Hardware Processor Icon
export const IconCpu: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

// Secure Vault Lock Icon
export const IconLock: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

// Self-Healing Stethoscope / Diagnostic Icon
export const IconStethoscope: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4.5 3v5a5.5 5.5 0 0 0 11 0V3" />
    <path d="M10 13.5v3.5a4 4 0 0 0 8 0V15" />
    <circle cx="18" cy="15" r="2.5" />
  </svg>
);

// Chevron Navigation Helpers
export const IconChevronLeft: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const IconChevronRight: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const IconChevronDown: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconClose: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Mobile Hamburger Menu 3-Line Icon
export const IconMenu: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Warning / Alert Triangle Icon
export const IconAlertTriangle: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// Failure / Error X-Circle Icon
export const IconXCircle: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

// Encircled Check Icon
export const IconCheckCircle: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 9" />
  </svg>
);

// Clean Geometric Dual-Diamond Tech Pulse (No star shape)
export const IconDiamondPulse: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12,2 17,12 12,22 7,12" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

// Rotation / Sync / Refresh Icon
export const IconRefresh: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

// Diagnostic Wrench / Tool Icon
export const IconWrench: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

// Info Encircled Icon
export const IconInfo: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  size,
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

