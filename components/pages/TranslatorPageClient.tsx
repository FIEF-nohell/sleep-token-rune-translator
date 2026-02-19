"use client";

import { useMemo, useState } from "react";
import { LayoutModeToggle, type LayoutMode } from "@/components/Controls";
import { RuneRenderer } from "@/components/RuneRenderer";
import { normalizeInput } from "@/lib/alphabet";

export function TranslatorPageClient() {
  const [inputText, setInputText] = useState("");
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("column");

  const normalizedText = useMemo(
    () => normalizeInput(inputText, { keepSpaces: true }),
    [inputText],
  );

  const tokens = useMemo(() => normalizedText.split(""), [normalizedText]);

  function handleLayoutModeChange(mode: LayoutMode) {
    setLayoutMode(mode);
  }

  function clearAll() {
    setInputText("");
  }

  return (
    <div className="page-column">
      <h1 className="page-title">Sleep Token Rune Translator</h1>

      <section className="input-section">
        <label className="visually-hidden" htmlFor="translator-input">
          Translator input
        </label>
        <textarea
          id="translator-input"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          rows={5}
          placeholder="enter latin text..."
        />
      </section>

      <section className="controls-block">
        <div className="controls-line">
          <LayoutModeToggle mode={layoutMode} onChange={handleLayoutModeChange} />
          <button type="button" className="action-link" onClick={clearAll}>
            clear
          </button>
        </div>
      </section>

      <section className="rune-output" aria-label="Rune output">
        <RuneRenderer tokens={tokens} layoutMode={layoutMode} emptyMessage="" />
      </section>
    </div>
  );
}
