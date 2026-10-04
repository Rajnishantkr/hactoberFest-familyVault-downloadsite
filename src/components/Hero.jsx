import React, { useState } from "react";
import { Download, ArrowRight, Search, Check } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export default function Hero() {
  const [selectedDocId, setSelectedDocId] = useState("doc-aadhaar");
  const [searchQuery, setSearchQuery] = useState("");

  const sampleDocs = [
    {
      id: "doc-aadhaar",
      title: "Aadhaar Card — Akshay",
      category: "Identity",
      member: "You",
      size: "1.4 MB",
      date: "14 Aug 2026",
      extracted: {
        "Full Name": "Akshay",
        "Document Type": "National ID (UIDAI)",
        "DOB": "24/08/1994",
        "Address": "Bellandur, Bengaluru 560103"
      }
    },
    {
      id: "doc-health",
      title: "Family Health Insurance Policy",
      category: "Insurance",
      member: "Family Floater",
      size: "3.8 MB",
      date: "02 Jul 2026",
      extracted: {
        "Policy No": "POL-STAR-778921-2026",
        "Insurer": "Star Health & Allied",
        "Sum Insured": "INR 15,00,000",
        "Valid Until": "30 Jun 2027"
      }
    },
    {
      id: "doc-passport",
      title: "Passport — Akshay",
      category: "Identity",
      member: "Father",
      size: "2.1 MB",
      date: "18 May 2026",
      extracted: {
        "Passport No": "Z5489210",
        "Country": "IND",
        "Expiry": "15 Mar 2027",
        "Status": "Renewal window opens soon"
      }
    }
  ];

  const selectedDoc = sampleDocs.find((d) => d.id === selectedDocId) || sampleDocs[0];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#F7F6F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171A18] leading-[1.12]">
          Your family's documents.
          <br />
          Your control.
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-base sm:text-lg text-[#626862] leading-relaxed max-w-2xl mx-auto font-normal">
          {SITE_CONFIG.subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F4D3A] hover:bg-[#163B2D] text-[#F7F6F2] font-medium text-sm transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Family Vault</span>
          </a>

          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#ECECE7] hover:bg-[#E4E4DE] text-[#171A18] font-medium text-sm border border-[#D8D9D3] transition-colors"
          >
            <span>See how it works</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#626862]" />
          </a>
        </div>

        {/* Quiet Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-[#D8D9D3] max-w-lg mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-[#626862] font-mono tracking-wide">
            <span>OFFLINE FIRST</span>
            <span className="text-[#D8D9D3]">/</span>
            <span>LOCAL AI</span>
            <span className="text-[#D8D9D3]">/</span>
            <span>PRIVATE BY DESIGN</span>
          </div>
          <p className="mt-2 text-xs text-[#626862]">
            Your documents stay on your device.
          </p>
        </div>

        {/* Desktop Application Window Mockup */}
        <div className="mt-12 text-left max-w-5xl mx-auto">
          <div className="rounded-xl bg-[#F7F6F2] border border-[#D8D9D3] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Native Window Title Bar */}
            <div className="px-4 py-2.5 bg-[#ECECE7] border-b border-[#D8D9D3] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D8D9D3]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#D8D9D3]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#D8D9D3]"></div>
                <span className="ml-3 text-xs text-[#626862] font-normal">
                  Family Vault — Local Vault
                </span>
              </div>
            </div>

            {/* Desktop App Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px] text-xs">
              {/* Sidebar */}
              <div className="md:col-span-3 bg-[#ECECE7] border-r border-[#D8D9D3] p-3 space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#626862]" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F7F6F2] border border-[#D8D9D3] rounded-md py-1.5 pl-8 pr-2 text-xs text-[#171A18] placeholder-[#626862] focus:outline-none focus:border-[#1F4D3A]"
                  />
                </div>

                {/* Family Members list */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#626862] font-mono px-2 mb-1.5 font-medium">
                    Family
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { name: "All Documents", count: 14, active: true },
                      { name: "You", count: 5 },
                      { name: "Father", count: 3 },
                      { name: "Mother", count: 3 },
                      { name: "Children", count: 3 }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs cursor-default ${
                          item.active
                            ? "bg-[#DCE9E1] text-[#1F4D3A] font-medium"
                            : "text-[#626862] hover:text-[#171A18] hover:bg-[#E4E4DE]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="text-[10px] font-mono text-[#626862]">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#626862] font-mono px-2 mb-1.5 font-medium">
                    Categories
                  </div>
                  <div className="space-y-0.5 text-[#626862]">
                    <div className="px-2.5 py-1 flex items-center justify-between text-[#171A18]">
                      <span>Identity</span>
                      <span className="text-[10px] font-mono text-[#626862]">4</span>
                    </div>
                    <div className="px-2.5 py-1 flex items-center justify-between">
                      <span>Insurance</span>
                      <span className="text-[10px] font-mono text-[#626862]">3</span>
                    </div>
                    <div className="px-2.5 py-1 flex items-center justify-between">
                      <span>Medical</span>
                      <span className="text-[10px] font-mono text-[#626862]">2</span>
                    </div>
                    <div className="px-2.5 py-1 flex items-center justify-between">
                      <span>Property & Tax</span>
                      <span className="text-[10px] font-mono text-[#626862]">5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document List */}
              <div className="md:col-span-5 bg-[#F7F6F2] border-r border-[#D8D9D3] p-3 space-y-2">
                <div className="text-[11px] font-mono text-[#626862] px-1 pb-1 border-b border-[#D8D9D3] flex justify-between">
                  <span>NAME</span>
                  <span>OWNER</span>
                </div>

                <div className="space-y-1.5">
                  {sampleDocs.map((doc) => {
                    const isSelected = doc.id === selectedDocId;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDocId(doc.id)}
                        className={`p-2.5 rounded-lg cursor-pointer border transition-colors ${
                          isSelected
                            ? "bg-[#FFFFFF] border-[#1F4D3A] shadow-sm text-[#171A18]"
                            : "bg-[#FFFFFF] border-[#D8D9D3] hover:border-[#B5B6AE] text-[#171A18]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium truncate pr-2 text-xs">{doc.title}</span>
                          <span className="text-[10px] font-mono text-[#626862] shrink-0">
                            {doc.member}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-[#626862] font-mono">
                          <span className="text-[#1F4D3A] font-medium">{doc.category}</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inspector Pane */}
              <div className="md:col-span-4 bg-[#ECECE7] p-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="pb-2 border-b border-[#D8D9D3]">
                    <div className="text-[11px] font-mono text-[#626862] uppercase">
                      Document Details
                    </div>
                    <div className="font-medium text-[#171A18] text-sm mt-0.5 truncate">
                      {selectedDoc.title}
                    </div>
                    <div className="text-[11px] text-[#626862] font-mono mt-0.5">
                      {selectedDoc.date}
                    </div>
                  </div>

                  <div className="space-y-2 bg-[#FFFFFF] p-3 rounded-lg border border-[#D8D9D3]">
                    <div className="text-[10px] font-mono text-[#1F4D3A] uppercase font-semibold">
                      Extracted Fields (OCR + Ollama)
                    </div>
                    {Object.entries(selectedDoc.extracted).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center text-[11px] pt-1 border-t border-[#ECECE7]">
                        <span className="text-[#626862]">{k}:</span>
                        <span className="font-mono text-[#171A18] text-right truncate max-w-[140px] font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
