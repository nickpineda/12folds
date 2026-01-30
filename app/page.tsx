import Masthead from "./components/Masthead";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Masthead />

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
            maxWidth: "480px",
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}
        >
          <p>Each fold is a decision</p>
          <p>Repetition is refinement</p>
          <p>You don&apos;t need to be perfect</p>

          <br />

          <p>You just need to begin</p>

          <br />

          <p>Twelve folds</p>
          <p>That’s it.</p>
        </section>
      </main>
    </div>
  );
}