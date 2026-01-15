export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top-left brand */}
  <header
  style={{
    position: "absolute",
    letterSpacing: "0.03em",
    top: "3rem",
    left: "1.5rem",
  }}
>
  <h1
    style={{
      fontSize: "1.75rem",
      fontWeight: 200,
      margin: 0,
      color: "#cfcfcf", // slightly dimmer than body text
    }}
  >
    12folds
  </h1>
</header>
<a
  href="https://www.instagram.com/12folds/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "absolute",
    top: "3.67rem",
    left: "8rem",
    color: "#bdbdbd",
    opacity: 0.85,
transition: "opacity 0.2s ease",
    textDecoration: "none",
  }}
  aria-label="12folds on Instagram"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
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

      {/* Centered content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <section
  style={{
    fontSize: "1.3rem",
    textAlign: "center",
    opacity: 0.85,
    maxWidth: "480px",
    lineHeight: 1.8,
  }}
>
          <p>Each fold is a decision</p>
          <p>Repetition is refinement</p>
          <p>You don&apos;t need to be perfect</p>
          <p>You just need to begin</p>

          <p>Twelve folds</p>
          <p>That’s it.</p>
        </section>
      </main>
    </div>
  );
}