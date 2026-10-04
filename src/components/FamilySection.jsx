import { useState } from "react";
import { DEMO_DOCUMENTS } from "../data/demoData";

export default function FamilySection() {
  const [selectedMember, setSelectedMember] = useState("you");

  const profiles = [
    { id: "you", name: "Akshay", role: "Self", count: 5, note: "5 documents indexed" },
    { id: "father", name: "Rajesh", role: "Father", count: 3, note: "Passport renewal in 5 months" },
    { id: "mother", name: "sunita", role: "Mother", count: 3, note: "Health card & medical records" },
    { id: "children", name: "Children", role: "Dependents", count: 3, note: "School certificates & birth records" }
  ];

  const currentMember = profiles.find((p) => p.id === selectedMember) || profiles[0];
  const docs = DEMO_DOCUMENTS.filter((d) => d.ownerId === selectedMember);

  const categories = [
    "Identity",
    "Insurance",
    "Medical",
    "Financial",
    "Property",
    "Education",
    "Travel"
  ];

  return (
    <section id="family" className="py-20 bg-[var(--surface-muted)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            One vault.
            <br />
            The whole family.
          </h2>
          <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed">
            Keep family records organized in dedicated member profiles while retaining unified
            instant search across all household categories.
          </p>
        </div>

        {/* Member Profiles Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
          {profiles.map((p) => {
            const isSelected = selectedMember === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedMember(p.id)}
                className={`p-3.5 rounded-lg text-left border transition-all ${
                  isSelected
                    ? "bg-[var(--brand-soft)] border-[var(--brand)] text-[var(--brand)]"
                    : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--border)] text-[var(--foreground-muted)]"
                }`}
              >
                <div className={`text-xs font-semibold ${isSelected ? "text-[var(--brand)]" : "text-[var(--foreground)]"}`}>
                  {p.name}
                </div>
                <div className={`text-[11px] font-mono mt-0.5 ${isSelected ? "text-[var(--brand)]" : "text-[var(--foreground-muted)]"}`}>
                  {p.role}
                </div>
                <div className={`text-[11px] mt-2 truncate font-mono ${isSelected ? "text-[var(--brand-hover)]" : "text-[var(--foreground-muted)]"}`}>
                  {p.note}
                </div>
              </button>
            );
          })}
        </div>

        {/* Documents Container */}
        <div className="rounded-xl bg-[var(--background)] border border-[var(--border)] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[var(--border)] gap-2">
            <div>
              <span className="text-xs font-semibold text-[var(--foreground)]">{currentMember.name}</span>
              <span className="text-xs text-[var(--foreground-muted)] ml-2 font-mono">({currentMember.role})</span>
            </div>
            <div className="text-xs text-[var(--foreground-muted)] font-mono">
              {docs.length} documents on file
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {docs.map((doc) => (
              <div
                key={doc.id}
                className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] space-y-2 text-left"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--foreground-muted)]">
                  <span className="capitalize text-[var(--brand)] font-medium">{doc.category}</span>
                  <span>{doc.fileType}</span>
                </div>
                <div className="text-xs font-medium text-[var(--foreground)] truncate">{doc.title}</div>
                <div className="text-[11px] font-mono text-[var(--foreground-muted)] line-clamp-2 bg-[var(--background)] p-1.5 rounded">
                  {doc.ocrSnippet}
                </div>
                <div className="pt-2 border-t border-[var(--surface-muted)] text-[10px] font-mono text-[var(--foreground-muted)] flex justify-between">
                  <span>{doc.fileSize}</span>
                  <span>{doc.expiryDate ? `Exp: ${doc.expiryDate}` : "Permanent"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories row */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono text-[var(--foreground-muted)]">
          <span className="py-1 text-[var(--foreground)]">Categories:</span>
          {categories.map((cat, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)]"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
