import React from "react";
import { SITE_CONFIG } from "../config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ECECE7] border-t border-[#D8D9D3] text-[#626862] text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#D8D9D3]">
          <div className="text-left">
            <div className="font-medium text-sm text-[#171A18]">{SITE_CONFIG.name}</div>
            <div className="text-[#626862] mt-0.5">Private. Offline. Yours.</div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-[#626862]">
            <a href="#demo" className="hover:text-[#171A18] transition-colors">
              Product
            </a>
            <a href="#privacy" className="hover:text-[#171A18] transition-colors">
              Privacy
            </a>
            <a href="#features" className="hover:text-[#171A18] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[#171A18] transition-colors">
              How It Works
            </a>
            <a href="#download" className="hover:text-[#171A18] transition-colors">
              Download
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#171A18] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#626862]">
          <div>
            © {currentYear} {SITE_CONFIG.name}.
          </div>
         
        </div>
      </div>
    </footer>
  );
}
