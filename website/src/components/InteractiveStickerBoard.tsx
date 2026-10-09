import React, { useState } from 'react';
import { Sparkles, Trash2, Tag, Check } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

interface Stamp {
  id: string;
  text: string;
  x: number;
  y: number;
  rotation: number;
  bg: string;
  color: string;
  border: string;
}

const STAMP_PRESETS = [
  { text: '⚡ ZERO SERVER COSTS', bg: '#D5380C', color: '#FAF6EE', border: '#FAF6EE' },
  { text: '✦ VERCEL NATIVE', bg: '#101010', color: '#FAF6EE', border: '#FAF6EE' },
  { text: '🛡️ 100% GOVERNED', bg: '#E6D5B0', color: '#101010', border: '#101010' },
  { text: '🚀 SHIP IT!', bg: '#D5380C', color: '#FAF6EE', border: '#FAF6EE' },
  { text: '👾 MCP CERTIFIED', bg: '#101010', color: '#F1B333', border: '#F1B333' },
  { text: '★ NO SECRETS LEAKED', bg: '#0C9367', color: '#FAF6EE', border: '#FAF6EE' }
];

export const InteractiveStickerBoard: React.FC = () => {
  const [stamps, setStamps] = useState<Stamp[]>([
    {
      id: 'initial-1',
      text: '⚡ ZERO SERVER COSTS',
      x: 82,
      y: 18,
      rotation: 8.5,
      bg: '#D5380C',
      color: '#FAF6EE',
      border: '#FAF6EE'
    },
    {
      id: 'initial-2',
      text: '🛡️ ZERO LEAKAGE',
      x: 12,
      y: 75,
      rotation: -6.2,
      bg: '#101010',
      color: '#F1B333',
      border: '#F1B333'
    }
  ]);

  const [stampIndex, setStampIndex] = useState(0);

  const addRandomStamp = () => {
    playClickSound();
    const preset = STAMP_PRESETS[stampIndex % STAMP_PRESETS.length];
    setStampIndex(prev => prev + 1);

    // Random position in viewport bounds
    const newStamp: Stamp = {
      id: `stamp-${Date.now()}`,
      text: preset.text,
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
      rotation: (Math.random() - 0.5) * 24,
      bg: preset.bg,
      color: preset.color,
      border: preset.border
    };

    setStamps(prev => [...prev.slice(-8), newStamp]);
  };

  const removeStamp = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound();
    setStamps(prev => prev.filter(s => s.id !== id));
  };

  return (
    <>
      {/* Floating Canvas Stamps */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {stamps.map(stamp => (
          <div
            key={stamp.id}
            style={{
              left: `${stamp.x}%`,
              top: `${stamp.y}%`,
              transform: `translate(-50%, -50%) rotate(${stamp.rotation}deg)`,
              backgroundColor: stamp.bg,
              color: stamp.color,
              borderColor: stamp.border,
            }}
            className="absolute pointer-events-auto cursor-pointer border-2 px-3.5 py-1.5 font-mono text-xs font-black uppercase tracking-wider rounded-md shadow-[4px_4px_0px_#101010] hover:scale-110 active:scale-95 transition-transform group select-none"
            onClick={(e) => removeStamp(stamp.id, e)}
            title="Click to remove sticker"
          >
            <div className="flex items-center gap-1.5">
              <span>{stamp.text}</span>
              <span className="opacity-0 group-hover:opacity-100 text-[10px] ml-1 transition-opacity">✕</span>
            </div>
          </div>
        ))}
      </div>

      {/* Trigger Button in bottom bar or control cluster */}
      <button
        onClick={addRandomStamp}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#101010] text-[#E6D5B0] border-2 border-[#D5380C] hover:bg-[#D5380C] hover:text-[#FAF6EE] shadow-[4px_4px_0px_#D5380C] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 active:translate-y-0.5 active:shadow-[2px_2px_0px_#D5380C]"
        title="Stamp an editorial sticker on screen"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#F1B333]" />
        <span>+ DROP STICKER</span>
      </button>
    </>
  );
};
