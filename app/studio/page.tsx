import Link from "next/link";

export default function Studio() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* TOP-LEFT BRAND (mirrored from home) */}
    <header
  style={{
    position: "fixed",
    top: "3rem",
    left: "1.5rem",
    zIndex: 10,
  }}
>
  {/* 12folds */}
  <Link
    href="/"
    style={{
      textDecoration: "none",
      color: "#b8b8b8",
    }}
  >
    <h1
      style={{
        fontSize: "1.75rem",
        fontWeight: 200,
        margin: 0,
      }}
    >
      12folds
    </h1>
  </Link>

  {/* NAV STACK (Studio, About, IG) */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      marginTop: "0.35rem",
      marginLeft: "0.15rem",
      gap: "0.25rem",
      alignItems: "flex-start",
    }}
  >
    <Link
      href="/studio"
      style={{
        fontSize: "0.85rem",
        fontWeight: 200,
        color: "#9e9e9e",
        textDecoration: "none",
      }}
    >
      Studio
    </Link>

    <Link
      href="/about"
      style={{
        fontSize: "0.85rem",
        fontWeight: 200,
        color: "#9e9e9e",
        textDecoration: "none",
      }}
    >
      About
    </Link>

    {/* Instagram — now truly aligned */}
    <a
      href="https://instagram.com/12folds"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="12folds on Instagram"
      style={{
        marginTop: "0.35rem",
        width: "16px",
        color: "#7f7f7f",
        textDecoration: "none",
        lineHeight: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    </a>
  </div>
</header>

      {/* CENTER CONTENT — STUDIO */}
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateY(-4vh)",
        }}
      >
        <section
          style={{
            textAlign: "center",
            maxWidth: "520px",
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}
        >
          <p>
            12folds
          
          </p>
        </section>
      </main>
    </div>
  );
}