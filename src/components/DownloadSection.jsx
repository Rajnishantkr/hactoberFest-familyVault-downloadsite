import React, { useState } from "react";
import { Download, Copy, Check } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export default function DownloadSection() {
  const [copied, setCopied] = useState(false);
  const win = SITE_CONFIG.download.windows;

  const handleCopy = () => {
    navigator.clipboard?.writeText(win.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" className="py-24 bg-[#1F4D3A] text-[#F7F6F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F7F6F2]">
          Take control of your documents.
        </h2>
        <p className="mt-3 text-sm text-[#DCE9E1] max-w-xl mx-auto leading-relaxed">
          Download Family Vault and keep your family's important documents organized on your own device.
        </p>

        {/* Download Block */}
        <div className="mt-8 p-8 rounded-xl bg-[#163B2D] border border-[#DCE9E1]/25 max-w-lg mx-auto space-y-5 shadow-sm">
          <a
            href={win.url}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F7F6F2] hover:bg-[#ECECE7] text-[#1F4D3A] font-medium text-sm transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 text-[#1F4D3A]" />
            <span>Download Family Vault</span>
          </a>

          {/* Specs */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-[#DCE9E1]">
            <span className="text-[#F7F6F2] font-medium">{win.os}</span>
            <span>•</span>
            <span>{win.architecture}</span>
            <span>•</span>
            <span>Version {SITE_CONFIG.version}</span>
            <span>•</span>
            <span>{win.size}</span>
          </div>

          {/* SHA-256 */}
          <div className="pt-4 border-t border-[#DCE9E1]/20 text-left space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#DCE9E1]">
              <span>SHA-256 CHECKSUM</span>
              <button
                onClick={handleCopy}
                className="hover:text-[#F7F6F2] transition-colors flex items-center gap-1"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[#F7F6F2]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-2 rounded bg-[#123024] border border-[#DCE9E1]/20 text-[10px] font-mono text-[#DCE9E1] break-all select-all">
              {win.sha256}
            </div>
          </div>
        </div>

        {/* Platform Status */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left text-xs">
          <div className="p-3.5 rounded-lg bg-[#163B2D] border border-[#DCE9E1]/25">
            <div className="font-medium text-[#F7F6F2]">macOS</div>
            <div className="text-[11px] text-[#DCE9E1] mt-0.5">
              In development. Apple Silicon & Intel builds scheduled next.
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#163B2D] border border-[#DCE9E1]/25">
            <div className="font-medium text-[#F7F6F2]">Linux</div>
            <div className="text-[11px] text-[#DCE9E1] mt-0.5">
              In development. AppImage & deb packages planned.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
