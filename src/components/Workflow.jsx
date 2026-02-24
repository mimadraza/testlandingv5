const STEPS = [
  { n: "01", title: "Understanding Your Requirements",
    desc: "We understand what you require and what your software needs to do for you. After getting the details we decide on a product that best suits your needs." },
  { n: "02", title: "Onboarding & Kick Off",
    desc: "A scope of work is drawn including all actions required to design, develop and deploy your software — with all associated costs. Complete transparency, no hidden charges." },
  { n: "03", title: "Mapping & Design",
    desc: "We map out the project and timelines for each milestone and get the final designs approved from you before a line of code is written." },
  { n: "04", title: "Development",
    desc: "We develop the software itself with regular check-ins. You're never left wondering what's happening." },
  { n: "05", title: "Deployment & Testing",
    desc: "We deploy the software and test it alongside you to make sure everything is operational exactly as you want it." },
];

export default function Workflow() {
  return (
    <section id="workflow" style={{ padding: "5rem 2rem", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>Our Workflow</p>
            <h2 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
              How we<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>get it done</span>
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 300, maxWidth: 280, lineHeight: 1.7 }}>
            Clear, collaborative, and built around your timelines — from brief to deployment.
          </p>
        </div>

        {/* Steps */}
        {STEPS.map((s) => (
          <div key={s.n} style={{ display: "flex", gap: 32, alignItems: "flex-start", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 0", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "monospace", fontSize: 12, color: "rgba(255,255,255,0.18)", letterSpacing: "0.15em", minWidth: 36, paddingTop: 2 }}>{s.n}</span>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{ fontSize: "clamp(1rem,1.5vw,1.15rem)", fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "-0.01em" }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.75, maxWidth: 620 }}>{s.desc}</p>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 28px", backgroundColor: "#fff", color: "#000", fontSize: 14, fontWeight: 600, borderRadius: 6, textDecoration: "none" }}>
            Start your project →
          </a>
        </div>
      </div>
    </section>
  );
}
