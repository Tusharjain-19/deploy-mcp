import React, { useState } from 'react';
import { IDE_CONFIGS } from '../../data/ideConfigs';
import { Copy, Check, Terminal, Monitor, Laptop, FileText, ArrowRight, ArrowLeft } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../../utils/soundEffects';

interface Frame05Props {
  onNextFrame: () => void;
  onPrevFrame: () => void;
}

export const Frame05IdeWizard: React.FC<Frame05Props> = ({ onNextFrame, onPrevFrame }) => {
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

  return (
    <div className="w-full h-full min-h-screen relative flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-y-auto overflow-x-hidden bg-[#101010] text-[#E6D5B0]">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-[#E6D5B0]/20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { playClickSound(); onPrevFrame(); }}
            className="p-1.5 rounded-full bg-[#161616] border border-[#E6D5B0]/20 hover:border-[#D5380C] text-[#E6D5B0] transition-colors"
            title="Previous Frame"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="font-syne font-black text-sm tracking-wider text-[#FAF6EE]">FRAME 05 // ECOSYSTEM</span>
            <span className="text-[10px] font-mono text-[#D5380C] ml-2 font-bold px-2 py-0.5 rounded-full bg-[#161616] border border-[#D5380C]/30">
              IDE INTEGRATION
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#E6D5B0]/80">
          <span>CONNECTS OVER STDIO / NPX</span>
        </div>
      </div>

      {/* MAIN IDE SETUP CONTENT */}
      <div className="relative z-10 my-auto py-6 max-w-6xl mx-auto w-full space-y-6">
        
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5380C] text-[#FAF6EE] font-mono text-xs font-black uppercase">
            <span>STEP 2 // CONFIGURATION WIZARD</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] uppercase leading-tight">
            ADD DEPLOY MCP TO YOUR IDE.
          </h2>
          <p className="text-sm sm:text-base text-[#E6D5B0]/80">
            Select your favorite AI editor below to inspect the configuration file location and paste the verified MCP connection schema.
          </p>
        </div>

        {/* IDE Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {IDE_CONFIGS.map(ide => (
            <button
              key={ide.id}
              onClick={() => { playClickSound(); setActiveIdeId(ide.id); setCopied(false); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                activeIdeId === ide.id
                  ? 'bg-[#D5380C] text-[#FAF6EE] border-2 border-[#FAF6EE] shadow-[4px_4px_0px_#FAF6EE]'
                  : 'bg-[#161616] border border-[#E6D5B0]/20 text-[#E6D5B0]/70 hover:text-[#FAF6EE] hover:border-[#D5380C]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{ide.name}</span>
            </button>
          ))}
        </div>

        {/* Configuration Card Box */}
        <div className="rounded-3xl bg-[#141414] border-2 border-[#E6D5B0]/20 shadow-[8px_8px_0px_#101010] p-6 sm:p-8 space-y-6">
          
          {/* Card Header & OS Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E6D5B0]/15 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-syne font-black text-xl sm:text-2xl text-[#FAF6EE]">
                  {activeConfig.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#D5380C] text-[#FAF6EE]">
                  {activeConfig.badge}
                </span>
              </div>
              
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                <div className="flex items-center gap-1 bg-[#101010] p-1 rounded-full border border-[#E6D5B0]/20">
                  <button
                    onClick={() => { playClickSound(); setActiveOs('windows'); }}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                      activeOs === 'windows' ? 'bg-[#D5380C] text-[#FAF6EE]' : 'text-[#E6D5B0]/60 hover:text-[#FAF6EE]'
                    }`}
                  >
                    <Monitor className="w-3 h-3" /> WINDOWS
                  </button>
                  <button
                    onClick={() => { playClickSound(); setActiveOs('mac'); }}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                      activeOs === 'mac' ? 'bg-[#D5380C] text-[#FAF6EE]' : 'text-[#E6D5B0]/60 hover:text-[#FAF6EE]'
                    }`}
                  >
                    <Laptop className="w-3 h-3" /> MAC / LINUX
                  </button>
                </div>

                <div className="text-xs text-[#E6D5B0]/80 bg-[#101010] px-3.5 py-1.5 rounded-full border border-[#E6D5B0]/20 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#FAF6EE]" />
                  <span>PATH: <code className="text-[#FAF6EE] font-bold">{activeOs === 'windows' ? activeConfig.filePathWindows : activeConfig.filePathMacLinux}</code></span>
                </div>
              </div>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopyJson}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D5380C] hover:bg-[#B82D09] text-[#FAF6EE] font-syne font-black text-xs uppercase tracking-wider transition-all border-2 border-[#FAF6EE] shadow-[4px_4px_0px_#FAF6EE] active:translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#FAF6EE]" />
                  <span>COPIED CONFIG JSON!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY CONFIGURATION</span>
                </>
              )}
            </button>
          </div>

          {/* JSON Code Viewer */}
          <div className="relative rounded-2xl bg-[#0C0C0C] border border-[#E6D5B0]/15 p-4 sm:p-5 overflow-x-auto shadow-inner">
            <pre className="font-mono text-xs sm:text-sm text-[#E6D5B0] leading-relaxed">
              <code>{activeConfig.configJson}</code>
            </pre>
          </div>

          {/* Setup Instructions */}
          <div className="pt-2 text-xs font-mono text-[#E6D5B0]/80 space-y-1">
            <p className="font-bold text-[#FAF6EE]">⚡ Installation Tip:</p>
            <p>Once pasted, restart your IDE to initialize the background MCP stdio transport automatically.</p>
          </div>

        </div>

      </div>

      {/* FOOTER BAR OF FRAME 05 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-[#E6D5B0]/20 text-xs font-mono text-[#E6D5B0]/70">
        <button
          onClick={() => { playClickSound(); onPrevFrame(); }}
          className="flex items-center gap-1 text-[#E6D5B0] hover:text-[#D5380C]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK: FRAME 04 AUTO-FIX</span>
        </button>

        <button
          onClick={() => { playClickSound(); onNextFrame(); }}
          className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#D5380C] text-[#FAF6EE] font-bold uppercase tracking-wider hover:bg-[#B82D09] transition-all"
        >
          <span>NEXT: FRAME 06 TOOL MATRIX</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
