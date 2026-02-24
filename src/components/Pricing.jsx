const PLANS = [
  {
    name: "Web Presence", price: "200",
    desc: "Get your organisation online, fast and precisely.",
    features: ["Clean, conversion-focused design","Mobile-responsive layout","WordPress · Webflow · Shopify","Up to 5 pages","Basic SEO setup","Contact form integration"],
    highlight: false, cta: "Get Started",
  },
  {
    name: "Business Operations", price: "600",
    desc: "Digitise your workflow and run smarter.",
    features: ["Workflow digitisation","Communication optimisation","Record management system","Data analytics dashboard","User roles & permissions","Custom admin panel"],
    highlight: true, cta: "Start Project",
  },
  {
    name: "Custom Enterprise", price: "1,500",
    desc: "Tailored systems for high-performance organisations.",
    features: ["Fully custom design & UX","3D visuals & advanced UI","Mobile app (iOS / Android)","E-commerce & payment systems","SEO-optimised content","End-to-end development & deployment","Long-term support"],
    highlight: false, cta: "Book Consultation",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "5rem 2rem", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>Pricing</p>
          <h2 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
            Simple pricing.<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>Nothing hidden.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }} className="pricing-grid">
          {PLANS.map(p => (
            <div key={p.name} style={{
              backgroundColor: p.highlight ? "#fff" : "rgba(255,255,255,0.02)",
              border: `1px solid ${p.highlight ? "#fff" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 10, padding: "2.2rem",
              display: "flex", flexDirection: "column",
              position: "relative",
            }}>
              {p.highlight && (
                <div style={{ position: "absolute", top: 16, right: 16 }}>
                  <span style={{ fontSize: 10, fontFamily: "monospace", padding: "3px 10px", backgroundColor: "#000", color: "#fff", borderRadius: 999, letterSpacing: "0.1em" }}>Popular</span>
                </div>
              )}
              <h3 style={{ fontSize: 16, fontWeight: 700, color: p.highlight ? "#000" : "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>{p.name}</h3>
              <p style={{ fontSize: 12, color: p.highlight ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.35)", fontWeight: 300, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 12, color: p.highlight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.25)" }}>from $</span>
                <span style={{ fontSize: "clamp(3rem,5vw,4rem)", fontWeight: 900, color: p.highlight ? "#000" : "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{p.price}</span>
              </div>
              <ul style={{ listStyle: "none", flex: 1, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ fontSize: 12, color: p.highlight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)", marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 13, color: p.highlight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.45)", fontWeight: 300 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                display: "block", textAlign: "center", padding: "12px 20px", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none", letterSpacing: "0.03em",
                backgroundColor: p.highlight ? "#000" : "transparent",
                color: p.highlight ? "#fff" : "#fff",
                border: p.highlight ? "none" : "1px solid rgba(255,255,255,0.15)",
              }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: 14, marginTop: 28, fontWeight: 300 }}>
          Need something specific?{" "}
          <a href="mailto:info@amicotechs.com" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline", textUnderlineOffset: 4 }}>Let's talk</a>
        </p>
      </div>
      <style>{`@media(max-width:900px){.pricing-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
