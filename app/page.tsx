import type { Metadata } from "next";
import { TranslatorPageClient } from "@/components/pages/TranslatorPageClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.name,
  },
  description: "Translate Latin text into Sleep Token runes with live row or column output.",
  alternates: {
    canonical: "/",
  },
};

export default function TranslatorPage() {
  return <TranslatorPageClient />;
}
