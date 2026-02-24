import { Mail, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const LINKS = {
  Services: [["Web Development","#services"],["Web App Development","#services"],["Mobile Apps","#services"],["AI Development","#services"]],
  Industries: [["Education","#industries"],["Healthcare","#industries"],["Retail","#industries"]],
  Company: [["About","#about"],["Our Workflow","#workflow"],["Tech Stack","#tech-stack"],["Pricing","#pricing"]],
};

export default function Footer() {
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" style={{ backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "4rem", marginBottom: 48 }} className="footer-grid">

          {/* Left */}
          <div>
            <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 12 }}>AmicoTech</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 300, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Fast, practical digital solutions — built to launch in 72 hours and built to last. No jargon. No hidden charges.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
              {[[Mail,"mailto:info@amicotechs.com"],[Linkedin,"#"],[Twitter,"#"]].map(([Icon, href], i) => (
                <a key={i} href={href} style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Contact form */}
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 12 }}>Quick Message</p>
            {sent ? (
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Thanks — we'll be in touch soon.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <textarea
                  rows={3}
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                  placeholder="Tell us briefly what you want to build..."
                  style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.65)", fontFamily: "inherit", resize: "none", outline: "none" }}
                />
                <button
                  onClick={() => msg.trim() && setSent(true)}
                  style={{ padding: "11px 20px", backgroundColor: "#fff", color: "#000", border: "none", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                >
                  Send
                </button>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
                  Or email: <a href="mailto:info@amicotechs.com" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>info@amicotechs.com</a>
                </p>
              </div>
            )}
          </div>

          {/* Link cols */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {Object.entries(LINKS).map(([cat, links]) => (
              <div key={cat}>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.18)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>{cat}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {links.map(([label, href]) => (
                    <a key={label} href={href} style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontWeight: 300, textDecoration: "none" }}>{label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.18)", fontWeight: 300 }}>© {new Date().getFullYear()} AmicoTechs. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy","Terms of Service"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.18)", fontWeight: 300, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  );
}
