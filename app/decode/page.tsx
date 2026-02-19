import type { Metadata } from "next";
import { DecodePageClient } from "@/components/pages/DecodePageClient";

export const metadata: Metadata = {
  title: "Decode",
  description:
    "Use the rune picker to build Sleep Token rune sequences and decode them to Latin letters.",
  alternates: {
    canonical: "/decode",
  },
};

export default function DecodePage() {
  return <DecodePageClient />;
}
