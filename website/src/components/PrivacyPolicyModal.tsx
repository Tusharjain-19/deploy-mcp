import React from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, Eye, Database, Globe } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#141414] border-2 border-[#E6D5BD]/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden shadow-[#D5360C]/20">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6D5BD]/15 bg-[#101010] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D5360C] border border-[#E6D5BD]/40 flex items-center justify-center text-[#E6D5BD]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#E6D5BD] tracking-tight uppercase">Deploy MCP Privacy Policy</h2>
              <p className="text-xs text-[#E6D5BD]/70 font-mono">Zero Telemetry & 100% Client-Side Privacy Guarantee</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#181818] hover:bg-[#D5360C] border border-[#E6D5BD]/20 text-[#E6D5BD] flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-sans text-[#E6D5BD] text-sm leading-relaxed space-y-6 bg-[#141414]">
          
          <div className="p-5 rounded-2xl bg-[#D5360C] text-[#E6D5BD] border border-[#E6D5BD]/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E6D5BD] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-[#E6D5BD] text-sm uppercase">Zero Telemetry Promise</h3>
              <p className="text-xs text-[#E6D5BD]/90 mt-1">
                Deploy MCP collects ZERO personal data, ZERO usage analytics, and ZERO telemetry tracking. Everything runs 100% locally on your machine.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#D5360C]" />
              1. What Information Is Processed?
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              Deploy MCP only processes data necessary to execute build validation and Vercel deployments: project directory files, framework signatures (`package.json`), and environment variable keys.
            </p>

            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Database className="w-4 h-4 text-[#D5360C]" />
              2. Where Is Your Data Stored?
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              All configuration parameters are stored locally on your machine under <code className="text-[#E6D5BD] font-mono bg-black px-2 py-0.5 rounded border border-[#E6D5BD]/20">~/.deploy-mcp/config.json</code>. No data is ever transmitted to or stored on external servers.
            </p>

            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#D5360C]" />
              3. Third-Party Services
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              The only external service Deploy MCP connects with is official Vercel REST API endpoints (`api.vercel.com`) using your own personal access token.
            </p>

            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#D5360C]" />
              4. Open Source Auditability
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              Deploy MCP is 100% free open-source software licensed under the MIT License. Anyone can inspect, audit, or verify the source code on GitHub at any time.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E6D5BD]/10 text-xs text-[#E6D5BD]/50 text-center font-mono">
            LAST UPDATED: 2026 • DEPLOY MCP ZERO TELEMETRY RUNTIME
          </div>

        </div>

      </div>
    </div>
  );
};
