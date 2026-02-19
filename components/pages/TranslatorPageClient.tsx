"use client";

import { useMemo, useState } from "react";
import { LayoutModeToggle, type LayoutMode } from "@/components/Controls";
import { RuneRenderer } from "@/components/RuneRenderer";
import { normalizeInput } from "@/lib/alphabet";

export function TranslatorPageClient() {
  const [inputText, setInputText] = useState("");
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("column");
  const [copyMessage, setCopyMessage] = useState("");

  const normalizedText = useMemo(
    () => normalizeInput(inputText, { keepSpaces: true }),
    [inputText],
  );

  const tokens = useMemo(() => normalizedText.split(""), [normalizedText]);

  function handleLayoutModeChange(mode: LayoutMode) {
    setLayoutMode(mode);
  }

  async function copyNormalizedText() {
    try {
      await navigator.clipboard.writeText(normalizedText);
      setCopyMessage("copied");
    } catch {
      setCopyMessage("clipboard unavailable");
    }
  }

  function clearAll() {
    setInputText("");
    setCopyMessage("");
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
          onChange={(event) => {
            setInputText(event.target.value);
            setCopyMessage("");
          }}
          rows={5}
          placeholder="enter latin text..."
        />
      </section>

      <section className="controls-block">
        <div className="controls-line">
          <LayoutModeToggle mode={layoutMode} onChange={handleLayoutModeChange} />
        </div>
      </section>

      <section className="actions-line">
        <button type="button" className="action-link" onClick={copyNormalizedText}>
          copy normalized text
        </button>
        <button type="button" className="action-link" onClick={clearAll}>
          clear
        </button>
        {copyMessage && <span className="meta-feedback">{copyMessage}</span>}
      </section>

      <section className="rune-output" aria-label="Rune output">
        <RuneRenderer
          tokens={tokens}
          layoutMode={layoutMode}
          emptyMessage="type to render runes."
        />
      </section>
    </div>
  );
}
