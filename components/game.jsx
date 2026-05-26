// NYAN SNAKE — cute cat eats strawberries

// ── SVG cat faces for overlays ──────────────────────────────────────────────

const HappyCat = () => (
  <>
    <style>{`
      @keyframes catFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .cat-float { animation: catFloat 1.4s ease-in-out infinite; display: inline-block; }
    `}</style>
    <div className="cat-float">
      <svg width="90" height="90" viewBox="0 0 60 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ears */}
        <polygon points="7,30 15,10 25,30" fill="#F9DDDF" stroke="#080F16" strokeWidth="1.5" strokeLinejoin="round"/>
        <polygon points="35,30 45,10 53,30" fill="#F9DDDF" stroke="#080F16" strokeWidth="1.5" strokeLinejoin="round"/>
        <polygon points="10,29 15,15 22,29" fill="#E94B6A"/>
        <polygon points="38,29 45,15 50,29" fill="#E94B6A"/>
        {/* head */}
        <circle cx="30" cy="43" r="21" fill="#F9DDDF" stroke="#080F16" strokeWidth="1.5"/>
        {/* happy eyes */}
        <path d="M19 39 Q22 34 25 39" stroke="#080F16" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M35 39 Q38 34 41 39" stroke="#080F16" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* blush */}
        <ellipse cx="18" cy="46" rx="5" ry="3" fill="#E94B6A" opacity="0.3"/>
        <ellipse cx="42" cy="46" rx="5" ry="3" fill="#E94B6A" opacity="0.3"/>
        {/* nose */}
        <ellipse cx="30" cy="45" rx="2.5" ry="2" fill="#E94B6A"/>
        {/* mouth */}
        <path d="M26 48 Q30 53 34 48" stroke="#080F16" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        {/* whiskers */}
        <line x1="7" y1="43" x2="21" y2="44" stroke="#080F16" strokeWidth="0.8"/>
        <line x1="7" y1="47" x2="21" y2="47" stroke="#080F16" strokeWidth="0.8"/>
        <line x1="39" y1="44" x2="53" y2="43" stroke="#080F16" strokeWidth="0.8"/>
        <line x1="39" y1="47" x2="53" y2="47" stroke="#080F16" strokeWidth="0.8"/>
      </svg>
    </div>
  </>
);

const SadCat = () => (
  <>
    <style>{`
      @keyframes tearFall { 0% { opacity:1; transform:translateY(0); } 100% { opacity:0; transform:translateY(18px); } }
      .tear-l { animation: tearFall 1.1s ease-in infinite; }
      .tear-r { animation: tearFall 1.1s ease-in 0.35s infinite; }
      @keyframes catWobble { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(-4deg)} 75%{transform:rotate(4deg)} }
      .cat-sad { animation: catWobble 0.6s ease-in-out 0.4s 3; display:inline-block; }
    `}</style>
    <div className="cat-sad">
      <svg width="90" height="100" viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ears */}
        <polygon points="7,30 15,10 25,30" fill="#F9DDDF" stroke="#080F16" strokeWidth="1.5" strokeLinejoin="round"/>
        <polygon points="35,30 45,10 53,30" fill="#F9DDDF" stroke="#080F16" strokeWidth="1.5" strokeLinejoin="round"/>
        <polygon points="10,29 15,15 22,29" fill="#E94B6A"/>
        <polygon points="38,29 45,15 50,29" fill="#E94B6A"/>
        {/* head */}
        <circle cx="30" cy="43" r="21" fill="#F9DDDF" stroke="#080F16" strokeWidth="1.5"/>
        {/* sad curved eyes */}
        <path d="M19 37 Q22 42 25 37" stroke="#080F16" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M35 37 Q38 42 41 37" stroke="#080F16" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* nose */}
        <ellipse cx="30" cy="45" rx="2.5" ry="2" fill="#E94B6A"/>
        {/* sad mouth */}
        <path d="M26 51 Q30 47 34 51" stroke="#080F16" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        {/* whiskers */}
        <line x1="7" y1="43" x2="21" y2="44" stroke="#080F16" strokeWidth="0.8"/>
        <line x1="7" y1="47" x2="21" y2="47" stroke="#080F16" strokeWidth="0.8"/>
        <line x1="39" y1="44" x2="53" y2="43" stroke="#080F16" strokeWidth="0.8"/>
        <line x1="39" y1="47" x2="53" y2="47" stroke="#080F16" strokeWidth="0.8"/>
        {/* tears */}
        <ellipse className="tear-l" cx="20" cy="55" rx="2.5" ry="4" fill="#a8d8f0"/>
        <ellipse className="tear-r" cx="40" cy="55" rx="2.5" ry="4" fill="#a8d8f0"/>
      </svg>
    </div>
  </>
);

