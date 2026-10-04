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
      label: "Download for Windows",
      filename: "FamilyVault-Setup-1.0.0.exe",
      url: "http://139.84.144.90/family-vault-win32-x64-1.0.0.zip",
      size: "3.4 GB",
      os: "Windows 10 / 11",
      architecture: "x64",
      sha256: "9f83b2a5d4c887e1f92e21b8c037da954628d4e9f7a11029c7849e7b23c915f0",
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
