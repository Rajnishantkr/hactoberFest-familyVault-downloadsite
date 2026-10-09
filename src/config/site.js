// Centralized site and download configuration
// Keep all release assets, versions, and repository links easily configurable here.

export const SITE_CONFIG = {
  name: "Family Vault",
  tagline: "Your family's documents. Your control.",
  subheadline: "Family Vault keeps your important documents organized, searchable, and useful — directly on your device.",
  description: "An offline-first desktop application for storing, organizing, searching, and using family documents with local Tesseract OCR and local Ollama AI.",
  version: "2.0.3",
  releaseDate: "October 2026",
  
  // Download Configuration
  download: {
    windows: {
      installer: {
        label: "Download Windows Installer (.exe)",
        shortLabel: "Windows Installer (.exe)",
        badge: "Recommended",
        filename: "family-vault-2.0.3-Setup.exe",
        url: "https://family-vault-download.duckdns.org/family-vault-2.0.3-Setup.exe",
        evergreenUrl: "https://family-vault-download.duckdns.org/family-vault-setup.exe",
        size: "359 MB",
        os: "Windows 10 / 11",
        architecture: "x64",
        sha256: "f6644f9505e15f4400aad98fe837441554034d982e21411bc8e95875599ef649",
        type: "Setup Installer",
        available: true
      },
      portable: {
        label: "Download Portable Archive (.zip)",
        shortLabel: "Portable ZIP (.zip)",
        badge: "Standalone",
        filename: "family-vault-win32-x64-2.0.3.zip",
        url: "https://family-vault-download.duckdns.org/family-vault-win32-x64-2.0.3.zip",
        evergreenUrl: "https://family-vault-download.duckdns.org/family-vault-win32-x64-latest.zip",
        size: "370 MB",
        os: "Windows 10 / 11",
        architecture: "x64",
        sha256: "5737af2acbcee39b905ad721edaf5729d4266c831044190c4688469159d51a72",
        type: "Portable Standalone",
        available: true
      },
      label: "Download for Windows",
      filename: "family-vault-2.0.3-Setup.exe",
      url: "https://family-vault-download.duckdns.org/family-vault-2.0.3-Setup.exe",
      size: "359 MB",
      os: "Windows 10 / 11",
      architecture: "x64",
      sha256: "f6644f9505e15f4400aad98fe837441554034d982e21411bc8e95875599ef649",
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
