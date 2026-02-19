import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#383530",
          color: "#e4ddd5",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          fontSize: 74,
          letterSpacing: "-0.06em",
        }}
      >
        ST
      </div>
    ),
    {
      width: 192,
      height: 192,
    },
  );
}
