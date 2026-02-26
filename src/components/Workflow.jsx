import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const STEPS = [
  {
    n: "01",
    title: "Understanding Your Requirements",
    desc: "We understand what you require and what your software needs to do for you. After getting the details we decide on a product that best suits your needs.",
    tag: "Discovery",
    accent: "#61dca3",
    detail: "1–2 days",
  },
  {
    n: "02",
    title: "Onboarding & Kick Off",
    desc: "A scope of work is drawn including all actions required to design, develop and deploy your software — with all associated costs. Complete transparency, no hidden charges.",
    tag: "Planning",
    accent: "#fff",
    detail: "Same day",
  },
  {
    n: "03",
    title: "Mapping & Design",
    desc: "We map out the project and timelines for each milestone and get the final designs approved from you before a line of code is written.",
    tag: "Design",
    accent: "#61dca3",
    detail: "2–4 days",
  },
  {
    n: "04",
    title: "Development",
    desc: "We develop the software itself with regular check-ins. You're never left wondering what's happening — full visibility throughout.",
    tag: "Build",
    accent: "#fff",
    detail: "Varies",
  },
  {
    n: "05",
    title: "Deployment & Testing",
    desc: "We deploy the software and test it alongside you to make sure everything is operational exactly as you want it. You go live with confidence.",
    tag: "Launch",
    accent: "#61dca3",
    detail: "24–48 hrs",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      style={{
        backgroundColor: "#000",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "5rem 0 0",
      }}
    >
      {/* Section header */}
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 2rem",
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48,
      }}>
        <div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>
            Our Workflow
          </p>
          <h2 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
            How we<br /><span style={{ color: "#61dca3" }}>get it done</span>
          </h2>
        </div>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 300, maxWidth: 280, lineHeight: 1.7 }}>
          Clear, collaborative, and built around your timelines — from brief to deployment.
        </p>
      </div>

      {/* ScrollStack — useWindowScroll so page scroll continues normally */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={140}
        itemScale={0.04}
        itemStackDistance={28}
        stackPosition="18%"
        scaleEndPosition="8%"
        baseScale={0.82}
        blurAmount={1.5}
      >
        {STEPS.map((step) => (
          <ScrollStackItem key={step.n}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
                minHeight: "22rem",
              }}
              className="workflow-card-grid"
            >
              {/* Left */}
              <div style={{
                padding: "3rem",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <div>
                  <span style={{
                    fontFamily: "monospace", fontSize: 11,
                    color: "rgba(255,255,255,0.18)", letterSpacing: "0.2em",
                    textTransform: "uppercase", display: "block", marginBottom: "1.5rem",
                  }}>
                    Step {step.n}
                  </span>
                  <h3 style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 800,
                    color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0,
                  }}>
                    {step.title}
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    fontSize: 11, fontFamily: "monospace", padding: "4px 14px",
                    border: `1px solid ${step.accent === "#61dca3" ? "rgba(97,220,163,0.3)" : "rgba(255,255,255,0.15)"}`,
                    borderRadius: 999, color: step.accent,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>
                    {step.tag}
                  </span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>
                    ~{step.detail}
                  </span>
                </div>
              </div>

              {/* Right */}
              <div style={{
                padding: "3rem", display: "flex",
                flexDirection: "column", justifyContent: "space-between",
                position: "relative", overflow: "hidden",
              }}>
                <p style={{
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  color: "rgba(255,255,255,0.45)", fontWeight: 300,
                  lineHeight: 1.8, maxWidth: 420, margin: 0,
                }}>
                  {step.desc}
                </p>

                {/* Ghost number watermark */}
                <div style={{
                  position: "absolute", bottom: "-1rem", right: "1.5rem",
                  fontSize: "clamp(6rem, 10vw, 9rem)", fontWeight: 900,
                  color: "rgba(255,255,255,0.03)", fontFamily: "monospace",
                  letterSpacing: "-0.05em", lineHeight: 1,
                  userSelect: "none", pointerEvents: "none",
                }}>
                  {step.n}
                </div>

                {/* Accent dot */}
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  backgroundColor: step.accent,
                  opacity: step.accent === "#61dca3" ? 0.8 : 0.3,
                  marginTop: "auto",
                }} />
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      {/* CTA */}
      <div style={{
        maxWidth: 1280, margin: "2rem auto 0",
        padding: "3rem 2rem 5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <a href="#contact" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "13px 28px", backgroundColor: "#fff", color: "#000",
          fontSize: 14, fontWeight: 600, borderRadius: 6, textDecoration: "none",
        }}>
          Start your project →
        </a>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .workflow-card-grid { grid-template-columns: 1fr !important; }
          .workflow-card-grid > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
        }
      `}</style>
    </section>
  );
}
