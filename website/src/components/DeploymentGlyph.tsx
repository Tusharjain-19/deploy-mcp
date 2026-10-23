import React from 'react';

interface DeploymentGlyphProps {
  className?: string;
  size?: number | string;
  animated?: boolean;
}

/**
 * DeploymentGlyph - Bespoke Geometric Deployment Node & Isometric Prism SVG
 * Replaces legacy starburst/star shapes with a precision isometric deployment cube & orbital node.
 * Strictly uses brand palette: Yellow (#E7BA05), Butter (#F6E3B8), Leaf (#6B9E5A), Brown (#906342), Black (#000000).
 */
export const DeploymentGlyph: React.FC<DeploymentGlyphProps> = ({
  className = 'w-10 h-10',
  size,
  animated = false,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animated ? 'animate-spin-slow' : ''}`}
    >
      {/* Outer Geometric Alignment Ring */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="#F6E3B8"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="opacity-40"
      />

      {/* Hexagonal Isometric Prism Boundary */}
      <polygon
        points="50,14 84,33 84,72 50,91 16,72 16,33"
        fill="#000000"
        stroke="#F6E3B8"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Top Facet - Signature Brand Yellow (#E7BA05) */}
      <polygon
        points="50,16 82,34 50,52 18,34"
        fill="#E7BA05"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Right Facet - Signature Brand Butter (#F6E3B8) */}
      <polygon
        points="50,52 82,34 82,70 50,88"
        fill="#F6E3B8"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Left Facet - Signature Brand Leaf (#6B9E5A) */}
      <polygon
        points="18,34 50,52 50,88 18,70"
        fill="#6B9E5A"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Central Deployment Hub Core */}
      <circle
        cx="50"
        cy="52"
        r="5.5"
        fill="#000000"
        stroke="#F6E3B8"
        strokeWidth="2"
      />
      <circle
        cx="50"
        cy="52"
        r="2"
        fill="#E7BA05"
      />

      {/* 3 Orbital Telemetry Satellite Nodes */}
      <circle cx="50" cy="8" r="3.5" fill="#E7BA05" stroke="#000000" strokeWidth="1" />
      <circle cx="89" cy="74" r="3.5" fill="#F6E3B8" stroke="#000000" strokeWidth="1" />
      <circle cx="11" cy="74" r="3.5" fill="#6B9E5A" stroke="#000000" strokeWidth="1" />
    </svg>
  );
};
