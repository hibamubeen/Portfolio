// Little plush winter friends. Soft shapes, stitched seams, button eyes, rosy cheeks.
// Each one is a real <button>, so it can be clicked (or tabbed to) for a tiny reaction.

const STITCH = { fill: "none", stroke: "#FFFFFF", strokeWidth: 1.6, strokeDasharray: "3 4", strokeLinecap: "round", opacity: 0.9 };
const INK = "#1E3A52";
const CHEEK = "#F5B8C4";

const motionOff = () =>
  document.body.classList.contains("still") ||
  (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

// Float a few hearts or snow puffs up from a point on screen
const puff = (x, y, kind = "heart", n = 5) => {
  if (motionOff()) return;
  for (let i = 0; i < n; i++) {
    const el = document.createElement("span");
    el.className = `puff puff-${kind}`;
    el.setAttribute("aria-hidden", "true");
    const size = kind === "heart" ? 12 + Math.random() * 10 : 6 + Math.random() * 8;
    if (kind === "heart") el.innerHTML = `<svg viewBox="0 0 20 18" width="${size}" height="${size}"><path d="M10 17 C4 12 0 9 0 5 C0 2 2 0 5 0 C7 0 9 1 10 3 C11 1 13 0 15 0 C18 0 20 2 20 5 C20 9 16 12 10 17Z" fill="currentColor"/></svg>`;
    else el.style.cssText = `border-radius:50%;background:#fff;box-shadow:0 0 6px rgba(30,58,82,.25);`;
    el.style.left = `${x}px`; el.style.top = `${y}px`; el.style.width = `${size}px`; el.style.height = `${size}px`;
    document.body.appendChild(el);
    const dx = (Math.random() - 0.5) * 90;
    const dy = kind === "heart" ? -60 - Math.random() * 70 : -30 - Math.random() * 50;
    el.animate([
      { transform: "translate(-50%,-50%) scale(0.2)", opacity: 0 },
      { transform: `translate(calc(-50% + ${dx * 0.3}px), calc(-50% + ${dy * 0.3}px)) scale(1)`, opacity: 1, offset: 0.25 },
      { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.7)`, opacity: 0 },
    ], { duration: 1200 + Math.random() * 500, delay: i * 70, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" }).onfinish = () => el.remove();
  }
};

const Eye = ({ cx, cy, r = 5 }) => (
  <g className="plush-eye">
    <circle cx={cx} cy={cy} r={r} fill={INK} />
    <circle cx={cx - r * 0.35} cy={cy - r * 0.35} r={r * 0.32} fill="#fff" />
  </g>
);

// Shared behaviour: wiggle or hop, a puff, and an optional little hello
const Plush = ({ className = "", label, say, anim = "wiggle", kind = "heart", children }) => {
  const [on, setOn] = React.useState(false);
  const [talk, setTalk] = React.useState(false);
  const ref = React.useRef(null);
  const click = () => {
    setOn(true); setTimeout(() => setOn(false), 900);
    const r = ref.current.getBoundingClientRect();
    puff(r.left + r.width / 2, r.top + r.height * 0.2, kind, 6);
    if (say) { setTalk(true); setTimeout(() => setTalk(false), 1800); }
  };
  return (
    <div className={`plush ${className}`}>
      {say && <span className={`plush-say${talk ? " show" : ""}`} aria-live="polite">{talk ? say : ""}</span>}
      <button ref={ref} type="button" className={`plush-btn ${on ? anim : ""}`} onClick={click} aria-label={label}>
        {children}
      </button>
    </div>
  );
};

// ---------- Fox: sits on the hero sill ----------
const PlushFox = () => (
  <Plush className="plush-fox" label="Say hi to the plush fox" say="hi hi!">
    <svg viewBox="0 0 160 132" aria-hidden="true">
      <path d="M106 116 C148 118 162 80 142 60 C134 52 120 56 124 68 C130 84 124 100 100 102 Z" fill="#F2B48A" />
      <path d="M142 60 C134 52 120 56 124 68 C128 64 136 62 146 66 Z" fill="#FFF6EE" />
      <path d="M110 108 C128 108 140 96 140 80" {...STITCH} />
      <ellipse cx="76" cy="94" rx="42" ry="32" fill="#F2B48A" />
      <ellipse cx="76" cy="102" rx="22" ry="20" fill="#FFF4EA" />
      <path d="M46 34 L40 4 L68 24 Z" fill="#F2B48A" /><path d="M106 34 L112 4 L84 24 Z" fill="#F2B48A" />
      <path d="M49 30 L46 13 L61 25 Z" fill="#FBD5C2" /><path d="M103 30 L106 13 L91 25 Z" fill="#FBD5C2" />
      <ellipse cx="76" cy="52" rx="38" ry="31" fill="#F2B48A" />
      <path d="M44 46 C54 30 98 30 108 46" {...STITCH} />
      <ellipse cx="62" cy="64" rx="15" ry="11" fill="#FFF4EA" /><ellipse cx="90" cy="64" rx="15" ry="11" fill="#FFF4EA" />
      <Eye cx={63} cy={50} r={5} /><Eye cx={89} cy={50} r={5} />
      <ellipse cx="76" cy="62" rx="5.5" ry="4" fill={INK} />
      <path d="M71 68 Q76 73 81 68" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="50" cy="62" rx="6" ry="3.5" fill={CHEEK} /><ellipse cx="102" cy="62" rx="6" ry="3.5" fill={CHEEK} />
      <ellipse cx="60" cy="124" rx="12" ry="7" fill="#EFA67A" /><ellipse cx="92" cy="124" rx="12" ry="7" fill="#EFA67A" />
    </svg>
  </Plush>
);

// ---------- Seal: peeks over the top edge of the quick facts note ----------
const PlushSeal = () => {
  const [duck, setDuck] = React.useState(false);
  const ref = React.useRef(null);
  const onClick = () => {
    setDuck(true); setTimeout(() => setDuck(false), 1100);
    const r = ref.current.getBoundingClientRect();
    puff(r.left + r.width / 2, r.top + 10, "flake", 6);
  };
  return (
    <div className="plush plush-seal">
      <button ref={ref} type="button" className={`plush-btn ${duck ? "duck" : ""}`} onClick={onClick} aria-label="Boop the plush seal">
        <svg viewBox="0 0 120 80" aria-hidden="true">
          <ellipse cx="60" cy="54" rx="42" ry="36" fill="#E4ECF3" />
          <path d="M26 40 C36 22 84 22 94 40" {...STITCH} stroke="#B7C8D8" />
          <Eye cx={44} cy={50} r={6} />
          <Eye cx={76} cy={50} r={6} />
          <ellipse cx="60" cy="62" rx="12" ry="8" fill="#F7FAFC" />
          <path d="M55 58 Q60 62 65 58 Q60 54 55 58 Z" fill={INK} />
          <ellipse cx="34" cy="62" rx="7" ry="4" fill={CHEEK} opacity="0.75" />
          <ellipse cx="86" cy="62" rx="7" ry="4" fill={CHEEK} opacity="0.75" />
          <g stroke="#A9B9C8" strokeWidth="1.4" strokeLinecap="round">
            <path d="M48 64 L36 66" /><path d="M48 67 L37 71" /><path d="M72 64 L84 66" /><path d="M72 67 L83 71" />
          </g>
        </svg>
      </button>
    </div>
  );
};

// ---------- Owl: perches on a muntin between panes ----------
const PlushOwl = () => (
  <Plush className="plush-owl" label="Ruffle the plush owl" say="hoo!" kind="flake">
    <svg viewBox="0 0 100 122" aria-hidden="true">
      <path d="M22 24 L16 4 L36 16 Z" fill="#CFC8E6" /><path d="M78 24 L84 4 L64 16 Z" fill="#CFC8E6" />
      <path d="M50 10 C78 10 90 36 90 66 C90 98 72 114 50 114 C28 114 10 98 10 66 C10 36 22 10 50 10 Z" fill="#D9D3EE" />
      <path className="owl-wing wl" d="M12 62 C2 80 10 100 24 102 C18 88 18 74 12 62 Z" fill="#C6BEE1" /><path className="owl-wing wr" d="M88 62 C98 80 90 100 76 102 C82 88 82 74 88 62 Z" fill="#C6BEE1" />
      <ellipse cx="50" cy="86" rx="25" ry="23" fill="#F4F2FB" />
      <path d="M38 80 Q42 85 46 80 M54 80 Q58 85 62 80 M44 93 Q48 98 52 93 M33 92 Q36 96 39 92 M61 92 Q64 96 67 92" fill="none" stroke="#C6BEE1" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="35" cy="46" r="14" fill="#FFFFFF" /><circle cx="65" cy="46" r="14" fill="#FFFFFF" />
      <Eye cx={36} cy={47} r={6} /><Eye cx={64} cy={47} r={6} />
      <path d="M45 56 L55 56 L50 66 Z" fill="#F2B866" />
      <ellipse cx="24" cy="62" rx="6" ry="3.5" fill={CHEEK} /><ellipse cx="76" cy="62" rx="6" ry="3.5" fill={CHEEK} />
      <path d="M26 24 C38 16 62 16 74 24" {...STITCH} />
      <ellipse cx="41" cy="116" rx="8" ry="4.5" fill="#E9A54E" /><ellipse cx="59" cy="116" rx="8" ry="4.5" fill="#E9A54E" />
    </svg>
  </Plush>
);

// ---------- Hare: hops down the experience timeline as you scroll ----------
const PlushHare = () => (
  <svg viewBox="0 0 70 84" aria-hidden="true">
    <ellipse cx="25" cy="20" rx="6.5" ry="19" fill="#D5DDEA" transform="rotate(-12 25 20)" />
    <ellipse cx="45" cy="20" rx="6.5" ry="19" fill="#D5DDEA" transform="rotate(12 45 20)" />
    <ellipse cx="25" cy="22" rx="3" ry="13" fill="#F3D3DD" transform="rotate(-12 25 22)" />
    <ellipse cx="45" cy="22" rx="3" ry="13" fill="#F3D3DD" transform="rotate(12 45 22)" />
    <ellipse cx="35" cy="66" rx="22" ry="16" fill="#D5DDEA" />
    <ellipse cx="35" cy="70" rx="12" ry="10" fill="#F4F7FB" />
    <circle cx="35" cy="44" r="17" fill="#DDE4EF" />
    <Eye cx={28} cy={42} r={3.4} /><Eye cx={42} cy={42} r={3.4} />
    <ellipse cx="35" cy="50" rx="3" ry="2.2" fill="#E9A0B2" />
    <ellipse cx="23" cy="50" rx="4" ry="2.4" fill={CHEEK} /><ellipse cx="47" cy="50" rx="4" ry="2.4" fill={CHEEK} />
    <ellipse cx="25" cy="81" rx="8" ry="4" fill="#C9D2E2" /><ellipse cx="45" cy="81" rx="8" ry="4" fill="#C9D2E2" />
  </svg>
);

// ---------- Penguin: waddles on the muntin before off duty ----------
const PlushPenguin = () => (
  <Plush className="plush-penguin" label="Pat the plush penguin" anim="hop" kind="flake">
    <svg viewBox="0 0 90 112" aria-hidden="true">
      <path d="M45 8 C70 8 80 34 80 62 C80 92 66 106 45 106 C24 106 10 92 10 62 C10 34 20 8 45 8 Z" fill="#5A6F93" />
      <path d="M12 56 C2 66 2 80 8 88 C12 78 14 66 12 56 Z" fill="#4B5F82" /><path d="M78 56 C88 66 88 80 82 88 C78 78 76 66 78 56 Z" fill="#4B5F82" />
      <path d="M45 28 C62 28 69 48 69 68 C69 90 58 100 45 100 C32 100 21 90 21 68 C21 48 28 28 45 28 Z" fill="#F4F7FB" />
      <path d="M24 26 C34 16 56 16 66 26" {...STITCH} />
      <Eye cx={36} cy={42} r={4.5} /><Eye cx={54} cy={42} r={4.5} />
      <path d="M40 50 L50 50 L45 58 Z" fill="#F2B866" />
      <ellipse cx="29" cy="54" rx="5" ry="3" fill={CHEEK} /><ellipse cx="61" cy="54" rx="5" ry="3" fill={CHEEK} />
      <ellipse cx="35" cy="107" rx="10" ry="5" fill="#E9A54E" /><ellipse cx="55" cy="107" rx="10" ry="5" fill="#E9A54E" />
    </svg>
  </Plush>
);

// ---------- Polar bear: sits on the sill by the lamp at the end, holding something warm ----------
const PlushPolarBear = () => (
  <Plush className="plush-bear" label="Say goodnight to the plush polar bear" say="come back soon">
    <svg viewBox="0 0 160 134" aria-hidden="true">
      <circle cx="48" cy="26" r="13" fill="#E8EDF5" /><circle cx="112" cy="26" r="13" fill="#E8EDF5" />
      <circle cx="48" cy="26" r="6.5" fill="#F3D3DD" /><circle cx="112" cy="26" r="6.5" fill="#F3D3DD" />
      <ellipse cx="80" cy="100" rx="47" ry="31" fill="#E9EEF5" />
      <ellipse cx="80" cy="50" rx="39" ry="32" fill="#F5F7FB" />
      <path d="M46 42 C58 24 102 24 114 42" {...STITCH} stroke="#D3DCE9" />
      <ellipse cx="80" cy="63" rx="16" ry="11.5" fill="#FFFFFF" />
      <ellipse cx="80" cy="57" rx="6" ry="4.2" fill={INK} />
      <path d="M75 66 Q80 70 85 66" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <Eye cx={65} cy={46} r={4.6} /><Eye cx={95} cy={46} r={4.6} />
      <ellipse cx="56" cy="62" rx="6" ry="3.5" fill={CHEEK} /><ellipse cx="104" cy="62" rx="6" ry="3.5" fill={CHEEK} />
      {/* a warm mug */}
      <g className="mug">
        <path d="M86 84 C84 78 90 76 88 70 M94 84 C92 78 98 76 96 70" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity=".9" />
        <rect x="70" y="88" width="24" height="22" rx="5" fill="#F2B866" />
        <path d="M94 93 C102 93 102 105 94 105" fill="none" stroke="#F2B866" strokeWidth="4" />
      </g>
      <ellipse cx="58" cy="102" rx="12" ry="16" fill="#E2E8F1" transform="rotate(20 58 102)" />
      <ellipse cx="104" cy="102" rx="12" ry="16" fill="#E2E8F1" transform="rotate(-20 104 102)" />
      <ellipse cx="56" cy="126" rx="17" ry="9" fill="#E2E8F1" /><ellipse cx="104" cy="126" rx="17" ry="9" fill="#E2E8F1" />
      <ellipse cx="56" cy="126" rx="7" ry="4" fill="#F3D3DD" /><ellipse cx="104" cy="126" rx="7" ry="4" fill="#F3D3DD" />
    </svg>
  </Plush>
);

// ---------- Baby penguin: fluffy grey, tags along behind its parent ----------
const PlushPenguinBaby = () => (
  <svg viewBox="0 0 70 80" aria-hidden="true">
    <path d="M35 6 C54 6 62 26 62 46 C62 66 52 76 35 76 C18 76 8 66 8 46 C8 26 16 6 35 6 Z" fill="#C9CFDB" />
    <path d="M12 26 C8 18 14 12 18 18 M58 26 C62 18 56 12 52 18" stroke="#C9CFDB" strokeWidth="5" strokeLinecap="round" />
    <path d="M35 22 C48 22 52 36 52 50 C52 66 44 72 35 72 C26 72 18 66 18 50 C18 36 22 22 35 22 Z" fill="#F4F7FB" />
    <path d="M18 14 C16 6 26 2 30 8 M40 6 C44 0 54 4 50 12" fill="none" stroke="#C9CFDB" strokeWidth="4" strokeLinecap="round" />
    <Eye cx={28} cy={32} r={3.6} /><Eye cx={42} cy={32} r={3.6} />
    <path d="M31 38 L39 38 L35 44 Z" fill="#F2B866" />
    <ellipse cx="23" cy="42" rx="4" ry="2.5" fill={CHEEK} /><ellipse cx="47" cy="42" rx="4" ry="2.5" fill={CHEEK} />
    <ellipse cx="27" cy="77" rx="7" ry="3.5" fill="#E9A54E" /><ellipse cx="43" cy="77" rx="7" ry="3.5" fill="#E9A54E" />
  </svg>
);

// Friends arrive when you scroll to them: the owl flies in, the penguins waddle in
const Arrive = ({ kind, children }) => {
  const ref = React.useRef(null);
  const [inView, setIn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!("IntersectionObserver" in window) || motionOff()) { setIn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIn(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`arrive arrive-${kind}${inView ? " in" : ""}`}>{children}</div>;
};

const PenguinFamily = () => (
  <Arrive kind="walk">
    <div className="penguin-family">
      <span className="walker" style={{ "--d": "0s" }}><span className="wobble"><PlushPenguin /></span></span>
      <span className="walker baby" style={{ "--d": ".35s" }}><span className="wobble" inert=""><PlushPenguinBaby /></span></span>
      <span className="walker baby small" style={{ "--d": ".65s" }}><span className="wobble" inert=""><PlushPenguinBaby /></span></span>
    </div>
  </Arrive>
);

// The hero fox: every so often it says hi hi! and jumps. Click it to say hi back.
const FoxActor = () => {
  const [on, setOn] = React.useState(false);
  const ref = React.useRef(null);
  const hi = React.useCallback(() => {
    if (motionOff()) return;
    setOn(true);
    const r = ref.current && ref.current.getBoundingClientRect();
    if (r) setTimeout(() => puff(r.left + r.width / 2, r.top + r.height * 0.2, "heart", 5), 250);
    setTimeout(() => setOn(false), 1800);
  }, []);
  React.useEffect(() => {
    const first = setTimeout(hi, 2200);
    const t = setInterval(hi, 7000);
    return () => { clearTimeout(first); clearInterval(t); };
  }, [hi]);
  return (
    <div ref={ref} className={`fox-actor${on ? " hihi" : ""}`} onClickCapture={hi}>
      <span className={`fox-say${on ? " show" : ""}`} aria-hidden="true">hi hi!</span>
      <div className="fox-body" inert=""><PlushFox /></div>
    </div>
  );
};

// A plain plush bear head, used as an icon in off duty
const PlushBearIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true" className="bear-icon">
    <circle cx="24" cy="26" r="14" fill="#C9C3E3" /><circle cx="76" cy="26" r="14" fill="#C9C3E3" />
    <circle cx="24" cy="26" r="7" fill="#EDEAF6" /><circle cx="76" cy="26" r="7" fill="#EDEAF6" />
    <circle cx="50" cy="56" r="36" fill="#D9D3EE" />
    <path d="M22 50 C30 30 70 30 78 50" {...STITCH} />
    <ellipse cx="50" cy="68" rx="14" ry="10" fill="#F4F2FB" />
    <ellipse cx="50" cy="63" rx="5" ry="3.5" fill={INK} />
    <circle cx="37" cy="52" r="4" fill={INK} /><circle cx="63" cy="52" r="4" fill={INK} />
    <ellipse cx="30" cy="64" rx="5" ry="3" fill={CHEEK} /><ellipse cx="70" cy="64" rx="5" ry="3" fill={CHEEK} />
  </svg>
);

Object.assign(window, { PlushPenguinBaby, Arrive, PenguinFamily, FoxActor, PlushFox, PlushSeal, PlushOwl, PlushHare, PlushPenguin, PlushPolarBear, PlushBearIcon, puff, motionOff });
