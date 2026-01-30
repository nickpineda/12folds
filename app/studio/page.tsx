import Masthead from "../components/Masthead";

export default function Studio() {
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
            This space holds experiments, ideas, and works in
            progress.
          </p>
        </section>
      </main>
    </div>
  );
}