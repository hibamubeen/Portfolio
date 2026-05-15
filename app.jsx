// Main app — every section is its own page; gingham loader between transitions

const { useState, useEffect } = React;

const PAGES = ["home", "about", "work", "cv", "bside", "talk"];

const App = () => {
  const tweaks = { intensity: "balanced", projectLayout: "mixed", accentHue: "pink", showStickers: true, issueNumber: "07" };
  useCursorEffects();

  const [openProject, setOpenProject] = useState(null);
  const [page, setPage] = useState("home");
  const [swiping, setSwiping] = useState(false);
  const [loadingTo, setLoadingTo] = useState(null);

  // Sync hash
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "") || "home";
      if (PAGES.includes(h)) setPage(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const navigateTo = (target) => {
    if (!PAGES.includes(target) || target === page) return;
    setLoadingTo(target);
    setSwiping(true);
    // swap page at peak coverage (~halfway through swipe-in)
    setTimeout(() => {
      window.location.hash = target === "home" ? "" : target;
      setPage(target);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 320);
    // unmount panel after exit
    setTimeout(() => {
      setSwiping(false);
      setLoadingTo(null);
    }, 750);
  };

  const handleOpenProject = (p) => setOpenProject(p);
  const handleCloseProject = () => setOpenProject(null);

  // Apply accent
  useEffect(() => {
    const accents = { pink: "#E94B6A", red: "#D72638", black: "#080F16", cherry: "#C5283D" };
    document.documentElement.style.setProperty("--accent", accents[tweaks.accentHue] || accents.pink);
  }, [tweaks.accentHue]);

  useEffect(() => {
    document.body.dataset.intensity = tweaks.intensity || "balanced";
  }, [tweaks.intensity]);

  const navItems = [
    { l: "COVER", t: "home" },
    { l: "ABOUT", t: "about" },
    { l: "WORK", t: "work" },
    { l: "CV", t: "cv" },
    { l: "B-SIDE", t: "bside" },
    { l: "TALK", t: "talk" },
  ];

  const pageLabels = {
    home: "THE COVER",
    about: "ABOUT HER",
    work: "THE WORK",
    cv: "THE RÉSUMÉ",
    bside: "THE B-SIDE",
    talk: "LET'S TALK",
  };

  return (
    <>
      {/* Swipe transition */}
      <SwipeTransition active={swiping} target={loadingTo ? pageLabels[loadingTo] : ""} />

      <nav style={{
        position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
        zIndex: 9000,
        display: "flex", gap: 4,
        background: "var(--paper)",
        border: "2px solid var(--ink)",
        borderRadius: 999,
        padding: 4,
        boxShadow: "4px 4px 0 var(--ink)",
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em",
      }}>
        {navItems.map(n => {
          const active = page === n.t;
          return (
            <a key={n.l} href="#" data-clickable
              onClick={(e) => { e.preventDefault(); navigateTo(n.t); }}
              style={{
                padding: "8px 14px",
                color: active ? "var(--pink)" : "var(--ink)",
                background: active ? "var(--ink)" : "transparent",
                textDecoration: "none",
                borderRadius: 999,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { if (!active) { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--pink)"; } }}
              onMouseLeave={(e) => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ink)"; } }}
            >{n.l}</a>
          );
        })}
      </nav>

      {page === "home" && (
        <>
          <Cover tweaks={tweaks} />
          <About tweaks={tweaks} />
          <Projects tweaks={{ ...tweaks, onOpenProject: handleOpenProject }} />
          <Contact tweaks={tweaks} />
        </>
      )}
      {page === "about" && <><About tweaks={tweaks} /><PageFoot onBack={() => navigateTo("home")} next={{ label: "see the work →", to: "work" }} navigateTo={navigateTo} /></>}
      {page === "work" && <><Projects tweaks={{ ...tweaks, onOpenProject: handleOpenProject }} /><PageFoot onBack={() => navigateTo("home")} next={{ label: "read the cv →", to: "cv" }} navigateTo={navigateTo} /></>}
      {page === "cv" && <><Resume tweaks={tweaks} /><PageFoot onBack={() => navigateTo("home")} next={{ label: "flip to the b-side →", to: "bside" }} navigateTo={navigateTo} /></>}
      {page === "bside" && <><Extras tweaks={tweaks} /><PageFoot onBack={() => navigateTo("home")} next={{ label: "say hi →", to: "talk" }} navigateTo={navigateTo} /></>}
      {page === "talk" && <><Contact tweaks={tweaks} /><PageFoot onBack={() => navigateTo("home")} next={null} navigateTo={navigateTo} /></>}

      {openProject && <ProjectDetail project={openProject} onClose={handleCloseProject} />}

    </>
  );
};

const PageFoot = ({ onBack, next, navigateTo }) => (
  <div style={{
    background: "var(--paper)", borderTop: "3px solid var(--ink)",
    padding: "60px 6vw", textAlign: "center",
    display: "flex", justifyContent: "center", alignItems: "center", gap: 24, flexWrap: "wrap",
  }}>
    <button data-clickable onClick={onBack} style={{
      background: "var(--paper)", color: "var(--ink)",
      border: "2px solid var(--ink)",
      padding: "14px 28px",
      fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.25em",
      cursor: "none",
      boxShadow: "5px 5px 0 var(--ink)",
    }}>← BACK TO THE COVER</button>
    {next && (
      <button data-clickable onClick={() => navigateTo(next.to)} style={{
        background: "var(--ink)", color: "var(--paper)",
        border: "2px solid var(--ink)",
        padding: "14px 28px",
        fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 18,
        cursor: "none",
        boxShadow: "5px 5px 0 var(--accent)",
      }}>{next.label}</button>
    )}
  </div>
);

// Swipe transition — pink + black panels sweep across with manga dots & sparkle trail
const SwipeTransition = ({ active, target }) => {
  React.useEffect(() => {
    if (!active) return;
    // hot pink sparkle trail following the vertical bars
    let raf;
    const duration = 700;
    const start = performance.now();
    const spawn = () => {
      const t = (performance.now() - start) / duration;
      if (t > 1.1) return;
      // bar A leading edge x; bar B is delayed by ~0.1s/0.7s = 0.14
      const tA = Math.min(t, 1);
      const tB = Math.min(Math.max(t - 0.14, 0), 1);
      // total travel from -30vw to 110vw, leading edge of bar = translateX + width
      const vw = window.innerWidth;
      const xA = (-0.30 + tA * 1.40) * vw + 0.22 * vw; // bar A right edge
      const xB = (-0.30 + tB * 1.40) * vw + 0.18 * vw; // bar B right edge
      // spawn 3 sparkles per frame across both bars' trailing edges
      [xA, xA, xB].forEach((x) => {
        const y = Math.random() * window.innerHeight;
        const s = document.createElement("div");
        const size = 6 + Math.random() * 12;
        s.style.cssText = `position:fixed;pointer-events:none;z-index:100001;left:${x + (Math.random()-0.5)*40}px;top:${y}px;width:${size}px;height:${size}px;`;
        // hot pink only
        s.innerHTML = `<svg viewBox="0 0 20 20" width="100%" height="100%"><path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#E94B6A"/></svg>`;
        document.body.appendChild(s);
        s.animate([
          { transform: "scale(0.3) rotate(0deg)", opacity: 0 },
          { transform: "scale(1) rotate(120deg)", opacity: 1, offset: 0.4 },
          { transform: "scale(0) rotate(240deg)", opacity: 0 },
        ], { duration: 800, easing: "ease-out" }).onfinish = () => s.remove();
      });
      raf = requestAnimationFrame(spawn);
    };
    raf = requestAnimationFrame(spawn);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  // Manga-dot SVG pattern (used as background-image)
  const dotPattern = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><circle cx='6' cy='6' r='2.4' fill='%23080F16'/></svg>")`;
  const dotPatternLight = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><circle cx='6' cy='6' r='2.4' fill='%23F9DDDF'/></svg>")`;

  return (
    <>
      <style>{`
        @keyframes swipeAcrossA { 0% { transform: translateX(-30vw) skewX(-8deg); } 100% { transform: translateX(110vw) skewX(-8deg); } }
        @keyframes swipeAcrossB { 0% { transform: translateX(-30vw) skewX(-8deg); } 100% { transform: translateX(110vw) skewX(-8deg); } }
      `}</style>
      {active && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 100000,
          pointerEvents: "none",
          overflow: "hidden",
        }}>
          {/* Vertical band A — baby pink with ink dots */}
          <div style={{
            position: "absolute", top: 0, bottom: 0,
            left: 0,
            width: "22vw",
            background: "var(--pink)",
            backgroundImage: dotPattern,
            borderLeft: "3px solid var(--ink)",
            borderRight: "3px solid var(--ink)",
            transform: "translateX(-30vw) skewX(-8deg)",
            animation: "swipeAcrossA 0.6s cubic-bezier(.5,0,.5,1) both",
          }} />
          {/* Vertical band B — ink with pink dots, slightly offset */}
          <div style={{
            position: "absolute", top: 0, bottom: 0,
            left: 0,
            width: "18vw",
            background: "var(--ink)",
            backgroundImage: dotPatternLight,
            transform: "translateX(-30vw) skewX(-8deg)",
            animation: "swipeAcrossB 0.6s 0.1s cubic-bezier(.5,0,.5,1) both",
          }} />
        </div>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
