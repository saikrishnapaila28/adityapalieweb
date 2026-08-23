import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = "Aditya Palei — Customer Service Executive";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          backgroundColor: "#05080D",
          backgroundImage:
            "radial-gradient(circle at 80% 25%, rgba(74, 144, 226, 0.25) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(110, 132, 146, 0.18) 0%, transparent 65%)",
          color: "#EEEEEE",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Top Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#EEEEEE",
            }}
          >
            Aditya.Palei
          </div>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#4a90e2",
            }}
          />
        </div>

        {/* Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#4a90e2",
              textTransform: "uppercase",
            }}
          >
            Customer Service Executive • Voice &amp; Email Support
          </div>

          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            Aditya Palei
          </div>

          <div
            style={{
              fontSize: "22px",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#B5B5B5",
              marginTop: "8px",
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.10)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "16px",
              color: "#8FA3B5",
            }}
          >
            <span>Concentrix Experience</span>
            <span>•</span>
            <span>Top CSAT &amp; FCR Ratings</span>
            <span>•</span>
            <span>CRM Proficiency</span>
          </div>

          <div
            style={{
              fontSize: "16px",
              color: "#4a90e2",
              fontWeight: 500,
            }}
          >
            adityapalei.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
