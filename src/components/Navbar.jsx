import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#workflow" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        backgroundColor: scrolled || open ? "rgba(0,0,0,0.96)" : "transparent",
        backdropFilter: scrolled || open ? "blur(20px)" : "none",
        borderBottom: scrolled || open ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 68,
        }}>
          {/* Wordmark */}
          <a href="#" onClick={close} style={{
            color: "#fff", fontSize: 18, fontWeight: 800,
            letterSpacing: "-0.03em", textDecoration: "none", zIndex: 201,
          }}>AmicoTech</a>

          {/* Desktop nav links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} style={{
                color: "rgba(255,255,255,0.55)", fontSize: 14, fontWeight: 300,
                textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
              >{l.label}</a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#contact" className="nav-desktop" style={{
              padding: "9px 22px",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 6, color: "#fff", fontSize: 13,
              fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em",
            }}>Contact Us</a>

            {/* Hamburger — mobile only */}
            <button
              className="nav-mobile"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#fff", padding: 6, zIndex: 201,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen drawer — mobile only */}
      <div
        className="nav-mobile"
        style={{
          position: "fixed", inset: 0, zIndex: 199,
          backgroundColor: "#000",
          display: "flex", flexDirection: "column",
          padding: "calc(68px + 2.5rem) 2.5rem 3rem",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
          overflowY: "auto",
        }}
      >
        {/* Nav links */}
        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              style={{
                display: "block",
                fontSize: "clamp(2rem, 8vw, 3rem)",
                fontWeight: 800,
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                paddingBottom: "1.2rem",
                marginBottom: "1.2rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                transform: open ? "translateY(0)" : "translateY(24px)",
                opacity: open ? 1 : 0,
                transition: `transform 0.4s cubic-bezier(0.76, 0, 0.24, 1) ${i * 60 + 80}ms, opacity 0.4s ease ${i * 60 + 80}ms`,
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.4em", fontFamily: "monospace", fontWeight: 300, letterSpacing: "0.1em", display: "block", marginBottom: "0.3em" }}>
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div style={{
          transform: open ? "translateY(0)" : "translateY(24px)",
          opacity: open ? 1 : 0,
          transition: `transform 0.4s cubic-bezier(0.76, 0, 0.24, 1) ${NAV_LINKS.length * 60 + 100}ms, opacity 0.4s ease ${NAV_LINKS.length * 60 + 100}ms`,
        }}>
          <a
            href="#contact"
            onClick={close}
            style={{
              display: "block", textAlign: "center",
              padding: "16px 28px",
              backgroundColor: "#61dca3",
              color: "#000", borderRadius: 8, fontSize: 15,
              fontWeight: 700, textDecoration: "none", letterSpacing: "0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Start a Project →
          </a>

          {/* Wordmark footer */}
          <p style={{
            fontSize: 11, color: "rgba(255,255,255,0.15)",
            fontFamily: "monospace", letterSpacing: "0.2em",
            textAlign: "center", textTransform: "uppercase",
          }}>
            AmicoTech · Est. 2024
          </p>
        </div>
      </div>

      <style>{`
        /* Desktop: show links, hide burger & drawer */
        .nav-desktop { display: flex !important; }
        .nav-mobile  { display: none !important; }

        /* Mobile: hide links, show burger & drawer */
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }

        /* The drawer itself is a block-level element on mobile */
        div.nav-mobile {
          display: block !important;
        }
        @media (min-width: 768px) {
          div.nav-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
