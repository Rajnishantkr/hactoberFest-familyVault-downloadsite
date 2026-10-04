
export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Add your document",
      description:
        "Import your PDFs, scanned documents, or camera captures directly from your local filesystem. Files are stored locally in your vault folder."
    },
    {
      num: "02",
      title: "Family Vault reads it",
      description:
        "The bundled Tesseract OCR engine extracts high-resolution text characters on your CPU. No images or text are sent over the network."
    },
    {
      num: "03",
      title: "Local AI understands it",
      description:
        "On-device Ollama models parse document types, expiration dates, policy numbers, and holder details entirely within local memory."
    },
    {
      num: "04",
      title: "Find and use it when needed",
      description:
        "Search your entire vault in milliseconds. When filling out forms, press Alt + Space to inject verified values directly."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            How it works
          </h2>
          <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed">
            A simple, four-step local pipeline that runs entirely on your own machine.
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="py-5 border-t border-[var(--border)] text-left space-y-3"
            >
              <div className="font-mono text-xs text-[var(--brand)] font-semibold">{step.num}</div>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">{step.title}</h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
