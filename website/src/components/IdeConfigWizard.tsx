import React, { useState } from 'react';
import { IDE_CONFIGS } from '../data/ideConfigs';
import { CursorLogo, ClaudeLogo, VsCodeLogo } from './SvgLogos';
import { HaikeiContourBackground } from './HaikeiDecorations';
import { FadeIn } from './motion/MotionPrimitives';
import { Copy, Check, FileText, Code2, Terminal, Monitor, Laptop } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

export const IdeConfigWizard: React.FC = () => {
  const [activeIdeId, setActiveIdeId] = useState('cursor');
  const [activeOs, setActiveOs] = useState<'windows' | 'mac'>('windows');
  const [copied, setCopied] = useState(false);

  const activeConfig = IDE_CONFIGS.find(cfg => cfg.id === activeIdeId) || IDE_CONFIGS[0];

  const handleCopyJson = () => {
    playSuccessSound();
    navigator.clipboard.writeText(activeConfig.configJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderIdeLogo = (id: string) => {
    if (id === 'cursor') return <CursorLogo className="w-3.5 h-3.5 text-[#FAF6EE]" />;
    if (id === 'claude') return <ClaudeLogo className="w-3.5 h-3.5 text-[#D5380C]" />;
    if (id === 'vscode' || id === 'cline') return <VsCodeLogo className="w-3.5 h-3.5 text-[#FAF6EE]" />;
    return <Terminal className="w-3.5 h-3.5 text-[#FAF6EE]" />;
  };

  return (
    <section id="quick-start" className="py-12 sm:py-16 bg-[#101010] border-t border-white/10 relative overflow-hidden">
      
      {/* Haikei Topographic Curves */}
      <HaikeiContourBackground strokeColor="rgba(230, 213, 176, 0.04)" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] text-[#FAF6EE] text-xs font-bold mb-3 border border-white/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D5380C]" />
              <span className="font-mono text-[11px] uppercase tracking-wider">STEP 2 — IDE INTEGRATION</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] tracking-tight uppercase leading-tight">
              ADD TO YOUR AI IDE.
            </h2>
            <p className="text-[#E6D5BD]/80 text-sm mt-3 font-sans">
              Select your coding assistant below to get your ready-to-paste JSON configuration.
            </p>
          </div>
        </FadeIn>

        {/* IDE Selector Capsule Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {IDE_CONFIGS.map(ide => (
            <button
              key={ide.id}
              onClick={() => { playClickSound(); setActiveIdeId(ide.id); setCopied(false); }}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                activeIdeId === ide.id
                  ? 'bg-[#D5380C] text-[#FAF6EE] border-2 border-[#FAF6EE] shadow-[4px_4px_0px_#FAF6EE] scale-105'
                  : 'bg-[#141414] border border-[#E6D5BD]/20 text-[#E6D5BD]/70 hover:text-[#FAF6EE] hover:border-[#D5380C]'
              }`}
            >
              {renderIdeLogo(ide.id)}
              <span>{ide.name}</span>
            </button>
          ))}
        </div>

        {/* Configuration Card Box */}
        <FadeIn direction="up" delay={0.1}>
          <div className="rounded-3xl bg-[#141414] border-2 border-[#E6D5BD]/20 shadow-[8px_8px_0px_#101010] p-6 sm:p-8 hover:border-[#D5380C] transition-all">
            
            {/* Card Header & Path Inspector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E6D5BD]/15 gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-syne font-black text-xl sm:text-2xl text-[#FAF6EE]">{activeConfig.name}</h3>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider bg-[#D5380C] text-[#FAF6EE] border border-[#FAF6EE]/40">
                    {activeConfig.badge}
                  </span>
                </div>
                
                {/* OS Path Switcher */}
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1 bg-[#101010] p-1 rounded-full border border-[#E6D5BD]/20">
                    <button
                      onClick={() => { playClickSound(); setActiveOs('windows'); }}
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                        activeOs === 'windows' ? 'bg-[#D5380C] text-[#FAF6EE]' : 'text-[#E6D5BD]/60 hover:text-[#FAF6EE]'
                      }`}
                    >
                      <Monitor className="w-3 h-3" /> WINDOWS
                    </button>
                    <button
                      onClick={() => { playClickSound(); setActiveOs('mac'); }}
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                        activeOs === 'mac' ? 'bg-[#D5380C] text-[#FAF6EE]' : 'text-[#E6D5BD]/60 hover:text-[#FAF6EE]'
                      }`}
                    >
                      <Laptop className="w-3 h-3" /> MAC / LINUX
                    </button>
                  </div>

                  <div className="text-xs text-[#E6D5BD]/80 bg-[#101010] px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#D5380C]" />
                    <span>PATH: <code className="text-[#FAF6EE] font-bold">{activeOs === 'windows' ? activeConfig.filePathWindows : activeConfig.filePathMacLinux}</code></span>
                  </div>
                </div>
              </div>

              {/* Copy Button in Burnt Orange */}
              <button
                onClick={handleCopyJson}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D5380C] text-[#FAF6EE] font-syne font-black text-xs uppercase tracking-wider hover:bg-[#B82D09] transition-all shadow-[4px_4px_0px_#FAF6EE] active:translate-y-0.5 shrink-0 border border-[#FAF6EE]/40 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#FAF6EE]" />
                    <span>COPIED CONFIG!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY JSON CONFIG</span>
                  </>
                )}
              </button>
            </div>

            {/* JSON Code Viewer */}
            <div className="relative rounded-2xl bg-[#0C0C0C] border border-[#E6D5BD]/15 p-4 sm:p-5 overflow-x-auto shadow-inner">
              <pre className="font-mono text-xs sm:text-sm text-[#E6D5BD] leading-relaxed">
                <code>{activeConfig.configJson}</code>
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E6D5BD]/10 text-xs font-mono text-[#E6D5BD]/70 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D5380C]" />
              <span>Standard Model Context Protocol stdio transport over npx. Zero binary installation needed.</span>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};
