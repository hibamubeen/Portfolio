// ABOUT: a snowman built from product, design, and code, then the story

const PARTS = {
  product: { label: "Product", note: "My head: talking to people, figuring out what they actually need, and owning the plan to get there." },
  design: { label: "Design", note: "My middle: flows, systems, and the small details that make something feel good to use." },
  code: { label: "Code", note: "My base: React, React Native, and getting it all the way to production." },
};
const BALLS = [
  { k: "code", cx: 150, cy: 300, r: 74 },
  { k: "design", cx: 150, cy: 192, r: 56 },
  { k: "product", cx: 150, cy: 106, r: 42 },
];

// A snowman built from the three things I'm made of. Tap a snowball to hear about it.
const Snowman = () => {
  const [active, setActive] = React.useState(null);
  const [wob, setWob] = React.useState(null);
  const pick = (k) => { setActive(k); setWob(k); setTimeout(() => setWob(null), 700); };
  return (
    <div className="snowman-wrap">
      <div className="snowman">
        <svg viewBox="0 0 300 390" aria-hidden="true">
          <defs>
            <radialGradient id="ballShade" cx=".38" cy=".32" r=".75"><stop offset="0" stopColor="#FFFFFF" /><stop offset=".7" stopColor="#F4F1FA" /><stop offset="1" stopColor="#D9D2EC" /></radialGradient>
          </defs>
          <path d="M-70 400 C-30 352 60 344 150 346 C240 344 330 352 370 400 Z" fill="#E6DDF0" />
          <path d="M-60 404 C-20 364 70 358 150 360 C230 358 320 364 360 404 Z" fill="#FFFFFF" />
          <ellipse cx="150" cy="370" rx="96" ry="12" fill="#8E8AB8" opacity=".22" />
          <path d="M100 196 L40 150 M56 162 L44 140" stroke="#7A5548" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M200 190 L262 148 M246 158 L262 136" stroke="#7A5548" strokeWidth="5" strokeLinecap="round" fill="none" />
          {BALLS.map(b => (
            <g key={b.k} className={`ball${wob === b.k ? " wobble" : ""}${active === b.k ? " on" : ""}`} style={{ transformOrigin: `${b.cx}px ${b.cy + b.r}px` }}>
              <circle cx={b.cx} cy={b.cy} r={b.r} fill="url(#ballShade)" />
              <circle cx={b.cx} cy={b.cy} r={b.r} fill="none" className="ball-ring" strokeWidth="4" />
              <text x={b.cx} y={b.k === "product" ? b.cy + 30 : b.cy + 8} textAnchor="middle" className="ball-label">{PARTS[b.k].label}</text>
              {b.k === "design" && [0, 1].map(i => <circle key={i} cx="150" cy={176 + i * 40} r="5" fill="#1E3A52" opacity=".8" />)}
              {b.k === "product" && (
                <g>
                  <circle cx="136" cy="98" r="5" fill="#1E3A52" /><circle cx="164" cy="98" r="5" fill="#1E3A52" />
                  <circle cx="134" cy="96" r="1.6" fill="#fff" /><circle cx="162" cy="96" r="1.6" fill="#fff" />
                  <path d="M150 106 L176 112 L150 114 Z" fill="#F2A65E" />
                  <ellipse cx="126" cy="112" rx="6" ry="3.5" fill="#F5B8C4" /><ellipse cx="174" cy="112" rx="6" ry="3.5" fill="#F5B8C4" />
                  <path d="M108 80 C110 50 190 50 192 80 Z" fill="#C9C3E3" />
                  <rect x="104" y="74" width="92" height="14" rx="7" fill="#B3ABD8" />
                  <circle cx="150" cy="50" r="10" fill="#FFFFFF" />
                </g>
              )}
            </g>
          ))}
          <path d="M112 142 C130 152 170 152 188 142 L190 156 C170 166 130 166 110 156 Z" fill="#F2B866" />
          <path d="M170 152 L176 194 L190 192 L182 150 Z" fill="#E9A54E" />
        </svg>
        {BALLS.map(b => (
          <button
            key={b.k}
            type="button"
            className="ball-hit"
            style={{ left: `${((b.cx - b.r) / 300) * 100}%`, top: `${((b.cy - b.r) / 390) * 100}%`, width: `${((b.r * 2) / 300) * 100}%`, height: `${((b.r * 2) / 390) * 100}%` }}
            onClick={() => pick(b.k)}
            onMouseEnter={() => setActive(b.k)}
            onFocus={() => setActive(b.k)}
            aria-pressed={active === b.k}
            aria-label={PARTS[b.k].label}
          />
        ))}
      </div>
      <p className="snow-says" aria-live="polite">
        {active ? PARTS[active].note : "I'm built from three things. Tap a snowball to see which part is which."}
      </p>
    </div>
  );
};

const About = () => (
  <section id="about" className="pane frosted">
    <Scenery kind="birch" friend={<Arrive kind="fly"><PlushOwl /></Arrive>} />
    <div className="inner">
      <div className="about-head">
        <h2 className="h-section">I sit somewhere between product, design, and code.</h2>
        <Snowman />
      </div>

      <div className="about-grid">
        <div className="note">
          <p className="about-big">
            I like figuring out what people actually need, then shipping the simplest thing
            that gets them there.
          </p>
          <p>
            This past summer I was a PM intern at Bluebeam. In 10 weeks I took an AI-powered
            feature from research and PRD all the way through build, security review, and
            production, and it shipped to early access customers. I got to be hands-on in the
            codebase, not just observing, which made it feel so different from what I expected.
          </p>
          <p>
            I started out as a web developer at Girls Who Code, then found my way into design,
            media, and product. Today I'm VP of ACM UTD, helping lead eight divisions and 150+
            officers. I also grew up on filmmaking and theatre, which is probably why I care so
            much about the story a product tells.
          </p>
          <p className="muted">
            When I need to reset, I go looking for water, open skies, and anything green.
          </p>
        </div>

        <aside className="facts" aria-label="Quick facts">
          <PlushSeal />
          <h3>Quick facts</h3>
          <dl>
            <dt>studying</dt><dd>B.S. Computer Science, UT Dallas</dd>
            <dt>minor</dt><dd>Business Intelligence &amp; Analytics</dd>
            <dt>certificate</dt><dd>Applied Design Experience &amp; Research</dd>
            <dt>leading</dt><dd>ACM UTD as Vice President</dd>
            <dt>mentoring</dt><dd>PMs in Alpha Kappa Psi</dd>
            <dt>based in</dt><dd>Richardson, TX</dd>
          </dl>
        </aside>
      </div>
    </div>
  </section>
);

window.About = About;
