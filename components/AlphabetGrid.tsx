"use client";

import type { CSSProperties } from "react";
import { LETTERS, runeUrl } from "@/lib/alphabet";

type AlphabetGridProps = {
  onSelectLetter?: (letter: string) => void;
};

export function AlphabetGrid({ onSelectLetter }: AlphabetGridProps) {
  return (
    <div className="alphabet-grid">
      {LETTERS.map((letter) => {
        const label = letter.toUpperCase();

        if (onSelectLetter) {
          return (
            <button
              key={letter}
              type="button"
              className="alphabet-button"
              onClick={() => onSelectLetter(letter)}
              aria-label={`Add ${label}`}
            >
              <span
                className="rune-glyph"
                aria-hidden="true"
                style={
                  {
                    "--rune-url": `url(${runeUrl(letter)})`,
                  } as CSSProperties
                }
              />
              <span className="alphabet-letter">{label}</span>
            </button>
          );
        }

        return (
          <div key={letter} className="alphabet-item">
            <span
              className="rune-glyph"
              aria-hidden="true"
              style={
                {
                  "--rune-url": `url(${runeUrl(letter)})`,
                } as CSSProperties
              }
            />
            <span className="alphabet-letter">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
