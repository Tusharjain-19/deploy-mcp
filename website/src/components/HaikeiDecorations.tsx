import React from 'react';

// Haikei Organic Wave Divider (app.haikei.app style smooth layered SVG curve)
export const HaikeiWaveDivider: React.FC<{
  fill?: string;
  className?: string;
  flip?: boolean;
}> = ({ fill = '#101010', className = '', flip = false }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className} ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C180 140 360 160 540 120C720 80 900 -20 1080 20C1260 60 1380 140 1440 160V180H0V60Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

// Haikei Stacked Topographic Contour Curves (app.haikei.app style topographic contour meshes)
export const HaikeiContourBackground: React.FC<{
  className?: string;
  strokeColor?: string;
}> = ({ className = '', strokeColor = 'rgba(230, 213, 176, 0.06)' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-100 200 C 200 100, 400 350, 700 250 S 1100 150, 1300 300"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 280 C 220 170, 420 420, 720 320 S 1120 220, 1300 370"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 360 C 240 240, 440 490, 740 390 S 1140 290, 1300 440"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 440 C 260 310, 460 560, 760 460 S 1160 360, 1300 510"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 520 C 280 380, 480 630, 780 530 S 1180 430, 1300 580"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};
