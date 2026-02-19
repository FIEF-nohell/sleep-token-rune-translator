import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sleep Token Rune Translator",
  description: "Translate and decode text using the Sleep Token rune alphabet.",
};

const THEME_INIT_SCRIPT = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : "dark";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mono.variable}>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <div className="site-frame">
          <header className="site-header">
            <div className="header-line">
              <span className="header-spacer" aria-hidden="true" />
              <SiteNav />
              <ThemeToggle />
            </div>
          </header>
          <main className="site-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
