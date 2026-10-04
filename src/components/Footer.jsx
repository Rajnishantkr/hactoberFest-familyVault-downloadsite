import { SITE_CONFIG } from "../config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-muted)] border-t border-[var(--border)] text-[var(--foreground-muted)] text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          <div className="text-left">
            <div className="font-medium text-sm text-[var(--foreground)]">{SITE_CONFIG.name}</div>
            <div className="text-[var(--foreground-muted)] mt-0.5">Private. Offline. Yours.</div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-[var(--foreground-muted)]">
            <a href="#demo" className="hover:text-[var(--foreground)] transition-colors">
              Product
            </a>
            <a href="#privacy" className="hover:text-[var(--foreground)] transition-colors">
              Privacy
            </a>
            <a href="#features" className="hover:text-[var(--foreground)] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[var(--foreground)] transition-colors">
              How It Works
            </a>
            <a href="#download" className="hover:text-[var(--foreground)] transition-colors">
              Download
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[var(--foreground-muted)]">
          <div>
            © {currentYear} {SITE_CONFIG.name}.
          </div>
         
        </div>
      </div>
    </footer>
  );
}
