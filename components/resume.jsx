// EXPERIENCE: a trail up a snowy mountain. Each place is a stop, from the trailhead
// (where it started) to the summit (now). Click a stop and the hare hops there.

const XP = [
  {
    org: "Bluebeam", where: "Dallas, TX",
    roles: [
      { title: "Product Manager Intern", when: "Summer 2026",
        body: "In 10 weeks I took an AI-powered feature through the full product lifecycle: research, PRD, design, build, security review, and production. It shipped to the Bluebeam Early Access Program for alpha testing with early customers. I owned my own tickets and epics and worked hands-on in the codebase alongside engineers." },
    ],
  },
  {
    org: "ACM UTD", where: "Richardson, TX", span: "3 yrs 4 mos",
    roles: [
      { title: "Vice President", when: "Dec 2025 – now",
        body: "Leading operations for UTD's largest CS organization: 800+ members, 8 divisions, and 150+ officers." },
      { title: "Co-Director of Media", when: "Jan – Dec 2025",
        body: "Led marketing initiatives and campaigns that gained 700,000+ views." },
      { title: "Media Officer", when: "Jan – Dec 2024",
        body: "Produced promo videos, event photography, and marketing materials with the media team." },
      { title: "Frontend Developer, ACM Projects", when: "Aug – Dec 2023",
        body: "Led the frontend for Wasted, a sustainability-focused iOS and Android app." },
    ],
  },
  {
    org: "Apple", where: "Part-time",
    roles: [
      { title: "Operations Specialist", when: "Dec 2025 – May 2026",
        body: "99.7% operational and inventory accuracy." },
      { title: "Specialist", when: "Jul – Dec 2025",
        body: "95% customer satisfaction, 70% AppleCare enrollment, and top 30% promoter performance. Converted from temporary to permanent." },
    ],
  },
  {
    org: "Alpha Kappa Psi, Mu Rho", where: "UT Dallas",
    roles: [
      { title: "Brother & Product Management Mentor", when: "Apr 2025 – now",
        body: "Built a PM mentorship program with case study tracks, rubrics, and a mini-pitch framework. Also on the Service Committee." },
    ],
  },
  {
    org: "Smart Pharma Solutions", where: "San Ramon, CA",
    roles: [{ title: "Software Engineer Intern", when: "Jun – Jul 2025", body: "Engineering work for a pharma consulting company." }],
  },
  {
    org: "Alura", where: "Remote",
    roles: [
      { title: "Product Designer", when: "May – Jun 2025",
        body: "Designed the end-to-end journey for AI-powered facial analysis and shade matching, and built a design system that smoothed design-to-dev handoff." },
    ],
  },
  {
    org: "UX Club at UT Dallas", where: "Richardson, TX", span: "1 yr 2 mos",
    roles: [
      { title: "Marketing Director", when: "Apr – Dec 2025",
        body: "Led brand strategy and campaigns, growing Design-a-thon attendance from about 80 to 130+." },
      { title: "Media Coordinator", when: "Nov 2024 – May 2025",
        body: "Led videography for UTD's first 24-hour Design-a-thon and shot event photography all semester." },
    ],
  },
  {
    org: "Nebula Labs", where: "UT Dallas",
    roles: [
      { title: "UX Designer", when: "Sep 2024 – May 2025",
        body: "Designed key components for UTD Trends, a Next.js tool serving 10,000+ students, turning grade distributions into interactive charts." },
    ],
  },
  {
    org: "Girls Who Code", where: "Remote", start: true,
    roles: [
      { title: "Web Developer, Summer Immersion Program", when: "Jul 2022",
        body: "Where it all started: my first real taste of building for the web." },
    ],
  },
];

// Stop positions on the trail map, in % of the map box, summit (newest) first
const TRAIL_POINTS = [
  [52, 7], [30, 18], [64, 29], [36, 40], [70, 51], [34, 62], [62, 73], [38, 84], [56, 95],
];

const trailPath = (pts) => {
  const P = pts.map(([x, y]) => [x * 4, y * 9]);
  let d = `M${P[P.length - 1][0]} ${P[P.length - 1][1]}`;
  for (let i = P.length - 1; i > 0; i--) {
    const [x0, y0] = P[i], [x1, y1] = P[i - 1];
    const my = (y0 - y1) / 2;
    d += ` C${x0} ${y0 - my} ${x1} ${y1 + my} ${x1} ${y1}`;
  }
  return d;
};

