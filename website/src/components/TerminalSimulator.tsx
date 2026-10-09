import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, Play, RefreshCw, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { ScrollParallaxText } from './motion/MotionPrimitives';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

type CliCommand = 'setup' | 'check' | 'deploy';

interface CommandOutput {
  command: string;
  lines: {
    type: 'prompt' | 'logo' | 'meta' | 'divider' | 'status' | 'success' | 'link';
    text?: string;
    subtext?: string;
  }[];
}

const COMMAND_DATA: Record<CliCommand, CommandOutput> = {
  setup: {
    command: 'npx deploymcp setup',
    lines: [
      { type: 'prompt', text: 'PS D:\\deploy mcp> npx deploymcp setup' },
      { type: 'logo' },
      {
        type: 'meta',
        text: 'Deploy MCP connects your AI assistant (Claude / Cursor / Antigravity) directly to',
        subtext: 'Vercel — zero server costs, environment syncing, and auto-diagnostics handled.'
      },
      { type: 'divider' },
      { type: 'status', text: 'Status: CONFIGURED (token saved in ~/.deploy-mcp/config.json)' },
      { type: 'status', text: 'Directory: D:\\deploy mcp' },
      { type: 'status', text: 'Enclave: Hardware-isolated local storage active' },
      { type: 'divider' },
      { type: 'success', text: '✔ Verified Vercel Personal Access Token [Scope: Full Access]' },
      { type: 'success', text: '✔ Configured stdio RPC transport for Cursor, Claude & Antigravity' }
    ]
  },
  check: {
    command: 'npx deploymcp check',
    lines: [
      { type: 'prompt', text: 'PS D:\\deploy mcp> npx deploymcp check' },
      { type: 'status', text: 'Scanning local workspace AST: D:\\deploy mcp' },
      { type: 'status', text: 'Framework detected: Next.js 14.2 (App Router) + TypeScript 5.5' },
      { type: 'status', text: 'Simulating local pre-flight production build dry-run...' },
      { type: 'divider' },
      { type: 'success', text: '✔ Syntax compilation: PASSED (< 1.2s)' },
      { type: 'success', text: '✔ TypeScript strict check: 0 errors, 0 warnings' },
      { type: 'success', text: '✔ Secret safety audit: 0 uncommitted keys or credentials leaked' },
      { type: 'divider' },
      { type: 'meta', text: 'READY FOR ATOMIC CLOUD TRANSMISSION' }
    ]
  },
  deploy: {
    command: 'npx deploymcp deploy',
    lines: [
      { type: 'prompt', text: 'PS D:\\deploy mcp> npx deploymcp deploy --target=production' },
      { type: 'status', text: 'Bundling verified artifacts with zero-trust local signing...' },
      { type: 'status', text: 'Synchronizing 4 environment keys via encrypted TLS channel...' },
      { type: 'status', text: 'Transmitting payload to Vercel Anycast Edge Network...' },
      { type: 'divider' },
      { type: 'success', text: '✔ Global Edge Deployment created: dpl_9x2k7a_prod' },
      { type: 'success', text: '✔ Rollout synchronized across 300+ Edge PoPs (sfo1, iad1, fra1, hnd1)' },
      { type: 'link', text: 'https://deploy-mcp-demo.vercel.app' }
    ]
  }
};

const SPINNER_CHARS = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

const LOADING_STEPS_BY_COMMAND: Record<CliCommand, string[]> = {
  setup: [
    'Resolving @modelcontextprotocol/sdk runtime package',
    'Handshaking local stdio RPC transport bridge',
    'Encapsulating zero-trust hardware secret enclave',
    'Verifying Vercel Anycast authorization scopes'
  ],
  check: [
    'Scanning workspace AST syntax tree for Next.js & TypeScript',
    'Emulating local Turbopack build sandbox',
    'Executing zero-credential leak safety audit',
    'Verifying deterministic AST compilation'
  ],
  deploy: [
    'Signing deployment bundle with hardware key',
    'Synchronizing 4 environment secrets via mutual TLS',
    'Transmitting payload to Vercel Anycast edge network',
    'Verifying live Anycast 200 OK edge health check'
  ]
};

