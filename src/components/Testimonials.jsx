const REVIEWS = [
  { name: "Tariq M.", role: "Director, Private School Group",
    content: "They built our entire student portal — admissions, attendance, parent notifications — in under two weeks. The system is exactly what we described in the brief. Nothing more, nothing less." },
  { name: "Hina R.", role: "Operations Manager, Healthcare Clinic",
    content: "Our appointment system and patient records are now fully digital. The transition was seamless and the team was available every step of the way. Pricing was transparent from day one." },
  { name: "Usman K.", role: "Founder, Retail Chain",
    content: "We needed inventory, billing, and an e-commerce front — all integrated. AmicoTechs delivered all three in one system. Fast, works perfectly, and our staff picked it up immediately." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "5rem 2rem", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "4rem", alignItems: "start" }} className="reviews-grid">

          {/* Left */}
          <div style={{ position: "sticky", top: 100 }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>Reviews</p>
            <h2 style={{ fontSize: "clamp(2.4rem,4vw,3.5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
              What our<br /><span style={{ color: "#61dca3" }}>clients say</span>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 300, marginTop: 20, lineHeight: 1.7, maxWidth: 260 }}>
              Straight up feedback from organisations we've built for.
            </p>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "1.8rem" }}>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.52)", fontWeight: 300, lineHeight: 1.75, marginBottom: 20 }}>"{r.content}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>{r.name[0]}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{r.name}</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", fontWeight: 300 }}>{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.reviews-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
