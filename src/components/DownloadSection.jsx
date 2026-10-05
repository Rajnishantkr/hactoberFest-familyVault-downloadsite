import { useState } from "react";
import { Download, Copy, Check, FileArchive, Laptop } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export default function DownloadSection() {
  const [selectedFormat, setSelectedFormat] = useState("installer");
  const [copied, setCopied] = useState(false);

  const win = SITE_CONFIG.download.windows;
  const current = win[selectedFormat] || win.installer || win;
  const otherFormat = selectedFormat === "installer" ? "portable" : "installer";
  const other = win[otherFormat] || win.portable;

  const handleCopy = () => {
    navigator.clipboard?.writeText(current.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" className="py-24 bg-[var(--brand)] text-[var(--background)] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--background)]">
          Take control of your documents.
        </h2>
        <p className="mt-3 text-sm text-[var(--brand-soft)] max-w-xl mx-auto leading-relaxed">
          Download Family Vault and keep your family's important documents organized on your own device.
        </p>

        {/* Download Block */}
        <div className="mt-8 p-8 rounded-xl bg-[var(--brand-hover)] border border-[var(--brand-soft)]/25 max-w-lg mx-auto space-y-5 shadow-sm">
          {/* Format Selector */}
          <div className="flex p-1 rounded-lg bg-[var(--brand)]/70 border border-[var(--brand-soft)]/20">
            <button
              type="button"
              onClick={() => setSelectedFormat("installer")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                selectedFormat === "installer"
                  ? "bg-[var(--background)] text-[var(--brand)] shadow-sm font-semibold"
                  : "text-[var(--brand-soft)] hover:text-[var(--background)]"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Installer (.exe)</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  selectedFormat === "installer"
                    ? "bg-[var(--brand)]/10 text-[var(--brand)]"
                    : "bg-[var(--brand-soft)]/15 text-[var(--brand-soft)]"
                }`}
              >
                {win.installer?.size || "359 MB"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedFormat("portable")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                selectedFormat === "portable"
                  ? "bg-[var(--background)] text-[var(--brand)] shadow-sm font-semibold"
                  : "text-[var(--brand-soft)] hover:text-[var(--background)]"
              }`}
            >
              <FileArchive className="w-3.5 h-3.5" />
              <span>Portable (.zip)</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  selectedFormat === "portable"
                    ? "bg-[var(--brand)]/10 text-[var(--brand)]"
                    : "bg-[var(--brand-soft)]/15 text-[var(--brand-soft)]"
                }`}
              >
                {win.portable?.size || "370 MB"}
              </span>
            </button>
          </div>

          {/* Primary CTA */}
          <a
            href={current.url}
            download
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--background)] hover:bg-[var(--surface-muted)] text-[var(--brand)] font-medium text-sm transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 text-[var(--brand)]" />
            <span>{current.label}</span>
          </a>

          {/* Alternate quick link */}
          <div className="text-center text-xs text-[var(--brand-soft)]">
            <span>Prefer {other?.shortLabel}? </span>
            <button
              type="button"
              onClick={() => setSelectedFormat(otherFormat)}
              className="underline underline-offset-2 hover:text-[var(--background)] transition-colors font-medium"
            >
              Switch to {other?.shortLabel}
            </button>
            <span className="mx-1.5">•</span>
            <a
              href={other?.url}
              download
              className="underline underline-offset-2 hover:text-[var(--background)] transition-colors font-medium"
            >
              Direct Download
            </a>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--brand-soft)]">
            <span className="text-[var(--background)] font-medium">{current.os}</span>
            <span>•</span>
            <span>{current.architecture}</span>
            <span>•</span>
            <span>Version {SITE_CONFIG.version}</span>
            <span>•</span>
            <span>{current.size}</span>
            <span>•</span>
            <span className="text-[var(--background)]/90">{current.type}</span>
          </div>

          {/* SHA-256 Checksum */}
          <div className="pt-4 border-t border-[var(--brand-soft)]/20 text-left space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-[var(--brand-soft)]">
              <span>SHA-256 CHECKSUM ({selectedFormat === "installer" ? "SETUP.EXE" : "ZIP"})</span>
              <button
                onClick={handleCopy}
                className="hover:text-[var(--background)] transition-colors flex items-center gap-1"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[var(--background)]" />
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
            <div className="p-2 rounded bg-[var(--brand-hover)] border border-[var(--brand-soft)]/20 text-[10px] font-mono text-[var(--brand-soft)] break-all select-all">
              {current.sha256}
            </div>
          </div>
        </div>

        {/* Platform Status */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left text-xs">
          <div className="p-3.5 rounded-lg bg-[var(--brand-hover)] border border-[var(--brand-soft)]/25">
            <div className="font-medium text-[var(--background)]">macOS</div>
            <div className="text-[11px] text-[var(--brand-soft)] mt-0.5">
              In development. Apple Silicon & Intel builds scheduled next.
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-[var(--brand-hover)] border border-[var(--brand-soft)]/25">
            <div className="font-medium text-[var(--background)]">Linux</div>
            <div className="text-[11px] text-[var(--brand-soft)] mt-0.5">
              In development. AppImage & deb packages planned.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
