import React, { useState } from 'react';
import { LogoMark } from '../components/LogoMark';
import {
  IconTerminal,
  IconArrowLeft,
  IconBook,
  IconAlertTriangle,
  IconCheck,
  IconCopy,
  IconRefresh,
} from '../components/CustomIcons';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';
import { triggerToast } from '../components/ToastNotification';

interface ErrorPageProps {
  onBackToHome: () => void;
  onOpenDocs?: () => void;
  initialCode?: string;
}

interface ErrorDetails {
  code: string;
  name: string;
  category: 'CLIENT' | 'SERVER' | 'NEGOTIATION';
  summary: string;
  diagnostic: string;
  remedy: string;
}

const ERROR_REGISTRY: Record<string, ErrorDetails> = {
  '400': {
    code: '400',
    name: 'BAD REQUEST',
    category: 'CLIENT',
    summary: 'The client deployment payload or JSON configuration contains syntax anomalies.',
    diagnostic: 'ERR_INVALID_BODY: MCP tool input validation rejected payload due to missing root directory.',
    remedy: 'Verify package.json path and schema arguments before dispatching smart_deploy().',
  },
  '401': {
    code: '401',
    name: 'UNAUTHORIZED',
    category: 'CLIENT',
    summary: 'No valid Vercel Personal Access Token was supplied in the local vault.',
    diagnostic: 'ERR_AUTH_MISSING: HTTP 401 received from api.vercel.com/v13/deployments.',
    remedy: 'Run "npx deploymcp setup" to store your zero-trust scoped token in local storage.',
  },
  '403': {
    code: '403',
    name: 'FORBIDDEN',
    category: 'CLIENT',
    summary: 'Access denied: Token lacks scope permissions for this target team project.',
    diagnostic: 'ERR_INSUFFICIENT_SCOPE: Scoped token cannot mutate project settings on target team.',
    remedy: 'Select an authorized team ID or grant project admin permissions in Vercel settings.',
  },
  '404': {
    code: '404',
    name: 'ROUTE NOT FOUND',
    category: 'CLIENT',
    summary: 'The requested deployment path or edge enclave resource does not exist.',
    diagnostic: 'ERR_EDGE_NOT_FOUND: Path resolution failed in local router or cloud manifest.',
    remedy: 'Verify your custom domain CNAME record or check your latest deployment URL.',
  },
  '408': {
    code: '408',
    name: 'REQUEST TIMEOUT',
    category: 'CLIENT',
    summary: 'The AI model connection socket closed before the deployment handshake completed.',
    diagnostic: 'ERR_SOCKET_TIMEOUT: Model Context Protocol transport exceeded 30000ms threshold.',
    remedy: 'Check local network connectivity and ensure AI editor host socket is responsive.',
  },
  '429': {
    code: '429',
    name: 'TOO MANY REQUESTS',
    category: 'CLIENT',
    summary: 'Vercel API rate limit reached: Too many builds initiated simultaneously.',
    diagnostic: 'ERR_RATE_LIMIT_EXCEEDED: 429 Too Many Requests. Retry-After header: 42s.',
    remedy: 'Deploy MCP autonomous backoff active: waiting for quota replenishment window.',
  },
  '500': {
    code: '500',
    name: 'INTERNAL SERVER ERROR',
    category: 'SERVER',
    summary: 'Vercel edge server or local build engine encountered an unhandled exception.',
    diagnostic: 'ERR_BUILD_CRASH: Turbopack compile worker exited with nonzero status code.',
    remedy: 'Inspect next.config.mjs or Vite config for native binary bindings incompatible with edge runtime.',
  },
  '502': {
    code: '502',
    name: 'BAD GATEWAY',
    category: 'SERVER',
    summary: 'Vercel edge proxy received an invalid response from upstream origin build workers.',
    diagnostic: 'ERR_UPSTREAM_BAD_GATEWAY: Downstream container failed TLS handoff on port 443.',
    remedy: 'Trigger atomic redeploy with cached layers bypassed via smart_deploy(forceRedeploy: true).',
  },
  '503': {
    code: '503',
    name: 'SERVICE UNAVAILABLE',
    category: 'SERVER',
    summary: 'The cloud deployment pipeline is temporarily overloaded or undergoing maintenance.',
    diagnostic: 'ERR_SERVICE_CAPACITY: Vercel serverless pool is at peak capacity in selected region.',
    remedy: 'Switch deployment region in deploymcp config or retry in 60 seconds.',
  },
  '504': {
    code: '504',
    name: 'GATEWAY TIMEOUT',
    category: 'SERVER',
    summary: 'Edge build worker timed out waiting for static page generation to resolve.',
    diagnostic: 'ERR_SSR_TIMEOUT: Server-side data fetch exceeded max execution duration.',
    remedy: 'Optimize static generation routes or set maxDuration in vercel.json.',
  },
  '506': {
    code: '506',
    name: 'VARIANT ALSO NEGOTIATES',
    category: 'NEGOTIATION',
    summary: 'Content negotiation protocol caught in a circular reference loop on edge headers.',
    diagnostic: 'ERR_CIRCULAR_NEGOTIATION: Multiple variants configured with mutually recursive Accept headers.',
    remedy: 'Check vercel.json headers and rewrites to decouple conflicting content negotiation rules.',
  },
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
  onBackToHome,
  onOpenDocs,
  initialCode = '404',
}) => {
  const [selectedCode, setSelectedCode] = useState<string>(initialCode);
  const [copiedReport, setCopiedReport] = useState<boolean>(false);

  const currentError = ERROR_REGISTRY[selectedCode] || ERROR_REGISTRY['404'];

  const handleSelectCode = (code: string) => {
    playClickSound();
    setSelectedCode(code);
    triggerToast(`Inspecting HTTP ${code} ${ERROR_REGISTRY[code]?.name}`, 'info');
  };

  const handleCopyReport = () => {
    playSuccessSound();
    const report = [
      `DEPLOY MCP DIAGNOSTIC REPORT`,
      `HTTP Status: ${currentError.code} ${currentError.name}`,
      `Category: ${currentError.category}`,
      `Summary: ${currentError.summary}`,
      `Trace: ${currentError.diagnostic}`,
      `Autonomous Remedy: ${currentError.remedy}`,
      `Timestamp: ${new Date().toISOString()}`,
      `Documentation: https://github.com/Tusharjain-19/deploy-mcp#readme`,
    ].join('\n');

    navigator.clipboard.writeText(report);
    setCopiedReport(true);
    triggerToast(`HTTP ${currentError.code} diagnostic report copied!`, 'success');
    setTimeout(() => setCopiedReport(false), 2000);
  };

  const codeList = Object.keys(ERROR_REGISTRY);

  return (
    <div className="min-h-screen bg-[#000000] text-[#F6E3B8] flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden font-sans select-none">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Top Header Bar */}
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#F6E3B8]/15 relative z-10">
        <button
          onClick={() => { playClickSound(); onBackToHome(); }}
          className="flex items-center gap-2 cursor-pointer text-left"
          title="Return to Home"
        >
          <LogoMark size="sm" showBadge={false} />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => { playClickSound(); onBackToHome(); }}
            className="px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#F6E3B8]/20 hover:border-[#E7BA05] text-[#F6E3B8] hover:text-[#E7BA05] text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <IconArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl w-full mx-auto my-auto py-8 space-y-8 relative z-10">
        
        {/* Error Code Switcher Tabs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#F6E3B8]/70">
            <span className="font-bold uppercase tracking-wider">HTTP ERROR SUITE EXPLORER</span>
            <span className="text-[#E7BA05] font-bold">11 ERROR CODES SUPPORTED</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20">
            {codeList.map((code) => {
              const isSelected = code === selectedCode;
              return (
                <button
                  key={code}
                  onClick={() => handleSelectCode(code)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#E7BA05] text-[#000000] font-black shadow-md scale-105'
                      : 'bg-[#000000] text-[#F6E3B8]/70 hover:text-[#E7BA05] hover:bg-[#0a0a0a] border border-[#F6E3B8]/10'
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>

        {/* Big Geometric Status Hero */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#000000] border border-[#906342] text-[#906342] text-xs font-mono font-bold uppercase tracking-wider">
            <IconAlertTriangle className="w-3.5 h-3.5 text-[#906342]" />
            <span>HTTP STATUS {currentError.code} // {currentError.category} FAULT</span>
          </div>

          <h1 className="font-syne font-black text-6xl sm:text-8xl lg:text-9xl text-[#F6E3B8] tracking-tight leading-none uppercase">
            {currentError.code}
          </h1>

          <p className="font-syne font-black text-xl sm:text-2xl lg:text-3xl text-[#E7BA05] uppercase tracking-tight">
            {currentError.name}
          </p>

          <p className="text-sm sm:text-base text-[#F6E3B8]/85 max-w-xl mx-auto leading-relaxed font-sans">
            {currentError.summary}
          </p>
        </div>

        {/* Interactive Terminal Diagnostic Card */}
        <div className="p-6 rounded-3xl bg-[#000000] border-2 border-[#F6E3B8]/20 text-left font-mono text-xs space-y-4 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#F6E3B8]/15 gap-2 text-[11px] text-[#F6E3B8]/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E7BA05] animate-pulse" />
              <span className="text-[#F6E3B8] font-bold">DEPLOY MCP AUTONOMOUS RECOVERY PROTOCOL</span>
            </div>
            <div className="flex items-center gap-2">
              <IconTerminal className="w-3.5 h-3.5 text-[#E7BA05]" />
              <span>TERMINAL DIAGNOSTIC</span>
            </div>
          </div>

          <div className="space-y-2 text-[#F6E3B8]/90 font-mono text-xs">
            <p className="text-[#F6E3B8]/50">$ deploymcp doctor --analyze-code {currentError.code}</p>
            <div className="p-3.5 rounded-xl bg-[#000000] border border-[#906342]/60 text-[#F6E3B8] space-y-1">
              <p className="text-[#906342] font-bold flex items-center gap-1.5">
                <span>[ERROR TRACE]</span>
                <span>{currentError.diagnostic}</span>
              </p>
              <p className="text-[#6B9E5A] font-bold flex items-center gap-1.5 pt-1">
                <span>[SUGGESTED ACTION]</span>
                <span>{currentError.remedy}</span>
              </p>
            </div>
            <p className="text-[#F6E3B8]/70 text-[11px]">
              Deploy MCP self-healing engine connects directly to Vercel REST API with zero token leaks and zero intermediary servers.
            </p>
          </div>

          {/* Action Row inside Terminal Card */}
          <div className="pt-3 border-t border-[#F6E3B8]/15 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCopyReport}
              className="px-4 py-2 rounded-xl bg-[#000000] hover:bg-[#E7BA05]/15 border border-[#F6E3B8]/20 text-[#F6E3B8] text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              {copiedReport ? <IconCheck className="w-3.5 h-3.5 text-[#6B9E5A]" /> : <IconCopy className="w-3.5 h-3.5 text-[#E7BA05]" />}
              <span>{copiedReport ? 'REPORT COPIED' : 'COPY DIAGNOSTIC REPORT'}</span>
            </button>

            <span className="text-[11px] text-[#F6E3B8]/40 font-mono">
              STATUS: READY FOR SELF-REPAIR
            </span>
          </div>
        </div>

        {/* Global Action Navigation Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs">
          <button
            onClick={() => { playClickSound(); onBackToHome(); }}
            className="px-6 py-3.5 rounded-full bg-[#E7BA05] hover:bg-[#F6E3B8] text-[#000000] font-sans font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg active:scale-95 cursor-pointer"
          >
            <IconArrowLeft className="w-4 h-4 text-[#000000]" />
            <span>RETURN TO OVERVIEW</span>
          </button>

          {onOpenDocs && (
            <button
              onClick={() => { playClickSound(); onOpenDocs(); }}
              className="px-6 py-3.5 rounded-full bg-[#000000] hover:bg-[#E7BA05]/15 text-[#F6E3B8] hover:text-[#E7BA05] font-bold uppercase tracking-wider border border-[#F6E3B8]/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <IconBook className="w-4 h-4 text-[#E7BA05]" />
              <span>VIEW DOCUMENTATION</span>
            </button>
          )}

          <a
            href="https://tusharjain.in/contact"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="px-6 py-3.5 rounded-full bg-[#000000] hover:bg-[#E7BA05]/15 text-[#F6E3B8] hover:text-[#E7BA05] font-bold uppercase tracking-wider border border-[#F6E3B8]/20 transition-all flex items-center gap-2"
          >
            <span>REPORT ANOMALY</span>
          </a>
        </div>

      </div>

      {/* Footer Note */}
      <div className="max-w-5xl w-full mx-auto pt-6 border-t border-[#F6E3B8]/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#F6E3B8]/50 gap-2 relative z-10">
        <div>© 2026 DEPLOY MCP • ARCHITECTED BY TUSHAR JAIN</div>
        <div>
          CONTACT: <a href="https://tusharjain.in/contact" target="_blank" rel="noopener noreferrer" className="text-[#E7BA05] hover:underline">tusharjain.in/contact</a>
        </div>
      </div>

    </div>
  );
};
