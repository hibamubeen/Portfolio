// HERO: the valley at golden hour, your name, and a snow globe with you inside.
// Click the globe to shake it.

const SnowGlobe = () => {
  const cvRef = React.useRef(null);
  const [shaking, setShaking] = React.useState(false);
  const flakes = React.useRef([]);
  const size = React.useRef({ w: 0, h: 0 });

  const shake = React.useCallback(() => {
    flakes.current.forEach(f => { f.vx = (Math.random() - 0.5) * 7; f.vy = -2 - Math.random() * 6; f.rest = false; });
    if (!motionOff()) { setShaking(true); setTimeout(() => setShaking(false), 700); }
  }, []);

  React.useEffect(() => {
    const cv = cvRef.current, ctx = cv.getContext("2d");
    let raf = 0;
    const init = () => {
      const r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
      size.current = { w: r.width, h: r.height };
      cv.width = r.width * dpr; cv.height = r.height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      flakes.current = Array.from({ length: 110 }, () => ({
        x: r.width * (0.2 + Math.random() * 0.6), y: r.height * (0.86 + Math.random() * 0.08),
        vx: 0, vy: 0, r: 1 + Math.random() * 2.4, rest: true,
      }));
    };
    const tick = () => {
      const { w, h } = size.current;
      ctx.clearRect(0, 0, w, h);
      // a little snowbank inside the globe
      ctx.globalAlpha = 0.95; ctx.fillStyle = "#FFFFFF";
      ctx.beginPath(); ctx.ellipse(w / 2, h * 1.02, w * 0.5, h * 0.14, 0, 0, 6.283); ctx.fill();
      for (const f of flakes.current) {
        if (!f.rest) {
          f.vy += 0.045; f.vx *= 0.97; f.vy *= 0.975;
          f.vy = Math.min(f.vy, 0.9);
          f.x += f.vx + Math.sin((f.y + f.r * 40) / 30) * 0.25; f.y += f.vy;
          const floor = h * (0.9 + Math.abs(f.x / w - 0.5) * 0.1);
          if (f.x < w * 0.08) f.vx = Math.abs(f.vx);
          if (f.x > w * 0.92) f.vx = -Math.abs(f.vx);
          if (f.y < h * 0.08) f.vy = Math.abs(f.vy);
          if (f.y > floor) { f.y = floor - Math.random() * 8; f.rest = true; }
        }
        ctx.globalAlpha = 0.92; ctx.fillStyle = "#FFFFFF";
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    init(); raf = requestAnimationFrame(tick);
    const t = setTimeout(() => !motionOff() && shake(), 700);
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); window.removeEventListener("resize", init); };
  }, [shake]);

  return (
    <div className={`globe${shaking ? " shake" : ""}`}>
      <button type="button" className="globe-btn" onClick={shake} aria-label="Shake the snow globe">
        <span className="globe-glass">
          <img src="assets/hiba.jpg" alt="Portrait of Hiba Mubeen" />
          <canvas ref={cvRef} className="globe-snow" aria-hidden="true" />
          <span className="globe-shine" aria-hidden="true" />
        </span>
        <span className="globe-base" aria-hidden="true"><span className="globe-plaque">hiba</span></span>
      </button>
      <p className="globe-hint" aria-hidden="true">give it a shake</p>
    </div>
  );
};

const Cover = () => (
  <header id="home" className="hero">
    <div className="hero-copy">
      <h1 className="name">Hiba <span>Mubeen</span></h1>
      <p className="lede">
        Studying CS at UT Dallas and making things that are useful, pretty,
        and a little bit delightful, somewhere between product, design, and code.
      </p>
      <div className="hero-actions">
        <a className="btn btn-warm" href="#work">See what I've made</a>
        <a className="btn btn-soft" href="#contact">Say hi</a>
      </div>
    </div>
    <SnowGlobe />
    <Clearing className="hero-drift" side="left"><PlushFox /></Clearing>
  </header>
);

window.Cover = Cover;
