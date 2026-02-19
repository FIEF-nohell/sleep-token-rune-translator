import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 675,
};
export const contentType = "image/png";
export const alt = `${siteConfig.name} Twitter preview`;

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#e4ddd5",
          color: "#383530",
          padding: "58px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        }}
      >
        <div
          style={{
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#6f655c",
          }}
        >
          Sleep Token Rune Translator
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 56,
              letterSpacing: "0.03em",
              lineHeight: 1.1,
            }}
          >
            Editorial Rune Tool
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#6f655c",
            }}
          >
            Translator, decoder, and alphabet reference in one focused interface.
          </div>
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#b03a2e",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          built for launch
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
