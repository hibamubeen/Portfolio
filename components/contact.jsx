// CONTACT — back cover

const Contact = ({ tweaks }) => {
  return (
    <section id="contact" style={{
      position: "relative",
      padding: "100px 6vw 100px",
      background: "var(--paper)",
      borderTop: "3px solid var(--ink)",
      overflow: "hidden",
    }}>

      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.3em", color: "var(--accent)", marginBottom: 12 }}>
          ↳ p.06 — write back
        </div>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(80px, 16vw, 240px)", margin: 0, lineHeight: 0.85, letterSpacing: "-0.04em" }}>
          let's <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>talk.</em>
        </h2>
        <div style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 22, marginTop: 16, color: "var(--grey)" }}>
          (cold emails encouraged · fun ideas welcome)
        </div>
      </div>

      {/* Postcard */}
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          background: "var(--paper)",
          border: "3px solid var(--ink)",
          boxShadow: "14px 14px 0 var(--ink)",
          minHeight: 380,
          transform: "rotate(-0.5deg)",
        }}>

          {/* Left: handwritten */}
          <div style={{ padding: 32, borderRight: "2px dashed var(--ink)", position: "relative" }}>
            <div style={{ fontFamily: "var(--hand)", fontSize: 28, lineHeight: 1.3 }}>
              hey reader,<br/><br/>
              if you made it this far, thank you ♡<br/>
              i'd love to hear from you — about<br/>
              an opportunity, a project, a song, anything.<br/><br/>
              talk soon,<br/>
              <span style={{ fontSize: 40, color: "var(--accent)" }}>— hiba</span>
            </div>
            <div style={{ position: "absolute", bottom: 20, left: 32, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--grey)" }}>
              ✦ PS — i reply, promise
            </div>
          </div>

          {/* Right: address side */}
          <div style={{ padding: 32, position: "relative" }}>
            {/* Stamp */}
            <div style={{
              position: "absolute", top: 24, right: 24,
              width: 110, height: 130,
              border: "2px solid var(--ink)",
              padding: 8,
              background: "var(--pink)",
              transform: "rotate(4deg)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center",
              fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.18em",
            }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--accent)", lineHeight: 1 }}>★</div>
              <div style={{ marginTop: 6 }}>HIBA<br/>POST<br/>2026</div>
              <div style={{ marginTop: 6, fontSize: 8 }}>UTD — TX</div>
            </div>

            {/* Cancel marks */}
            <div style={{ position: "absolute", top: 60, left: 32, right: 160, height: 30, opacity: 0.5 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} style={{ height: 2, background: "var(--ink)", marginBottom: 4, transform: `translateX(${i * 4}px) rotate(${i % 2 ? 1 : -1}deg)` }} />
              ))}
            </div>

            <div style={{ marginTop: 140 }}>
              <ContactRow label="EMAIL" value="hiba.mubeen7@gmail.com" />
              <ContactRow label="LINKEDIN" value="linkedin/in/hiba-mubeen" />
              <ContactRow label="GITHUB" value="@hibamubeen" />
              <ContactRow label="DEVPOST" value="@hibamubeen" />
              <ContactRow label="LOCATED" value="Richardson, TX" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer / colophon */}
      <div className="gingham-soft" style={{ marginTop: 80, height: 18, borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }} />

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 0",
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em",
        flexWrap: "wrap", gap: 16,
      }}>
        <span>© 2026 HIBA MUBEEN — A PUBLICATION OF ONE</span>
        <span>VOL.IV · ISSUE №07 · MAY 2026</span>
        <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", letterSpacing: 0, fontSize: 16, color: "var(--accent)" }}>
          ♡ thanks for reading ♡
        </span>
      </div>
    </section>
  );
};

const ContactRow = ({ label, value }) => (
  <div data-clickable style={{
    display: "grid", gridTemplateColumns: "100px 1fr",
    gap: 16, padding: "8px 0",
    borderBottom: "1px solid var(--grey-soft)",
    transition: "color 0.2s",
  }}
  onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
  onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink)"}
  >
    <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--grey)", paddingTop: 6 }}>
      {label}
    </span>
    <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 22 }}>
      {value}
    </span>
  </div>
);

window.Contact = Contact;
