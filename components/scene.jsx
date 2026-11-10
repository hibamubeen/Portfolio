// THE VALLEY: a layered, illustrated winter landscape behind the whole page.
// Layers drift at different speeds as you scroll (depth), the light moves from
// golden afternoon to dusk, snow falls, clouds drift, and the cabin chimney smokes.

const HOURS = [
  { at: 0.00, skyTop: "#9DBBE6", skyMid: "#E7D3E4", skyBot: "#FCD9B0", sun: "#FFE9B8", sunY: 300, far: "#BCC0E0", mid: "#9EA8D2", pine: "#5E789E", snow: "#FFF7F1", shade: "#E6DDF0", lamp: 0.25, cabin: 0.55, stars: 0 },
  { at: 0.45, skyTop: "#8EA3D8", skyMid: "#EBB9C8", skyBot: "#FAC48C", sun: "#FFD08A", sunY: 520, far: "#B5A7D2", mid: "#8F92C2", pine: "#56658F", snow: "#FDEEE6", shade: "#DDCFE6", lamp: 0.4, cabin: 0.8, stars: 0 },
  { at: 1.00, skyTop: "#3F4A80", skyMid: "#9C83B4", skyBot: "#F1A378", sun: "#F69B5E", sunY: 760, far: "#7D77A9", mid: "#5E5F92", pine: "#3C4670", snow: "#E3DCEE", shade: "#BBB4D8", lamp: 0.7, cabin: 1.0, stars: 1 },
];

const hex = (h) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const mix = (a, b, t) => {
  const A = hex(a), B = hex(b);
  return "#" + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, "0")).join("");
};
const lightAt = (p) => {
  let i = 0;
  while (i < HOURS.length - 2 && p > HOURS[i + 1].at) i++;
  const a = HOURS[i], b = HOURS[i + 1];
  const t = Math.min(1, Math.max(0, (p - a.at) / (b.at - a.at)));
  const out = {};
  for (const k of Object.keys(a)) {
    if (k === "at") continue;
    out[k] = typeof a[k] === "string" ? mix(a[k], b[k], t) : a[k] + (b[k] - a[k]) * t;
  }
  return out;
};

const hourStore = (() => {
  let p = 0; const subs = new Set();
  return { get: () => p, set: (v) => { p = v; subs.forEach(f => f(v)); }, sub: (f) => { subs.add(f); return () => subs.delete(f); } };
})();

// A snowy pine: dark tiers with snow resting on each one
const SnowPine = ({ x, base, h, tone = "pine" }) => {
  const w = h * 0.5;
  const tiers = [0.0, 0.3, 0.55];
  return (
    <g>
      <rect x={x - h * 0.03} y={base - h * 0.12} width={h * 0.06} height={h * 0.14} fill="#5A4640" />
      {tiers.map((t, i) => {
        const top = base - h + t * h * 0.9;
        const bot = top + h * (0.42 + i * 0.06);
        const ww = w * (0.55 + i * 0.25);
        return (
          <g key={i}>
            <path className={`fill-${tone}`} d={`M${x} ${top} L${x + ww / 2} ${bot} Q${x} ${bot + 6} ${x - ww / 2} ${bot} Z`} />
            <path className="fill-snow" d={`M${x} ${top} L${x + ww * 0.22} ${top + (bot - top) * 0.45} Q${x + ww * 0.08} ${top + (bot - top) * 0.36} ${x} ${top + (bot - top) * 0.5} Q${x - ww * 0.1} ${top + (bot - top) * 0.38} ${x - ww * 0.24} ${top + (bot - top) * 0.47} Z`} opacity=".95" />
            <path className="fill-snow" d={`M${x - ww / 2} ${bot} Q${x - ww * 0.25} ${bot - 7} ${x} ${bot - 3} Q${x + ww * 0.25} ${bot - 8} ${x + ww / 2} ${bot} Q${x} ${bot + 6} ${x - ww / 2} ${bot} Z`} opacity=".9" />
          </g>
        );
      })}
    </g>
  );
};

const Birch = ({ x, base, h }) => (
  <g>
    <rect x={x} y={base - h} width="9" height={h} rx="4" fill="#F6F1EE" />
    {[0.15, 0.32, 0.5, 0.7].map((t, i) => <rect key={i} x={x + (i % 2 ? 4 : 0)} y={base - h + t * h} width="5" height="2.5" rx="1" fill="#6C5A57" opacity=".7" />)}
    <path d={`M${x + 5} ${base - h * 0.6} L${x + 26} ${base - h * 0.78}`} stroke="#F6F1EE" strokeWidth="3" strokeLinecap="round" />
    <path d={`M${x + 4} ${base - h * 0.45} L${x - 18} ${base - h * 0.62}`} stroke="#F6F1EE" strokeWidth="3" strokeLinecap="round" />
  </g>
);

