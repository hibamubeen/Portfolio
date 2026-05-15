// Custom cursor + sparkle trail

const useCursorEffects = () => {
  React.useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    cursor.innerHTML = `
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L4 28 L10 22 L15 33 L20 31 L15 20 L23 20 Z"
          fill="#F9DDDF" stroke="#080F16" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    `;

    let lastSparkle = 0;
    const sparkleColors = ["#E94B6A", "#F9DDDF", "#080F16", "#FFFFFF"];

    const getZoom = () => parseFloat(getComputedStyle(document.documentElement).zoom) || 1;

    const onMove = (e) => {
      const z = getZoom();
      const x = e.clientX / z;
      const y = e.clientY / z;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      const now = Date.now();
      if (now - lastSparkle > 60 && Math.random() > 0.5) {
        lastSparkle = now;
        spawnSparkle(x, y);
      }
    };

    const spawnSparkle = (x, y) => {
      const s = document.createElement("div");
      s.className = "sparkle";
      const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
      const size = 8 + Math.random() * 10;
      s.style.cssText = `left:${x + (Math.random() - 0.5) * 30}px; top:${y + (Math.random() - 0.5) * 30}px; width:${size}px; height:${size}px;`;
      s.innerHTML = `<svg viewBox="0 0 20 20" width="100%" height="100%"><path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="${color}"/></svg>`;
      document.body.appendChild(s);

      const dx = (Math.random() - 0.5) * 40;
      const dy = (Math.random() - 0.5) * 40 - 10;
      s.animate([
        { transform: "translate(0,0) rotate(0deg) scale(0.4)", opacity: 0 },
        { transform: `translate(${dx * 0.4}px, ${dy * 0.4}px) rotate(90deg) scale(1)`, opacity: 1, offset: 0.3 },
        { transform: `translate(${dx}px, ${dy}px) rotate(180deg) scale(0)`, opacity: 0 },
      ], { duration: 800 + Math.random() * 400, easing: "ease-out" }).onfinish = () => s.remove();
    };

    const onOver = (e) => {
      const t = e.target;
      if (t.closest && t.closest("[data-clickable], a, button")) {
        document.body.classList.add("cursor-hover");
      }
    };
    const onOut = (e) => {
      const t = e.target;
      if (t.closest && t.closest("[data-clickable], a, button")) {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);
};

window.useCursorEffects = useCursorEffects;
