const METRICS = [
  { value: "2019", label: "Founded" },
  { value: "72h", label: "Average Delivery" },
  { value: "3", label: "Industry Verticals" },
  { value: "0", label: "Hidden Charges" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "5rem 2rem", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="about-grid">

          {/* Left */}
          <div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>About</p>
            <h2 style={{ fontSize: "clamp(2.8rem,5vw,4rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, marginBottom: 28 }}>
              Crafted Tech
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", fontWeight: 300, lineHeight: 1.8 }}>
                Welcome to Crafted Tech — where we pioneer transformative solutions that redefine industries. Since 2019, our team has continuously evolved through strategic innovation and the ongoing development of our technological expertise.
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", fontWeight: 300, lineHeight: 1.8 }}>
                We are committed to investing in cutting-edge technology and exceptional talent to address complex business challenges. Our diverse team is our strength, allowing us to deliver impactful and lasting value to our stakeholders.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                No jargon. No hidden charges. Straight up work — so you can hit the ground running.
              </p>
            </div>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 32, padding: "13px 28px", backgroundColor: "#fff", color: "#000", fontSize: 14, fontWeight: 600, borderRadius: 6, textDecoration: "none" }}>
              Work with us →
            </a>
          </div>

          {/* Right */}
          <div>
            {/* Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 8 }}>
              {METRICS.map(m => (
                <div key={m.label} style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "1.8rem" }}>
                  <p style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", margin: 0, lineHeight: 1 }}>{m.value}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 300, marginTop: 8 }}>{m.label}</p>
                </div>
              ))}
            </div>
            {/* Principles */}
            <div style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "1.5rem" }}>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>Our Principles</p>
              {["Compete with competence, without compromise","End-to-end coverage of development & deployment","Seamless deployment — from scope to live system","Built to solve your actual operational problems"].map(p => (
                <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0, marginTop: 6 }} />
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", fontWeight: 300, lineHeight: 1.6 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