// ── Canvas drawing helpers ───────────────────────────────────────────────────

function drawCatHead(ctx, cx, cy, r, dir) {
  const INK = "#080F16";
  const PINK = "#F9DDDF";
  const ACCENT = "#E94B6A";

  // Rotate to face movement direction
  let angle = 0;
  if (dir.x === 1)  angle = Math.PI / 2;
  if (dir.x === -1) angle = -Math.PI / 2;
  if (dir.y === 1)  angle = Math.PI;
  // dir.y === -1 → 0 (up = default)

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);

  // Ears (behind head)
  ctx.fillStyle = PINK;
  ctx.strokeStyle = INK;
  ctx.lineWidth = 1;
  // left ear
  ctx.beginPath();
  ctx.moveTo(-r * 0.48, -r * 0.62);
  ctx.lineTo(-r * 0.82, -r * 1.18);
  ctx.lineTo(-r * 0.08, -r * 0.88);
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  // right ear
  ctx.beginPath();
  ctx.moveTo(r * 0.48, -r * 0.62);
  ctx.lineTo(r * 0.82, -r * 1.18);
  ctx.lineTo(r * 0.08, -r * 0.88);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Inner ears
  ctx.fillStyle = ACCENT;
  ctx.strokeStyle = "transparent";
  ctx.beginPath();
  ctx.moveTo(-r * 0.48, -r * 0.68);
  ctx.lineTo(-r * 0.75, -r * 1.08);
  ctx.lineTo(-r * 0.14, -r * 0.9);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(r * 0.48, -r * 0.68);
  ctx.lineTo(r * 0.75, -r * 1.08);
  ctx.lineTo(r * 0.14, -r * 0.9);
  ctx.closePath();
  ctx.fill();

  // Head circle
  ctx.fillStyle = PINK;
  ctx.strokeStyle = INK;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Eyes
  ctx.fillStyle = INK;
  ctx.beginPath(); ctx.arc(-r * 0.3, -r * 0.15, r * 0.13, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc( r * 0.3, -r * 0.15, r * 0.13, 0, Math.PI * 2); ctx.fill();
  // Shine
  ctx.fillStyle = "white";
  ctx.beginPath(); ctx.arc(-r * 0.24, -r * 0.21, r * 0.045, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc( r * 0.36, -r * 0.21, r * 0.045, 0, Math.PI * 2); ctx.fill();

  // Nose
  ctx.fillStyle = ACCENT;
  ctx.beginPath(); ctx.ellipse(0, r * 0.12, r * 0.1, r * 0.08, 0, 0, Math.PI * 2); ctx.fill();

  // Mouth
  ctx.strokeStyle = INK;
  ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.moveTo(-r * 0.14, r * 0.24); ctx.quadraticCurveTo(-r * 0.3, r * 0.36, -r * 0.42, r * 0.28); ctx.stroke();
  ctx.beginPath(); ctx.moveTo( r * 0.14, r * 0.24); ctx.quadraticCurveTo( r * 0.3, r * 0.36,  r * 0.42, r * 0.28); ctx.stroke();

  // Whiskers
  ctx.lineWidth = 0.7;
  ctx.beginPath(); ctx.moveTo(-r * 0.14, r * 0.1);  ctx.lineTo(-r * 0.9, r * 0.04); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-r * 0.14, r * 0.2);  ctx.lineTo(-r * 0.9, r * 0.24); ctx.stroke();
  ctx.beginPath(); ctx.moveTo( r * 0.14, r * 0.1);  ctx.lineTo( r * 0.9, r * 0.04); ctx.stroke();
  ctx.beginPath(); ctx.moveTo( r * 0.14, r * 0.2);  ctx.lineTo( r * 0.9, r * 0.24); ctx.stroke();

  ctx.restore();
}

