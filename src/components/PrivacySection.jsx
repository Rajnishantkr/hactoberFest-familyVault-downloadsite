import React from "react";
import { ArrowDown, Check, X } from "lucide-react";

export default function PrivacySection() {
  const comparison = [
    {
      aspect: "File Location",
      cloud: "Remote vendor data centers",
      familyVault: "Your local hard drive (%APPDATA%)"
    },
    {
      aspect: "OCR Processing",
      cloud: "Images sent to cloud vision endpoints",
      familyVault: "Local Tesseract OCR engine on CPU"
    },
    {
      aspect: "AI Understanding",
      cloud: "Prompts sent to 3rd-party LLM APIs",
      familyVault: "On-device Ollama quantized models"
    },
    {
      aspect: "Internet Dependency",
      cloud: "Continuous connection required",
      familyVault: "Works fully offline"
    },
    {
      aspect: "Telemetry & Logs",
      cloud: "User tracking and access analytics",
      familyVault: "Zero tracking, zero analytics"
    },
    {
      aspect: "Access Control",
      cloud: "Subject to remote account lockouts",
      familyVault: "You hold the physical storage and keys"
    }
  ];

  return (
    <section id="privacy" className="py-24 bg-[#1F4D3A] text-[#F7F6F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F7F6F2]">
            Your documents don't need the cloud.
          </h2>
          <p className="mt-3 text-base text-[#DCE9E1] leading-relaxed">
            Family Vault is designed to process your documents locally. OCR runs on your device,
            AI processing runs locally through Ollama, and your documents remain stored locally.
          </p>
        </div>

        {/* Sophisticated Local Flow Architecture Visual */}
        <div className="rounded-xl border border-[#DCE9E1]/25 bg-[#163B2D] p-6 sm:p-10 mb-16 shadow-sm">
          <div className="text-left mb-6 pb-3 border-b border-[#DCE9E1]/20">
            <span className="text-xs font-mono uppercase tracking-wider text-[#DCE9E1] font-medium">
              Architecture Overview
            </span>
          </div>

          {/* 4-Step Technical Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-lg bg-[#1F4D3A] border border-[#DCE9E1]/20 space-y-2">
              <div className="text-[11px] font-mono text-[#DCE9E1]">01 / INPUT</div>
              <h3 className="text-sm font-semibold text-[#F7F6F2]">Local Device</h3>
              <p className="text-xs text-[#DCE9E1] leading-relaxed">
                Documents are read directly from your local filesystem (%USERPROFILE%).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#1F4D3A] border border-[#DCE9E1]/20 space-y-2">
              <div className="text-[11px] font-mono text-[#DCE9E1]">02 / OCR</div>
              <h3 className="text-sm font-semibold text-[#F7F6F2]">Tesseract OCR</h3>
              <p className="text-xs text-[#DCE9E1] leading-relaxed">
                Native binary executes on host CPU to extract raw UTF-8 text from raster pixels.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#1F4D3A] border border-[#DCE9E1]/20 space-y-2">
              <div className="text-[11px] font-mono text-[#DCE9E1]">03 / PARSING</div>
              <h3 className="text-sm font-semibold text-[#F7F6F2]">Ollama Local AI</h3>
              <p className="text-xs text-[#DCE9E1] leading-relaxed">
                On-device language models identify entities, validity dates, and categories.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#1F4D3A] border border-[#DCE9E1]/20 space-y-2">
              <div className="text-[11px] font-mono text-[#DCE9E1]">04 / STORAGE</div>
              <h3 className="text-sm font-semibold text-[#F7F6F2]">Local Storage</h3>
              <p className="text-xs text-[#DCE9E1] leading-relaxed">
                Indexed in an offline SQLite database on your SSD under your exclusive control.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Comparison Table */}
        <div className="max-w-4xl mx-auto text-left">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#F7F6F2]">
              Technical Comparison
            </h3>
            <p className="text-xs text-[#DCE9E1] mt-1">
              Defensible architectural differences between cloud services and local-first software.
            </p>
          </div>

          <div className="rounded-xl border border-[#DCE9E1]/25 bg-[#163B2D] overflow-hidden">
            <div className="grid grid-cols-12 bg-[#123024] border-b border-[#DCE9E1]/20 p-3.5 text-xs font-mono text-[#DCE9E1]">
              <div className="col-span-4 sm:col-span-3">Dimension</div>
              <div className="col-span-4 sm:col-span-4">Cloud Services</div>
              <div className="col-span-4 sm:col-span-5 text-[#F7F6F2] font-semibold">Family Vault</div>
            </div>

            <div className="divide-y divide-[#DCE9E1]/15 text-xs">
              {comparison.map((c, i) => (
                <div key={i} className="grid grid-cols-12 p-3.5 items-center">
                  <div className="col-span-4 sm:col-span-3 font-medium text-[#F7F6F2]">
                    {c.aspect}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-[#DCE9E1] pr-2">
                    {c.cloud}
                  </div>
                  <div className="col-span-4 sm:col-span-5 text-[#F7F6F2] font-medium">
                    {c.familyVault}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
