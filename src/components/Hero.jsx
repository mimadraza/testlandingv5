import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import LetterGlitch from "./LetterGlitch";

const AI_MODELS = ["Claude", "GPT-4o", "Kimi"];

const STATS = [
  { label: "Web Development", sub: "from $200" },
  { label: "Web Apps", sub: "from $600" },
  { label: "Mobile Apps", sub: "from $1,200" },
  { label: "End-to-End Deploy", sub: "Included" },
];

export default function Hero() {
  const [modelIndex, setModelIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setModelIndex(i => (i + 1) % AI_MODELS.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      position: "relative", minHeight: "100vh", width: "100%",
      backgroundColor: "#000", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />
      </div>

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.88) 100%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2, width: "100%",
        maxWidth: 1280, margin: "0 auto", padding: "7rem 2rem 4rem",
      }}>
        {/* AI badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300 }}>
            Powered by
          </span>
          <span style={{
            fontSize: 11, fontFamily: "monospace", padding: "3px 14px",
            border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999,
            color: "rgba(255,255,255,0.65)", transition: "opacity 0.3s ease",
            opacity: visible ? 1 : 0,
          }}>
            {AI_MODELS[modelIndex]}
          </span>
        </div>

        {/* Two-col grid */}
        <div className="hero-grid">
          {/* LEFT */}
          <div>
            <h1 style={{
              fontSize: "clamp(3rem, 5.5vw, 5.5rem)", fontWeight: 900,
              lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff",
              margin: "0 0 1.5rem 0",
            }}>
              <span style={{ display: "block" }}>Effective.</span>
              <span style={{ display: "block" }}>Efficient.</span>
              <span style={{ display: "block", color: "#61dca3" }}>Operations.</span>
            </h1>

            <p style={{
              color: "rgba(255,255,255,0.45)", fontSize: "1rem", fontWeight: 300,
              lineHeight: 1.75, maxWidth: 400, margin: "0 0 1rem 0",
            }}>
              AI-run, end-to-end digital systems for your organisation.
              From your first website to full operational infrastructure.
            </p>

            {/* Value props */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {["No jargon", "No hidden charges", "Straight up work"].map(v => (
                <span key={v} style={{
                  fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", display: "inline-block" }} />
                  {v}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", backgroundColor: "#61dca3", color: "#000",
                fontSize: 14, fontWeight: 600, borderRadius: 6, textDecoration: "none",
                letterSpacing: "0.02em",
              }}>
                Get it done in 72h <ArrowRight size={15} />
              </a>
              <a href="#services" style={{
                display: "inline-flex", alignItems: "center",
                padding: "13px 28px", border: "1px solid rgba(255,255,255,0.15)",
                backgroundColor: "#fff", color: "#000", fontSize: 14,
                fontWeight: 600, borderRadius: 6, textDecoration: "none",
              }}>
                See our services
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {/* 72h card */}
            <div style={{
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12,
              padding: "2rem", backgroundColor: "rgba(255,255,255,0.03)", textAlign: "center",
            }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.22)", textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 8, fontWeight: 300 }}>
                Average Delivery
              </p>
              <p style={{ fontSize: "clamp(4.5rem, 9vw, 7.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
                <span style={{ color: "#61dca3" }}>72</span>
                <span style={{ color: "#fff" }}>H</span>
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", marginTop: 8, fontWeight: 300 }}>
                From brief to live system
              </p>
            </div>

            {/* 2×2 grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {STATS.map(item => (
                <div key={item.label} style={{
                  border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8,
                  padding: "14px 16px", backgroundColor: "rgba(255,255,255,0.02)",
                }}>
                  <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, lineHeight: 1.3, margin: 0 }}>{item.label}</p>
                  <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 12, fontFamily: "monospace", marginTop: 4 }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
          <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.18)", animation: "heroBounce 2s ease-in-out infinite" }} />
        </div>
      </div>

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
        @keyframes heroBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
      `}</style>
    </section>
  );
}
