export const LETTERS = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index),
);

export type NormalizeOptions = {
  keepSpaces: boolean;
};

export function normalizeInput(text: string, options: NormalizeOptions): string {
  const lower = text.toLowerCase();
  const filtered = lower.replace(options.keepSpaces ? /[^a-z\s]+/g : /[^a-z]+/g, "");

  if (options.keepSpaces) {
    return filtered.replace(/\s+/g, " ").trim();
  }

  return filtered.replace(/\s+/g, "");
}

export function runeUrl(letter: string): string {
  return `/runes/${letter}.svg`;
}
