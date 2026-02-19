import type { Metadata } from "next";
import { DecodePageClient } from "@/components/pages/DecodePageClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Decode | ${siteConfig.name}`,
  },
  description:
    "Use the rune picker to build Sleep Token rune sequences and decode them to Latin letters.",
  alternates: {
    canonical: "/decode",
  },
};

export default function DecodePage() {
  return <DecodePageClient />;
}
