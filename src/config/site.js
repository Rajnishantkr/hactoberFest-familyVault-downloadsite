// Centralized site and download configuration
// Keep all release assets, versions, and repository links easily configurable here.

export const SITE_CONFIG = {
  name: "Family Vault",
  tagline: "Your family's documents. Your control.",
  subheadline: "Family Vault keeps your important documents organized, searchable, and useful — directly on your device.",
  description: "An offline-first desktop application for storing, organizing, searching, and using family documents with local Tesseract OCR and local Ollama AI.",
  version: "1.0.0",
  releaseDate: "October 2026",
  
  // Download Configuration
  download: {
    windows: {
      installer: {
        label: "Download Windows Installer (.exe)",
        shortLabel: "Windows Installer (.exe)",
        badge: "Recommended",
        filename: "family-vault-1.0.0-Setup.exe",
        url: "https://family-vault-download.duckdns.org/family-vault-1.0.0-Setup.exe",
        evergreenUrl: "https://family-vault-download.duckdns.org/family-vault-setup.exe",
        size: "359 MB",
        os: "Windows 10 / 11",
        architecture: "x64",
        sha256: "b9c5398235e17bc5d5134702b2b602deab5114a0439b4f2a01c5dd7030451614",
        type: "Setup Installer",
        available: true
      },
      portable: {
        label: "Download Portable Archive (.zip)",
        shortLabel: "Portable ZIP (.zip)",
        badge: "Standalone",
        filename: "family-vault-win32-x64-1.0.0.zip",
        url: "https://family-vault-download.duckdns.org/family-vault-win32-x64-1.0.0.zip",
        evergreenUrl: "https://family-vault-download.duckdns.org/family-vault-win32-x64-latest.zip",
        size: "370 MB",
        os: "Windows 10 / 11",
        architecture: "x64",
        sha256: "c682ca8768142d6c85bb93bc37474cf1babf238892e05a54d15bc62534299834",
        type: "Portable Standalone",
        available: true
      },
      label: "Download for Windows",
      filename: "family-vault-1.0.0-Setup.exe",
      url: "https://family-vault-download.duckdns.org/family-vault-1.0.0-Setup.exe",
      size: "359 MB",
      os: "Windows 10 / 11",
      architecture: "x64",
      sha256: "b9c5398235e17bc5d5134702b2b602deab5114a0439b4f2a01c5dd7030451614",
      available: true
    },
    macos: {
      label: "macOS",
      status: "In Development",
      available: false,
      note: "Universal binary (Apple Silicon & Intel) scheduled for next release."
    },
    linux: {
      label: "Linux",
      status: "In Development",
      available: false,
      note: "AppImage and deb packages planned."
    }
  },

  githubUrl: "https://github.com/familyvault/familyvault-desktop",
  docsUrl: "#how-it-works",
  privacyWhitepaperUrl: "#privacy",

  systemRequirements: {
    os: "Windows 10 / 11 (64-bit)",
    processor: "Intel Core i5 (8th gen+) or AMD Ryzen 5+",
    ram: "4 GB minimum (8 GB recommended for local Ollama models)",
    disk: "500 MB for app + storage for your documents and local AI weights",
    runtime: "Bundled standalone — zero cloud subscriptions required"
  },

  trustPillars: [
    { label: "OFFLINE FIRST", desc: "No internet connection needed" },
    { label: "LOCAL AI", desc: "Powered by on-device Ollama" },
    { label: "PRIVATE BY DESIGN", desc: "Your documents stay on your device" }
  ]
};
