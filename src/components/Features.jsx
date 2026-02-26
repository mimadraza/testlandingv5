import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const SERVICES = [
  {
    id: "web-dev", num: "01",
    title: "Web Development",
    tagline: "Your organisation online — built to compete.",
    desc: "From a simple presence to a fully custom 3D-powered brand site. We build websites that convert, perform, and represent you precisely.",
    tiers: [
      {
        name: "Basic Package",
        price: "200",
        priceNote: "from $",
        stack: "WordPress · Webflow · Shopify",
        highlight: false,
        cta: "Get Started",
        points: [
          "All you need in one place to put your organisation online",
          "Precisely edited to fit your needs",
          "Fast turnaround — live in days",
          "Mobile-responsive layout",
          "Basic SEO setup",
        ],
      },
      {
        name: "E-Commerce",
        price: "450",
        priceNote: "from $",
        stack: "Shopify · WooCommerce",
        highlight: false,
        cta: "Get Started",
        points: [
          "Designed for your industry's needs",
          "Built with foundations to drive high traffic",
          "Free competitor analysis",
          "Optimised for future marketing campaigns",
          "Payment gateway integration",
        ],
      },
      {
        name: "Custom Websites",
        price: "1,500",
        priceNote: "from $",
        stack: "React · Next.js · Three.js",
        highlight: true,
        cta: "Book Consultation",
        points: [
          "Custom-built design to match your look, feel & operations",
          "3D graphics and advanced UI",
          "Tailored admin panel",
          "Stationary designs included",
          "SEO-friendly content",
        ],
      },
    ],
  },
  {
    id: "web-apps", num: "02",
    title: "Web App Development",
    tagline: "Digitise your operations. Run smarter.",
    desc: "We build the internal systems your business actually needs — workflow tools, communication platforms, dashboards, and data pipelines.",
    tiers: [
      {
        name: "Operational Package",
        price: "600",
        priceNote: "from $",
        stack: "Node.js · React · MySQL",
        highlight: false,
        cta: "Start Project",
        points: [
          "Digitise your workflow end-to-end",
          "Optimise operational communication",
          "Record maintenance & data management",
          "Data analysis for operational & marketing needs",
          "User roles & permissions",
        ],
      },
      {
        name: "Custom Package",
        price: "850",
        priceNote: "from $",
        stack: "Tailored to your stack",
        highlight: true,
        cta: "Book Consultation",
        points: [
          "We understand the nature of your work and problems to solve",
          "Scoped precisely to your objectives",
          "Built to scale with your organisation",
          "Custom admin panel",
          "Dedicated project management",
        ],
      },
    ],
  },
  {
    id: "mobile-ai", num: "03",
    title: "Mobile App & AI Development",
    tagline: "From idea to app store. End-to-end.",
    desc: "A decade of experience building and deploying mobile applications — Android, iOS, hybrid, and AI-powered systems that run your operations.",
    tiers: [
      {
        name: "Mobile Applications",
        price: "1,200",
        priceNote: "from $",
        stack: "React Native · Swift · Kotlin",
        highlight: false,
        cta: "Start Project",
        points: [
          "Android, iOS, Windows & Hybrid Applications",
          "End-to-end development & deployment",
          "Built by a team with 10+ years of experience",
          "App store submission included",
        ],
      },
      {
        name: "AI Integration",
        price: "Custom",
        priceNote: "",
        stack: "Claude · GPT-4o · Kimi",
        highlight: true,
        cta: "Book Consultation",
        points: [
          "AI-assisted operations and workflow automation",
          "Intelligent data analysis for your business",
          "Seamlessly integrated into your existing systems",
          "Custom model training & fine-tuning available",
        ],
      },
    ],
  },
];

function TierCard({ t }) {
  return (
    <div style={{
      backgroundColor: t.highlight ? "#fff" : "rgba(255,255,255,0.02)",
      border: `1px solid ${t.highlight ? "#fff" : "rgba(255,255,255,0.08)"}`,
      borderRadius: 10,
      padding: "1.6rem",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      {t.highlight && (
        <div style={{ position: "absolute", top: 14, right: 14 }}>
          <span style={{ fontSize: 9, fontFamily: "monospace", padding: "3px 9px", backgroundColor: t.highlight ? "#000" : "#fff", color: t.highlight ? "#fff" : "#000", borderRadius: 999, letterSpacing: "0.1em" }}>
            Popular
          </span>
        </div>
      )}

      {/* Name + stack */}
      <p style={{ fontSize: 11, color: t.highlight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.25)", fontFamily: "monospace", marginBottom: 4 }}>{t.stack}</p>
      <h4 style={{ fontSize: 15, fontWeight: 700, color: t.highlight ? "#000" : "#fff", marginBottom: 12, letterSpacing: "-0.01em" }}>{t.name}</h4>

      {/* Price */}
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: t.highlight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.2)" }}>{t.priceNote}</span>
        <span style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 900, color: t.highlight ? "#000" : "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>
          {t.price}
        </span>
      </div>

      {/* Features */}
      <ul style={{ listStyle: "none", flex: 1, display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
        {t.points.map((p) => (
          <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <Check size={12} style={{ color: t.highlight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)", flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontSize: 12, color: t.highlight ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.42)", fontWeight: 300, lineHeight: 1.55 }}>{p}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" style={{
        display: "block", textAlign: "center", padding: "10px 16px", borderRadius: 6, fontSize: 12, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em",
        backgroundColor: t.highlight ? "#000" : "transparent",
        color: t.highlight ? "#fff" : "#fff",
        border: t.highlight ? "none" : "1px solid rgba(255,255,255,0.15)",
      }}>
        {t.cta}
      </a>
    </div>
  );
}

function ServiceBlock({ s }) {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 56, paddingBottom: 56 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3.5rem", alignItems: "start" }} className="service-grid">

        {/* Left — description */}
        <div>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em" }}>{s.num}</span>
          <h3 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", margin: "10px 0 12px", lineHeight: 1.1 }}>{s.title}</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.7, marginBottom: 14 }}>{s.desc}</p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontStyle: "italic", marginBottom: 24 }}>{s.tagline}</p>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: 2, fontWeight: 500 }}>
            Get a quote <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Right — pricing cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${s.tiers.length}, 1fr)`, gap: 10 }} className="tier-cards">
          {s.tiers.map((t) => <TierCard key={t.name} t={t} />)}
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
            What we<br /><span style={{ color: "#61dca3" }}>build for you</span>
          </h2>
        </div>
        {SERVICES.map((s) => <ServiceBlock key={s.id} s={s} />)}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .service-grid { grid-template-columns: 1fr !important; }
          .tier-cards { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .tier-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
