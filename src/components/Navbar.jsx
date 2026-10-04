import React, { useState, useEffect } from "react";
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
          ? "bg-[#F7F6F2]/95 backdrop-blur-sm border-b border-[#D8D9D3]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand Name - Pure clean typography */}
        <a
          href="#"
          className="font-medium text-[#171A18] tracking-tight text-sm hover:text-[#1F4D3A] transition-colors"
        >
          {SITE_CONFIG.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-normal text-[#626862] hover:text-[#171A18] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA - Deep Forest Green Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#1F4D3A] text-[#F7F6F2] hover:bg-[#163B2D] transition-colors"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[#626862] hover:text-[#171A18] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ECECE7] border-b border-[#D8D9D3] px-4 py-4 space-y-2.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs font-normal text-[#171A18] hover:text-[#1F4D3A]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#D8D9D3]">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2 px-3 text-xs font-medium rounded-md bg-[#1F4D3A] text-[#F7F6F2] hover:bg-[#163B2D]"
            >
              Download Family Vault
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
