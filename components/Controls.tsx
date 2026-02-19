"use client";

export type LayoutMode = "row" | "column";

type LayoutModeToggleProps = {
  mode: LayoutMode;
  onChange: (mode: LayoutMode) => void;
};

export function LayoutModeToggle({ mode, onChange }: LayoutModeToggleProps) {
  return (
    <div className="inline-control">
      <span className="inline-label">layout:</span>
      <button
        type="button"
        className={`inline-option ${mode === "row" ? "is-active" : ""}`}
        onClick={() => onChange("row")}
        aria-pressed={mode === "row"}
      >
        row
      </button>
      <span className="inline-divider" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className={`inline-option ${mode === "column" ? "is-active" : ""}`}
        onClick={() => onChange("column")}
        aria-pressed={mode === "column"}
      >
        column
      </button>
    </div>
  );
}
