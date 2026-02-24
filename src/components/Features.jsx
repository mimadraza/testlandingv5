import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: "web-dev", num: "01",
    title: "Web Development",
    tagline: "Your organisation online — built to compete.",
    desc: "From a simple presence to a fully custom 3D-powered brand site. We build websites that convert, perform, and represent you precisely.",
    tiers: [
      { name: "Basic Package", price: "from $200", stack: "WordPress · Webflow · Shopify",
        points: ["All you need in one place to put your organisation online", "Precisely edited to fit your needs", "Fast turnaround — live in days"] },
      { name: "E-Commerce", price: "from $450", stack: "Shopify · WooCommerce",
        points: ["Designed for your industry's needs", "Built with foundations to drive high traffic", "Free competitor analysis", "Optimised for future marketing campaigns"] },
      { name: "Custom Websites", price: "from $1,500", stack: "React · Next.js · Three.js",
        points: ["Custom-built design to match your look, feel & operations", "3D graphics and advanced UI", "Tailored admin panel", "Stationary designs & SEO-friendly content"] },
    ],
  },
  {
    id: "web-apps", num: "02",
    title: "Web App Development",
    tagline: "Digitise your operations. Run smarter.",
    desc: "We build the internal systems your business actually needs — workflow tools, communication platforms, dashboards, and data pipelines.",
    tiers: [
      { name: "Operational Package", price: "from $600", stack: "Node.js · React · MySQL",
        points: ["Digitise your workflow end-to-end", "Optimise operational communication", "Record maintenance & data management", "Data analysis for operational & marketing needs"] },
      { name: "Custom Package", price: "from $850", stack: "Tailored to your stack",
        points: ["We understand the nature of your work and the problems to solve", "Scoped precisely to your objectives", "Built to scale with your organisation"] },
    ],
  },
  {
    id: "mobile-ai", num: "03",
    title: "Mobile App & AI Development",
    tagline: "From idea to app store. End-to-end.",
    desc: "A decade of experience building and deploying mobile applications — Android, iOS, hybrid, and AI-powered systems that run your operations.",
    tiers: [
      { name: "Mobile Applications", price: "from $1,200", stack: "React Native · Swift · Kotlin",
        points: ["Android, iOS, Windows & Hybrid Applications", "End-to-end development & deployment", "Built by a team with 10+ years of experience"] },
      { name: "AI Integration", price: "Custom", stack: "Claude · GPT-4o · Kimi",
        points: ["AI-assisted operations and workflow automation", "Intelligent data analysis for your business", "Seamlessly integrated into your existing systems"] },
    ],
  },
];

function ServiceBlock({ s }) {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 56, paddingBottom: 56 }}>
      {/* Header row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3rem", alignItems: "start" }} className="service-grid">
        {/* Left */}
        <div>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em" }}>{s.num}</span>
          <h3 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", margin: "10px 0 12px", lineHeight: 1.1 }}>{s.title}</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.7, marginBottom: 14 }}>{s.desc}</p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontStyle: "italic", marginBottom: 20 }}>{s.tagline}</p>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: 2, fontWeight: 500 }}>
            Get a quote <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Right — tiers */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {s.tiers.map((t, i) => (
            <div key={t.name} style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, overflow: "hidden" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 18px", background: open === i ? "rgba(255,255,255,0.05)" : "transparent",
                  border: "none", cursor: "pointer", color: "#fff", textAlign: "left",
                  transition: "background 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{t.stack}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "monospace", whiteSpace: "nowrap" }}>{t.price}</span>
                  <ChevronDown size={15} style={{ color: "rgba(255,255,255,0.3)", transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
                </div>
              </button>
              {open === i && (
                <div style={{ padding: "0 18px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <ul style={{ listStyle: "none", paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                    {t.points.map(p => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.25)", flexShrink: 0, marginTop: 7 }} />
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.6 }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="services" style={{ padding: "5rem 2rem", backgroundColor: "#000" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>Services</p>
          <h2 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
            What we<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>build for you</span>
          </h2>
        </div>
        {SERVICES.map(s => <ServiceBlock key={s.id} s={s} />)}
      </div>
      <style>{`
        @media (max-width: 768px) { .service-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
