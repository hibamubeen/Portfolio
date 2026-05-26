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
            {
              head: "University of Texas at Dallas",
              sub: "B.S. Computer Science · May 2027",
              meta: "Richardson, TX",
              body: "Minor in Business Intelligence & Analytics · Certificate in Applied Design Experience & Research. Dean's List · Academic Excellence Scholarship. Coursework: Software Engineering, Data Structures, Advanced Algorithms & Analysis, Database Systems.",
            },
          ]} />

          <ResumeBlock title="Experience" entries={[
            {
              head: "Bluebeam",
              sub: "Product Management Intern · Jun – Aug 2026",
              meta: "Pasadena, CA",
              body: "Incoming PM internship — coming soon ✦",
            },
            {
              head: "Smart Pharma Solutions",
              sub: "Software Engineer Intern · Jun – Aug 2025",
              meta: "remote",
              body: "Engineered a Python pipeline using OpenAI API & PyPDF to extract and synthesize 50+ page regulatory PDFs, cutting report generation from 2 hrs to 6 minutes (95% reduction). Built a Coda tracking system consolidating 200+ product requirements across fragmented sources, reducing document retrieval time by 80%.",
            },
            {
              head: "Alura",
              sub: "Product Designer · May – Jun 2025",
              meta: "remote",
              body: "Architected technical requirements from user research and UX flows in Figma, partnering directly with engineering to deliver a 40% conversion improvement on AI-powered features. Designed scalable component libraries to standardize design-to-development handoff across the team.",
            },
            {
              head: "ACM UTD",
              sub: "Frontend Developer · Aug – Dec 2023",
              meta: "Richardson, TX",
              body: "Led frontend for a sustainability-focused iOS/Android app using React Native, JavaScript, and Google Maps API. Shipped full-stack product in 10 weeks with a cross-functional team of 4, presenting the final demo to industry judges and 200+ students.",
            },
          ]} />

          <ResumeBlock title="Leadership" entries={[
            {
              head: "Vice President · ACM UTD",
              sub: "CS Organization · Dec 2025 – present",
              meta: "UTD",
              body: "Leading UTD's largest CS organization — 800+ members, 8 divisions, 150+ officers. Oversee strategic planning, weekly exec meetings, and resource allocation to drive org-wide initiatives.",
            },
            {
              head: "PM Mentor · Alpha Kappa Psi",
              sub: "Mu Rho Chapter · Aug 2025 – present",
              meta: "UTD",
              body: "Mentoring 4 students on product management fundamentals: PM frameworks, case study discussions, and product strategy & leadership development.",
            },
          ]} />

          <ResumeBlock title="Skills" entries={[
            { head: "Design", sub: "Figma, Canva, Illustrator, Photoshop, Procreate", meta: "" },
            { head: "Code", sub: "React, Next.js, TypeScript, Python, Java, C++, SQL, Firebase, PostgreSQL, HTML", meta: "" },
            { head: "Tools", sub: "Git, REST APIs, OpenAI API, Google Cloud, Coda, Confluence, Jupyter Notebook, Vercel, Cloudflare, MongoDB", meta: "" },
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
            <a href="hiba-resume.pdf" download="Hiba Mubeen Resume.pdf" data-clickable style={{
              display: "block",
              background: "var(--ink)", color: "var(--paper)",
              border: "2px solid var(--ink)",
              padding: "12px 22px",
              fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.22em",
              cursor: "none", width: "100%",
              textDecoration: "none", textAlign: "center",
              boxSizing: "border-box",
            }}>
              ↓ HIBA-RESUME-2026.PDF
            </a>
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
              <li>★ Academic Excellence Scholarship — UTD</li>
              <li>★ Dean's List</li>
              <li>★ 1st Place, Design Track — WEHack 2024</li>
              <li>★ Google: Generative AI Fundamentals, 2024</li>
              <li>★ Girls Who Code: Synchrony 3, 2022</li>
              <li>★ Microsoft TA: Software Dev + Python, 2020–21</li>
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
