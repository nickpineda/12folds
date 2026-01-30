import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          backgroundColor: "#111",
          color: "#cfcfcf",
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont',
          fontWeight: 200,
          margin: 0,
        }}
      >
        {/* Global subtle motion (first load only) */}
        <style>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-up {
            animation: fadeUp 0.7s ease-out both;
          }
        `}</style>

        <div className="fade-up">{children}</div>
      </body>
    </html>
  );
}