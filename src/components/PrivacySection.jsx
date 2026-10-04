
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
    <section id="privacy" className="py-24 bg-[var(--brand)] text-[var(--background)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--background)]">
            Your documents don't need the cloud.
          </h2>
          <p className="mt-3 text-base text-[var(--brand-soft)] leading-relaxed">
            Family Vault is designed to process your documents locally. OCR runs on your device,
            AI processing runs locally through Ollama, and your documents remain stored locally.
          </p>
        </div>

        {/* Sophisticated Local Flow Architecture Visual */}
        <div className="border-y border-[var(--brand-soft)]/25 py-6 sm:py-8 mb-16">
          <div className="text-left mb-6 pb-3 border-b border-[var(--brand-soft)]/20">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--brand-soft)] font-medium">
              Architecture Overview
            </span>
          </div>

          {/* 4-Step Technical Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y divide-[var(--brand-soft)]/25 md:divide-y-0 md:divide-x text-left">
            <div className="py-4 md:px-5 md:first:pl-0 space-y-2">
              <div className="text-[11px] font-mono text-[var(--brand-soft)]">01 / INPUT</div>
              <h3 className="text-sm font-semibold text-[var(--background)]">Local Device</h3>
              <p className="text-xs text-[var(--brand-soft)] leading-relaxed">
                Documents are read directly from your local filesystem (%USERPROFILE%).
              </p>
            </div>

            <div className="py-4 md:px-5 space-y-2">
              <div className="text-[11px] font-mono text-[var(--brand-soft)]">02 / OCR</div>
              <h3 className="text-sm font-semibold text-[var(--background)]">Tesseract OCR</h3>
              <p className="text-xs text-[var(--brand-soft)] leading-relaxed">
                Native binary executes on host CPU to extract raw UTF-8 text from raster pixels.
              </p>
            </div>

            <div className="py-4 md:px-5 space-y-2">
              <div className="text-[11px] font-mono text-[var(--brand-soft)]">03 / PARSING</div>
              <h3 className="text-sm font-semibold text-[var(--background)]">Ollama Local AI</h3>
              <p className="text-xs text-[var(--brand-soft)] leading-relaxed">
                On-device language models identify entities, validity dates, and categories.
              </p>
            </div>

            <div className="py-4 md:px-5 md:last:pr-0 space-y-2">
              <div className="text-[11px] font-mono text-[var(--brand-soft)]">04 / STORAGE</div>
              <h3 className="text-sm font-semibold text-[var(--background)]">Local Storage</h3>
              <p className="text-xs text-[var(--brand-soft)] leading-relaxed">
                Indexed in an offline SQLite database on your SSD under your exclusive control.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Comparison Table */}
        <div className="max-w-4xl mx-auto text-left">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[var(--background)]">
              Technical Comparison
            </h3>
            <p className="text-xs text-[var(--brand-soft)] mt-1">
              Defensible architectural differences between cloud services and local-first software.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--brand-soft)]/25 bg-[var(--brand-hover)] overflow-hidden">
            <div className="grid grid-cols-12 bg-[var(--brand-hover)] border-b border-[var(--brand-soft)]/20 p-3.5 text-xs font-mono text-[var(--brand-soft)]">
              <div className="col-span-4 sm:col-span-3">Dimension</div>
              <div className="col-span-4 sm:col-span-4">Cloud Services</div>
              <div className="col-span-4 sm:col-span-5 text-[var(--background)] font-semibold">Family Vault</div>
            </div>

            <div className="divide-y divide-[var(--brand-soft)]/15 text-xs">
              {comparison.map((c, i) => (
                <div key={i} className="grid grid-cols-12 p-3.5 items-center">
                  <div className="col-span-4 sm:col-span-3 font-medium text-[var(--background)]">
                    {c.aspect}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-[var(--brand-soft)] pr-2">
                    {c.cloud}
                  </div>
                  <div className="col-span-4 sm:col-span-5 text-[var(--background)] font-medium">
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
