// ABOUT — diary spread

const About = ({ tweaks }) => {
  return (
    <section id="about" style={{ position: "relative", padding: "100px 6vw 120px", background: "var(--paper)", overflow: "hidden" }}>

      <SectionHead kicker="↳ p.02 — the editor" title="about" italic="her." num="01" />

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "start" }}>

        {/* LEFT: long form */}
        <div>
          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <span className="stamp">EST. 2005</span>
            <span className="stamp" style={{ background: "var(--pink)" }}>UTD '27</span>
            <span className="stamp" style={{ color: "var(--accent)" }}>♡ FILED UNDER: HER</span>
          </div>

          <p style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 36, lineHeight: 1.15, margin: "0 0 28px", letterSpacing: "-0.01em" }}>
            <span style={{
              float: "left", fontFamily: "var(--serif)", fontStyle: "normal",
              fontSize: 110, lineHeight: 0.85, marginRight: 12, marginTop: 6,
              color: "var(--accent)"
            }}>H</span>
            i, I'm Hiba — a developer & designer in-progress at the University of Texas at Dallas.
            I make things that are functional and pretty.
          </p>

          <p style={{ fontFamily: "var(--sans)", fontSize: 16, lineHeight: 1.7, color: "var(--ink)", marginBottom: 20 }}>
            I care about interfaces that speak to the user, type that has personality, and the smalls details that make a product feel <em style={{ fontFamily: "var(--serif-it)", color: "var(--accent)" }}>actually fun</em> to use. Currently studying CS, pursuing a minor in Business Intelligence and Analytics, and working towards a certificate in Applied Experience and Design! It's a lot, but it reflects who I am and my various interests within a product's life cycle! This summer, I'm super excited to join Bluebeam as a Product Management Intern and learn some really cool things. 
          </p>

          <p style={{ fontFamily: "var(--sans)", fontSize: 16, lineHeight: 1.7, color: "var(--ink)" }}>
            I love cats and the color pink, clearly. I'm always open to conversations about everything from space to musicals. Recently, I've loved going back to my roots as a web developer and have had fun utilizing AI coding tools to help me acheive fun features! 
          </p>

          {/* Quote pull */}
          <div style={{
            marginTop: 40,
            padding: "28px 32px",
            borderLeft: "4px solid var(--accent)",
            background: "var(--pink)",
            fontFamily: "var(--serif-it)", fontStyle: "italic",
            fontSize: 24, lineHeight: 1.3,
            position: "relative",
          }}>
            <span style={{
              position: "absolute", top: -20, left: 16,
              fontFamily: "var(--serif)", fontSize: 80, fontStyle: "normal",
              color: "var(--accent)", lineHeight: 1
            }}>"</span>
            i want my portfolio to feel like me as a website
          </div>
        </div>

        {/* RIGHT: facts polaroids stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>

          {/* Polaroid 1 */}
          <div style={{
            background: "var(--paper)", padding: 14, paddingBottom: 56,
            border: "2px solid var(--ink)",
            boxShadow: "6px 6px 0 var(--ink)",
            transform: "rotate(2deg)",
            alignSelf: "flex-start",
            width: "60%",
          }}>
            <div style={{ aspectRatio: "1 / 1", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#fdf3e3" }}>
              <img src="assets/cat.gif" alt="brain.exe working" style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 24, fontFamily: "var(--hand)", fontSize: 24 }}>
              brain.exe → loading ⌒
            </div>
          </div>

          {/* Stats card */}
          <div style={{
            background: "var(--ink)", color: "var(--paper)",
            padding: 28,
            transform: "rotate(-1.5deg)",
            border: "2px solid var(--ink)",
            boxShadow: "6px 6px 0 var(--accent)",
            alignSelf: "flex-end",
            width: "90%",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--pink)", marginBottom: 12 }}>
              ─── THE FILE ───
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 16px", fontFamily: "var(--sans)", fontSize: 14 }}>
              <span style={{ color: "var(--pink)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em" }}>NAME</span>
              <span>hiba mubeen</span>
              <span style={{ color: "var(--pink)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em" }}>MAJOR</span>
              <span>computer science</span>
              <span style={{ color: "var(--pink)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em" }}>MINOR</span>
              <span>business intelligence and analytics</span>
              <span style={{ color: "var(--pink)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em" }}>CERTIFICATE</span>
              <span>applied experience and design</span>
              <span style={{ color: "var(--pink)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em" }}>STATUS</span>
              <span> product management intern @ bluebeam. ♡</span>
              <span style={{ color: "var(--pink)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em" }}>FUEL</span>
              <span>iced strawberry matcha + kinder bueno </span>
              <span style={{ color: "var(--pink)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.15em" }}>NOW</span>
              <span>shipping this very portfolio</span>
            </div>
          </div>

          {/* Polaroid 2 — books */}
          <div style={{
            background: "var(--paper)", padding: 14, paddingBottom: 56,
            border: "2px solid var(--ink)",
            boxShadow: "6px 6px 0 var(--ink)",
            transform: "rotate(3deg)",
            alignSelf: "center",
            width: "75%",
            position: "relative",
          }}>
            <Placeholder label="moodboard" h={180} tone="grey" />
            <div style={{ position: "absolute", bottom: 16, left: 24, fontFamily: "var(--hand)", fontSize: 24 }}>
              currently inspired ♡
            </div>
            <div style={{ position: "absolute", top: -16, right: -16 }}>
              <Star size={48} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

window.About = About;
