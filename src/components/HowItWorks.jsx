import React from "react";

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
    <section id="how-it-works" className="py-20 bg-[#F7F6F2] border-t border-[#D8D9D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171A18]">
            How it works
          </h2>
          <p className="mt-2 text-sm text-[#626862] leading-relaxed">
            A simple, four-step local pipeline that runs entirely on your own machine.
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#FFFFFF] border border-[#D8D9D3] text-left space-y-3 shadow-sm"
            >
              <div className="font-mono text-xs text-[#1F4D3A] font-semibold">{step.num}</div>
              <h3 className="text-sm font-semibold text-[#171A18]">{step.title}</h3>
              <p className="text-xs text-[#626862] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
