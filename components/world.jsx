// THE WORLD: a little snowy map you walk around as a plushie.
// Arrow keys / WASD, or click / tap where to go. Walk up to a landmark and press E (or tap) to open it.

const WORLD_W = 2400, WORLD_H = 1700;

const PLAYERS = [
  { id: "fox", name: "Fox", el: () => <PlushFox /> },
  { id: "penguin", name: "Penguin", el: () => <PlushPenguin /> },
  { id: "bear", name: "Polar bear", el: () => <PlushPolarBear /> },
  { id: "hare", name: "Hare", el: () => <PlushHare /> },
];

const LANDMARKS = [
  { id: "about", label: "About me", x: 700, y: 560, r: 120, art: "cabin" },
  { id: "projects", label: "Things I've made", x: 1700, y: 520, r: 120, art: "clothesline" },
  { id: "journey", label: "My journey", x: 1940, y: 1100, r: 110, art: "trail" },
  { id: "offduty", label: "Off duty", x: 620, y: 1220, r: 100, art: "campfire" },
  { id: "contact", label: "Say hi", x: 1260, y: 1460, r: 80, art: "mailbox" },
];
const SPAWN = { x: 1200, y: 930 };

// deterministic tree scatter that keeps clear of landmarks, the pond and the spawn
const TREES = (() => {
  let s = 11; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const out = [];
  let tries = 0;
  while (out.length < 70 && tries < 2000) {
    tries++;
    const x = 60 + rnd() * (WORLD_W - 120), y = 140 + rnd() * (WORLD_H - 200);
    const clear = [...LANDMARKS, { x: 1200, y: 800, r: 230 }, { ...SPAWN, r: 160 }].every(l => Math.hypot(l.x - x, l.y - y) > (l.r || 100) + 90);
    if (clear && out.every(t => Math.hypot(t.x - x, t.y - y) > 85)) out.push({ x, y, h: 120 + rnd() * 110, birch: rnd() < 0.22 });
  }
  return out;
})();

// rocks, bushes and logs sprinkled around for texture
const DECOR = (() => {
  let s = 29; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const out = []; let tries = 0;
  while (out.length < 46 && tries < 3000) {
    tries++;
    const x = 60 + rnd() * (WORLD_W - 120), y = 160 + rnd() * (WORLD_H - 220);
    const ok = [...LANDMARKS, { x: 1200, y: 800, r: 220 }, { ...SPAWN, r: 120 }].every(l => Math.hypot(l.x - x, l.y - y) > (l.r || 100) + 50)
      && TREES.every(t => Math.hypot(t.x - x, t.y - y) > 60) && out.every(d => Math.hypot(d.x - x, d.y - y) > 70);
    if (ok) { const r = rnd(); out.push({ x, y, kind: r < 0.45 ? "rock" : r < 0.85 ? "bush" : "log", s: 0.7 + rnd() * 0.6 }); }
  }
  return out;
})();

const FLAKE_SPOTS = (() => {
  let s = 47; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const out = []; let tries = 0;
  while (out.length < 12 && tries < 3000) {
    tries++;
    const x = 120 + rnd() * (WORLD_W - 240), y = 220 + rnd() * (WORLD_H - 320);
    const ok = [...LANDMARKS, { x: 1200, y: 800, r: 220 }].every(l => Math.hypot(l.x - x, l.y - y) > (l.r || 100) + 60)
      && TREES.every(t => Math.hypot(t.x - x, t.y - y) > 70) && out.every(f => Math.hypot(f.x - x, f.y - y) > 260);
    if (ok) out.push({ x, y });
  }
  return out;
})();

const OWL = { x: 960, y: 1030 };
const OWL_LINES = [
  "hoo! welcome to Hiba's little world.",
  "the cabin up north holds her story.",
  "psst, there are golden snowflakes hiding around here.",
  "the mailbox is the best way to say hi.",
];