const FAR_PINES = Array.from({ length: 26 }, (_, i) => ({ x: 20 + i * 64 + ((i * 37) % 30), h: 60 + ((i * 53) % 40) }));
const NEAR_PINES = [{ x: 70, h: 300 }, { x: 190, h: 220 }, { x: 1420, h: 280 }, { x: 1530, h: 340 }];
const STARS = [[220, 90], [380, 160], [560, 70], [760, 130], [980, 60], [1180, 150], [1340, 80], [1480, 170], [120, 200], [880, 210], [650, 230], [1260, 230]];

// Falling snow on a canvas over the whole scene
const useSnowfall = (ref) => {
  React.useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    let w = 0, h = 0, raf = 0, flakes = [];
    const still = () => document.body.classList.contains("still") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const size = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = window.innerWidth; h = window.innerHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(110, (w * h) / 14000));
      flakes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, r: 0.8 + Math.random() * 2.6, s: 0.25 + Math.random() * 0.6, ph: Math.random() * 6.28 }));
    };
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const f of flakes) {
        if (!still()) {
          f.y += f.s * (0.6 + f.r * 0.25);
          f.x += Math.sin(t / 1600 + f.ph) * 0.35;
          if (f.y > h + 5) { f.y = -5; f.x = Math.random() * w; }
        }
        ctx.globalAlpha = 0.45 + f.r * 0.18;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    size(); raf = requestAnimationFrame(draw);
    window.addEventListener("resize", size);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", size); };
  }, []);
};

