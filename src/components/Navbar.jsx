import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#workflow" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
];

const S = {
  nav: (scrolled) => ({
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    backgroundColor: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
    transition: "all 0.4s ease",
  }),
  inner: {
    maxWidth: 1280, margin: "0 auto", padding: "0 2rem",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    height: 68,
  },
  logo: {
    color: "#fff", fontSize: 18, fontWeight: 800,
    letterSpacing: "-0.03em", textDecoration: "none",
    fontFamily: "inherit",
  },
  desktopLinks: {
    display: "flex", alignItems: "center", gap: 36,
  },
  link: {
    color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 300,
    textDecoration: "none", letterSpacing: "0.02em",
    transition: "color 0.2s",
  },
  cta: {
    padding: "9px 22px",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 6, color: "#fff", fontSize: 13,
    fontWeight: 500, textDecoration: "none",
    letterSpacing: "0.04em", transition: "all 0.2s",
  },
  mobileMenu: {
    backgroundColor: "#000",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "1.5rem 2rem",
    display: "flex", flexDirection: "column", gap: 20,
  },
  mobileLink: {
    color: "rgba(255,255,255,0.55)", fontSize: 15,
    fontWeight: 300, textDecoration: "none",
  },
  mobileCta: {
    display: "block", textAlign: "center",
    padding: "11px 22px", backgroundColor: "#fff",
    color: "#000", borderRadius: 6, fontSize: 14,
    fontWeight: 600, textDecoration: "none",
  },
};

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav style={S.nav(scrolled)}>
      <div style={S.inner}>
        {/* Wordmark — no SVG, no img */}
        <a href="#" style={S.logo}>AmicoTech</a>

        {/* Desktop */}
        <div style={{ ...S.desktopLinks, display: "none" }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={S.link}>{l.label}</a>
          ))}
        </div>
        <a href="#contact" style={S.cta} className="desktop-cta">Contact Us</a>
      </div>

      {open && (
        <div style={S.mobileMenu}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={S.mobileLink} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" style={S.mobileCta} onClick={() => setOpen(false)}>Start a Project</a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
