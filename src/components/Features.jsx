
export default function Features() {
  const features = [
    {
      title: "Offline-First",
      description:
        "Every operation—from ingestion to OCR and search—runs locally. No internet connectivity is required."
    },
    {
      title: "Local AI (Ollama)",
      description:
        "Extracts metadata, dates, and entities using on-device models. No tokens leave your hardware."
    },
    {
      title: "Tesseract OCR Extraction",
      description:
        "Industrial-grade optical text extraction from PDFs, scanned papers, and camera photos."
    },
    {
      title: "Smart Document Organization",
      description:
        "Automatically identifies document types and sorts them into Identity, Insurance, Medical, and Property."
    },
    {
      title: "Family Profiles",
      description:
        "Create dedicated profiles for each household member while retaining unified cross-vault search."
    },
    {
      title: "Fast Search",
      description:
        "Sub-millisecond full-text queries powered by native SQLite FTS5 indices compiled on your disk."
    },
    {
      title: "Expiry Reminders",
      description:
        "Calculates validity periods and surfaces local notices before passports, licenses, or policies lapse."
    },
    {
      title: "Form Assistance",
      description:
        "Global Alt+Space shortcut to suggest verified fields directly into desktop and web forms."
    },
    {
      title: "Document Preview",
      description:
        "Instant multi-page viewer for PDFs and high-resolution images alongside extracted raw text streams."
    },
    {
      title: "Privacy-Focused Architecture",
      description:
        "Zero telemetry, zero external logging, and encrypted storage at rest in your local AppData folder."
    }
  ];

  return (
    <section id="features" className="py-20 bg-[var(--surface-muted)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Features
          </h2>
          <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed">
            Designed for households that need reliable, searchable document storage without cloud dependencies.
          </p>
        </div>

        {/* Feature Grid - Paper cards with warm gray borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="py-5 border-t border-[var(--border)] text-left space-y-2"
            >
              <h3 className="text-xs font-semibold text-[var(--brand)] uppercase tracking-wide font-mono">
                {feat.title}
              </h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed font-normal">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