function drawStrawberry(ctx, cx, cy, r) {
  const INK = "#080F16";

  // Berry body
  ctx.fillStyle = "#E94B6A";
  ctx.strokeStyle = INK;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.68, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Seeds
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.strokeStyle = "transparent";
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
    ctx.beginPath();
    ctx.ellipse(cx + Math.cos(a) * r * 0.3, cy + Math.sin(a) * r * 0.3, r * 0.07, r * 0.1, a, 0, Math.PI * 2);
    ctx.fill();
  }
  // center seed
  ctx.beginPath(); ctx.arc(cx, cy, r * 0.08, 0, Math.PI * 2); ctx.fill();

  // Leaf
  ctx.fillStyle = "#4e9e3c";
  ctx.strokeStyle = INK;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(cx - r * 0.18, cy - r * 0.72, r * 0.22, r * 0.14, -0.5, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(cx + r * 0.18, cy - r * 0.72, r * 0.22, r * 0.14, 0.5, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(cx, cy - r * 0.8, r * 0.14, r * 0.2, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Stem
  ctx.strokeStyle = "#4e9e3c";
  ctx.lineWidth = 1.5;
  ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(cx, cy - r * 0.95); ctx.lineTo(cx + r * 0.12, cy - r * 1.2); ctx.stroke();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ── Main game component ──────────────────────────────────────────────────────

const SnakeGame = () => {
  const canvasRef = React.useRef(null);
  const intervalRef = React.useRef(null);
  const nextDirRef = React.useRef({ x: 1, y: 0 });
  const curDirRef  = React.useRef({ x: 1, y: 0 });

  const [uiState, setUiState] = React.useState("idle");
  const [score,   setScore]   = React.useState(0);
  const [hiScore, setHiScore] = React.useState(0);

  const CELL  = 24;
  const COLS  = 16;
  const ROWS  = 16;
  const W     = CELL * COLS;
  const H     = CELL * ROWS;
  const SPEED = 145;

  const INK   = "#080F16";
  const PINK  = "#F9DDDF";
  const PINK2 = "#f2c4c8";
  const ACCENT = "#E94B6A";
  const PAPER = "#FFFAF8";

  function spawnFood(snake) {
    let pos;
    do {
      pos = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
    } while (snake.some(s => s.x === pos.x && s.y === pos.y));
    return pos;
  }

  function drawFrame(canvas, snake, food, dir) {
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, W, H);

    // Dot grid
    ctx.fillStyle = PINK;
    for (let x = 0; x < COLS; x++)
      for (let y = 0; y < ROWS; y++) {
        ctx.beginPath();
        ctx.arc(x * CELL + CELL / 2, y * CELL + CELL / 2, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

    // Strawberry
    drawStrawberry(ctx, food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL / 2);

    // Body segments
    snake.slice(1).forEach((seg, i) => {
      const p = 3;
      ctx.fillStyle = i % 2 === 0 ? ACCENT : PINK2;
      ctx.strokeStyle = INK;
      ctx.lineWidth = 1.5;
      roundRect(ctx, seg.x * CELL + p, seg.y * CELL + p, CELL - p * 2, CELL - p * 2, 5);
      ctx.fill(); ctx.stroke();
    });

    // Cat head
    drawCatHead(ctx, snake[0].x * CELL + CELL / 2, snake[0].y * CELL + CELL / 2, CELL / 2 - 1, dir);
  }

  function steer(dx, dy) {
    const cur = curDirRef.current;
    if (!(dx === -cur.x && dy === -cur.y)) nextDirRef.current = { x: dx, y: dy };
  }

  function startGame() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const canvas = canvasRef.current;
    if (!canvas) return;

    let snake = [{ x: 8, y: 8 }, { x: 7, y: 8 }, { x: 6, y: 8 }];
    let food = spawnFood(snake);
    let currentScore = 0;

    curDirRef.current  = { x: 1, y: 0 };
    nextDirRef.current = { x: 1, y: 0 };
    setScore(0);
    setUiState("playing");

    const handleKey = (e) => {
      const map = {
        ArrowUp:    { x: 0, y: -1 }, w: { x: 0, y: -1 },
        ArrowDown:  { x: 0, y:  1 }, s: { x: 0, y:  1 },
        ArrowLeft:  { x: -1, y: 0 }, a: { x: -1, y: 0 },
        ArrowRight: { x:  1, y: 0 }, d: { x:  1, y: 0 },
      };
      const nd = map[e.key];
      if (nd) { steer(nd.x, nd.y); if (e.key.startsWith("Arrow")) e.preventDefault(); }
    };
    window.addEventListener("keydown", handleKey);

    drawFrame(canvas, snake, food, curDirRef.current);

    intervalRef.current = setInterval(() => {
      const dir = nextDirRef.current;
      curDirRef.current = dir;
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS ||
          snake.some(s => s.x === head.x && s.y === head.y)) {
        clearInterval(intervalRef.current);
        window.removeEventListener("keydown", handleKey);
        setHiScore(h => Math.max(h, currentScore));
        setUiState("gameover");
        return;
      }

      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        currentScore++;
        setScore(currentScore);
        food = spawnFood(snake);
      } else {
        snake.pop();
      }

      drawFrame(canvas, snake, food, dir);
    }, SPEED);

    return () => window.removeEventListener("keydown", handleKey);
  }

  React.useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const DpadBtn = ({ label, dx, dy, col, row }) => (
    <button data-clickable onPointerDown={() => steer(dx, dy)} style={{
      gridColumn: col, gridRow: row,
      background: "var(--ink)", color: "var(--paper)",
      border: "2px solid var(--ink)",
      fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1,
      cursor: "none",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "2px 2px 0 var(--accent)",
      userSelect: "none",
    }}>{label}</button>
  );

  return (
    <div style={{ background: "var(--paper)", border: "3px solid var(--ink)", boxShadow: "10px 10px 0 var(--ink)", overflow: "hidden", position: "relative" }}>

      {/* Idle overlay */}
      {uiState === "idle" && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 10,
          background: "rgba(255,250,248,0.96)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16,
        }}>
          <HappyCat />
          <div style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 22, color: "var(--ink)", textAlign: "center" }}>
            hungry for strawberries...
          </div>
          <button data-clickable onClick={startGame} style={{
            background: "var(--ink)", color: "var(--paper)",
            border: "2px solid var(--ink)", padding: "12px 32px",
            fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.25em",
            cursor: "none", boxShadow: "4px 4px 0 var(--accent)",
          }}>START ♡</button>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.15em", color: "var(--grey)" }}>
            arrow keys or d-pad below
          </div>
        </div>
      )}

      {/* Game over overlay */}
      {uiState === "gameover" && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 10,
          background: "rgba(8,15,22,0.92)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16,
        }}>
          <SadCat />
          <div style={{ fontFamily: "var(--serif)", fontSize: 32, color: "var(--paper)", letterSpacing: "-0.02em" }}>
            game over
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.2em", color: "var(--pink)" }}>
            {score} 🍓 eaten
          </div>
          {hiScore > 0 && (
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.15em", color: "rgba(249,221,223,0.5)" }}>
              best: {hiScore}
            </div>
          )}
          <button data-clickable onClick={startGame} style={{
            background: "var(--accent)", color: "var(--paper)",
            border: "2px solid var(--pink)", padding: "12px 32px",
            fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.25em",
            cursor: "none", boxShadow: "4px 4px 0 var(--pink)",
          }}>TRY AGAIN ♡</button>
        </div>
      )}

      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "12px 20px", borderBottom: "2px solid var(--ink)", background: "var(--pink)",
      }}>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.25em", color: "var(--accent)" }}>MINI GAME ♡</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 32, lineHeight: 1, letterSpacing: "-0.02em", marginTop: 4 }}>
            Hungry <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>Cat</em>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--grey)", marginBottom: 4 }}>SCORE</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 40, lineHeight: 1, color: "var(--accent)" }}>
            {String(score).padStart(3, "0")}
          </div>
          {hiScore > 0 && (
            <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.15em", color: "var(--grey)", marginTop: 4 }}>
              BEST {String(hiScore).padStart(3, "0")}
            </div>
          )}
        </div>
      </div>

      {/* Canvas */}
      <div style={{ lineHeight: 0 }}>
        <canvas ref={canvasRef} width={W} height={H} style={{ display: "block", width: "100%", height: "auto" }} />
      </div>

      {/* D-pad */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 48px)", gridTemplateRows: "repeat(2, 48px)",
        gap: 4, justifyContent: "center",
        padding: "16px 0 18px", borderTop: "2px solid var(--ink)", background: "var(--pink)",
      }}>
        <DpadBtn label="↑" dx={0}  dy={-1} col={2} row={1} />
        <DpadBtn label="←" dx={-1} dy={0}  col={1} row={2} />
        <DpadBtn label="↓" dx={0}  dy={1}  col={2} row={2} />
        <DpadBtn label="→" dx={1}  dy={0}  col={3} row={2} />
      </div>
    </div>
  );
};

window.SnakeGame = SnakeGame;
