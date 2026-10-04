import React, { useState } from "react";
import { FileText, ScanLine, Cpu, Database } from "lucide-react";
import { PIPELINE_STAGES } from "../data/demoData";

export default function DocumentPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const stageIcons = [FileText, ScanLine, Cpu, Database];

  return (
    <section id="pipeline" className="py-20 bg-[#F7F6F2] border-t border-[#D8D9D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171A18]">
            From document to useful information.
          </h2>
          <p className="mt-2 text-sm text-[#626862] leading-relaxed">
            How Family Vault transforms an image or scanned PDF into searchable records and autofill fields
            using local Tesseract OCR and on-device Ollama inference.
          </p>
        </div>

        {/* Pipeline Stepper - Color transitions: inactive #D8D9D3, active #1F4D3A, completed #DCE9E1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {PIPELINE_STAGES.map((stage, idx) => {
            const Icon = stageIcons[idx];
            const isSelected = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-lg text-left border transition-all ${
                  isSelected
                    ? "bg-[#1F4D3A] border-[#1F4D3A] text-[#F7F6F2]"
                    : isCompleted
                    ? "bg-[#DCE9E1] border-[#D8D9D3] text-[#1F4D3A]"
                    : "bg-[#FFFFFF] border-[#D8D9D3] hover:border-[#B5B6AE] text-[#626862]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs ${isSelected ? "text-[#DCE9E1]" : isCompleted ? "text-[#1F4D3A]" : "text-[#626862]"}`}>
                    {stage.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#DCE9E1]" : isCompleted ? "text-[#1F4D3A]" : "text-[#626862]"}`} />
                </div>
                <div className={`text-xs font-medium ${isSelected ? "text-[#F7F6F2]" : isCompleted ? "text-[#1F4D3A]" : "text-[#171A18]"}`}>
                  {stage.name}
                </div>
                <div className={`text-[11px] mt-1 font-mono truncate ${isSelected ? "text-[#DCE9E1]" : "text-[#626862]"}`}>
                  {stage.engine}
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Content Detail Box */}
        {(() => {
          const current = PIPELINE_STAGES[activeStep];
          return (
            <div className="rounded-xl bg-[#FFFFFF] border border-[#D8D9D3] p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Description Column */}
                <div className="md:col-span-5 space-y-4 text-left">
                  <div className="inline-block text-[11px] font-mono uppercase text-[#1F4D3A] bg-[#DCE9E1] px-2 py-0.5 rounded font-medium">
                    Stage {current.step} — {current.technicalBadge}
                  </div>
                  <h3 className="text-lg font-semibold text-[#171A18]">{current.name}</h3>
                  <p className="text-xs font-normal text-[#171A18] leading-relaxed">
                    {current.subtitle}
                  </p>
                  <p className="text-xs text-[#626862] leading-relaxed font-normal">
                    {current.description}
                  </p>

                  <div className="pt-4 border-t border-[#ECECE7] text-xs text-[#626862] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F4D3A]"></span>
                      <span>No remote API requests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F4D3A]"></span>
                      <span>Executes on local CPU / memory</span>
                    </div>
                  </div>
                </div>

                {/* Data View Column */}
                <div className="md:col-span-7 bg-[#F7F6F2] p-4 rounded-lg border border-[#D8D9D3] font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#D8D9D3] text-[11px] text-[#626862]">
                    <span className="font-semibold text-[#171A18]">STAGE OUTPUT</span>
                    <span>{current.engine}</span>
                  </div>

                  {activeStep === 0 && (
                    <div className="space-y-2 text-[#171A18] text-left">
                      <div className="text-[#626862] text-[11px]">Input File:</div>
                      <div className="p-2.5 rounded bg-[#FFFFFF] border border-[#D8D9D3] text-xs font-medium">
                        {current.previewData.filename}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-[#626862] pt-2">
                        <div>Size: {current.previewData.size}</div>
                        <div>Format: {current.previewData.format}</div>
                        <div>Layer: {current.previewData.resolution}</div>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-2 text-left">
                      <div className="text-[#626862] text-[11px]">Tesseract OCR UTF-8 Stream:</div>
                      <pre className="p-3 rounded bg-[#FFFFFF] border border-[#D8D9D3] text-[#171A18] text-[11px] whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto vault-scrollbar">
                        {current.previewData.rawSample}
                      </pre>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-2 text-left">
                      <div className="text-[#626862] text-[11px]">Ollama Structured JSON Output:</div>
                      <pre className="p-3 rounded bg-[#FFFFFF] border border-[#D8D9D3] text-[#171A18] text-[11px] whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto vault-scrollbar">
                        {JSON.stringify(current.previewData.jsonSample, null, 2)}
                      </pre>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-2 text-left">
                      <div className="text-[#626862] text-[11px]">Local Index Verification:</div>
                      <div className="p-3 rounded bg-[#FFFFFF] border border-[#D8D9D3] space-y-1.5 text-[11px] text-[#171A18]">
                        <div className="flex justify-between">
                          <span className="text-[#626862]">Database:</span>
                          <span className="font-medium">SQLite FTS5 Full-Text Index</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#626862]">Index Execution:</span>
                          <span className="font-medium">18 ms on local NVMe disk</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#626862]">Storage Target:</span>
                          <span className="font-medium">%APPDATA%/FamilyVault/vault.db</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
