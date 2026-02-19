import type { Metadata } from "next";
import { AlphabetGrid } from "@/components/AlphabetGrid";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Alphabet | ${siteConfig.name}`,
  },
  description: "Browse the complete A-Z Sleep Token rune alphabet mapping sheet.",
  alternates: {
    canonical: "/alphabet",
  },
};

export default function AlphabetPage() {
  return (
    <div className="page-column">
      <h1 className="page-title">Rune Alphabet</h1>
      <section className="picker-block" aria-label="Alphabet mapping">
        <AlphabetGrid />
      </section>
    </div>
  );
}
