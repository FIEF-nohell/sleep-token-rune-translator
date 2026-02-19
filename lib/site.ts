const FALLBACK_SITE_URL = "https://sleep-token-runes.example.com";

export const siteConfig = {
  name: "Sleep Token Rune Translator",
  shortName: "Rune Translator",
  description:
    "Translate Latin text into Sleep Token runes, decode rune sequences, and browse the complete rune alphabet sheet.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL,
  locale: "en_US",
  theme: {
    light: "#e4ddd5",
    dark: "#383530",
  },
  keywords: [
    "Sleep Token",
    "rune translator",
    "rune decoder",
    "substitution cipher",
    "Sleep Token alphabet",
    "runes",
    "fan tool",
    "text translator",
  ],
  routes: [
    {
      path: "/",
      title: "Translator",
      description: "Live Sleep Token rune translator with row and column reading modes.",
      priority: 1,
      changeFrequency: "daily" as const,
    },
    {
      path: "/decode",
      title: "Decode",
      description: "Click runes to build a sequence and decode it back to Latin letters.",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/alphabet",
      title: "Alphabet",
      description: "Reference sheet for the full A-Z Sleep Token rune mapping.",
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
  ],
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
