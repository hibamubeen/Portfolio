// EXTRAS — playlist + moodboard fun page

const Extras = ({ tweaks }) => {
  return (
    <section id="extras" style={{
      position: "relative",
      padding: "100px 6vw 120px",
      background: "var(--paper)",
      borderTop: "3px solid var(--ink)",
      overflow: "hidden",
    }}>

      {/* Gingham accent strip */}
      <div className="gingham-soft" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 18, opacity: 0.8
      }} />

      <SectionHead kicker="↳ p.05 — the b-side" title="off the" italic="record." num="04" />

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40 }}>

        {/* Game (left) */}
        <SnakeGame />

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Vinyl */}
          <div style={{
            background: "var(--paper)",
            border: "3px solid var(--ink)",
            boxShadow: "8px 8px 0 var(--accent)",
            padding: 24,
            display: "flex", alignItems: "center", gap: 20,
            transform: "rotate(-1deg)",
          }}>
            <div style={{ position: "relative", width: 130, height: 130, flexShrink: 0, animation: "spin 8s linear infinite" }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "var(--ink)",
                borderRadius: "50%",
                backgroundImage: "repeating-radial-gradient(circle, transparent 0 4px, rgba(255,255,255,0.05) 4px 5px)",
              }} />
              <div style={{ position: "absolute", inset: "30%", background: "var(--accent)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", inset: "46%", background: "var(--ink)", borderRadius: "50%" }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--accent)" }}>33⅓ RPM</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1, marginTop: 4 }}>
                <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic" }}>currently</em><br/>
                listening
              </div>
            </div>
          </div>

          {/* Moodboard mini-collage */}
          <div style={{
            background: "var(--ink)",
            color: "var(--paper)",
            padding: 20,
            border: "3px solid var(--ink)",
            boxShadow: "8px 8px 0 var(--accent)",
            transform: "rotate(0.6deg)",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--pink)", marginBottom: 14 }}>
              ─── MOODBOARD ───
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { l: "books", t: "pink" },
                { l: "paris", t: "grey" },
                { l: "manga panels", t: "pink" },
                { l: "old web", t: "grey" },
              ].map(m => (
                <Placeholder key={m.l} label={m.l} h={100} tone={m.t} />
              ))}
            </div>
            <div style={{ marginTop: 12, fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 14, color: "var(--pink)" }}>
              + 47 more on the full moodboard ⌒
            </div>
          </div>

          {/* Currently */}
          <div style={{
            background: "var(--paper)",
            border: "3px solid var(--ink)",
            padding: 20,
            transform: "rotate(-0.5deg)",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--accent)", marginBottom: 12 }}>
              ─── CURRENTLY ───
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 14px", fontFamily: "var(--sans)", fontSize: 14 }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--grey)", letterSpacing: "0.15em" }}>READING</span>
              <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic" }}>a stack of paperbacks</span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--grey)", letterSpacing: "0.15em" }}>WATCHING</span>
              <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic" }}>old french films, slowly</span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--grey)", letterSpacing: "0.15em" }}>BUILDING</span>
              <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic" }}>this very portfolio</span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--grey)", letterSpacing: "0.15em" }}>CRAVING</span>
              <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic" }}>iced matcha, always</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Extras = Extras;
