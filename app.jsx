// Main app: the whole page is one tall cabin window at golden hour.
// Sections are frosted panes, clear transoms between them show the valley,
// and the light outside follows the scroll from afternoon to dusk.

const { useState, useEffect, useCallback } = React;

const NAV = [
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "experience", label: "experience" },
  { id: "offduty", label: "off duty" },
  { id: "contact", label: "say hi" },
];

// 2:30 pm at the top of the page, 5:50 pm at the bottom
const clockAt = (p) => {
  const mins = 14 * 60 + 30 + Math.round(p * 200);
  const h = Math.floor(mins / 60), m = mins % 60;
  return `${h > 12 ? h - 12 : h}:${String(m).padStart(2, "0")} pm`;
};

const Clock = () => {
  const [p, setP] = useState(hourStore.get());
  useEffect(() => hourStore.sub(setP), []);
  return <span className="clock" aria-label={`The light outside: ${clockAt(p)}`}>{clockAt(p)}</span>;
};

const NavStrip = ({ active }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero || !("IntersectionObserver" in window)) { setShow(true); return; }
    const io = new IntersectionObserver(([en]) => setShow(!en.isIntersecting), { rootMargin: "-80px 0px 0px 0px" });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return (
    <nav className={`nav frosted${show ? " show" : ""}`} aria-label="Main" aria-hidden={show ? undefined : "true"}>
      <a className="home" href="#home" tabIndex={show ? 0 : -1}>Hiba Mubeen</a>
      <div className="links">
        {NAV.map(n => (
          <a key={n.id} href={`#${n.id}`} tabIndex={show ? 0 : -1} className={active === n.id ? "active" : ""} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </div>
      <Clock />
    </nav>
  );
};

const App = () => {
  const [tweaks, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  const [open, setOpen] = useState(null);
  const openProject = useCallback((p) => setOpen(p), []);
  const closeProject = useCallback(() => setOpen(null), []);
  const [active, setActive] = useState("");
  const [exploring, setExploring] = useState(false);
  useSnowTrail();

  useEffect(() => {
    document.body.classList.toggle("still", tweaks.motion === false);
  }, [tweaks.motion]);

  // Mark the nav item for the section in view
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["home", ...NAV.map(n => n.id)].forEach(id => {
      const el = document.getElementById(id);
      el && io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Scene />
      <NavStrip active={active} />

      <main className="window">
        <Cover onExplore={() => setExploring(true)} />
        <About />
        <Clearing />
        <Projects onOpenProject={openProject} />
        <Clearing />
        <Resume />
        <Clearing />
        <Extras />
        <Clearing />
        <Contact />
      </main>

      {exploring && <World onClose={() => setExploring(false)} onOpenProject={openProject} />}
      {open && <ProjectDetail project={open} onClose={closeProject} />}

      <TweaksPanel title="Tweaks">
        <TweakSection title="Feel">
          <TweakToggle label="Motion (snow, smoke, drifting clouds)" value={tweaks.motion} onChange={(v) => setTweak("motion", v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
