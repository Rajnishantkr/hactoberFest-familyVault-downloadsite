import { useState } from "react";
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
    <section id="form-assistant" className="py-20 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Stop searching for documents while filling forms.
          </h2>
          <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed">
            Family Vault recognizes document context and suggests exact verified numbers, dates,
            and addresses directly when filling forms — without relying on external cloud sync.
          </p>
        </div>

        {/* Interactive Desktop Form Container */}
        <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-6 md:p-8 max-w-4xl mx-auto shadow-sm">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--surface-muted)]">
            <div className="text-left">
              <div className="text-xs font-semibold text-[var(--foreground)]">
                Sample Form: Visa & Consular Application
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleFillAll}
                className="px-3 py-1.5 rounded-md bg-[var(--brand-soft)] hover:bg-[var(--brand-soft)] text-[var(--brand)] text-xs font-medium transition-colors"
              >
                Autofill All
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-md text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)] transition-colors"
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
                  <label className="text-[var(--foreground)] font-medium">Full Legal Name</label>
                  {formData.fullName ? (
                    <span className="text-[11px] font-mono text-[var(--success)] flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      Filled
                    </span>
                  ) : activeField === "fullName" ? (
                    <span className="text-[11px] font-mono text-[var(--brand)] bg-[var(--brand-soft)] px-1.5 py-0.2 rounded font-medium">
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
                      ? "bg-[var(--background)] text-[var(--foreground)] border border-[var(--brand)]"
                      : activeField === "fullName"
                      ? "bg-[var(--brand-soft)]/30 text-[var(--foreground)] border border-[var(--brand)]"
                      : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)]"
                  }`}
                />
              </div>

              {/* Date of Birth */}
              <div
                onClick={() => setActiveField("dob")}
                className="space-y-1.5 cursor-pointer"
              >
                <div className="flex justify-between text-xs">
                  <label className="text-[var(--foreground)] font-medium">Date of Birth</label>
                  {formData.dob ? (
                    <span className="text-[11px] font-mono text-[var(--success)] flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      Filled
                    </span>
                  ) : activeField === "dob" ? (
                    <span className="text-[11px] font-mono text-[var(--brand)] bg-[var(--brand-soft)] px-1.5 py-0.2 rounded font-medium">
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
                      ? "bg-[var(--background)] text-[var(--foreground)] border border-[var(--brand)]"
                      : activeField === "dob"
                      ? "bg-[var(--brand-soft)]/30 text-[var(--foreground)] border border-[var(--brand)]"
                      : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)]"
                  }`}
                />
              </div>

              {/* Passport / ID */}
              <div
                onClick={() => setActiveField("idNumber")}
                className="space-y-1.5 cursor-pointer"
              >
                <div className="flex justify-between text-xs">
                  <label className="text-[var(--foreground)] font-medium">Passport / ID Document Number</label>
                  {formData.idNumber ? (
                    <span className="text-[11px] font-mono text-[var(--success)] flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      Filled
                    </span>
                  ) : activeField === "idNumber" ? (
                    <span className="text-[11px] font-mono text-[var(--brand)] bg-[var(--brand-soft)] px-1.5 py-0.2 rounded font-medium">
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
                      ? "bg-[var(--background)] text-[var(--foreground)] border border-[var(--brand)]"
                      : activeField === "idNumber"
                      ? "bg-[var(--brand-soft)]/30 text-[var(--foreground)] border border-[var(--brand)]"
                      : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)]"
                  }`}
                />
              </div>

              {/* Address */}
              <div
                onClick={() => setActiveField("address")}
                className="space-y-1.5 cursor-pointer"
              >
                <div className="flex justify-between text-xs">
                  <label className="text-[var(--foreground)] font-medium">Permanent Residential Address</label>
                  {formData.address ? (
                    <span className="text-[11px] font-mono text-[var(--success)] flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      Filled
                    </span>
                  ) : activeField === "address" ? (
                    <span className="text-[11px] font-mono text-[var(--brand)] bg-[var(--brand-soft)] px-1.5 py-0.2 rounded font-medium">
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
                      ? "bg-[var(--background)] text-[var(--foreground)] border border-[var(--brand)]"
                      : activeField === "address"
                      ? "bg-[var(--brand-soft)]/30 text-[var(--foreground)] border border-[var(--brand)]"
                      : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)]"
                  }`}
                />
              </div>
            </div>

            {/* Quick-Fill Flyout Popover */}
            <div className="md:col-span-5 bg-[var(--background)] p-4 rounded-lg border border-[var(--border)] text-left space-y-3">
              <div className="text-[11px] font-mono uppercase text-[var(--foreground-muted)] flex items-center justify-between pb-2 border-b border-[var(--border)]">
                <span className="text-[var(--brand)] font-semibold">Quick-Fill Suggestion</span>
                <span>Alt + Space</span>
              </div>

              <div>
                <div className="text-xs text-[var(--foreground-muted)]">
                  Suggested from <strong className="text-[var(--brand)] font-medium">{currentSuggestion.source}</strong>
                </div>
                <div className="mt-1 p-2.5 rounded bg-[var(--brand-soft)] border border-[var(--brand)] font-mono text-xs text-[var(--brand)] select-all break-all font-semibold">
                  {currentSuggestion.value}
                </div>
              </div>

              <button
                onClick={() => handleUseValue(activeField)}
                className="w-full py-2 px-3 rounded-md bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--background)] font-medium text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
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
