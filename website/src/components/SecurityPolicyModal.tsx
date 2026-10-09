import React from 'react';
import { X, Shield, Lock, CheckCircle2, Server, Key, EyeOff } from 'lucide-react';

interface SecurityPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityPolicyModal: React.FC<SecurityPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#141414] border-2 border-[#E6D5BD]/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden shadow-[#D5360C]/20">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6D5BD]/15 bg-[#101010] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D5360C] border border-[#E6D5BD]/40 flex items-center justify-center text-[#E6D5BD]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#E6D5BD] tracking-tight uppercase">Deploy MCP Security Policy</h2>
              <p className="text-xs text-[#E6D5BD]/70 font-mono">Zero-Trust Isolation & Local Security Architecture</p>
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
              <h3 className="font-black text-[#E6D5BD] text-sm uppercase">Core Guarantee: 100% Secret Isolation</h3>
              <p className="text-xs text-[#E6D5BD]/90 mt-1">
                Your environment variables, API secret tokens, and cloud access credentials never touch third-party AI models or LLM prompt context windows.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#D5360C]" />
              1. Local Machine Boundary
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              Deploy MCP runs entirely as a local process on your computer (`localhost`). All operations (framework detection, local dry-run build validation, secret parsing) execute locally.
            </p>

            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-[#D5360C]" />
              2. Key-Only Parsing Algorithm
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              When syncing environment variables (`.env`), Deploy MCP extracts key names (e.g. `DATABASE_URL`) to report status to the AI assistant. Actual values are held in memory and posted directly to Vercel via TLS-encrypted REST endpoints.
            </p>

            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Key className="w-4 h-4 text-[#D5360C]" />
              3. Secure Token Storage & Permissions
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              Your Vercel Personal Access Token is saved locally at <code className="text-[#E6D5BD] font-mono bg-black px-2 py-0.5 rounded border border-[#E6D5BD]/20">~/.deploy-mcp/config.json</code> with strict filesystem permissions.
            </p>

            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Server className="w-4 h-4 text-[#D5360C]" />
              4. Direct Vercel Communication
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              Deploy MCP communicates directly with official Vercel REST API endpoints (`https://api.vercel.com`). No intermediary proxy servers or telemetry relay servers are involved.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E6D5BD]/10 text-xs text-[#E6D5BD]/50 text-center font-mono">
            LAST UPDATED: 2026 • DEPLOY MCP ZERO-TRUST RUNTIME
          </div>

        </div>

      </div>
    </div>
  );
};
