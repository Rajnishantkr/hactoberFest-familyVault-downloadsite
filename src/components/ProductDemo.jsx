import { useState, useMemo } from "react";
import { Search, Copy, Check } from "lucide-react";
import { FAMILY_MEMBERS, CATEGORIES, DEMO_DOCUMENTS } from "../data/demoData";

export default function ProductDemo() {
  const [selectedMember, setSelectedMember] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocId, setSelectedDocId] = useState("doc-1");
  const [activeTab, setActiveTab] = useState("extracted"); // 'extracted' | 'ocr' | 'file'
  const [copiedKey, setCopiedKey] = useState(null);

  const filteredDocs = useMemo(() => {
    return DEMO_DOCUMENTS.filter((doc) => {
      const matchMember = selectedMember === "all" || doc.ownerId === selectedMember;
      const matchCat = selectedCategory === "all" || doc.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        doc.ocrSnippet.toLowerCase().includes(q) ||
        doc.tags.some((t) => t.toLowerCase().includes(q)) ||
        doc.ownerName.toLowerCase().includes(q);
      return matchMember && matchCat && matchSearch;
    });
  }, [selectedMember, selectedCategory, searchQuery]);

  const activeDoc = useMemo(() => {
    return DEMO_DOCUMENTS.find((d) => d.id === selectedDocId) || filteredDocs[0] || DEMO_DOCUMENTS[0];
  }, [selectedDocId, filteredDocs]);

  const handleCopy = (val, key) => {
    navigator.clipboard?.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <section id="demo" className="py-20 bg-[var(--surface-muted)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            See Family Vault in action.
          </h2>
          <p className="mt-2 text-sm text-[var(--foreground-muted)]">
            An interactive preview of the desktop application. Organize household records, search
            extracted text, and inspect structured metadata generated on-device.
          </p>
        </div>

        {/* Desktop Interface Frame */}
        <div className="rounded-xl bg-[var(--background)] border border-[var(--border)] shadow-sm overflow-hidden">
          {/* Top Window Bar */}
          <div className="px-4 py-2.5 bg-[var(--surface-muted)] border-b border-[var(--border)] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]"></span>
              <span className="text-[var(--foreground-muted)] font-normal ml-2">Family Vault Desktop — Windows x64</span>
            </div>
          </div>

          {/* App Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 bg-[var(--surface-muted)] border-r border-[var(--border)] p-4 space-y-6 text-left">
              {/* Search */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase text-[var(--foreground-muted)] font-medium">
                  Search Vault
                </label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[var(--foreground-muted)]" />
                  <input
                    type="text"
                    placeholder="Search documents or text..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-md py-1.5 pl-8 pr-2 text-xs text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--brand)]"
                  />
                </div>
              </div>

              {/* Family Members filter */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase text-[var(--foreground-muted)] font-medium">
                  Family Members
                </div>
                <div className="space-y-0.5">
                  {FAMILY_MEMBERS.map((m) => {
                    const isSelected = selectedMember === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setSelectedMember(m.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                          isSelected
                            ? "bg-[var(--brand-soft)] text-[var(--brand)] font-medium"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                        }`}
                      >
                        <span className="truncate">{m.name}</span>
                        <span className="text-[10px] font-mono text-[var(--foreground-muted)]">{m.docCount}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Categories filter */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase text-[var(--foreground-muted)] font-medium">
                  Category
                </div>
                <div className="space-y-0.5">
                  {CATEGORIES.map((c) => {
                    const isSelected = selectedCategory === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCategory(c.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1 rounded-md text-xs transition-colors ${
                          isSelected
                            ? "bg-[var(--brand-soft)] text-[var(--brand)] font-medium"
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                        }`}
                      >
                        <span>{c.name}</span>
                        <span className="text-[10px] font-mono text-[var(--foreground-muted)]">{c.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Middle Document List */}
            <div className="lg:col-span-4 bg-[var(--background)] border-r border-[var(--border)] p-4 overflow-y-auto max-h-[520px] vault-scrollbar">
              <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)] mb-3 pb-2 border-b border-[var(--border)] font-mono">
                <span>DOCUMENTS ({filteredDocs.length})</span>
                <span>STATUS</span>
              </div>

              {filteredDocs.length === 0 ? (
                <div className="text-center py-12 text-xs text-[var(--foreground-muted)]">
                  No documents match your filter.
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredDocs.map((doc) => {
                    const isSelected = doc.id === activeDoc.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDocId(doc.id)}
                        className={`p-3 rounded-lg cursor-pointer border transition-colors text-left ${
                          isSelected
                            ? "bg-[var(--surface)] border-[var(--brand)] shadow-sm text-[var(--foreground)]"
                            : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--border)] text-[var(--foreground)]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-medium truncate">{doc.title}</h4>
                          <span className="text-[10px] font-mono text-[var(--foreground-muted)] shrink-0">
                            {doc.fileType}
                          </span>
                        </div>
                        <div className="mt-1 text-[11px] text-[var(--foreground-muted)] flex items-center gap-2">
                          <span>{doc.ownerName}</span>
                          <span>•</span>
                          <span className="capitalize text-[var(--brand)] font-medium">{doc.category}</span>
                        </div>
                        <div className="mt-2 text-[10px] font-mono text-[var(--foreground-muted)] line-clamp-1 bg-[var(--surface-muted)] p-1.5 rounded">
                          {doc.ocrSnippet}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Inspector Panel */}
            <div className="lg:col-span-5 bg-[var(--surface-muted)] p-5 flex flex-col justify-between overflow-y-auto max-h-[520px] vault-scrollbar text-left">
              <div className="space-y-4">
                {/* Header */}
                <div className="pb-3 border-b border-[var(--border)]">
                  <div className="text-[11px] font-mono text-[var(--foreground-muted)] uppercase">
                    Document Inspector
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] mt-0.5">
                    {activeDoc.title}
                  </h3>
                  <div className="text-xs text-[var(--foreground-muted)] mt-1 flex items-center gap-3">
                    <span>Owner: {activeDoc.ownerName}</span>
                    <span>•</span>
                    <span>{activeDoc.fileSize}</span>
                    <span>•</span>
                    <span className="text-[var(--foreground-muted)] font-mono">Added {activeDoc.addedDate}</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-[var(--border)] gap-4 text-xs">
                  <button
                    onClick={() => setActiveTab("extracted")}
                    className={`pb-2 transition-colors border-b-2 ${
                      activeTab === "extracted"
                        ? "border-[var(--brand)] text-[var(--brand)] font-medium"
                        : "border-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    Structured Fields
                  </button>
                  <button
                    onClick={() => setActiveTab("ocr")}
                    className={`pb-2 transition-colors border-b-2 ${
                      activeTab === "ocr"
                        ? "border-[var(--brand)] text-[var(--brand)] font-medium"
                        : "border-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    OCR Text
                  </button>
                  <button
                    onClick={() => setActiveTab("file")}
                    className={`pb-2 transition-colors border-b-2 ${
                      activeTab === "file"
                        ? "border-[var(--brand)] text-[var(--brand)] font-medium"
                        : "border-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    Storage
                  </button>
                </div>

                {/* Tab content */}
                {activeTab === "extracted" && (
                  <div className="space-y-2">
                    <div className="bg-[var(--surface)] rounded-lg border border-[var(--border)] divide-y divide-[var(--surface-muted)]">
                      {Object.entries(activeDoc.extractedFields).map(([label, val]) => (
                        <div
                          key={label}
                          className="p-2.5 flex items-center justify-between text-xs"
                        >
                          <div className="min-w-0 pr-2">
                            <span className="text-[10px] font-mono text-[var(--foreground-muted)] block uppercase">
                              {label}
                            </span>
                            <span className="text-[var(--foreground)] font-medium truncate block mt-0.5">
                              {val}
                            </span>
                          </div>
                          <button
                            onClick={() => handleCopy(val, label)}
                            className="p-1 text-[var(--foreground-muted)] hover:text-[var(--foreground)] rounded transition-colors"
                            title="Copy field value"
                          >
                            {copiedKey === label ? (
                              <Check className="w-3.5 h-3.5 text-[var(--success)]" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-[var(--foreground-muted)] leading-relaxed font-sans pt-1">
                      {activeDoc.localAiNotes}
                    </p>
                  </div>
                )}

                {activeTab === "ocr" && (
                  <div className="space-y-2">
                    <pre className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[11px] font-mono text-[var(--foreground)] whitespace-pre-wrap leading-relaxed max-h-52 overflow-y-auto vault-scrollbar">
                      {activeDoc.ocrSnippet}
                    </pre>
                  </div>
                )}

                {activeTab === "file" && (
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] space-y-2">
                      <div className="text-[10px] font-mono text-[var(--foreground-muted)] uppercase">
                        Local Disk Path
                      </div>
                      <div className="font-mono text-[var(--foreground)] break-all text-[11px]">
                        {activeDoc.storagePath}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
