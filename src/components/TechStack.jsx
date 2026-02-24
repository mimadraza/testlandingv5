import LogoLoop from "./LogoLoop";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiPostgresql, SiGo,
  SiShopify, SiWordpress, SiWebflow, SiRust,
  SiSwift, SiKotlin, SiMysql
} from "react-icons/si";

const ROW_1 = [
  { node: <SiReact />, title: "React", href: "https://react.dev", ariaLabel: "React" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org", ariaLabel: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org", ariaLabel: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com", ariaLabel: "Tailwind CSS" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org", ariaLabel: "Node.js" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com", ariaLabel: "MongoDB" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org", ariaLabel: "PostgreSQL" },
  { node: <SiGo />, title: "Go", href: "https://go.dev", ariaLabel: "Go" },
];

const ROW_2 = [
  { node: <SiShopify />, title: "Shopify", href: "https://shopify.com", ariaLabel: "Shopify" },
  { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org", ariaLabel: "WordPress" },
  { node: <SiWebflow />, title: "Webflow", href: "https://webflow.com", ariaLabel: "Webflow" },
  { node: <SiRust />, title: "Rust", href: "https://rust-lang.org", ariaLabel: "Rust" },
  { node: <SiSwift />, title: "Swift", href: "https://swift.org", ariaLabel: "Swift" },
  { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org", ariaLabel: "Kotlin" },
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com", ariaLabel: "MySQL" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" style={{ padding: "5rem 0", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", marginBottom: "3rem" }}>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>
          Featured Platforms
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
            What we<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>build with</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 300, maxWidth: 280, lineHeight: 1.7 }}>
            We don't chase trends — we choose what works best for your specific requirements.
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div style={{ marginBottom: "1.5rem" }}>
        <LogoLoop
          logos={ROW_1}
          speed={80}
          direction="left"
          logoHeight={40}
          gap={56}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Frontend and backend technologies"
        />
      </div>

      {/* Row 2 — scrolls right */}
      <LogoLoop
        logos={ROW_2}
        speed={80}
        direction="right"
        logoHeight={40}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Platforms and mobile technologies"
      />

      {/* Tech labels strip */}
      <div style={{ maxWidth: 1280, margin: "3rem auto 0", padding: "0 2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {[...ROW_1, ...ROW_2].map(t => (
            <span key={t.title} style={{
              fontSize: "11px", color: "rgba(255,255,255,0.25)", fontFamily: "monospace",
              padding: "4px 10px", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "4px", letterSpacing: "0.05em"
            }}>
              {t.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
