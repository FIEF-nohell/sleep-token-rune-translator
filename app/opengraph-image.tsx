import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = `${siteConfig.name} social preview`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#383530",
          color: "#e4ddd5",
          padding: "64px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Sleep Token Tool
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              letterSpacing: "0.03em",
              lineHeight: 1.1,
            }}
          >
            Rune Translator
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#b7aea4",
            }}
          >
            Translate, decode, and reference the full A-Z rune mapping.
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#b03a2e",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          / decode / alphabet
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