const Decor = ({ d }) => (
  <div className="w-decor" style={{ left: d.x, top: d.y, zIndex: Math.round(d.y), "--s": d.s }} aria-hidden="true">
    {d.kind === "rock" && <svg viewBox="0 0 90 56"><ellipse cx="45" cy="50" rx="40" ry="6" fill="#8E8AB8" opacity=".22" /><path d="M8 48 C6 30 22 14 44 14 C66 14 84 28 82 48 Z" fill="#AFA9C9" /><path d="M20 44 C24 32 36 26 50 28" fill="none" stroke="#9790B6" strokeWidth="3" strokeLinecap="round" /><path d="M14 30 C22 12 66 8 78 28 C64 22 30 22 14 30 Z" fill="#FFFFFF" /></svg>}
    {d.kind === "bush" && <svg viewBox="0 0 100 60"><ellipse cx="50" cy="54" rx="44" ry="6" fill="#8E8AB8" opacity=".22" /><circle cx="30" cy="36" r="20" fill="#6F86AE" /><circle cx="54" cy="30" r="24" fill="#7C93BA" /><circle cx="74" cy="40" r="16" fill="#6F86AE" /><path d="M12 30 C20 10 52 2 66 12 C78 6 92 22 88 34 C70 24 40 18 12 30 Z" fill="#FFFFFF" /></svg>}
    {d.kind === "log" && <svg viewBox="0 0 120 50"><ellipse cx="60" cy="44" rx="54" ry="6" fill="#8E8AB8" opacity=".22" /><rect x="10" y="18" width="96" height="24" rx="12" fill="#9A6A52" /><ellipse cx="104" cy="30" rx="9" ry="12" fill="#D9A37E" /><ellipse cx="104" cy="30" rx="4" ry="6" fill="#B98060" /><path d="M14 22 C30 8 90 8 104 20 C80 16 40 16 14 22 Z" fill="#FFFFFF" /></svg>}
  </div>
);

const GoldenFlake = () => (
  <svg viewBox="0 0 40 40" aria-hidden="true"><g stroke="#E9A53E" strokeWidth="3.2" strokeLinecap="round" fill="none">
    <path d="M20 4 V36 M6 12 L34 28 M6 28 L34 12" /><path d="M16 7 L20 11 L24 7 M16 33 L20 29 L24 33 M7 17 L11 15 L10 10 M33 23 L29 25 L30 30 M7 23 L11 25 L10 30 M33 17 L29 15 L30 10" />
  </g><circle cx="20" cy="20" r="4" fill="#FFE29A" /></svg>
);