const TrailMap = ({ sel, setSel }) => {
  const pts = TRAIL_POINTS.slice(0, XP.length);
  const [hx, hy] = pts[sel];
  const [hop, setHop] = React.useState(false);
  React.useEffect(() => { setHop(true); const t = setTimeout(() => setHop(false), 650); return () => clearTimeout(t); }, [sel]);
  return (
    <div className="trail-map">
      <svg viewBox="0 0 400 900" preserveAspectRatio="none" aria-hidden="true">
        <path d="M200 20 L380 520 L400 900 L0 900 L20 520 Z" fill="#E7E0F2" opacity=".7" />
        <path d="M200 20 L250 150 L222 138 L200 168 L176 140 L150 152 Z" fill="#FFFFFF" />
        <path d={trailPath(pts)} fill="none" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
        <path d={trailPath(pts)} fill="none" stroke="#E9A27E" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" />
      </svg>
      <span className="summit-flag" style={{ left: `${pts[0][0]}%`, top: `${pts[0][1]}%` }} aria-hidden="true">
        <svg viewBox="0 0 40 50"><path d="M6 48 V4" stroke="#6B4A3A" strokeWidth="3" strokeLinecap="round" /><path d="M8 5 C18 1 24 11 34 7 V23 C24 27 18 17 8 21 Z" fill="#F2B866" /></svg>
      </span>
      {pts.map(([x, y], i) => (
        <button
          key={XP[i].org}
          type="button"
          className={`trail-stop${sel === i ? " on" : ""}${x < 50 ? " label-right" : " label-left"}`}
          style={{ left: `${x}%`, top: `${y}%` }}
          onClick={() => setSel(i)}
          aria-pressed={sel === i}
          aria-label={`${XP[i].org}`}
        >
          <span className="trail-dot" />
          <span className="trail-label">{XP[i].org}</span>
        </button>
      ))}
      <span className={`trail-hare${hop ? " hop" : ""}${hx < 50 ? "" : " right"}`} style={{ left: `${hx}%`, top: `${hy}%` }} aria-hidden="true"><PlushHare /></span>
    </div>
  );
};

// Every stop's sign is stacked in the same spot, so the sign is always as tall as the
// longest one. Switching stops only swaps which one shows; the page never changes height.
const TrailSign = ({ sel, setSel }) => {
  const n = XP.length;
  return (
    <div className="trail-sign">
      <div className="sign-stack" aria-live="polite">
        {XP.map((x, i) => (
          <div key={x.org} className={`sign-page${i === sel ? " on" : ""}`} aria-hidden={i !== sel}>
            <p className="trail-where">
              {i === 0 ? "the summit, for now" : i === n - 1 ? "the trailhead, where it started" : `stop ${n - i} of ${n}`}
            </p>
            <h3>{x.org}</h3>
            <p className="muted">{x.where}{x.span ? `, ${x.span}` : ""}</p>
            <div className="roles">
              {x.roles.map(r => (
                <div key={r.title} className="role">
                  <div className="role-head">
                    <span className="role-title">{r.title}</span>
                    <span className="when">{r.when}</span>
                  </div>
                  <p>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="trail-nav">
        <button type="button" className="btn btn-soft" onClick={() => setSel(Math.min(n - 1, sel + 1))} disabled={sel === n - 1}>Down the trail</button>
        <button type="button" className="btn btn-soft" onClick={() => setSel(Math.max(0, sel - 1))} disabled={sel === 0}>Up the trail</button>
      </div>
    </div>
  );
};

const Resume = () => {
  const [sel, setSel] = React.useState(0);
  return (
  <section id="experience" className="pane frosted">
    <Scenery />
    <div className="inner">
      <div className="work-head">
        <h2 className="h-section">Where I've been</h2>
        <p>A little trail from where it all started to where I am now. Pick a stop to see what I did there.</p>
      </div>

      <div className="trail">
        <TrailMap sel={sel} setSel={setSel} />
        <TrailSign sel={sel} setSel={setSel} />
      </div>

      <div className="notes">
        <div>
          <h3>Education</h3>
          <p><strong>UT Dallas</strong>, B.S. Computer Science</p>
          <p className="muted">Minor in Business Intelligence &amp; Analytics. Certificate in Applied Design Experience &amp; Research.</p>
        </div>
        <div>
          <h3>Toolkit</h3>
          <div className="skill-list">
            {["Python", "React", "React Native", "Next.js", "Firebase", "Node.js", "SQL", "Figma", "Procreate"].map(s => <span key={s} className="chip">{s}</span>)}
          </div>
        </div>
        <div>
          <h3>A nice moment</h3>
          <p>Winning "Most Likely to Build the Future" at the Bluebeam team's TopGolf outing.</p>
          <span className="btn" aria-disabled="true" style={{ marginTop: 16 }}>Résumé PDF coming soon</span>
        </div>
      </div>
    </div>
  </section>
  );
};

window.Resume = Resume;
