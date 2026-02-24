const PLATFORMS = [
  { cat: "Web Platforms", items: ["WordPress","Webflow","Shopify","WooCommerce"] },
  { cat: "Frontend", items: ["React","Next.js","Three.js","Tailwind CSS"] },
  { cat: "Backend", items: ["Node.js","Express","Go (Golang)","Rust"] },
  { cat: "Data & Infra", items: ["MySQL","MongoDB","PostgreSQL","WebSockets"] },
  { cat: "Mobile", items: ["React Native","Swift","Kotlin","Hybrid"] },
  { cat: "AI Models", items: ["Claude","GPT-4o","Kimi","Custom LLM"] },
];

export default function TechStack() {
  return (
    <section id="tech-stack" style={{ padding: "5rem 2rem", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>Featured Platforms</p>
            <h2 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
              What we<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>build with</span>
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 300, maxWidth: 280, lineHeight: 1.7 }}>
            We don't chase trends — we choose what works best for your specific requirements.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 2 }} className="tech-grid">
          {PLATFORMS.map(p => (
            <div key={p.cat} style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "1.5rem" }}>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>{p.cat}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {p.items.map(item => (
                  <li key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:1024px){.tech-grid{grid-template-columns:repeat(3,1fr)!important;}}@media(max-width:600px){.tech-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
