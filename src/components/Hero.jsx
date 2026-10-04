import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, ArrowRight, Search } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();
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
    <section className="hero-scene relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Headline */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-[var(--foreground)] leading-[1.12]"
        >
          Your family's documents.
          <br />
          Your control.
        </motion.h1>

        {/* Subheading */}
        <motion.p initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.3 }} className="mt-5 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed max-w-2xl mx-auto font-normal">
          {SITE_CONFIG.subheadline}
        </motion.p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--background)] font-medium text-sm transition-colors shadow-sm"
            whileTap={reduceMotion ? undefined : { opacity: 0.88 }}
          >
            <Download className="w-4 h-4" />
            <span>Download Family Vault</span>
          </motion.a>

          <motion.a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[var(--surface-muted)] hover:bg-[var(--surface-muted)] text-[var(--foreground)] font-medium text-sm border border-[var(--border)] transition-colors"
            whileTap={reduceMotion ? undefined : { opacity: 0.88 }}
          >
            <span>See how it works</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--foreground-muted)]" />
          </motion.a>
        </div>

        {/* Quiet Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] max-w-lg mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-[var(--foreground-muted)] font-mono tracking-wide">
            <span>OFFLINE FIRST</span>
            <span className="text-[var(--border)]">/</span>
            <span>LOCAL AI</span>
            <span className="text-[var(--border)]">/</span>
            <span>PRIVATE BY DESIGN</span>
          </div>
          <p className="mt-2 text-xs text-[var(--foreground-muted)]">
            Your documents stay on your device.
          </p>
        </div>

        {/* Desktop Application Window Mockup */}
        <motion.div
          className="mt-12 text-left max-w-5xl mx-auto hero-window-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.42, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-xl bg-[var(--background)] border border-[var(--border)] shadow-sm overflow-hidden">
            {/* Native Window Title Bar */}
            <div className="px-4 py-2.5 bg-[var(--surface-muted)] border-b border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--border)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--border)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--border)]"></div>
                <span className="ml-3 text-xs text-[var(--foreground-muted)] font-normal">
                  Family Vault — Local Vault
                </span>
              </div>
            </div>

            {/* Desktop App Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px] text-xs">
              {/* Sidebar */}
              <div className="md:col-span-3 bg-[var(--surface-muted)] border-r border-[var(--border)] p-3 space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[var(--foreground-muted)]" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md py-1.5 pl-8 pr-2 text-xs text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--brand)]"
                  />
                </div>

                {/* Family Members list */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[var(--foreground-muted)] font-mono px-2 mb-1.5 font-medium">
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
                            ? "bg-[var(--brand-soft)] text-[var(--brand)] font-medium"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="text-[10px] font-mono text-[var(--foreground-muted)]">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[var(--foreground-muted)] font-mono px-2 mb-1.5 font-medium">
                    Categories
                  </div>
                  <div className="space-y-0.5 text-[var(--foreground-muted)]">
                    <div className="px-2.5 py-1 flex items-center justify-between text-[var(--foreground)]">
                      <span>Identity</span>
                      <span className="text-[10px] font-mono text-[var(--foreground-muted)]">4</span>
                    </div>
                    <div className="px-2.5 py-1 flex items-center justify-between">
                      <span>Insurance</span>
                      <span className="text-[10px] font-mono text-[var(--foreground-muted)]">3</span>
                    </div>
                    <div className="px-2.5 py-1 flex items-center justify-between">
                      <span>Medical</span>
                      <span className="text-[10px] font-mono text-[var(--foreground-muted)]">2</span>
                    </div>
                    <div className="px-2.5 py-1 flex items-center justify-between">
                      <span>Property & Tax</span>
                      <span className="text-[10px] font-mono text-[var(--foreground-muted)]">5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document List */}
              <div className="md:col-span-5 bg-[var(--background)] border-r border-[var(--border)] p-3 space-y-2">
                <div className="text-[11px] font-mono text-[var(--foreground-muted)] px-1 pb-1 border-b border-[var(--border)] flex justify-between">
                  <span>NAME</span>
                  <span>OWNER</span>
                </div>

                <div className="space-y-1.5">
                  {sampleDocs.map((doc) => {
                    const isSelected = doc.id === selectedDocId;
                    return (
                      <motion.div
                        key={doc.id}
                        onClick={() => setSelectedDocId(doc.id)}
                        className={`p-2.5 rounded-lg cursor-pointer border transition-colors ${
                          isSelected
                            ? "bg-[var(--surface)] border-[var(--brand)] shadow-sm text-[var(--foreground)]"
                            : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--border)] text-[var(--foreground)]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium truncate pr-2 text-xs">{doc.title}</span>
                          <span className="text-[10px] font-mono text-[var(--foreground-muted)] shrink-0">
                            {doc.member}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-[var(--foreground-muted)] font-mono">
                          <span className="text-[var(--brand)] font-medium">{doc.category}</span>
                          <span>{doc.size}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Inspector Pane */}
              <div className="md:col-span-4 bg-[var(--surface-muted)] p-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="pb-2 border-b border-[var(--border)]">
                    <div className="text-[11px] font-mono text-[var(--foreground-muted)] uppercase">
                      Document Details
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div key={selectedDoc.id} initial={reduceMotion ? false : { opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -5 }} transition={{ duration: 0.22 }}>
                        <div className="font-medium text-[var(--foreground)] text-sm mt-0.5 truncate">{selectedDoc.title}</div>
                        <div className="text-[11px] text-[var(--foreground-muted)] font-mono mt-0.5">{selectedDoc.date}</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2 bg-[var(--surface)] p-3 rounded-lg border border-[var(--border)]">
                    <div className="text-[10px] font-mono text-[var(--brand)] uppercase font-semibold">
                      Extracted Fields (OCR + Ollama)
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                    <motion.div key={selectedDoc.id} className="space-y-1">
                    {Object.entries(selectedDoc.extracted).map(([k, v], index) => (
                      <motion.div key={k} initial={reduceMotion ? false : { opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.055, duration: 0.24 }} className="flex justify-between items-center text-[11px] pt-1 border-t border-[var(--surface-muted)]">
                        <span className="text-[var(--foreground-muted)]">{k}:</span>
                        <span className="font-mono text-[var(--foreground)] text-right truncate max-w-[140px] font-medium">{v}</span>
                      </motion.div>
                    ))}
                    </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
