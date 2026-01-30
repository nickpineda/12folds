import Masthead from "../components/Masthead";

export default function About() {
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
            maxWidth: "520px",
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}
        >
          <p>
            12folds is an ongoing studio practice built around
            repetition and attention.
          </p>
          <p>
            The process matters as much as the result.
          </p>
        </section>
      </main>
    </div>
  );
}