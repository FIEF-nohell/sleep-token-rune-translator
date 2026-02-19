"use client";

import { useMemo, useState } from "react";
import { AlphabetGrid } from "@/components/AlphabetGrid";
import { LayoutModeToggle, type LayoutMode } from "@/components/Controls";
import { RuneRenderer } from "@/components/RuneRenderer";

export function DecodePageClient() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("column");
  const [copyMessage, setCopyMessage] = useState("");

  const decodedText = useMemo(() => sequence.join(""), [sequence]);

  function appendLetter(letter: string) {
    setSequence((current) => [...current, letter]);
    setCopyMessage("");
  }

  function backspace() {
    setSequence((current) => current.slice(0, -1));
    setCopyMessage("");
  }

  function clear() {
    setSequence([]);
    setCopyMessage("");
  }

  async function copyDecodedText() {
    try {
      await navigator.clipboard.writeText(decodedText);
      setCopyMessage("copied");
    } catch {
      setCopyMessage("clipboard unavailable");
    }
  }

  return (
    <div className="page-column">
      <h1 className="page-title">Rune Picker Decoder</h1>

      <section className="controls-block">
        <div className="controls-line">
          <LayoutModeToggle mode={layoutMode} onChange={setLayoutMode} />
        </div>
      </section>

      <section className="picker-block" aria-label="Rune picker">
        <AlphabetGrid onSelectLetter={appendLetter} />
      </section>

      <section className="rune-output decode-output" aria-label="Selected runes">
        <RuneRenderer
          tokens={sequence}
          layoutMode={layoutMode}
          emptyMessage="select runes to begin."
        />
      </section>

      <p className="meta-line">decoded: {decodedText || "-"}</p>

      <section className="actions-line">
        <button
          type="button"
          className="action-link"
          onClick={backspace}
          disabled={sequence.length === 0}
        >
          backspace
        </button>
        <button
          type="button"
          className="action-link"
          onClick={clear}
          disabled={sequence.length === 0}
        >
          clear
        </button>
        <button type="button" className="action-link" onClick={copyDecodedText}>
          copy decoded text
        </button>
        {copyMessage && <span className="meta-feedback">{copyMessage}</span>}
      </section>
    </div>
  );
}
