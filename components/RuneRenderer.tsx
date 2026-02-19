"use client";

import type { CSSProperties } from "react";
import { runeUrl } from "@/lib/alphabet";
import { toColumns } from "@/lib/layout";
import type { LayoutMode } from "./Controls";

type RuneRendererProps = {
  tokens: string[];
  layoutMode: LayoutMode;
  columnHeight?: number;
  emptyMessage?: string;
};

function RuneGlyph({ token }: { token: string }) {
  return (
    <span
      className="rune-glyph"
      role="img"
      aria-label={`Rune ${token.toUpperCase()}`}
      style={
        {
          "--rune-url": `url(${runeUrl(token)})`,
        } as CSSProperties
      }
    />
  );
}

export function RuneRenderer({
  tokens,
  layoutMode,
  columnHeight = Number.POSITIVE_INFINITY,
  emptyMessage = "No runes yet.",
}: RuneRendererProps) {
  if (tokens.length === 0) {
    return <p className="rune-empty">{emptyMessage}</p>;
  }

  if (layoutMode === "row") {
    return (
      <div className="rune-row" aria-live="polite">
        {tokens.map((token, index) =>
          token === " " ? (
            <span className="rune-inline-gap" key={`space-${index}`} aria-hidden="true" />
          ) : (
            <RuneGlyph key={`${token}-${index}`} token={token} />
          ),
        )}
      </div>
    );
  }

  const columns = toColumns(tokens, columnHeight);

  return (
    <div className="rune-columns" aria-live="polite">
      {columns.map((column, columnIndex) => (
        <div className="rune-column" key={`column-${columnIndex}`}>
          {column.map((token, rowIndex) => (
            <span className="rune-slot" key={`cell-${columnIndex}-${rowIndex}`}>
              {token === " " ? (
                <span className="rune-space-cell" aria-hidden="true" />
              ) : (
                <RuneGlyph token={token} />
              )}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
