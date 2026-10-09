import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// Official Vercel Triangle Logo SVG
export const VercelLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4', size }) => (
  <svg
    viewBox="0 0 1155 1000"
    className={className}
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M577.346 0L1154.69 1000H0L577.346 0Z" />
  </svg>
);

// Cursor Editor Logo SVG
export const CursorLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3L19 12L12 14L9 20L5 3Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

// Claude / Anthropic Asterisk Logo SVG
export const ClaudeLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 2h-3v7.5H3v3h7.5V20h3v-7.5H21v-3h-7.5V2z" />
  </svg>
);

// VS Code Logo SVG
export const VsCodeLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.5 1.5L6.8 9.5 2 6.5 0.5 7.8 4 12 0.5 16.2 2 17.5 6.8 14.5 17.5 22.5 23.5 20V4L17.5 1.5zM17.5 17.8L9.5 12 17.5 6.2V17.8z" />
  </svg>
);

// Next.js Logo SVG
export const NextjsLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 180 180"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="90" cy="90" r="85" stroke="currentColor" strokeWidth="10" />
    <path
      d="M125 130L70 58H58V122H70V82L116 142C119 138.5 122 134.5 125 130Z"
      fill="currentColor"
    />
    <rect x="110" y="58" width="12" height="42" fill="currentColor" />
  </svg>
);

// React Logo SVG
export const ReactLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="-11.5 -10.23174 23 20.46348"
    className={className}
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// TypeScript Logo SVG
export const TypeScriptLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.7 13.7h-2.9v8.5H6.9v-8.5H4v-2.3h8.2v2.3zm8.9 1.4c0-1.2-.5-2.2-1.5-2.8-.7-.4-1.8-.7-3.1-1-.8-.2-1.4-.4-1.7-.6-.3-.2-.5-.5-.5-.8 0-.4.2-.7.6-.9.4-.2 1-.3 1.7-.3 1 0 1.9.2 2.6.7.4.3.7.8.8 1.4h2.2c-.2-1.2-.7-2.1-1.6-2.7-1-.6-2.3-1-3.9-1-1.6 0-2.8.3-3.8 1-.9.7-1.4 1.6-1.4 2.7 0 1 .4 1.8 1.2 2.4.6.4 1.7.8 3.2 1.1 1 .2 1.7.5 2.1.8.4.3.6.7.6 1.2 0 .5-.2.9-.7 1.2-.5.3-1.2.4-2.1.4-1.2 0-2.2-.3-3-.9-.5-.4-.9-1.1-1-1.9H7.8c.1 1.4.7 2.4 1.8 3.1 1.1.7 2.5 1 4.2 1 1.8 0 3.2-.4 4.2-1.1 1.1-.8 1.6-1.8 1.6-3z" />
  </svg>
);
