// COVER PAGE — magazine masthead

const Cover = ({ tweaks }) => {
  const issue = tweaks?.issueNumber || "07";
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", borderBottom: "3px solid var(--ink)" }}>
      {/* Top barcode bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "14px 36px",
        borderBottom: "2px solid var(--ink)",
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
        background: "var(--paper)"
      }}>
        <span>VOL.IV · ISSUE №{issue} · MAY 2026</span>
        <span style={{ display: "flex", gap: 24 }}>
          <span>★ ★ ★ ★ ☆</span>
          <span>$0.00 USD</span>
          <span>UTD / TX</span>
        </span>
        <span>EST. 2026 — A PUBLICATION OF ONE</span>
      </div>

      {/* Gingham border strip */}
      <div className="gingham-soft" style={{ height: 14, borderBottom: "2px solid var(--ink)" }}></div>

      <div style={{ position: "relative", padding: "60px 6vw 80px", minHeight: "calc(100vh - 80px)" }}>

        {/* Sunburst decoration top right */}
        <div style={{
          position: "absolute", top: 80, right: 80,
          width: 240, height: 240,
          borderRadius: "50%",
          opacity: 0.08,
          background: `repeating-conic-gradient(var(--ink) 0deg 8deg, transparent 8deg 16deg)`,
          pointerEvents: "none",
        }} />

        {/* Top hello row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 40, marginBottom: 8, flexWrap: "wrap" }}>
          <div className="bubble" style={{ maxWidth: 320, transform: "rotate(-3deg)" }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--accent)" }}>EDITOR'S NOTE ·°</span>
            <div style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 22, lineHeight: 1.2, marginTop: 6 }}>
              hey reader, so glad you're here ♡
            </div>
          </div>

          <div style={{ textAlign: "right", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.2em", lineHeight: 1.8 }}>
            INSIDE THIS ISSUE:<br />
            <span style={{ color: "var(--grey)" }}>──── projects p.03</span><br />
            <span style={{ color: "var(--grey)" }}>──── about her p.02</span><br />
            <span style={{ color: "var(--grey)" }}>──── the cv p.04</span>
          </div>
        </div>

        {/* The MASTHEAD */}
        <h1 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(120px, 22vw, 360px)",
          lineHeight: 0.82,
          margin: "20px 0 0",
          letterSpacing: "-0.04em",
          fontWeight: 400,
          color: "var(--ink)",
          textAlign: "center",
          position: "relative",
        }}>
          <span style={{ display: "block" }}>Hiba</span>
          <span style={{ display: "block", fontStyle: "italic", fontFamily: "var(--serif-it)", color: "var(--accent)", marginTop: -10 }}>
            Mubeen
          </span>
        </h1>

        {/* Tagline + cover lines */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr 1fr", gap: 40, marginTop: 40, alignItems: "start" }}>
          <div>
            <div className="stamp" style={{ marginBottom: 16, color: "var(--accent)" }}>
              ⚡ FEATURED THIS ISSUE
            </div>
            <p style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 32, lineHeight: 1.15, margin: 0, letterSpacing: "-0.01em" }}>
              "building, designing, or vibing"
            </p>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.18em", marginTop: 16, color: "var(--grey)" }}>
              ⊹ WEB/APP DEV · UI/UX · BUSINESS ANALYTICS ⊹
            </p>
          </div>

          {/* Center "portrait" placeholder */}
          <div style={{ position: "relative" }}>
            <div className="halftone" style={{
              aspectRatio: "3/4",
              background: "var(--pink)",
              backgroundImage: "repeating-linear-gradient(45deg, transparent 0 6px, rgba(8,15,22,0.08) 6px 7px)",
              border: "3px solid var(--ink)",
              boxShadow: "10px 10px 0 var(--ink)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Photo sits above the halftone dots layer (z-index > 2) */}
              <img src="assets/hiba.jpg" alt="Hiba Mubeen" style={{
                position: "absolute", inset: 14,
                width: "calc(100% - 28px)", height: "calc(100% - 28px)",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                zIndex: 3,
              }} />
              {/* Dashed pink border on top of photo */}
              <div style={{
                position: "absolute", inset: 14,
                border: "2px dashed var(--pink-deep)",
                zIndex: 4,
                pointerEvents: "none",
              }} />
              {/* Vivienne-Westwood-style orb in corner */}
              <div style={{ position: "absolute", top: -28, right: -28, zIndex: 4 }}>
                <svg viewBox="0 0 80 80" width="64" height="64">
                  <circle cx="40" cy="42" r="28" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5"/>
                  <ellipse cx="40" cy="55" rx="32" ry="6" fill="none" stroke="var(--ink)" strokeWidth="2"/>
                  <path d="M40 6 L42 18 L52 14 L46 22 L56 24 L46 28 L40 36 L34 28 L24 24 L34 22 L28 14 L38 18 Z" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1.5"/>
                  <line x1="40" y1="14" x2="40" y2="22" stroke="var(--ink)" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right column — cover blurbs */}
          <div style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 16, lineHeight: 1.4 }}>
            <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--mono)", fontStyle: "normal", fontSize: 10, letterSpacing: "0.25em", color: "var(--accent)" }}>p.03 ▸▸</span>
              <div style={{ fontSize: 24, marginTop: 4, fontFamily: "var(--serif)", fontStyle: "normal", letterSpacing: "-0.01em", lineHeight: 1 }}>
                Check out my projects :) 
              </div>
            </div>
            <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--mono)", fontStyle: "normal", fontSize: 10, letterSpacing: "0.25em", color: "var(--accent)" }}>p.05 ▸▸</span>
              <div style={{ fontSize: 22, marginTop: 4 }}>The playlist that got me through finals</div>
            </div>
            <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 12 }}>
              <span style={{ fontFamily: "var(--mono)", fontStyle: "normal", fontSize: 10, letterSpacing: "0.25em", color: "var(--accent)" }}>p.06 ▸▸</span>
              <div style={{ fontSize: 22, marginTop: 4 }}>How To: Contact Me</div>
            </div>
          </div>
        </div>

        {/* Stickers */}
        {tweaks?.showStickers && (
          <>
            <Sticker initialX={120} initialY={300} rotate={-15}>
              <Burst text="NEW!" color="var(--pink)" size={120} rotate={0} />
            </Sticker>
            <Sticker initialX={typeof window !== "undefined" ? window.innerWidth - 200 : 1200} initialY={520} rotate={12}>
              <div style={{
                background: "var(--ink)", color: "var(--pink)",
                padding: "18px 24px", border: "3px solid var(--ink)",
                fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 22,
                boxShadow: "4px 4px 0 var(--paper), 4px 4px 0 4px var(--ink)",
                width: 200, textAlign: "center",
              }}>
                made with love<br/>♡ ♡ ♡
              </div>
            </Sticker>
          </>
        )}

        {/* Scroll indicator */}
        <div style={{
          position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)",
          zIndex: 900,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}>
          <style>{`
            @keyframes scrollBounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(7px); }
            }
            .scroll-arrow-wrap { animation: scrollBounce 1.4s ease-in-out infinite; }
          `}</style>
          <div className="scroll-arrow-wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            {/* Dots */}
            <div style={{ display: "flex", gap: 5 }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "var(--pink-deep)",
                  border: "2px solid var(--ink)",
                  boxShadow: "1px 1px 0 var(--ink)",
                }} />
              ))}
            </div>
            {/* Comic arrow SVG */}
            <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* shaft */}
              <rect x="20" y="2" width="8" height="30" rx="3"
                fill="#F9DDDF" stroke="#080F16" strokeWidth="2.5" strokeLinejoin="round"/>
              {/* arrowhead */}
              <path d="M6 30 L24 50 L42 30 Z"
                fill="#F9DDDF" stroke="#080F16" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
              {/* speed lines */}
              <line x1="10" y1="22" x2="4" y2="26" stroke="#080F16" strokeWidth="2" strokeLinecap="round"/>
              <line x1="38" y1="22" x2="44" y2="26" stroke="#080F16" strokeWidth="2" strokeLinecap="round"/>
              <line x1="10" y1="30" x2="3" y2="36" stroke="#080F16" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="38" y1="30" x2="45" y2="36" stroke="#080F16" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="ticker">
        <div className="ticker__inner">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              <em>★ NEW ISSUE ★</em>
              <span>portfolio №{issue}</span>
              <em>·</em>
              <span><i>building</i> &nbsp;·&nbsp; <i>designing</i> &nbsp;·&nbsp; <i>vibing</i></span>
              <em>·</em>
              <span>est. richardson, tx</span>
              <em>·</em>
              <span><i>scroll for more</i></span>
              <em>♡</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Cover = Cover;
