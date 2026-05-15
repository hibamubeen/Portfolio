// PROJECT DETAIL — a full magazine-spread takeover for a single project

const ProjectDetail = ({ project, onClose }) => {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;
  const p = project;

  const detail = p.detail || {
    challenge: "What was the brief? In a few sentences — what problem you were solving and who it was for. Real students, real users, real stakes.",
    approach: "How you tackled it — research, sketches, the early Figma file with 47 frames, the version that didn't work, the version that did.",
    outcome: "What shipped, what changed, what you learned. Add a number or two if you've got 'em — % engagement, # users, # all-nighters.",
    bullets: [
      "User research with 12 students — 4 interviews + a survey",
      "Mid-fi wireframes, then a styled prototype in Figma",
      "Built it out in React + Tailwind over a long weekend",
      "Tested with 8 users, iterated twice, shipped on a Tuesday",
    ],
    tools: ["Figma", "React", "Tailwind", "Notion", "Procreate"],
    timeline: "6 weeks",
    team: "Solo, with feedback from my design club",
    quote: "The version we shipped is the version we almost didn't.",
  };

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "rgba(8,15,22,0.85)",
      backdropFilter: "blur(8px)",
      zIndex: 50000,
      overflowY: "auto",
      animation: "detailFadeIn 0.3s ease",
    }}
    onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <style>{`
        @keyframes detailFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes detailSlide { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>

      <div style={{
        maxWidth: 1280,
        margin: "40px auto",
        background: "var(--paper)",
        border: "3px solid var(--ink)",
        boxShadow: "20px 20px 0 var(--accent)",
        position: "relative",
        animation: "detailSlide 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}>

        {/* Top bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "14px 28px",
          borderBottom: "2px solid var(--ink)",
          background: "var(--ink)", color: "var(--pink)",
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em",
        }}>
          <span>ISSUE №{p.issue} · project overview · {p.year}</span>
          <span>★ FEATURE ARTICLE ★</span>
          <button data-clickable onClick={onClose} style={{
            background: "var(--pink)", color: "var(--ink)",
            border: "2px solid var(--pink)",
            padding: "6px 14px",
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em",
            cursor: "none",
          }}>✕ CLOSE</button>
        </div>

        {/* Gingham strip */}
        <div className="gingham-soft" style={{ height: 14, borderBottom: "2px solid var(--ink)", opacity: 0.7 }} />

        {/* HEADER SPREAD */}
        <div style={{ padding: "60px 6vw 40px", position: "relative" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.3em", color: "var(--accent)", marginBottom: 12 }}>
            ▸ {p.subtitle.toUpperCase()}
          </div>

          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(80px, 14vw, 200px)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            margin: 0,
          }}>
            {p.title.split(" ")[0]}{" "}
            <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>
              {p.title.split(" ").slice(1).join(" ")}
            </em>
          </h1>

          {/* Burst sticker */}
          <div style={{ position: "absolute", top: 50, right: 80, transform: "rotate(12deg)" }}>
            <Burst text={p.burst} color="var(--pink)" size={130} rotate={0} />
          </div>

          {/* Winner tag */}
          {p.winner && (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginTop: 28,
              background: "var(--accent)", color: "var(--paper)",
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em",
              padding: "8px 20px",
              border: "2px solid var(--ink)",
              boxShadow: "4px 4px 0 var(--ink)",
              transform: "rotate(-1deg)",
            }}>
              ★ WINNER — {p.winnerLabel}
            </div>
          )}

          {/* Meta row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            marginTop: 40,
            paddingTop: 24,
            borderTop: "2px solid var(--ink)",
          }}>
            <DetailMeta label="ROLE" value={p.role} />
            <DetailMeta label="YEAR" value={p.year} />
            <DetailMeta label="TIMELINE" value={detail.timeline} />
            <DetailMeta label="TEAM" value={detail.team} />
          </div>
        </div>

        {/* HERO IMAGE */}
        <div style={{ padding: "0 6vw 40px" }}>
          <Placeholder label={`${p.title} — hero shot`} h={520} tone={p.accent === "var(--ink)" ? "ink" : "pink"} />
        </div>

        {/* THE STORY — 2-col magazine layout */}
        <div style={{
          padding: "20px 6vw 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 48, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
              The <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>brief.</em>
            </h3>
            <p style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 22, lineHeight: 1.4, margin: 0, color: "var(--ink)" }}>
              <span style={{
                float: "left", fontFamily: "var(--serif)", fontStyle: "normal",
                fontSize: 80, lineHeight: 0.85, marginRight: 10, marginTop: 6,
                color: "var(--accent)",
              }}>{detail.challenge.charAt(0)}</span>
              {detail.challenge.slice(1)}
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 48, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
              The <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>process.</em>
            </h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: 16, lineHeight: 1.7, marginTop: 0 }}>
              {detail.approach}
            </p>
            <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {detail.bullets.map((b, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.5 }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", paddingTop: 4 }}>0{i+1}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PULL QUOTE */}
        <div style={{
          padding: "60px 6vw",
          background: "var(--pink)",
          borderTop: "2px solid var(--ink)",
          borderBottom: "2px solid var(--ink)",
          textAlign: "center",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)",
            fontFamily: "var(--serif)", fontSize: 140, lineHeight: 0.6,
            color: "var(--accent)", opacity: 0.5,
          }}>"</div>
          <p style={{
            fontFamily: "var(--serif-it)", fontStyle: "italic",
            fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.15,
            margin: "20px auto 0", maxWidth: 900,
            letterSpacing: "-0.01em",
          }}>
            {detail.quote}
          </p>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", marginTop: 24, color: "var(--ink)" }}>
            — H.M. ON THE PROCESS
          </div>
        </div>

        {/* GALLERY */}
        <div style={{ padding: "60px 6vw 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24, borderBottom: "2px solid var(--ink)", paddingBottom: 12 }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 48, margin: 0, letterSpacing: "-0.02em" }}>
              The <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>shots.</em>
            </h3>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--grey)" }}>
              ─── selected frames ───
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 16 }}>
            <Placeholder label="screen 01 — overview" h={400} tone="pink" />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Placeholder label="detail" h={192} tone="grey" />
              <Placeholder label="component" h={192} tone="ink" />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <Placeholder label="screen 02" h={240} tone="pink" />
            <Placeholder label="screen 03" h={240} tone="grey" />
            <Placeholder label="screen 04" h={240} tone="pink" />
          </div>
        </div>

        {/* OUTCOME + TOOLS */}
        <div style={{
          padding: "40px 6vw 60px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 48,
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 48, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
              The <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>outcome.</em>
            </h3>
            <p style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 20, lineHeight: 1.4, margin: 0 }}>
              {detail.outcome}
            </p>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 32 }}>
              {[
                { n: "+47%", l: "engagement" },
                { n: "12k", l: "users reached" },
                { n: "★ 4.8", l: "user rating" },
              ].map(s => (
                <div key={s.l} style={{
                  border: "2px solid var(--ink)",
                  padding: "20px 16px",
                  textAlign: "center",
                  background: "var(--paper)",
                  boxShadow: "5px 5px 0 var(--ink)",
                }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 48, lineHeight: 0.9, color: "var(--accent)", letterSpacing: "-0.02em" }}>
                    {s.n}
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.22em", marginTop: 6, color: "var(--grey)" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: "var(--ink)", color: "var(--paper)",
            padding: 24,
            border: "2px solid var(--ink)",
            boxShadow: "8px 8px 0 var(--accent)",
            transform: "rotate(0.8deg)",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--pink)", marginBottom: 14 }}>
              ─── TOOLS USED ───
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "var(--sans)", fontSize: 15 }}>
              {detail.tools.map(t => (
                <div key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashed rgba(249,221,223,0.3)", paddingBottom: 8 }}>
                  <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 18 }}>{t}</span>
                  <span style={{ color: "var(--pink)", fontFamily: "var(--mono)", fontSize: 11 }}>●●●●●</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
                  padding: "4px 10px", border: "1.5px solid var(--pink)", borderRadius: 999, color: "var(--pink)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA — next project */}
        <div className="gingham-soft" style={{ height: 14, borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)", opacity: 0.7 }} />

        <div style={{
          padding: "40px 6vw 60px",
          textAlign: "center",
        }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.3em", color: "var(--accent)", marginBottom: 12 }}>
            — END OF ARTICLE —
          </div>
          <p style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 28, margin: "0 0 24px", color: "var(--ink)" }}>
            thanks for reading ♡
          </p>
          <button data-clickable onClick={onClose} style={{
            background: "var(--ink)", color: "var(--paper)",
            border: "2px solid var(--ink)",
            padding: "14px 28px",
            fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.25em",
            cursor: "none",
            boxShadow: "5px 5px 0 var(--accent)",
          }}>
            ← BACK TO THE ISSUE
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailMeta = ({ label, value }) => (
  <div>
    <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.25em", color: "var(--grey)", marginBottom: 4 }}>
      {label}
    </div>
    <div style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 20, color: "var(--ink)" }}>
      {value}
    </div>
  </div>
);

window.ProjectDetail = ProjectDetail;
