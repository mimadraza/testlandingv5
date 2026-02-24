const INDUSTRIES = [
  {
    label: "Education",
    desc: "Tailored portals and platforms for schools, colleges, and training institutions.",
    items: ["Admission Portals","Enrollment Portals","Attendance Management","Learning Systems (LMS)","Grade Tracking","Billing & Payments","Staff Portals","Internal Communications & Administration","Parent Portals & Notifications","Online Resource Libraries"],
  },
  {
    label: "Healthcare",
    desc: "End-to-end digital infrastructure for clinics, hospitals, labs, and healthcare networks.",
    items: ["Patient Registration & Appointment Management","Electronic Medical Records","Invoicing & Insurance Claims","Inventory Management","Laboratory Data Management & Report Delivery","Internal Communications & Supply Chain","Online Consultations","Client Portals"],
  },
  {
    label: "Retail",
    desc: "Operational and e-commerce systems built to move inventory, close sales, and grow revenue.",
    items: ["Billing & Notifications","Inventory Management","Order Management","Sales & Query Management","E-Commerce Solutions","Purchase Order Tracking","Staff Management","Administration Portals","Customer Support","Data Analysis","Sales Forecasting"],
  },
];

export default function Industries() {
  return (
    <section id="industries" style={{ padding: "5rem 2rem", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>Custom Services</p>
          <h2 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
            Industry<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>solutions</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 300, marginTop: 20, maxWidth: 420, lineHeight: 1.7 }}>
            We use our technical expertise to tailor-fit solutions to solve your problems — built specifically for your sector.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }} className="industry-grid">
          {INDUSTRIES.map(ind => (
            <div key={ind.label} style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "2rem" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: 10 }}>{ind.label}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 300, lineHeight: 1.65, marginBottom: 24 }}>{ind.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {ind.items.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.22)", flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{ display: "inline-block", marginTop: 24, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.18)", paddingBottom: 2 }}>
                Enquire →
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.industry-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
