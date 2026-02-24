import DecryptedText from "./DecryptedText";

const LINES = [
  "Get your business to compete",
  "with competence but",
  "without compromise",
];

export default function Tagline() {
  return (
    <section style={{
      backgroundColor: "#000",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "7rem 2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden",
    }}>
      {/* Eyebrow */}
      <p style={{
        fontSize: 11,
        color: "rgba(255,255,255,0.2)",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        fontFamily: "monospace",
        marginBottom: "2.5rem",
      }}>Our promise</p>

      {/* Decrypted heading lines */}
      <h2 style={{ margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
        {LINES.map((line, i) => (
          <span key={i} style={{ display: "block", marginBottom: i < LINES.length - 1 ? "0.05em" : 0 }}>
            <DecryptedText
              text={line}
              speed={28}
              maxIterations={14}
              sequential={true}
              revealDirection="start"
              animateOn="view"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*!?"
              className={i === LINES.length - 1 ? "tagline-accent" : "tagline-text"}
              encryptedClassName="tagline-scrambled"
            />
          </span>
        ))}
      </h2>

      {/* Subline */}
      <p style={{
        marginTop: "2.5rem",
        fontSize: "1rem",
        color: "rgba(255,255,255,0.35)",
        fontWeight: 300,
        letterSpacing: "0.01em",
      }}>
        We'll get it done as fast as{" "}
        <span style={{ color: "#61dca3", fontWeight: 600 }}>72 hours</span>.
      </p>

      {/* Subtle divider line */}
      <div style={{
        marginTop: "4rem",
        width: 48,
        height: 1,
        backgroundColor: "rgba(255,255,255,0.1)",
      }} />

      <style>{`
        .tagline-text {
          font-size: clamp(2.8rem, 6vw, 6rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.05;
          font-family: inherit;
        }
        .tagline-accent {
          font-size: clamp(2.8rem, 6vw, 6rem);
          font-weight: 900;
          color: #61dca3;
          letter-spacing: -0.03em;
          line-height: 1.05;
          font-family: inherit;
        }
        .tagline-scrambled {
          font-size: clamp(2.8rem, 6vw, 6rem);
          font-weight: 900;
          color: rgba(255,255,255,0.1);
          letter-spacing: -0.03em;
          line-height: 1.05;
          font-family: monospace;
        }
      `}</style>
    </section>
  );
}
