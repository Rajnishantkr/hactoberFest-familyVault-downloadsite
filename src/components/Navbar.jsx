import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#demo" },
    { label: "Privacy", href: "#privacy" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[var(--background)]/95 border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand Name - Pure clean typography */}
        <a
          href="#"
          className="font-medium text-[var(--foreground)] tracking-tight text-sm hover:text-[var(--brand)] transition-colors"
        >
          {SITE_CONFIG.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-normal text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA - Deep Forest Green Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-medium rounded-md bg-[var(--brand)] text-[var(--background)] hover:bg-[var(--brand-hover)] transition-colors"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[var(--foreground-muted)] hover:text-[var(--foreground)] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--surface-muted)] border-b border-[var(--border)] px-4 py-4 space-y-2.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs font-normal text-[var(--foreground)] hover:text-[var(--brand)]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[var(--border)]">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2 px-3 text-xs font-medium rounded-md bg-[var(--brand)] text-[var(--background)] hover:bg-[var(--brand-hover)]"
            >
              Download Family Vault
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
