// RESUME — CV spread

const Resume = ({ tweaks }) => {
  return (
    <section id="resume" style={{
      position: "relative",
      padding: "100px 6vw 120px",
      background: "var(--ink)",
      color: "var(--paper)",
      borderTop: "3px solid var(--ink)",
      overflow: "hidden",
    }}>

      {/* Section head — inverted */}
      <div style={{ borderBottom: "2.5px solid var(--paper)", paddingBottom: 18, marginBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--pink)", marginBottom: 6 }}>
            ↳ p.04 — the cv
          </div>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(56px, 9vw, 132px)", margin: 0, lineHeight: 0.85, letterSpacing: "-0.02em" }}>
            the <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--pink)" }}>résumé</em>
          </h2>
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.2em", textAlign: "right" }}>
          SECTION №03<br />
          <span style={{ color: "var(--pink)" }}>──────────</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60 }}>

        {/* LEFT — sections */}
        <div>
          <ResumeBlock title="Education" entries={[
            { head: "University of Texas at Dallas", sub: "B.S. Computer Science · expected 2026", meta: "Richardson, TX", body: "Coursework: HCI, software engineering, data structures, design studio. Dean's list. Probably in the library right now." },
          ]} />

          <ResumeBlock title="Experience" entries={[
            { head: "Design Intern · TBD", sub: "Summer 2025", meta: "remote", body: "Shipped UI for a feature used by ~10k users. Owned the redesign of the onboarding flow end-to-end." },
            { head: "Web Developer · Student Org", sub: "2024 — present", meta: "UTD", body: "Maintain & rebuild the org website. Migrated to Next.js. Mentored two newer devs." },
            { head: "Freelance Designer", sub: "2023 — present", meta: "internet", body: "Brand systems, posters, the occasional hand-coded site for friends-of-friends." },
          ]} />

          <ResumeBlock title="Skills" entries={[
            { head: "Design", sub: "Figma · Illustrator · InDesign · Photoshop · Procreate", meta: "" },
            { head: "Code", sub: "React · TypeScript · Tailwind · Next.js · Python · git", meta: "" },
            { head: "Other", sub: "Photography (35mm + digital) · Risograph · zine layout", meta: "" },
          ]} />
        </div>

        {/* RIGHT — sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* download card */}
          <div style={{
            background: "var(--pink)",
            color: "var(--ink)",
            padding: 24,
            border: "2px solid var(--paper)",
            boxShadow: "8px 8px 0 var(--accent)",
            transform: "rotate(1deg)",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--accent)", marginBottom: 8 }}>
              ⬇ TAKE THE FILE
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 32, lineHeight: 1, marginBottom: 14 }}>
              Download the <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>full</em> CV
            </div>
            <button data-clickable style={{
              background: "var(--ink)", color: "var(--paper)",
              border: "2px solid var(--ink)",
              padding: "12px 22px",
              fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.22em",
              cursor: "none", width: "100%",
            }}>
              ↓ HIBA-CV-2026.PDF
            </button>
          </div>

          {/* Awards / Honors */}
          <div style={{
            background: "var(--paper)", color: "var(--ink)",
            padding: 24, border: "2px solid var(--paper)",
            boxShadow: "8px 8px 0 var(--pink)",
            transform: "rotate(-0.8deg)",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--accent)", marginBottom: 14 }}>
              ★ HONORS & SUCH ★
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.4 }}>
              <li>★ Dean's List — every semester so far</li>
              <li>★ Hackathon Best Design — UTD Hack 2024</li>
              <li>★ Featured in student design showcase, '25</li>
              <li>★ Survived four years of group projects</li>
            </ul>
          </div>

          {/* Languages / fun */}
          <div style={{
            background: "var(--ink)", color: "var(--paper)",
            border: "2px solid var(--paper)",
            padding: 24,
            transform: "rotate(0.5deg)",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--pink)", marginBottom: 14 }}>
              ─── LANGUAGES ───
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontFamily: "var(--sans)", fontSize: 14 }}>
              <div>English <span style={{ color: "var(--pink)" }}>●●●●●</span></div>
              <div>Urdu <span style={{ color: "var(--pink)" }}>●●●●○</span></div>
              <div>JavaScript <span style={{ color: "var(--pink)" }}>●●●●○</span></div>
              <div>CSS <span style={{ color: "var(--pink)" }}>●●●●●</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResumeBlock = ({ title, entries }) => (
  <div style={{ marginBottom: 48 }}>
    <h3 style={{
      fontFamily: "var(--serif)",
      fontSize: 48, margin: "0 0 20px",
      letterSpacing: "-0.02em",
      borderBottom: "1px solid var(--pink)",
      paddingBottom: 8,
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
    }}>
      <span>{title}</span>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--pink)" }}>
        ❀
      </span>
    </h3>
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {entries.map((e, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--pink)", paddingTop: 4, minWidth: 90 }}>
            {(e.sub || "").split("·")[1]?.trim() || (e.sub || "").split(",")[0] || "──"}
          </div>
          <div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, letterSpacing: "-0.01em" }}>{e.head}</div>
            <div style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 16, color: "var(--pink)", marginTop: 2 }}>{e.sub}</div>
            {e.body && <div style={{ fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.6, marginTop: 8, color: "var(--paper)", opacity: 0.85 }}>{e.body}</div>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

window.Resume = Resume;