const LandmarkArt = ({ art }) => {
  if (art === "cabin") return (
    <svg viewBox="0 0 260 230" className="lm-art" aria-hidden="true">
      <ellipse cx="130" cy="214" rx="120" ry="16" fill="#8E8AB8" opacity=".25" />
      <g className="smoke"><circle cx="186" cy="34" r="10" /><circle cx="190" cy="34" r="12" /><circle cx="182" cy="34" r="14" /></g>
      <rect x="176" y="40" width="20" height="44" fill="#7A5548" />
      <rect x="30" y="100" width="200" height="110" rx="4" fill="#9A6A52" />
      <path d="M30 122 H230 M30 146 H230 M30 170 H230 M30 194 H230" stroke="#7E5442" strokeWidth="3" />
      <path d="M10 108 L130 30 L250 108 Z" fill="#6E4A3C" />
      <path d="M2 112 L130 22 L258 112 L246 118 L130 40 L14 118 Z" fill="#FFFFFF" />
      <rect x="54" y="132" width="44" height="40" rx="3" fill="#FFCF7A" className="window-lit" />
      <rect x="162" y="132" width="44" height="40" rx="3" fill="#FFCF7A" className="window-lit" style={{ animationDelay: "1.2s" }} />
      <path d="M76 132 V172 M54 152 H98 M184 132 V172 M162 152 H206" stroke="#9A6A52" strokeWidth="4" />
      <rect x="112" y="146" width="36" height="64" rx="4" fill="#6E4A3C" />
      <circle cx="140" cy="180" r="3" fill="#F2B866" />
    </svg>
  );
  if (art === "clothesline") return (
    <svg viewBox="0 0 300 200" className="lm-art" aria-hidden="true">
      <ellipse cx="150" cy="190" rx="140" ry="12" fill="#8E8AB8" opacity=".25" />
      <rect x="20" y="40" width="10" height="150" rx="4" fill="#8A5A42" /><rect x="270" y="40" width="10" height="150" rx="4" fill="#8A5A42" />
      <path d="M25 50 Q150 82 275 50" fill="none" stroke="#7A5A4A" strokeWidth="2.5" />
      {[["#F8C9A8", 60, 58], ["#CFE0F2", 118, 68], ["#D9E8CF", 176, 68], ["#DCD3EF", 230, 58]].map(([c, x, y], i) => (
        <g key={i} className="hang" style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${x + 18}px ${y}px` }}>
          <rect x={x} y={y + 4} width="36" height="46" rx="3" fill="#FFFBF7" />
          <rect x={x + 4} y={y + 8} width="28" height="24" rx="2" fill={c} />
          <rect x={x + 15} y={y - 4} width="6" height="14" rx="2" fill="#D9A37E" />
        </g>
      ))}
      <path d="M14 42 C20 34 34 34 36 42 Z M264 42 C270 34 284 34 286 42 Z" fill="#FFFFFF" />
    </svg>
  );
  if (art === "trail") return (
    <svg viewBox="0 0 280 260" className="lm-art" aria-hidden="true">
      <path d="M10 230 L120 40 L170 110 L200 70 L275 230 Z" fill="#B8B3DA" />
      <path d="M120 40 L146 84 L132 80 L122 94 L108 78 L92 86 Z M200 70 L222 104 L208 100 L198 110 L186 98 Z" fill="#FFFFFF" />
      <path d="M60 230 C90 190 150 200 140 160 C130 120 170 110 150 70" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeDasharray="1 14" />
      <ellipse cx="140" cy="244" rx="120" ry="14" fill="#8E8AB8" opacity=".25" />
      <rect x="196" y="150" width="9" height="96" rx="3" fill="#7E5640" />
      <path d="M170 156 H236 L248 168 L236 180 H170 Z" fill="#B37A5A" /><path d="M232 188 H168 L156 200 L168 212 H232 Z" fill="#A06F4F" />
      <path d="M166 152 C176 146 232 146 240 154 Z" fill="#FFFFFF" />
    </svg>
  );
  if (art === "campfire") return (
    <svg viewBox="0 0 240 180" className="lm-art" aria-hidden="true">
      <defs><radialGradient id="fireGlow"><stop offset="0" stopColor="#FFB347" stopOpacity=".45" /><stop offset="1" stopColor="#FFB347" stopOpacity="0" /></radialGradient></defs>
      <circle cx="120" cy="120" r="115" fill="url(#fireGlow)" className="lantern-glow" />
      <ellipse cx="120" cy="160" rx="90" ry="14" fill="#8E8AB8" opacity=".25" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => <ellipse key={i} cx={120 + Math.cos(i * 0.785) * 46} cy={150 + Math.sin(i * 0.785) * 14} rx="11" ry="8" fill="#A9A6B8" />)}
      <rect x="80" y="136" width="80" height="12" rx="6" fill="#7E5640" transform="rotate(14 120 142)" />
      <rect x="80" y="136" width="80" height="12" rx="6" fill="#8A5A42" transform="rotate(-14 120 142)" />
      <path className="flame" d="M120 70 C146 100 144 132 120 142 C96 132 94 100 120 70 Z" fill="#FFB347" />
      <path className="flame" style={{ animationDelay: ".3s" }} d="M120 96 C134 112 134 132 120 138 C106 132 106 112 120 96 Z" fill="#FFE29A" />
      <rect x="18" y="122" width="60" height="16" rx="7" fill="#9A6A52" /><path d="M18 124 C30 116 66 116 78 124 Z" fill="#FFFFFF" />
    </svg>
  );
  return (
    <svg viewBox="0 0 140 180" className="lm-art" aria-hidden="true">
      <ellipse cx="70" cy="170" rx="56" ry="10" fill="#8E8AB8" opacity=".25" />
      <rect x="62" y="80" width="14" height="90" rx="4" fill="#7E5640" />
      <path d="M22 40 C22 18 40 10 60 10 H90 C108 10 118 22 118 40 V86 H22 Z" fill="#7FA7D9" />
      <path d="M22 40 C22 18 40 10 60 10 C80 10 90 22 90 40 V86 H22 Z" fill="#6B93C8" />
      <rect x="34" y="52" width="44" height="8" rx="4" fill="#3F5F8E" />
      <g className="mail-flag"><rect x="114" y="22" width="6" height="40" fill="#E9A07E" /><rect x="114" y="22" width="22" height="14" rx="2" fill="#F2B866" /></g>
      <path d="M16 18 C30 2 104 0 122 20 C104 12 40 12 16 18 Z" fill="#FFFFFF" />
    </svg>
  );
};

const WorldTree = ({ t }) => (
  <div className="w-tree" style={{ left: t.x, top: t.y, zIndex: Math.round(t.y), "--h": `${t.h}px` }} aria-hidden="true">
    <svg viewBox={t.birch ? "-40 -10 120 330" : "-130 -10 260 330"} style={{ height: t.h }}>
      <ellipse cx="0" cy="318" rx={t.birch ? 30 : 90} ry="10" fill="#8E8AB8" opacity=".22" />
      {t.birch ? <FgBirch x={-7} base={320} h={300} /> : <FgPine x={0} base={320} h={310} c={t.h > 190 ? "#425A82" : "#4D668F"} />}
    </svg>
  </div>
);

const CharacterSelect = ({ onPick, onLeave }) => (
  <div className="w-select">
    <div className="w-select-card">
      <h2>Who are you today?</h2>
      <p>Pick a plushie to explore Hiba's snowy little world. Walk with the arrow keys or WASD, or tap where you want to go.</p>
      <div className="w-select-row">
        {PLAYERS.map(p => (
          <div key={p.id} role="button" tabIndex={0} className="w-pick" onClick={() => onPick(p.id)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPick(p.id); } }}>
            <span className="w-pick-art" inert="">{p.el()}</span>
            <span>{p.name}</span>
          </div>
        ))}
      </div>
      <button type="button" className="w-link" onClick={onLeave}>Skip it, show me the regular page</button>
    </div>
  </div>
);

const World = ({ onClose, onOpenProject }) => {
  const [who, setWho] = React.useState(null);
  const [near, setNear] = React.useState(null);
  const [open, setOpen] = React.useState(null);
  const [visited, setVisited] = React.useState(() => new Set());
  const [cheer, setCheer] = React.useState(false);
  const [got, setGot] = React.useState(() => new Set());
  const [owlLine, setOwlLine] = React.useState(null);
  const gotRef = React.useRef(got); gotRef.current = got;
  const owlState = React.useRef({ near: false, i: 0 });
  const meDot = React.useRef(null);
  const viewRef = React.useRef(null), worldRef = React.useRef(null), playerRef = React.useRef(null), prints = React.useRef(null), snowRef = React.useRef(null);
  const st = React.useRef({ x: SPAWN.x, y: SPAWN.y, cx: 0, cy: 0, keys: {}, target: null, face: 1, lastPrint: { x: SPAWN.x, y: SPAWN.y }, foot: 0 });
  const openRef = React.useRef(null); openRef.current = open;
  const nearRef = React.useRef(null); nearRef.current = near;

  useSnowfall(snowRef);

  const enter = React.useCallback((id) => {
    if (!id) return;
    setOpen(id);
    setVisited(v => { const n = new Set(v); n.add(id); if (n.size === LANDMARKS.length && v.size < n.size) setTimeout(() => setCheer(true), 400); return n; });
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      const k = e.key.toLowerCase();
      if (k === "escape") { openRef.current ? setOpen(null) : onClose(); return; }
      if (openRef.current) return;
      if (["e", "enter", " "].includes(k) && nearRef.current) { e.preventDefault(); enter(nearRef.current); return; }
      if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(k)) { e.preventDefault(); st.current.keys[k] = e.type === "keydown"; st.current.target = null; }
    };
    window.addEventListener("keydown", onKey); window.addEventListener("keyup", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); window.removeEventListener("keyup", onKey); };
  }, [onClose, enter]);

  // the game loop
  React.useEffect(() => {
    if (!who) return;
    let raf = 0, last = performance.now();
    const solid = [...LANDMARKS.map(l => ({ x: l.x, y: l.y - 10, r: l.r * 0.55 })), ...TREES.map(t => ({ x: t.x, y: t.y - 6, r: t.birch ? 14 : 26 })), { x: 1200, y: 800, r: 150 }, { x: OWL.x, y: OWL.y - 8, r: 26 }];
    const step = (now) => {
      const dt = Math.min(48, now - last) / 16.67; last = now;
      const s = st.current, K = s.keys;
      let dx = (K.arrowright || K.d ? 1 : 0) - (K.arrowleft || K.a ? 1 : 0);
      let dy = (K.arrowdown || K.s ? 1 : 0) - (K.arrowup || K.w ? 1 : 0);
      if (!dx && !dy && s.target) {
        const tx = s.target.x - s.x, ty = s.target.y - s.y, d = Math.hypot(tx, ty);
        if (d < 6) s.target = null; else { dx = tx / d; dy = ty / d; }
      }
      const moving = !openRef.current && (dx || dy);
      if (moving) {
        const m = Math.hypot(dx, dy); dx /= m; dy /= m;
        const sp = 4.2 * dt;
        let nx = Math.min(WORLD_W - 40, Math.max(40, s.x + dx * sp)), ny = Math.min(WORLD_H - 30, Math.max(120, s.y + dy * sp));
        for (const o of solid) {
          const ox = nx - o.x, oy = (ny - o.y) * 1.6, d = Math.hypot(ox, oy);
          if (d < o.r + 18) { const push = (o.r + 18 - d) / (d || 1); nx += ox * push; ny += (oy * push) / 1.6; }
        }
        s.x = nx; s.y = ny;
        if (dx) s.face = dx > 0 ? 1 : -1;
        if (Math.hypot(s.x - s.lastPrint.x, s.y - s.lastPrint.y) > 30) {
          s.lastPrint = { x: s.x, y: s.y }; s.foot ^= 1;
          const f = document.createElement("span");
          f.className = "w-print";
          f.style.left = `${s.x + (s.foot ? 7 : -7)}px`; f.style.top = `${s.y - 2}px`;
          prints.current.appendChild(f);
          if (prints.current.children.length > 70) prints.current.firstChild.remove();
        }
      }
      // camera eases toward the player
      const vw = viewRef.current.clientWidth, vh = viewRef.current.clientHeight;
      const tcx = Math.min(WORLD_W - vw, Math.max(0, s.x - vw / 2)), tcy = Math.min(WORLD_H - vh, Math.max(0, s.y - vh * 0.55));
      s.cx += (tcx - s.cx) * 0.12; s.cy += (tcy - s.cy) * 0.12;
      worldRef.current.style.transform = `translate(${-s.cx}px, ${-s.cy}px)`;
      const p = playerRef.current;
      p.style.left = `${s.x}px`; p.style.top = `${s.y}px`; p.style.zIndex = Math.round(s.y) + 1;
      p.style.setProperty("--face", s.face);
      p.classList.toggle("walking", !!moving);
      // golden snowflakes
      FLAKE_SPOTS.forEach((f, i) => {
        if (!gotRef.current.has(i) && Math.hypot(f.x - s.x, f.y - 20 - s.y) < 46) {
          const n = new Set(gotRef.current); n.add(i); gotRef.current = n; setGot(n);
          puff(f.x - s.cx, f.y - s.cy - 30, "flake", 8);
          if (n.size === FLAKE_SPOTS.length) setTimeout(() => setCheer("flakes"), 300);
        }
      });
      // the owl says something when you wander by
      const owlNear = Math.hypot(OWL.x - s.x, OWL.y - s.y) < 150;
      if (owlNear !== owlState.current.near) {
        owlState.current.near = owlNear;
        if (owlNear) { setOwlLine(OWL_LINES[owlState.current.i % OWL_LINES.length]); owlState.current.i++; } else setOwlLine(null);
      }
      if (meDot.current) { meDot.current.style.left = `${(s.x / WORLD_W) * 100}%`; meDot.current.style.top = `${(s.y / WORLD_H) * 100}%`; }
      // nearest landmark
      let best = null, bd = 1e9;
      for (const l of LANDMARKS) { const d = Math.hypot(l.x - s.x, l.y - s.y); if (d < l.r + 70 && d < bd) { bd = d; best = l.id; } }
      if (best !== nearRef.current) setNear(best);
      raf = requestAnimationFrame(step);
    };
    st.current.cx = SPAWN.x - viewRef.current.clientWidth / 2; st.current.cy = SPAWN.y - viewRef.current.clientHeight * 0.55;
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [who]);

  const tapTo = (e) => {
    if (!who || openRef.current || e.target.closest("button, a")) return;
    const r = viewRef.current.getBoundingClientRect();
    st.current.target = { x: e.clientX - r.left + st.current.cx, y: e.clientY - r.top + st.current.cy };
  };
  const walkTo = (l) => { st.current.target = { x: l.x + l.r * 1.15, y: l.y + 20 }; };

  const P = PLAYERS.find(p => p.id === who);
  const L = LANDMARKS.find(l => l.id === near);

  return (
    <div className="world" role="dialog" aria-modal="true" aria-label="Hiba's snowy little world">
      <div className="w-view" ref={viewRef} onPointerDown={tapTo}>
        <div className="w-world" ref={worldRef} style={{ width: WORLD_W, height: WORLD_H }}>
          <svg className="w-ground" viewBox={`0 0 ${WORLD_W} ${WORLD_H}`} aria-hidden="true">
            <defs>
              <radialGradient id="wSun" cx=".2" cy=".1" r=".9"><stop offset="0" stopColor="#FFE9CF" /><stop offset=".5" stopColor="#FFF7F1" /><stop offset="1" stopColor="#ECE6F6" /></radialGradient>
              <linearGradient id="wIce" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#DCEBFA" /><stop offset="1" stopColor="#B9D0EE" /></linearGradient>
            </defs>
            <rect width={WORLD_W} height={WORLD_H} fill="url(#wSun)" />
            {[[300, 300, 260], [2000, 260, 300], [400, 1500, 280], [2100, 1500, 300], [1500, 1150, 220]].map(([x, y, r], i) => <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.35} fill="#E9E1F3" opacity=".6" />)}
            <path d="M1200 930 C1000 820 820 700 700 690 M1200 930 C1400 800 1600 680 1700 650 M1200 930 C1500 1000 1800 1100 1940 1230 M1200 930 C1000 1050 800 1200 620 1300 M1200 930 C1230 1150 1260 1300 1260 1500"
              fill="none" stroke="#F3E6E2" strokeWidth="46" strokeLinecap="round" />
            <ellipse cx="1200" cy="800" rx="200" ry="90" fill="url(#wIce)" />
            <ellipse cx="1150" cy="780" rx="70" ry="14" fill="#FFFFFF" opacity=".55" />
            <path d="M1010 812 C1060 870 1340 870 1392 812" fill="none" stroke="#FFFFFF" strokeWidth="10" opacity=".8" />
            <path d="M1110 760 L1150 790 L1140 820 M1150 790 L1200 796 L1240 830 M1200 796 L1220 770" fill="none" stroke="#FFFFFF" strokeWidth="2.5" opacity=".7" strokeLinecap="round" />
          </svg>
          <div className="w-prints" ref={prints} />
          <div className="w-npc" style={{ left: 1290, top: 770, zIndex: 770 }} aria-hidden="true"><PlushSeal /></div>
          <div className="w-owl" style={{ left: OWL.x, top: OWL.y, zIndex: OWL.y }}>
            {owlLine && <span className="w-bubble">{owlLine}</span>}
            <svg viewBox="0 0 90 40" className="w-stump" aria-hidden="true"><ellipse cx="45" cy="34" rx="40" ry="6" fill="#8E8AB8" opacity=".25" /><rect x="18" y="8" width="54" height="26" rx="6" fill="#9A6A52" /><ellipse cx="45" cy="9" rx="27" ry="7" fill="#D9A37E" /><ellipse cx="45" cy="9" rx="12" ry="3" fill="#B98060" /></svg>
            <span className="w-owl-body" inert=""><PlushOwl /></span>
          </div>
          {DECOR.map((d, i) => <Decor key={i} d={d} />)}
          {FLAKE_SPOTS.map((f, i) => !got.has(i) && (
            <div key={i} className="w-flake" style={{ left: f.x, top: f.y, zIndex: Math.round(f.y), animationDelay: `${(i % 5) * 0.3}s` }} aria-hidden="true"><GoldenFlake /></div>
          ))}
          {TREES.map((t, i) => <WorldTree key={i} t={t} />)}
          {LANDMARKS.map(l => (
            <div key={l.id} className={`w-landmark lm-${l.art}${near === l.id ? " near" : ""}${visited.has(l.id) ? " seen" : ""}`} style={{ left: l.x, top: l.y, zIndex: Math.round(l.y) }}>
              <LandmarkArt art={l.art} />
              <button type="button" className="w-sign" onClick={() => (near === l.id ? enter(l.id) : walkTo(l))}>{l.label}{visited.has(l.id) ? " ✓" : ""}</button>
            </div>
          ))}
          <div className="w-player" ref={playerRef} aria-hidden="true">
            {L && !open && <span className="w-prompt">{matchMedia("(pointer: coarse)").matches ? "tap Open below" : "press E"}</span>}
            <span className="w-player-body" inert="">{P && P.el()}</span>
            <span className="w-player-shadow" />
          </div>
        </div>
        <canvas ref={snowRef} className="w-snow" aria-hidden="true" />
      </div>

      <div className="w-hud">
        <span className="w-title">Hiba's snowy little world</span>
        <span className="w-count"><span className="w-count-n">{visited.size}/{LANDMARKS.length}</span> places</span>
        <span className="w-count gold"><GoldenFlake /><span className="w-count-n">{got.size}/{FLAKE_SPOTS.length}</span></span>
        <button type="button" className="btn btn-soft" onClick={onClose}>Back to the page</button>
      </div>

      <div className="w-map" aria-hidden="true">
        <svg viewBox={`0 0 ${WORLD_W} ${WORLD_H}`}><ellipse cx="1200" cy="800" rx="200" ry="90" fill="#C8DAF0" /></svg>
        {LANDMARKS.map(l => <span key={l.id} className={`w-map-dot${visited.has(l.id) ? " seen" : ""}`} style={{ left: `${(l.x / WORLD_W) * 100}%`, top: `${(l.y / WORLD_H) * 100}%` }} />)}
        <span className="w-map-me" ref={meDot} />
      </div>

      {L && !open && (
        <button type="button" className="w-enter btn btn-warm" onClick={() => enter(L.id)}>Open: {L.label}</button>
      )}

      {!who && <CharacterSelect onPick={setWho} onLeave={onClose} />}

      {open && (
        <div className="w-panel-wrap" onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}>
          <div className="w-panel" role="dialog" aria-label={LANDMARKS.find(l => l.id === open).label}>
            <button type="button" className="sheet-close" onClick={() => setOpen(null)} aria-label="Close and keep exploring"><Icon name="close" className="" /></button>
            {open === "about" && <About />}
            {open === "projects" && <Projects onOpenProject={onOpenProject} />}
            {open === "journey" && <Resume />}
            {open === "offduty" && <Extras />}
            {open === "contact" && <Contact />}
          </div>
        </div>
      )}

      {cheer && (
        <div className="w-cheer glass" role="status" onAnimationEnd={() => {}}>
          <strong>{cheer === "flakes" ? "All 12 golden snowflakes!" : "You've seen every corner!"}</strong>
          <span>{cheer === "flakes" ? "You have a very good eye. Hiba would love to hear from you at the mailbox." : "Thanks for exploring. Say hi at the mailbox anytime."}</span>
          <button type="button" className="btn btn-soft" onClick={() => setCheer(false)}>Yay</button>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { World });
