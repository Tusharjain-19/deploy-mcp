import React from 'react';

interface StarburstIconProps {
  className?: string;
  points?: 8 | 12 | 16;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export const StarburstIcon: React.FC<StarburstIconProps> = ({
  className = 'w-10 h-10',
  points = 8,
  fill = '#101010',
  stroke = '#E6D5B0',
  strokeWidth = 2,
}) => {
  // Generate geometric starburst path
  const cx = 50;
  const cy = 50;
  const outerR = 46;
  const innerR = points === 8 ? 24 : points === 12 ? 30 : 34;

  const totalPoints = points * 2;
  const pathData = Array.from({ length: totalPoints }).map((_, i) => {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(' ') + ' Z';

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={pathData}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="miter"
      />
    </svg>
  );
};
