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
    backgroundColor: "#121212", // very dark grey
    color: "#ededed",        // soft light text (not pure white)
    fontFamily:
      '"Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont',
    fontWeight: 200,
  }}
>
        <main
  style={{
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(-4vh)", // subtle lift
  }}
>
          {children}
        </main>
      </body>
    </html>
  );
}