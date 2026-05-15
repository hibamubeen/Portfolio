// Shared primitives: placeholders, stickers, decorative SVGs

const Placeholder = ({ label = "image", w = "100%", h = 280, tone = "pink", style = {} }) => {
  const bg = tone === "pink" ? "var(--pink)" : tone === "ink" ? "var(--ink)" : "var(--grey-soft)";
  const fg = tone === "ink" ? "var(--paper)" : "var(--ink)";
  return (
    <div className="halftone" style={{
      width: w, height: h, background: bg, color: fg,
      backgroundImage: `repeating-linear-gradient(45deg, transparent 0 8px, ${tone === "ink" ? "rgba(255,255,255,0.08)" : "rgba(8,15,22,0.08)"} 8px 9px)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em",
      textTransform: "uppercase", border: "2px solid var(--ink)",
      position: "relative", ...style
    }}>
      <span style={{ background: bg, padding: "4px 10px", border: "1px dashed currentColor", zIndex: 3 }}>
        {label}
      </span>
    </div>
  );
};

// Onomatopoeia burst (POW! ZAP! etc.)
const Burst = ({ text = "POW!", color = "var(--accent)", size = 140, rotate = -8, style = {} }) => (
  <div className="sticker" style={{
    width: size, height: size,
    display: "flex", alignItems: "center", justifyContent: "center",
    transform: `rotate(${rotate}deg)`,
    fontFamily: "var(--serif)",
    fontWeight: 900,
    color: "var(--ink)",
    ...style
  }}>
    <svg viewBox="0 0 200 200" style={{ position: "absolute", width: "100%", height: "100%" }}>
      <polygon
        points="100,4 116,30 148,18 144,52 178,52 156,80 188,98 156,118 178,150 142,148 148,180 116,168 100,196 84,168 52,180 58,148 22,150 44,118 12,98 44,80 22,52 56,52 52,18 84,30"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="3"
      />
    </svg>
    <span style={{ position: "relative", fontSize: size * 0.22, letterSpacing: "-0.03em", textShadow: "2px 2px 0 var(--paper)" }}>
      {text}
    </span>
  </div>
);

// A draggable sticker
const Sticker = ({ children, initialX = 0, initialY = 0, rotate = 0, zIndex = 5 }) => {
  const [pos, setPos] = React.useState({ x: initialX, y: initialY });
  const [drag, setDrag] = React.useState(null);
  const [peeled, setPeeled] = React.useState(false);

  React.useEffect(() => {
    if (!drag) return;
    const onMove = (e) => {
      setPos({
        x: e.clientX - drag.dx,
        y: e.clientY - drag.dy,
      });
    };
    const onUp = () => setDrag(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [drag]);

  const onDown = (e) => {
    setPeeled(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDrag({ dx: e.clientX - rect.left, dy: e.clientY - rect.top });
    setPos({ x: rect.left, y: rect.top });
  };

  if (peeled) {
    return (
      <div
        data-clickable
        onMouseDown={onDown}
        className="sticker"
        style={{
          position: "fixed",
          left: pos.x, top: pos.y,
          transform: `rotate(${rotate + (drag ? 6 : 2)}deg)`,
          zIndex: 9000,
          transition: drag ? "none" : "transform 0.2s",
          filter: "drop-shadow(6px 8px 12px rgba(0,0,0,0.25))",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      data-clickable
      onMouseDown={onDown}
      className="sticker"
      style={{
        position: "absolute",
        left: initialX, top: initialY,
        transform: `rotate(${rotate}deg)`,
        zIndex,
      }}
    >
      {children}
    </div>
  );
};

// Star sticker
const Star = ({ size = 60, fill = "var(--accent)", stroke = "var(--ink)" }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <path d="M50 5 L60 38 L94 38 L66 58 L77 92 L50 72 L23 92 L34 58 L6 38 L40 38 Z"
      fill={fill} stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

// Heart
const Heart = ({ size = 50, fill = "var(--accent)" }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <path d="M50 88 C20 65 8 45 8 28 C8 14 20 6 32 6 C40 6 47 11 50 18 C53 11 60 6 68 6 C80 6 92 14 92 28 C92 45 80 65 50 88 Z"
      fill={fill} stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

// Section header — magazine style
const SectionHead = ({ kicker, title, italic, num }) => (
  <div style={{ borderBottom: "2.5px solid var(--ink)", paddingBottom: 18, marginBottom: 32, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
    <div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--grey)", marginBottom: 6 }}>
        {kicker}
      </div>
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(56px, 9vw, 132px)", margin: 0, lineHeight: 0.85, letterSpacing: "-0.02em" }}>
        {title} {italic && <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>{italic}</em>}
      </h2>
    </div>
    {num && (
      <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.2em", color: "var(--ink)", textAlign: "right" }}>
        SECTION №{num}<br />
        <span style={{ color: "var(--grey)" }}>──────────</span>
      </div>
    )}
  </div>
);

Object.assign(window, { Placeholder, Burst, Sticker, Star, Heart, SectionHead });
