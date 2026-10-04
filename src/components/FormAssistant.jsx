import React, { useState } from "react";
import { Check, RotateCcw } from "lucide-react";

export default function FormAssistant() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    idNumber: "",
    address: ""
  });

  const [activeField, setActiveField] = useState("fullName");

  const suggestions = {
    fullName: {
      value: "Akshay",
      source: "Aadhaar Card",
      confidence: "Verified match"
    },
    dob: {
      value: "1994-08-24",
      source: "Passport (Page 1)",
      confidence: "Verified match"
    },
    idNumber: {
      value: "Z5489210",
      source: "Republic of India Passport",
      confidence: "Verified match"
    },
    address: {
      value: "Flat 402, Green Glen Layout, Bellandur, Bengaluru 560103",
      source: "Aadhaar & Utility Bill",
      confidence: "Verified match"
    }
  };

  const handleUseValue = (fieldKey) => {
    setFormData((prev) => ({
      ...prev,
      [fieldKey]: suggestions[fieldKey].value
    }));
  };

  const handleFillAll = () => {
    setFormData({
      fullName: suggestions.fullName.value,
      dob: suggestions.dob.value,
      idNumber: suggestions.idNumber.value,
      address: suggestions.address.value
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      dob: "",
      idNumber: "",
      address: ""
    });
  };

  const currentSuggestion = suggestions[activeField] || suggestions.fullName;

  return (
    <section id="form-assistant" className="py-20 bg-[#F7F6F2] border-t border-[#D8D9D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171A18]">
            Stop searching for documents while filling forms.
          </h2>
          <p className="mt-2 text-sm text-[#626862] leading-relaxed">
            Family Vault recognizes document context and suggests exact verified numbers, dates,
            and addresses directly when filling forms — without relying on external cloud sync.
          </p>
        </div>

        {/* Interactive Desktop Form Container */}
        <div className="rounded-xl bg-[#FFFFFF] border border-[#D8D9D3] p-6 md:p-8 max-w-4xl mx-auto shadow-sm">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#ECECE7]">
            <div className="text-left">
              <div className="text-xs font-semibold text-[#171A18]">
                Sample Form: Visa & Consular Application
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleFillAll}
                className="px-3 py-1.5 rounded-md bg-[#DCE9E1] hover:bg-[#cbe0d3] text-[#1F4D3A] text-xs font-medium transition-colors"
              >
                Autofill All
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-md text-[#626862] hover:text-[#171A18] hover:bg-[#ECECE7] transition-colors"
                title="Reset form"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Form Fields */}
            <div className="md:col-span-7 space-y-4 text-left">
              {/* Full Name */}
              <div
                onClick={() => setActiveField("fullName")}
                className="space-y-1.5 cursor-pointer"
              >
                <div className="flex justify-between text-xs">
                  <label className="text-[#171A18] font-medium">Full Legal Name</label>
                  {formData.fullName ? (
                    <span className="text-[11px] font-mono text-[#2E6B4F] flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      Filled
                    </span>
                  ) : activeField === "fullName" ? (
                    <span className="text-[11px] font-mono text-[#1F4D3A] bg-[#DCE9E1] px-1.5 py-0.2 rounded font-medium">
                      Suggestion ready
                    </span>
                  ) : null}
                </div>
                <input
                  type="text"
                  readOnly
                  placeholder="Enter full name"
                  value={formData.fullName}
                  className={`w-full px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    formData.fullName
                      ? "bg-[#F7F6F2] text-[#171A18] border border-[#1F4D3A]"
                      : activeField === "fullName"
                      ? "bg-[#DCE9E1]/30 text-[#171A18] border border-[#1F4D3A]"
                      : "bg-[#FFFFFF] text-[#626862] border border-[#D8D9D3]"
                  }`}
                />
              </div>

              {/* Date of Birth */}
              <div
                onClick={() => setActiveField("dob")}
                className="space-y-1.5 cursor-pointer"
              >
                <div className="flex justify-between text-xs">
                  <label className="text-[#171A18] font-medium">Date of Birth</label>
                  {formData.dob ? (
                    <span className="text-[11px] font-mono text-[#2E6B4F] flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      Filled
                    </span>
                  ) : activeField === "dob" ? (
                    <span className="text-[11px] font-mono text-[#1F4D3A] bg-[#DCE9E1] px-1.5 py-0.2 rounded font-medium">
                      Suggestion ready
                    </span>
                  ) : null}
                </div>
                <input
                  type="text"
                  readOnly
                  placeholder="YYYY-MM-DD"
                  value={formData.dob}
                  className={`w-full px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    formData.dob
                      ? "bg-[#F7F6F2] text-[#171A18] border border-[#1F4D3A]"
                      : activeField === "dob"
                      ? "bg-[#DCE9E1]/30 text-[#171A18] border border-[#1F4D3A]"
                      : "bg-[#FFFFFF] text-[#626862] border border-[#D8D9D3]"
                  }`}
                />
              </div>

              {/* Passport / ID */}
              <div
                onClick={() => setActiveField("idNumber")}
                className="space-y-1.5 cursor-pointer"
              >
                <div className="flex justify-between text-xs">
                  <label className="text-[#171A18] font-medium">Passport / ID Document Number</label>
                  {formData.idNumber ? (
                    <span className="text-[11px] font-mono text-[#2E6B4F] flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      Filled
                    </span>
                  ) : activeField === "idNumber" ? (
                    <span className="text-[11px] font-mono text-[#1F4D3A] bg-[#DCE9E1] px-1.5 py-0.2 rounded font-medium">
                      Suggestion ready
                    </span>
                  ) : null}
                </div>
                <input
                  type="text"
                  readOnly
                  placeholder="Document number"
                  value={formData.idNumber}
                  className={`w-full px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    formData.idNumber
                      ? "bg-[#F7F6F2] text-[#171A18] border border-[#1F4D3A]"
                      : activeField === "idNumber"
                      ? "bg-[#DCE9E1]/30 text-[#171A18] border border-[#1F4D3A]"
                      : "bg-[#FFFFFF] text-[#626862] border border-[#D8D9D3]"
                  }`}
                />
              </div>

              {/* Address */}
              <div
                onClick={() => setActiveField("address")}
                className="space-y-1.5 cursor-pointer"
              >
                <div className="flex justify-between text-xs">
                  <label className="text-[#171A18] font-medium">Permanent Residential Address</label>
                  {formData.address ? (
                    <span className="text-[11px] font-mono text-[#2E6B4F] flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      Filled
                    </span>
                  ) : activeField === "address" ? (
                    <span className="text-[11px] font-mono text-[#1F4D3A] bg-[#DCE9E1] px-1.5 py-0.2 rounded font-medium">
                      Suggestion ready
                    </span>
                  ) : null}
                </div>
                <input
                  type="text"
                  readOnly
                  placeholder="Street, City, Postal Code"
                  value={formData.address}
                  className={`w-full px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    formData.address
                      ? "bg-[#F7F6F2] text-[#171A18] border border-[#1F4D3A]"
                      : activeField === "address"
                      ? "bg-[#DCE9E1]/30 text-[#171A18] border border-[#1F4D3A]"
                      : "bg-[#FFFFFF] text-[#626862] border border-[#D8D9D3]"
                  }`}
                />
              </div>
            </div>

            {/* Quick-Fill Flyout Popover */}
            <div className="md:col-span-5 bg-[#F7F6F2] p-4 rounded-lg border border-[#D8D9D3] text-left space-y-3">
              <div className="text-[11px] font-mono uppercase text-[#626862] flex items-center justify-between pb-2 border-b border-[#D8D9D3]">
                <span className="text-[#1F4D3A] font-semibold">Quick-Fill Suggestion</span>
                <span>Alt + Space</span>
              </div>

              <div>
                <div className="text-xs text-[#626862]">
                  Suggested from <strong className="text-[#1F4D3A] font-medium">{currentSuggestion.source}</strong>
                </div>
                <div className="mt-1 p-2.5 rounded bg-[#DCE9E1] border border-[#1F4D3A] font-mono text-xs text-[#1F4D3A] select-all break-all font-semibold">
                  {currentSuggestion.value}
                </div>
              </div>

              <button
                onClick={() => handleUseValue(activeField)}
                className="w-full py-2 px-3 rounded-md bg-[#1F4D3A] hover:bg-[#163B2D] text-[#F7F6F2] font-medium text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Use this value</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