const Scene = () => {
  const refs = React.useRef({});
  const r = (k) => (el) => { refs.current[k] = el; };
  const snowRef = React.useRef(null);
  const svgRef = React.useRef(null);
  useSnowfall(snowRef);

  React.useEffect(() => {
    let raf = 0;
    const paint = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const L = lightAt(p);
      const R = refs.current;
      R.skyTop.setAttribute("stop-color", L.skyTop);
      R.skyMid.setAttribute("stop-color", L.skyMid);
      R.skyBot.setAttribute("stop-color", L.skyBot);
      R.sun.setAttribute("cy", L.sunY); R.sun.setAttribute("fill", L.sun);
      R.glow.setAttribute("cy", L.sunY); R.glowStop.setAttribute("stop-color", L.sun);
      R.cabinLit.setAttribute("opacity", L.cabin.toFixed(3));
      R.stars.setAttribute("opacity", L.stars.toFixed(3));
      // parallax: nearer layers slide further
      R.far.setAttribute("transform", `translate(0 ${(-p * 40).toFixed(1)})`);
      R.mid.setAttribute("transform", `translate(0 ${(-p * 110).toFixed(1)})`);
      R.near.setAttribute("transform", `translate(0 ${(-p * 220).toFixed(1)})`);
      const s = svgRef.current.style;
      s.setProperty("--far", L.far); s.setProperty("--mid", L.mid); s.setProperty("--pine", L.pine);
      s.setProperty("--snowc", L.snow); s.setProperty("--shade", L.shade);
      document.documentElement.style.setProperty("--lamp", L.lamp.toFixed(3));
      hourStore.set(p);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const ro = new ResizeObserver(onScroll); ro.observe(document.body);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); ro.disconnect(); };
  }, []);

  return (
    <>
      <div className="scene" aria-hidden="true">
        <svg ref={svgRef} viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop ref={r("skyTop")} offset="0" stopColor={HOURS[0].skyTop} />
              <stop ref={r("skyMid")} offset=".45" stopColor={HOURS[0].skyMid} />
              <stop ref={r("skyBot")} offset=".78" stopColor={HOURS[0].skyBot} />
            </linearGradient>
            <radialGradient id="sunGlow">
              <stop ref={r("glowStop")} offset="0" stopColor={HOURS[0].sun} stopOpacity=".9" />
              <stop offset=".4" stopColor="#FFD9A0" stopOpacity=".35" />
              <stop offset="1" stopColor="#FFD9A0" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFE9D6" stopOpacity="0" />
              <stop offset="1" stopColor="#FFE9D6" stopOpacity=".55" />
            </linearGradient>
            <linearGradient id="snowGround" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset=".65" stopColor="#FFF1E2" />
              <stop offset="1" stopColor="#FFE2C6" />
            </linearGradient>
            <radialGradient id="windowGlow">
              <stop offset="0" stopColor="#FFC870" stopOpacity=".7" />
              <stop offset="1" stopColor="#FFC870" stopOpacity="0" />
            </radialGradient>
            <filter id="soft"><feGaussianBlur stdDeviation="14" /></filter>
          </defs>

          <rect width="1600" height="1000" fill="url(#sky)" />
          <g ref={r("stars")} opacity="0" fill="#FFF8E6">
            {STARS.map(([x, y], i) => <circle key={i} className="star" style={{ animationDelay: `${i * 0.4}s` }} cx={x} cy={y} r={i % 3 ? 1.6 : 2.6} />)}
          </g>
          <circle ref={r("glow")} cx="1120" cy={HOURS[0].sunY} r="520" fill="url(#sunGlow)" />
          <circle ref={r("sun")} cx="1120" cy={HOURS[0].sunY} r="70" fill={HOURS[0].sun} />

          {/* drifting warm clouds */}
          <g filter="url(#soft)" opacity=".75">
            <g className="cloud-drift"><ellipse cx="300" cy="220" rx="220" ry="40" fill="#FFF3EA" /><ellipse cx="380" cy="200" rx="120" ry="34" fill="#FFE6D6" /></g>
            <g className="cloud-drift slow"><ellipse cx="1300" cy="150" rx="260" ry="36" fill="#FFF0E6" /><ellipse cx="1200" cy="170" rx="140" ry="28" fill="#FAD9D2" /></g>
            <g className="cloud-drift"><ellipse cx="820" cy="320" rx="200" ry="26" fill="#FFE9D9" /></g>
          </g>

          {/* far mountains */}
          <g ref={r("far")}>
            <path className="fill-far" d="M0 650 L140 540 L240 590 L380 440 L520 570 L620 510 L760 600 L900 470 L1020 550 L1160 430 L1300 580 L1420 520 L1600 590 L1600 1100 L0 1100 Z" />
            <path fill="#FFFFFF" opacity=".85" d="M380 440 L428 482 L408 478 L392 492 L372 476 L344 480 Z M900 470 L948 508 L926 504 L908 518 L888 500 L860 504 Z M1160 430 L1214 474 L1190 470 L1172 486 L1150 468 L1118 474 Z M140 540 L176 568 L158 566 L142 576 L122 566 Z" />
            <rect y="430" width="1600" height="280" fill="url(#haze)" />
            <g>{FAR_PINES.map((t, i) => <SnowPine key={i} x={t.x} base={650 + ((i * 29) % 20)} h={t.h} tone="far" />)}</g>
          </g>

          {/* middle hills, with the cabin */}
          <g ref={r("mid")}>
            <path className="fill-mid" d="M0 760 C200 690 400 710 600 728 C800 746 940 680 1140 690 C1340 700 1480 720 1600 712 L1600 1150 L0 1150 Z" />
            <path className="fill-snow" d="M0 790 C220 742 420 760 620 770 C820 780 960 736 1160 742 C1360 748 1480 760 1600 752 L1600 1150 L0 1150 Z" opacity=".9" />
            <rect y="640" width="1600" height="200" fill="url(#haze)" opacity=".6" />
            {[260, 320, 380, 520, 880, 1380, 1440].map((x, i) => <SnowPine key={i} x={x} base={760 + (i % 3) * 6} h={110 + (i % 3) * 30} tone="mid" />)}
            {/* the cabin */}
            <g transform="translate(1050 640) scale(1.45)">
              <circle cx="60" cy="40" r="130" fill="url(#windowGlow)" ref={r("cabinLit")} opacity=".55" />
              <g className="smoke">
                <circle cx="104" cy="-36" r="9" /><circle cx="108" cy="-36" r="11" /><circle cx="100" cy="-36" r="13" />
              </g>
              <rect x="96" y="-34" width="14" height="30" fill="#7A5548" />
              <rect x="10" y="10" width="100" height="58" fill="#8A5E4D" />
              <path d="M10 20 L110 20 M10 34 L110 34 M10 48 L110 48" stroke="#6E4A3C" strokeWidth="2" />
              <path d="M-6 14 L60 -30 L126 14 Z" fill="#6E4A3C" />
              <path d="M-12 16 L60 -36 L132 16 L124 20 L60 -26 L-4 20 Z" fill="#FFFFFF" />
              <rect x="26" y="28" width="22" height="20" rx="2" fill="#FFCF7A" className="window-lit" />
              <rect x="72" y="28" width="22" height="20" rx="2" fill="#FFCF7A" className="window-lit" style={{ animationDelay: "1.3s" }} />
              <path d="M37 28 V48 M26 38 H48 M83 28 V48 M72 38 H94" stroke="#8A5E4D" strokeWidth="2" />
              <path d="M2 68 C30 60 90 60 120 68 Z" fill="#FFFFFF" />
            </g>
          </g>

          {/* near hill, big pines and birches */}
          <g ref={r("near")}>
            <path className="fill-shade" d="M0 860 C260 812 540 840 800 832 C1060 824 1340 800 1600 818 L1600 1300 L0 1300 Z" />
            <path fill="url(#snowGround)" d="M0 880 C280 846 560 872 820 864 C1080 856 1360 838 1600 852 L1600 1300 L0 1300 Z" />
            <Birch x={300} base={890} h={250} /><Birch x={330} base={900} h={190} /><Birch x={1290} base={880} h={230} />
            {NEAR_PINES.map((t, i) => <SnowPine key={i} x={t.x} base={900 + (i % 2) * 24} h={t.h} tone="pine" />)}
            <path fill="#FFFFFF" d="M0 940 C200 910 360 930 520 922 C700 912 860 940 1040 930 C1220 920 1400 900 1600 916 L1600 1300 L0 1300 Z" opacity=".9" />
          </g>
        </svg>
        <canvas ref={snowRef} className="snowfall" />
      </div>
      <div className="lamplight" aria-hidden="true" />
    </>
  );
};

Object.assign(window, { Scene, hourStore, useSnowfall });
