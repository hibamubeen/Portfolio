// Shared pieces: icons, frost-crystal corners, and the clear transom panes between sections

const ICONS = {
  spark: <path d="M50 8 C54 34 66 46 92 50 C66 54 54 66 50 92 C46 66 34 54 8 50 C34 46 46 34 50 8 Z" />,
  paw: <g><ellipse cx="50" cy="66" rx="20" ry="16" /><circle cx="26" cy="40" r="9" /><circle cx="42" cy="26" r="9" /><circle cx="58" cy="26" r="9" /><circle cx="74" cy="40" r="9" /></g>,
  dash: <g><rect x="14" y="44" width="72" height="12" rx="6" /><rect x="30" y="24" width="40" height="8" rx="4" opacity=".7" /><rect x="30" y="68" width="40" height="8" rx="4" opacity=".7" /></g>,
  wave: <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"><path d="M10 40 C22 28 34 28 46 40 S70 52 90 40" /><path d="M10 62 C22 50 34 50 46 62 S70 74 90 62" /></g>,
  camera: <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"><rect x="10" y="30" width="62" height="44" rx="10" /><path d="M72 44 L90 34 V70 L72 60" /></g>,
  shell: <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M50 86 C24 86 12 64 14 46 C16 28 32 14 50 14 C68 14 84 28 86 46 C88 64 76 86 50 86 Z" /><path d="M50 86 L50 18 M50 86 L28 26 M50 86 L72 26 M50 86 L18 50 M50 86 L82 50" /></g>,
  leaf: <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 82 C18 40 46 16 86 14 C84 56 60 82 18 82 Z" /><path d="M18 82 L62 38" /></g>,
  mountain: <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 84 L38 30 L56 58 L68 42 L92 84 Z" /><path d="M30 44 L38 30 L46 44 L41 40 L38 46 L35 40 Z" /></g>,
  moon: <g><path d="M62 12 C42 16 28 34 28 54 C28 74 44 90 64 90 C74 90 82 86 88 80 C60 82 42 60 48 36 C51 24 56 16 62 12 Z" /><path d="M78 20 L81 28 L89 31 L81 34 L78 42 L75 34 L67 31 L75 28 Z" /></g>,
  chart: <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 84 H88" /><rect x="20" y="52" width="14" height="28" rx="4" /><rect x="44" y="30" width="14" height="50" rx="4" /><rect x="68" y="42" width="14" height="38" rx="4" /></g>,
  chat: <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"><path d="M16 22 H84 V64 H46 L28 80 V64 H16 Z" /><path d="M32 40 H68 M32 52 H56" /></g>,
  pin: <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"><path d="M50 90 C30 66 20 52 20 38 C20 22 34 10 50 10 C66 10 80 22 80 38 C80 52 70 66 50 90 Z" /><circle cx="50" cy="38" r="11" /></g>,
  arrowL: <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"><path d="M60 20 L30 50 L60 80" /></g>,
  arrowR: <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"><path d="M40 20 L70 50 L40 80" /></g>,
  close: <g fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"><path d="M22 22 L78 78 M78 22 L22 78" /></g>,
};
const Icon = ({ name, className = "icon" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">{ICONS[name]}</svg>
);

// A spray of hoarfrost fronds that grows out of a pane's corner
const FrondCorner = ({ className = "" }) => (
  <svg className={`frond-corner ${className}`} viewBox="0 0 120 120" aria-hidden="true">
    <g fill="none" stroke="#FFFFFF" strokeLinecap="round" opacity=".85">
      <path d="M0 0 L70 46" strokeWidth="1.6" />
      <path d="M14 9 L10 24 M26 17 L20 34 M38 25 L34 40 M50 33 L48 48 M18 12 L32 8 M30 20 L46 18 M42 28 L58 28" strokeWidth="1.1" />
      <path d="M0 0 L40 84" strokeWidth="1.4" />
      <path d="M8 17 L0 30 M14 30 L4 44 M21 45 L12 58 M28 60 L22 72 M10 21 L24 22 M17 36 L30 38 M24 51 L36 54" strokeWidth="1" />
      <path d="M0 0 L96 18" strokeWidth="1.2" />
      <path d="M22 4 L28 16 M44 8 L50 20 M66 12 L72 24 M30 6 L38 0 M54 10 L62 4" strokeWidth=".9" />
    </g>
  </svg>
);

// An open stretch of valley between sections; a plush may sit on a little snow drift
const Clearing = ({ children, className = "", side = "center" }) => (
  <div className={`clearing ${className} side-${side}`}>
    {children && (
      <div className="drift">
        {children}
        <svg className="drift-mound" viewBox="0 0 220 50" aria-hidden="true">
          <path d="M0 50 C20 18 70 4 110 6 C150 8 196 20 220 50 Z" fill="#FFFFFF" />
          <path d="M18 40 C50 24 90 20 120 22" fill="none" stroke="#F3E3EE" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    )}
  </div>
);

// A little lantern with a flickering flame
const Lantern = () => (
  <svg className="lantern" viewBox="0 0 60 96" aria-hidden="true">
    <circle cx="30" cy="56" r="34" fill="#FFC870" opacity=".28" className="lantern-glow" />
    <path d="M22 10 C22 2 38 2 38 10" fill="none" stroke="#5A4640" strokeWidth="3" />
    <rect x="16" y="12" width="28" height="8" rx="3" fill="#6B4A3A" />
    <rect x="18" y="20" width="24" height="50" rx="5" fill="#FFE3AE" opacity=".55" stroke="#6B4A3A" strokeWidth="3" />
    <path className="flame" d="M30 34 C36 44 36 54 30 58 C24 54 24 44 30 34 Z" fill="#FFB347" />
    <path d="M30 44 C33 50 33 54 30 56 C27 54 27 50 30 44 Z" fill="#FFF1C9" />
    <rect x="14" y="70" width="32" height="8" rx="3" fill="#6B4A3A" />
  </svg>
);

// A foreground pine, close to the camera: saturated, crisp, heavy with snow
const FgPine = ({ x, base, h, c = "#47608A" }) => {
  const w = h * 0.52;
  return (
    <g>
      <rect x={x - h * 0.03} y={base - h * 0.12} width={h * 0.06} height={h * 0.14} fill="#5A4034" />
      {[0, 0.28, 0.52].map((t, i) => {
        const top = base - h + t * h * 0.92;
        const bot = top + h * (0.42 + i * 0.07);
        const ww = w * (0.5 + i * 0.27);
        return (
          <g key={i}>
            <path d={`M${x} ${top} L${x + ww / 2} ${bot} Q${x} ${bot + 8} ${x - ww / 2} ${bot} Z`} fill={c} />
            <path d={`M${x} ${top} L${x + ww / 2} ${bot} Q${x + ww * 0.25} ${bot + 3} ${x} ${bot + 5} Z`} fill="#000" opacity=".12" />
            <path d={`M${x} ${top} L${x + ww * 0.24} ${top + (bot - top) * 0.46} Q${x + ww * 0.1} ${top + (bot - top) * 0.38} ${x} ${top + (bot - top) * 0.52} Q${x - ww * 0.12} ${top + (bot - top) * 0.4} ${x - ww * 0.26} ${top + (bot - top) * 0.48} Z`} fill="#FFFFFF" />
            <path d={`M${x - ww / 2} ${bot} Q${x - ww * 0.28} ${bot - 9} ${x} ${bot - 4} Q${x + ww * 0.28} ${bot - 10} ${x + ww / 2} ${bot} Q${x} ${bot + 8} ${x - ww / 2} ${bot} Z`} fill="#FFFFFF" />
          </g>
        );
      })}
    </g>
  );
};

const FgBirch = ({ x, base, h }) => (
  <g>
    <rect x={x} y={base - h} width="14" height={h} rx="6" fill="#FBF6F2" />
    <rect x={x + 9} y={base - h} width="5" height={h} rx="2" fill="#E7DCDD" />
    {[0.12, 0.26, 0.41, 0.57, 0.73].map((t, i) => <rect key={i} x={x + (i % 2 ? 6 : 1)} y={base - h + t * h} width="7" height="3" rx="1.5" fill="#5E4B48" opacity=".75" />)}
    <path d={`M${x + 8} ${base - h * 0.62} L${x + 44} ${base - h * 0.82}`} stroke="#FBF6F2" strokeWidth="5" strokeLinecap="round" />
    <path d={`M${x + 6} ${base - h * 0.46} L${x - 30} ${base - h * 0.66}`} stroke="#FBF6F2" strokeWidth="5" strokeLinecap="round" />
  </g>
);

// The ground a section stands on: a snowy hill behind it, and trees close to the camera in front.
// The scenery scrolls with the content while the sky stays put, which is where the depth comes from.
const Scenery = ({ flip = false, kind = "pines", friend = null, friendSide = "left" }) => (
  <>
    <div className="scenery scenery-back" aria-hidden="true">
      <svg viewBox="0 0 1600 420" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hillSnow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset=".55" stopColor="#FFF4EA" />
            <stop offset="1" stopColor="#FCE6D6" />
          </linearGradient>
          <linearGradient id="hillShade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#D9D3EC" />
            <stop offset="1" stopColor="#F2DCE3" />
          </linearGradient>
        </defs>
        <path d={flip ? "M0 120 C300 40 700 60 1000 90 C1250 115 1450 70 1600 40 V420 H0 Z" : "M0 40 C200 70 500 110 800 90 C1100 70 1350 40 1600 110 V420 H0 Z"} fill="url(#hillShade)" opacity=".7" />
        <path d={flip ? "M0 160 C320 90 720 110 1020 130 C1280 148 1460 110 1600 90 V420 H0 Z" : "M0 90 C220 110 520 150 820 130 C1120 110 1360 90 1600 150 V420 H0 Z"} fill="url(#hillSnow)" />
      </svg>
    </div>
    <div className={`scenery scenery-front${flip ? " flip" : ""}`} aria-hidden="true">
      <svg className="fg fg-a" viewBox="0 0 360 520">
        {kind === "birch"
          ? <><FgBirch x={120} base={520} h={470} /><FgBirch x={200} base={520} h={380} /><FgPine x={60} base={520} h={260} c="#3F5679" /></>
          : <><FgPine x={150} base={520} h={500} c="#425A82" /><FgPine x={270} base={520} h={330} c="#4D668F" /><FgPine x={40} base={520} h={300} c="#3A5076" /></>}
        <path d="M0 520 C40 470 140 455 220 470 C290 482 340 500 360 520 Z" fill="#FFFFFF" />
      </svg>
      <svg className="fg fg-b" viewBox="0 0 300 420">
        {kind === "birch"
          ? <><FgPine x={170} base={420} h={400} c="#425A82" /><FgPine x={70} base={420} h={250} c="#4D668F" /></>
          : <><FgBirch x={150} base={420} h={390} /><FgPine x={60} base={420} h={230} c="#4D668F" /></>}
        <path d="M0 420 C50 380 140 372 210 384 C260 394 290 405 300 420 Z" fill="#FFFFFF" />
      </svg>
      {friend && <div className={`friend friend-${friendSide}`}>{friend}</div>}
    </div>
  </>
);

// A soft trail of tiny snowflakes behind the cursor (mouse only, and only when motion is welcome)
const useSnowTrail = () => {
  React.useEffect(() => {
    if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
    let last = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - last < 45 || document.body.classList.contains("still") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      last = now;
      const el = document.createElement("span");
      el.className = "cursor-flake";
      el.setAttribute("aria-hidden", "true");
      const s = 3 + Math.random() * 4;
      el.style.cssText = `left:${e.clientX + 6}px;top:${e.clientY + 10}px;width:${s}px;height:${s}px;`;
      document.body.appendChild(el);
      el.animate([
        { transform: "translate(-50%,-50%) scale(1)", opacity: 0.9 },
        { transform: `translate(calc(-50% + ${(Math.random() - 0.5) * 24}px), calc(-50% + ${14 + Math.random() * 18}px)) scale(.3)`, opacity: 0 },
      ], { duration: 900, easing: "cubic-bezier(.16,1,.3,1)" }).onfinish = () => el.remove();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
};

Object.assign(window, { Icon, FrondCorner, Clearing, Lantern, Scenery, FgPine, FgBirch, useSnowTrail });
