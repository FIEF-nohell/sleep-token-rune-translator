# Sleep Token Rune Translator

A minimal web tool for:
- Translating Latin text into Sleep Token runes
- Decoding rune sequences back to letters
- Viewing the full A-Z rune mapping

No account, no login, no setup needed for normal use.

## Pages

### Translator (`/`)
Type text and see runes live.

- `layout: row | column`
- `clear` resets the current input

Behavior:
- Letters are normalized to lowercase.
- Spaces are preserved.
- In `column` mode, a space starts a new column.

### Decode (`/decode`)
Click rune letters to build a sequence.

- Live rune sequence preview
- Live decoded text
- Actions: `backspace`, `clear`, `copy decoded text`

### Alphabet (`/alphabet`)
Reference sheet for the full rune alphabet (A-Z).

## Layout Modes

- `row`: runes flow left to right, wrapping naturally
- `column`: runes stack top to bottom; spaces force the next column

## Theme

- Light mode is the default.
- Dark mode is available from the header switch (hidden on mobile).

## Privacy

This tool runs entirely in your browser.
No user text is sent to an external API by the app itself.

## Quick Tips

- Paste text directly into Translator for fast conversion.
- Use spaces in column mode to control grouping visually.
- Use Decode when you want to reconstruct text rune-by-rune.
