import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductDemo from "./components/ProductDemo";
import DocumentPipeline from "./components/DocumentPipeline";
import PrivacySection from "./components/PrivacySection";
import FamilySection from "./components/FamilySection";
import FormAssistant from "./components/FormAssistant";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#171A18] selection:bg-[#DCE9E1] selection:text-[#1F4D3A] font-sans antialiased overflow-x-hidden">
      {/* 1. Minimal Sticky Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section with Real Interactive Desktop App Preview */}
        <Hero />

        {/* 3. Interactive Product Demo: Filter, Search, and Document Inspection */}
        <ProductDemo />

        {/* 4. Document Intelligence: Tesseract OCR + Local Ollama Processing Pipeline */}
        <DocumentPipeline />

        {/* 5. Privacy Architecture: Local OCR, Local AI, Local Storage with Data Flow */}
        <PrivacySection />

        {/* 6. Family Organization: Multi-Profile Filtering and Categories */}
        <FamilySection />

        {/* 7. Form Assistant: Real Autofill Demonstration with Document Provenance */}
        <FormAssistant />

        {/* 8. Comprehensive Features Matrix with Visual Hierarchy */}
        <Features />

        {/* 9. Simple 4-Step How It Works Process */}
        <HowItWorks />

        {/* 10. Official Windows Download Section with Verification and System Specs */}
        <DownloadSection />
      </main>

      {/* 11. Minimal Technical Footer */}
      <Footer />
    </div>
  );
}