export const TerminalSimulator: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<CliCommand>('setup');
  const [runKey, setRunKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(20);
  const [dotCount, setDotCount] = useState<number>(1);
  const [spinnerIndex, setSpinnerIndex] = useState<number>(0);
  const [visibleLineCount, setVisibleLineCount] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const currentData = COMMAND_DATA[activeCommand];
  const currentLoadingTasks = LOADING_STEPS_BY_COMMAND[activeCommand];

  // Loading screen and animated dots sequence on command switch or restart
  useEffect(() => {
    setIsLoading(true);
    setLoadingStep(0);
    setLoadingProgress(18);
    setVisibleLineCount(0);

    // 1. Fast CLI spinner animation
    const spinTimer = setInterval(() => {
      setSpinnerIndex(prev => (prev + 1) % SPINNER_CHARS.length);
    }, 75);

    // 2. Animated pulsing dots timer (. .. ...)
    const dotTimer = setInterval(() => {
      setDotCount(prev => (prev % 3) + 1);
    }, 220);

    // 3. Multi-phase loading stage advancement
    const t1 = setTimeout(() => {
      setLoadingStep(1);
      setLoadingProgress(45);
    }, 380);

    const t2 = setTimeout(() => {
      setLoadingStep(2);
      setLoadingProgress(72);
    }, 750);

    const t3 = setTimeout(() => {
      setLoadingStep(3);
      setLoadingProgress(92);
    }, 1120);

    const tFinish = setTimeout(() => {
      setLoadingStep(4);
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setVisibleLineCount(1);
      }, 240);
    }, 1500);

    return () => {
      clearInterval(spinTimer);
      clearInterval(dotTimer);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tFinish);
    };
  }, [activeCommand, runKey]);

  // Once loading completes, stream in verified output lines
  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setVisibleLineCount(prev => {
        if (prev < currentData.lines.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [isLoading, currentData.lines.length]);

  const handleCommandSwitch = (cmd: CliCommand) => {
    playClickSound();
    setActiveCommand(cmd);
  };

  const handleCopyCommand = () => {
    playSuccessSound();
    navigator.clipboard.writeText(currentData.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRestart = () => {
    playClickSound();
    setRunKey(prev => prev + 1);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#101010] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Parallax */}
        <ScrollParallaxText speed={16}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#D5380C] text-[#FAF6EE] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#101010]">
              <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
              <span>AUTHENTIC CLI TERMINAL RUNTIME</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] uppercase tracking-tight">
              REAL TERMINAL TELEMETRY.
            </h2>
            <p className="text-[#E6D5BD]/75 text-xs sm:text-sm mt-2 font-sans">
              Exact console execution in signature Burnt Orange & Warm Ivory. No bloated logs—just pure developer signal.
            </p>
          </div>
        </ScrollParallaxText>

        {/* Real Terminal Container */}
        <div className="rounded-3xl bg-[#0C0C0C] border-2 border-white/15 shadow-[10px_10px_0px_#101010] overflow-hidden hover:border-[#D5380C] transition-all duration-300">
          
          {/* Windows / macOS PowerShell Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#141414] border-b border-white/10 gap-3 select-none">
            
            {/* Window Controls (Red/Orange, Gold, Ivory) */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#D5380C] cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-[#F1B333] cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-[#FAF6EE] cursor-pointer" />
              <span className="ml-3 font-mono text-xs text-[#FAF6EE]/80 font-bold hidden sm:inline">
                PowerShell — D:\deploy mcp
              </span>
            </div>

            {/* Quick Command Selector Chips */}
            <div className="flex items-center gap-1.5 bg-[#0C0C0C] p-1 rounded-full border border-white/10 font-mono text-xs">
              {(['setup', 'check', 'deploy'] as const).map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleCommandSwitch(cmd)}
                  className={`px-3 py-1 rounded-full font-bold uppercase transition-all cursor-pointer ${
                    activeCommand === cmd
                      ? 'bg-[#D5380C] text-[#FAF6EE] shadow-sm'
                      : 'text-[#E6D5B0]/60 hover:text-[#FAF6EE]'
                  }`}
                >
                  npx {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Actions (Copy, Restart) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCommand}
                className="px-3 py-1 rounded-full bg-[#1A1A1A] border border-white/10 hover:border-[#D5380C] text-[#FAF6EE] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Copy CLI command"
              >
                {copied ? <Check className="w-3 h-3 text-[#0C9367]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'COPIED' : 'COPY CMD'}</span>
              </button>

              <button
                onClick={handleRestart}
                className="p-1.5 rounded-full bg-[#1A1A1A] border border-white/10 hover:border-[#D5380C] text-[#FAF6EE] text-xs transition-colors cursor-pointer"
                title="Re-run terminal sequence"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Real Terminal Screen Body */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-[13px] bg-[#0A0A0A] space-y-3.5 select-text min-h-[380px] overflow-x-auto leading-relaxed">
            
            {/* Always Display Command Prompt First */}
            <div className="flex items-center gap-2 text-[#FAF6EE] font-bold pb-1">
              <span className="text-[#D5380C] select-none">PS D:\deploy mcp&gt;</span>
              <span className="text-[#F1B333]">{currentData.command}</span>
            </div>

            {/* Loading Screen and Animated Dots */}
            {isLoading && (
              <div className="my-4 p-5 rounded-2xl bg-[#121212] border-2 border-[#D5380C]/40 shadow-[6px_6px_0px_#101010] space-y-4 select-none animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5 text-[#FAF6EE]">
                    <span className="text-[#D5380C] text-base font-bold select-none inline-block w-4 text-center">
                      {SPINNER_CHARS[spinnerIndex]}
                    </span>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#FAF6EE]">
                      INITIALIZING DEPLOY MCP // {activeCommand.toUpperCase()}
                    </span>
                    <span className="text-[#D5380C] font-black text-sm tracking-widest inline-block w-6">
                      {'.'.repeat(dotCount)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-ping" />
                    <span className="text-xs font-mono font-bold text-[#F1B333]">
                      {loadingProgress}% COMPLETE
                    </span>
                  </div>
                </div>

                {/* Cyberpunk Gradient Progress Bar */}
                <div className="w-full bg-[#181818] h-2.5 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#D5380C] via-[#F1B333] to-[#FAF6EE] transition-all duration-300 rounded-full"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>

                {/* Step-by-Step Task List with Animated Loading Dots */}
                <div className="space-y-2 pt-1 text-xs">
                  {currentLoadingTasks.map((task, tIdx) => {
                    const isCompleted = tIdx < loadingStep;
                    const isCurrent = tIdx === loadingStep;
                    return (
                      <div
                        key={tIdx}
                        className={`flex items-center justify-between px-3.5 py-2 rounded-xl border transition-all ${
                          isCurrent
                            ? 'bg-[#181818] border-[#D5380C] text-[#FAF6EE]'
                            : isCompleted
                            ? 'bg-[#141414] border-white/10 text-[#E6D5B0]/80'
                            : 'bg-transparent border-transparent text-white/30'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {isCompleted ? (
                            <Check className="w-3.5 h-3.5 text-[#0C9367]" />
                          ) : isCurrent ? (
                            <span className="text-[#D5380C] font-black text-sm">●</span>
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-white/20 inline-block" />
                          )}
                          <span className={isCurrent ? 'font-bold' : ''}>
                            {task}
                            {isCurrent && (
                              <span className="text-[#D5380C] ml-1.5 font-bold tracking-widest">
                                {'.'.repeat(dotCount)}
                              </span>
                            )}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono shrink-0">
                          {isCompleted ? (
                            <span className="text-[#0C9367] font-bold">[DONE]</span>
                          ) : isCurrent ? (
                            <span className="text-[#F1B333] font-bold">[IN PROGRESS]</span>
                          ) : (
                            <span className="text-white/30">[QUEUED]</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* When Loading Completes, Render Completed Status & Telemetry Lines */}
            {!isLoading && (
              <>
                <div className="flex items-center gap-2 text-xs font-mono text-[#0C9367] font-bold py-1 select-none animate-fadeIn">
                  <span>✔</span>
                  <span>INITIALIZATION COMPLETED (1.5s)</span>
                  <span className="text-white/30">•</span>
                  <span className="text-[#FAF6EE]/70">ALL VERIFIED TELEMETRY READY</span>
                </div>

                {currentData.lines.slice(1, visibleLineCount + 1).map((line, idx) => {

              // Brand Pixel/ASCII Logo (Clean, Exact Brand Orange)
              if (line.type === 'logo') {
                return (
                  <div key={idx} className="py-2 select-none animate-fadeIn">
                    <pre className="font-mono font-black text-xs sm:text-sm text-[#D5380C] leading-[1.15] tracking-tighter">
{`  ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗    ███╗   ███╗  ██████╗  ██████╗ 
  ██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝    ████╗ ████║ ██╔════╝  ██╔══██╗
  ██║  ██║█████╗  ██████╔╝██║     ██║   ██║ ╚████╔╝     ██╔████╔██║ ██║       ██████╔╝
  ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║   ██║  ╚██╔╝      ██║╚██╔╝██║ ██║       ██╔═══╝ 
  ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║       ██║ ╚═╝ ██║ ╚██████╗  ██║     
  ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝       ╚═╝     ╚═╝  ╚═════╝  ╚═╝     `}
                    </pre>
                  </div>
                );
              }

              // Explanatory Subheader
              if (line.type === 'meta') {
                return (
                  <div key={idx} className="text-[#E6D5B0]/90 space-y-1 py-1 animate-fadeIn">
                    <p>
                      <strong className="text-[#D5380C]">Deploy MCP</strong> connects your AI assistant (
                      <span className="text-[#F1B333]">Claude</span> /{' '}
                      <span className="text-[#FAF6EE]">Cursor</span> /{' '}
                      <span className="text-[#D5380C]">Antigravity</span>) directly to
                    </p>
                    <p className="text-[#FAF6EE] font-bold">
                      {line.subtext || 'Vercel — zero server costs, environment syncing, and auto-diagnostics handled.'}
                    </p>
                  </div>
                );
              }

              // Divider Line
              if (line.type === 'divider') {
                return (
                  <div key={idx} className="text-white/20 select-none py-0.5">
                    {'─'.repeat(72)}
                  </div>
                );
              }

              // Status Bullet Line
              if (line.type === 'status') {
                return (
                  <div key={idx} className="flex items-start gap-2.5 text-[#E6D5B0] animate-fadeIn">
                    <span className="text-[#D5380C] select-none">•</span>
                    <span>{line.text}</span>
                  </div>
                );
              }

              // Success Bullet Line
              if (line.type === 'success') {
                return (
                  <div key={idx} className="flex items-start gap-2 text-[#0C9367] font-bold animate-fadeIn">
                    <span>{line.text}</span>
                  </div>
                );
              }

              // Live URL Card
              if (line.type === 'link') {
                return (
                  <div key={idx} className="mt-4 p-4 rounded-2xl bg-[#141414] border-2 border-[#D5380C] flex flex-wrap items-center justify-between gap-3 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0C9367] animate-pulse" />
                      <span className="text-xs text-white/50">DEPLOYMENT LIVE:</span>
                      <a
                        href={line.text}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#FAF6EE] hover:text-[#D5380C] underline flex items-center gap-1"
                      >
                        <span>{line.text}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <span className="px-2.5 py-0.5 rounded bg-[#0C9367]/20 border border-[#0C9367] text-[#0C9367] text-[10px] font-bold">
                      200 OK • ANYCAST READY
                    </span>
                  </div>
                );
              }

              return null;
            })}
              </>
            )}

            {/* Blinking Terminal Cursor */}
            <div className="flex items-center gap-2 pt-2 text-[#D5380C]">
              <span className="select-none font-bold">PS D:\deploy mcp&gt;</span>
              <span className="w-2 h-4 bg-[#D5380C] animate-pulse" />
            </div>

          </div>

          {/* Terminal Bottom Status Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#121212] border-t border-white/10 text-xs font-mono text-[#E6D5B0]/70 select-none">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D5380C]" />
                <span>ISOLATION: <strong className="text-[#FAF6EE]">LOCAL ENCLAVE</strong></span>
              </span>
              <span className="hidden sm:inline">TRANSPORT: <strong className="text-[#F1B333]">STDIO RPC</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0C9367]" />
              <span className="font-bold text-[#FAF6EE]">NODE LTS v20+</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
