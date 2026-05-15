// PROJECTS — mixed magazine cover + comic panel layout

const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    subtitle: "coming soon",
    issue: "08",
    blurb: "More work on the way — check back soon.",
    tags: ["TBD"],
    year: "2025",
    role: "TBD",
    burst: "WIP!",
    layout: "cover",
    accent: "var(--pink)",
  },
  {
    id: 2,
    title: "Project Two",
    subtitle: "coming soon",
    issue: "07",
    blurb: "More work on the way — check back soon.",
    tags: ["TBD"],
    year: "2025",
    role: "TBD",
    burst: "WIP!",
    layout: "panel",
    accent: "var(--accent)",
  },
  {
    id: 3,
    title: "Waves",
    subtitle: "a mental health wearable concept",
    issue: "06",
    blurb: "A Figma + Procreate concept pairing an AI app with a discreet biosensor bracelet to detect and respond to anxiety in real time — designed at UCI Design-a-thon 2025.",
    tags: ["Figma", "Procreate", "UX Research", "UI/UX"],
    year: "2025",
    role: "Designer & UX Researcher",
    burst: "SPLASH!",
    layout: "cover",
    accent: "var(--ink)",
    detail: {
      challenge: "Over one in five U.S. adults live with mental illness, yet therapy and service animals remain out of reach for most. We wanted to build an affordable, always-present alternative — something that could actually help in the critical moments of an anxiety or panic attack.",
      approach: "We spent almost 5–6 hours just ideating and conceptualizing before touching Figma. Extensive user research shaped every decision — from how we asked sensitive questions to how the mascot should feel (supportive, not robotic). I used Figma for the app interface and Procreate for our dolphin mascot and illustrations. Working with a partner, we iterated quickly on the bracelet design (Sonaband) and the app flow, balancing discreet wearable aesthetics with real biosensor functionality.",
      outcome: "We shipped a functional prototype with an interface our users found both intuitive and comforting. The system pairs the Sonaband bracelet — which monitors heart rate, breathing, and temperature — with guided exercises through an interactive dolphin mascot. For severe situations, it can notify emergency contacts. A huge growth moment in UX research for sensitive health products.",
      bullets: [
        "Spent 5–6 hours on user research and ideation before opening Figma",
        "Designed both the Sonaband wearable and the AI-powered app interface",
        "Created the dolphin mascot in Procreate — built to feel like a supportive friend, not a chatbot",
        "Tackled hard UX questions: privacy, sensitive health data, marketing, and daily wearability",
      ],
      tools: ["Figma", "Procreate"],
      timeline: "Design-a-thon",
      team: "2 designers",
      quote: "we spent almost 5–6 hours just thinking — and it made all the difference.",
    },
  },
  {
    id: 4,
    title: "ReLeaf",
    subtitle: "a property energy dashboard",
    issue: "05",
    blurb: "A web app that makes carbon emissions and energy cost data actually readable — built in 24 hours at HackUTD 2024 for CBRE's track. The judges were impressed.",
    tags: ["React.js", "TypeScript", "Tailwind", "Figma"],
    year: "2024",
    role: "Front-End Developer",
    burst: "GREEN!",
    layout: "panel",
    accent: "var(--accent)",
    detail: {
      challenge: "Property managers are swimming in energy consumption data but have no simple way to read it. ReLeaf set out to surface carbon footprint and cost metrics per property in a way that's clean, visual, and actually actionable.",
      approach: "We started in Figma and React Native building a mobile app, then pivoted mid-hackathon to a React.js website — a big call under the clock, but the right one. We used our mobile Figma designs as the foundation and rebuilt for web using React.js, TypeScript, and Tailwind CSS. I focused on designing and implementing the UI: the properties dashboard, individual property views, and the dynamic charts that self-adjust to real parsed data.",
      outcome: "We shipped a fully functional frontend with a properties dashboard, data input, pie charts, bar graphs, a built-in carbon emission calculator, and personalized reduction recommendations. The CBRE company judges were impressed by the level of detail — especially the dynamic visualizations and the depth of the data layer.",
      bullets: [
        "Designed and implemented the full UI as front-end developer",
        "Pivoted from React Native mobile app to React.js website mid-hackathon",
        "Built dynamic self-adjusting charts that parse and visualize real energy datasets",
        "Participated in CBRE's track — judges noted the depth and polish of the product",
      ],
      tools: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Figma"],
      timeline: "24 hours",
      team: "Team of 4",
      quote: "even though we ran into setbacks, we shipped something we were genuinely proud to demo.",
    },
  },
  {
    id: 5,
    title: "Echo",
    subtitle: "a campus social app concept",
    issue: "04",
    blurb: "A Figma concept for UTD's own social space — post anonymously, ask for advice, and keep up with campus life in real time. Built for UTD Nebula in 6 hours.",
    tags: ["Figma", "UI/UX", "Branding", "Concept"],
    year: "2024",
    role: "Co-Designer",
    burst: "ECHO!",
    layout: "cover",
    accent: "var(--pink)",
    detail: {
      challenge: "UTD students needed a social space that actually understood campus life — somewhere to ask which professor to pick, find out which food spots are open, or just share a random thought with people who get it. No generic social app was cutting it.",
      approach: "In a 6-hour hackathon design sprint for UTD Nebula, my partner and I built Echo from scratch — starting with the concept, working through the feature set, and designing the full Figma mockup. It was my first time collaborating with another person on design, and we spent a lot of time thinking carefully about both features and branding before opening Figma.",
      outcome: "We shipped a complete, polished Figma concept for Echo. The app lets students post publicly or anonymously, reply via 'Echos' (our take on comments), and browse a real-time campus feed. The branding came together really well and the process taught me a lot about how to co-design with intention.",
      bullets: [
        "Defined the full feature set: posting, anonymous mode, Echos (replies), and real-time campus feed",
        "Designed the branding and visual identity from scratch in a single session",
        "Built the complete UI mockup in Figma — all screens, components, and flows",
        "First time co-designing with a partner — learned to align on ideas before touching the tools",
      ],
      tools: ["Figma"],
      timeline: "6 hours",
      team: "2 designers",
      quote: "we got to think. a lot. about features, about branding — and it showed.",
    },
  },
  {
    id: 6,
    title: "UTD Trends",
    subtitle: "a UX redesign case study",
    issue: "03",
    blurb: "Redesigning the Compare feature for UTD Trends — a data viz tool used by students to evaluate professors. 76% of users preferred the new design.",
    tags: ["UI/UX", "Figma", "UX Research", "Data Viz"],
    year: "2024",
    role: "UX Designer",
    burst: "76%!",
    layout: "panel",
    accent: "var(--accent)",
    detail: {
      challenge: "The Compare feature is one of UTD Trends' most valuable tools — letting students evaluate multiple professors side-by-side across grades, ratings, and difficulty. But users struggled with it: color-coded graph data was disconnected from identifying information, key metrics were hard to scan, and the layout made adding new metrics nearly impossible. The PM requested a focused redesign for efficiency and clarity.",
      approach: "I identified four core pain points and designed around them. The solution: a card-based layout that groups each professor's data horizontally for direct left-to-right comparison. Cards include the professor name, class, grade count, and ratings count in the header. Color-coding matches the graph so there's no mental mapping required. Through two iterations — first introducing the card layout and alignment, then refining spacing, visual weight, contrast, and color to match UTD Trends' overall theme — the design landed in a place that was both cleaner and more functional.",
      outcome: "Conducting user testing and research, we found that 76% of UTD Trends users preferred the new Comparison Feature over the old one. As a UX designer on Nebula Labs UTD, this was one of the most technically specific design problems I'd tackled — iterating on an existing, functional UI to maximize efficiency rather than building from scratch.",
      bullets: [
        "Identified 4 key pain points in the existing Compare UI through analysis and user feedback",
        "Designed a card-based horizontal layout that eliminates mental color-to-professor mapping",
        "Iterated twice — first on structure, then on spacing, contrast, and visual hierarchy",
        "76% of UTD Trends users preferred the redesigned Compare feature over the original",
      ],
      tools: ["Figma"],
      timeline: "October 2024",
      team: "Nebula Labs UTD design team",
      quote: "this problem required me to iterate on an already existing UI and improve it to its maximum efficiency.",
    },
  },
  {
    id: 7,
    title: "NOVA",
    subtitle: "a mobile networking app",
    issue: "02",
    blurb: "A magic-themed networking app that matches you with people going to the same career events — built in 24 hours at WEHack UTD 2024.",
    tags: ["React Native", "Expo", "JavaScript", "Figma"],
    year: "2024",
    role: "Lead Developer",
    burst: "✦ WON!",
    layout: "panel",
    accent: "var(--accent)",
    winner: true,
    winnerLabel: "1st · Design Track",
    detail: {
      challenge: "Entering the job market and expanding your career network without a friend or mentor can be intimidating. We wanted to build something that got people out of their comfort zone and into the same room as the right connections.",
      approach: "We started with a Figma mockup to nail the magic-themed visual direction, then coded the app in JavaScript and JSX using React Native. We originally set up a Flutter environment, but pivoted to React Native mid-hackathon — a decision that aligned much better with our goals. Expo let us test on device in real time throughout the 24 hours.",
      outcome: "NOVA took 1st place in the Design Track at WEHack UTD 2024. Our team's very first hackathon. We implemented nearly every feature we set out to build: a personality quiz, event selection, and a matching algorithm that pairs users attending the same events. The magic theme came through in every screen.",
      bullets: [
        "Designed the full app flow and visual system in Figma before writing a line of code",
        "Pivoted from Flutter to React Native mid-hackathon and shipped anyway",
        "Built a quiz + event-selection matching system in under 24 hours",
        "Won 1st place in the Design Track at WEHack UTD 2024",
      ],
      tools: ["React Native", "Expo", "JavaScript", "Figma"],
      timeline: "24 hours",
      team: "Team of 4",
      quote: "we're proud of how much we were able to do in 24 hours — and proud of the team we became doing it.",
    },
  },
  {
    id: 8,
    title: "Wasted",
    subtitle: "a campus sustainability mobile app",
    issue: "01",
    blurb: "A React Native app that turns end-of-year student giveaways into a campus treasure hunt — built over 10 weeks through ACM UTD Projects and presented to 200 people + industry judges.",
    tags: ["React Native", "Expo", "Firebase", "Google Maps API"],
    year: "2023",
    role: "Front-End Developer & Designer",
    burst: "FOUND IT!",
    layout: "cover",
    accent: "var(--pink)",
    detail: {
      challenge: "Every end of the school year, college students trash valuable items — couches, mirrors, TVs, carpets — that other students would genuinely want. No platform existed to connect them on campus in a way that was safe, simple, and actually fun to use.",
      approach: "Built over 10 weeks through ACM UTD's Projects program under a PM and industry expert. I led front-end development and design: login flow, home screen, individual post view (with integrated map and claim feature), and profile page. We hit a last-minute UI redesign challenge — simplified the home screen but made it more functional and information-dense, and refreshed the color scheme. We also had to crack the Google Directions API integration, eventually solving the user location issue with Expo's Location Library.",
      outcome: "A fully functional, demoed mobile app presented to an audience of nearly 200 people and judges from industry companies — the culmination of ACM UTD's most prestigious undergrad program. Wasted lets students post items for giveaway, claim them via a map-based treasure hunt, and sign up securely with their college email. Every feature we set out to build shipped.",
      bullets: [
        "Accepted into ACM UTD Projects — UTD's most prestigious undergraduate student org program",
        "Led front-end development and design across login, home, post detail, map, and profile screens",
        "Executed a last-minute UI redesign under pressure — came out cleaner and more functional",
        "Presented live to ~200 people and industry judges at the 10-week program demo day",
      ],
      tools: ["React Native", "Expo", "Firebase", "Google Directions API"],
      timeline: "10 weeks (Aug–Dec 2023)",
      team: "Team of 4 + PM",
      quote: "one post at a time, users turn their trash into someone else's treasure.",
    },
  },
];

const ProjectCover = ({ p, idx, onOpen }) => (
  <article style={{
    position: "relative",
    border: "3px solid var(--ink)",
    background: "var(--paper)",
    boxShadow: "12px 12px 0 var(--ink)",
    overflow: "hidden",
    transform: idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }}
  data-clickable
  onClick={() => onOpen && onOpen(p)}
  onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(0deg) translate(-4px,-4px)"; e.currentTarget.style.boxShadow = "16px 16px 0 var(--accent)"; }}
  onMouseLeave={(e) => { e.currentTarget.style.transform = idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)"; e.currentTarget.style.boxShadow = "12px 12px 0 var(--ink)"; }}
  >
    {/* Top bar */}
    <div style={{
      borderBottom: "2px solid var(--ink)",
      padding: "10px 16px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.25em",
      background: p.accent === "var(--ink)" ? "var(--ink)" : "var(--pink)",
      color: p.accent === "var(--ink)" ? "var(--pink)" : "var(--ink)",
    }}>
      <span>ISSUE №{p.issue} · {p.year}</span>
      <span>★ ★ ★ ★ ★</span>
      <span>p.{p.issue}</span>
    </div>

    <div style={{ padding: "28px 24px 24px", position: "relative", minHeight: 540 }}>
      {/* Winner badge */}
      {p.winner && (
        <div style={{
          position: "absolute", top: -2, right: 18,
          background: "var(--accent)", color: "var(--paper)",
          fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.15em",
          padding: "6px 14px",
          border: "2px solid var(--ink)",
          boxShadow: "3px 3px 0 var(--ink)",
          transform: "rotate(-2deg)",
          zIndex: 10,
        }}>★ {p.winnerLabel}</div>
      )}
      {/* Title block */}
      <div style={{ marginBottom: 18 }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--accent)" }}>
          ▸ {p.subtitle.toUpperCase()}
        </span>
        <h3 style={{
          fontFamily: "var(--serif)",
          fontSize: 56,
          margin: "8px 0 0",
          lineHeight: 0.88,
          letterSpacing: "-0.02em",
        }}>
          {p.title.split(" ")[0]}<br/>
          <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", color: "var(--accent)" }}>{p.title.split(" ").slice(1).join(" ")}</em>
        </h3>
      </div>

      {/* Image placeholder */}
      <div style={{ position: "relative", marginBottom: 18 }}>
        <Placeholder label={`project ${p.issue} hero`} h={240} tone={p.accent === "var(--ink)" ? "ink" : "pink"} />
        <div style={{ position: "absolute", top: -14, right: -14 }}>
          <Burst text={p.burst} color={p.accent === "var(--accent)" ? "var(--pink)" : "var(--accent)"} size={86} rotate={12} />
        </div>
      </div>

      {/* Blurb */}
      <p style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 18, lineHeight: 1.3, margin: "0 0 18px", color: "var(--ink)" }}>
        {p.blurb}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
        {p.tags.map(t => (
          <span key={t} style={{
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
            padding: "4px 10px", border: "1.5px solid var(--ink)", borderRadius: 999,
          }}>{t}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "2px solid var(--ink)", paddingTop: 14,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.2em",
      }}>
        <span>ROLE / {p.role}</span>
        <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 14, letterSpacing: 0, textTransform: "none", color: "var(--accent)" }}>
          read more →
        </span>
      </div>
    </div>
  </article>
);

const ProjectPanel = ({ p, idx, onOpen }) => (
  <article style={{
    position: "relative",
    border: "3px solid var(--ink)",
    background: p.accent === "var(--ink)" ? "var(--ink)" : "var(--paper)",
    color: p.accent === "var(--ink)" ? "var(--paper)" : "var(--ink)",
    boxShadow: "12px 12px 0 var(--ink)",
    transform: idx % 2 === 0 ? "rotate(0.5deg)" : "rotate(-0.7deg)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: 600,
    overflow: "hidden",
  }}
  data-clickable
  onClick={() => onOpen && onOpen(p)}
  onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(0deg) translate(-4px,-4px)"; e.currentTarget.style.boxShadow = "16px 16px 0 var(--accent)"; }}
  onMouseLeave={(e) => { e.currentTarget.style.transform = idx % 2 === 0 ? "rotate(0.5deg)" : "rotate(-0.7deg)"; e.currentTarget.style.boxShadow = "12px 12px 0 var(--ink)"; }}
  >
    {/* Comic-style top */}
    <div style={{
      padding: "14px 20px",
      borderBottom: "2px solid currentColor",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em",
    }}>
      <span>PANEL №{p.issue}</span>
      <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", letterSpacing: 0, fontSize: 14 }}>
        ⟶ {p.year}
      </span>
    </div>

    {/* Big number + image split */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 0 }}>
      <div style={{
        padding: 24,
        borderRight: "2px solid currentColor",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        background: p.accent === "var(--ink)" ? "var(--ink)" : "var(--pink)",
      }}>
        <div style={{
          fontFamily: "var(--serif)", fontSize: 200, lineHeight: 0.8,
          letterSpacing: "-0.04em",
          color: p.accent === "var(--ink)" ? "var(--pink)" : "var(--ink)",
        }}>
          0{p.issue}
        </div>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.25em", marginBottom: 8 }}>
            {p.subtitle.toUpperCase()}
          </div>
          <h3 style={{
            fontFamily: "var(--serif)",
            fontSize: 38, margin: 0, lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}>
            {p.title.split(" ")[0]}{" "}
            <em style={{ fontFamily: "var(--serif-it)", fontStyle: "italic" }}>
              {p.title.split(" ").slice(1).join(" ")}
            </em>
          </h3>
        </div>
      </div>

      <div style={{ position: "relative", padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
        {p.winner && (
          <div style={{
            position: "absolute", top: 12, right: 12,
            background: "var(--accent)", color: "var(--paper)",
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.15em",
            padding: "6px 14px",
            border: "2px solid var(--ink)",
            boxShadow: "3px 3px 0 var(--ink)",
            transform: "rotate(-2deg)",
            zIndex: 10,
          }}>★ {p.winnerLabel}</div>
        )}
        <Placeholder label={`hero ${p.issue}`} h={220} tone={p.accent === "var(--ink)" ? "pink" : "grey"} />
        <p style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 18, lineHeight: 1.3, margin: 0 }}>
          {p.blurb}
        </p>
        <div style={{
          position: "absolute", top: -14, right: 14,
          transform: "rotate(8deg)",
        }}>
          <Burst text={p.burst} color={p.accent === "var(--ink)" ? "var(--pink)" : "var(--accent)"} size={90} rotate={0} />
        </div>
      </div>
    </div>

    {/* Footer */}
    <div style={{
      padding: "14px 20px",
      borderTop: "2px solid currentColor",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      gap: 16,
    }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {p.tags.map(t => (
          <span key={t} style={{
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
            padding: "4px 10px", border: "1.5px solid currentColor", borderRadius: 999,
          }}>{t}</span>
        ))}
      </div>
      <span style={{ fontFamily: "var(--serif-it)", fontStyle: "italic", fontSize: 16, color: p.accent === "var(--ink)" ? "var(--pink)" : "var(--accent)" }}>
        open the issue →
      </span>
    </div>
  </article>
);

const PAGE_SIZE = 4;

const Projects = ({ tweaks }) => {
  const layout = tweaks?.projectLayout || "mixed";
const [page, setPage] = React.useState(0);
  const [slideDir, setSlideDir] = React.useState(1);
  const [animKey, setAnimKey] = React.useState(0);
  const isFirstRender = React.useRef(true);

  const totalPages = Math.ceil(PROJECTS.length / PAGE_SIZE);
  const visible = PROJECTS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  React.useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    const section = document.getElementById("projects");
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [page]);

  const goTo = (next) => {
    setSlideDir(next > page ? 1 : -1);
    setPage(next);
    setAnimKey(k => k + 1);
  };

  return (
    <section id="projects" style={{ position: "relative", padding: "100px 6vw 120px", background: "var(--paper)", overflow: "hidden", borderTop: "3px solid var(--ink)" }}>

      {/* Subtle gingham accent strip */}
      <div className="gingham-soft" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 24, opacity: 0.7
      }} />

      <style>{`
        @keyframes slideInRight { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInLeft  { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
        .projects-grid { animation-duration: 0.4s; animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1); animation-fill-mode: both; }
        .projects-grid.slide-right { animation-name: slideInRight; }
        .projects-grid.slide-left  { animation-name: slideInLeft; }
      `}</style>

      <SectionHead kicker="↳ p.03 — the work" title="a lot of projects &" italic="a lot of coffee." num="02" />

      <div
        key={animKey}
        className={`projects-grid ${slideDir === 1 ? "slide-right" : "slide-left"}`}
        style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
        gap: 56,
      }}
      >
        {visible.map((p, i) => {
          let useLayout = p.layout;
          if (layout === "covers") useLayout = "cover";
          if (layout === "panels") useLayout = "panel";
          return useLayout === "cover"
            ? <ProjectCover key={p.id} p={p} idx={i} onOpen={tweaks?.onOpenProject} />
            : <ProjectPanel key={p.id} p={p} idx={i} onOpen={tweaks?.onOpenProject} />;
        })}
      </div>

      {/* Pagination nav */}
      {totalPages > 1 && (
      <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 32, marginTop: 80,
        }}>
          {/* Prev arrow */}
          <button
            data-clickable
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            style={{
              background: page === 0 ? "transparent" : "var(--ink)",
              color: page === 0 ? "var(--grey)" : "var(--paper)",
              border: `2px solid ${page === 0 ? "var(--grey)" : "var(--ink)"}`,
              boxShadow: page === 0 ? "none" : "5px 5px 0 var(--accent)",
              padding: "14px 24px",
              fontFamily: "var(--serif)", fontSize: 32, lineHeight: 1,
              cursor: page === 0 ? "default" : "none",
              transform: page === 0 ? "none" : "rotate(-1deg)",
              transition: "all 0.2s ease",
            }}
          >←</button>

          {/* Page dots */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                data-clickable
                onClick={() => goTo(i)}
                style={{
                  width: i === page ? 32 : 12,
                  height: 12,
                  borderRadius: 999,
                  background: i === page ? "var(--accent)" : "var(--ink)",
                  border: "2px solid var(--ink)",
                  cursor: "none",
                  transition: "all 0.25s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            data-clickable
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages - 1}
            style={{
              background: page === totalPages - 1 ? "transparent" : "var(--ink)",
              color: page === totalPages - 1 ? "var(--grey)" : "var(--paper)",
              border: `2px solid ${page === totalPages - 1 ? "var(--grey)" : "var(--ink)"}`,
              boxShadow: page === totalPages - 1 ? "none" : "5px 5px 0 var(--accent)",
              padding: "14px 24px",
              fontFamily: "var(--serif)", fontSize: 32, lineHeight: 1,
              cursor: page === totalPages - 1 ? "default" : "none",
              transform: page === totalPages - 1 ? "none" : "rotate(1deg)",
              transition: "all 0.2s ease",
            }}
          >→</button>
        </div>
      )}

      {/* Page label */}
      <div style={{ textAlign: "center", marginTop: 24, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", color: "var(--grey)" }}>
        — issue {page + 1} of {totalPages} —
      </div>
    </section>
  );
};

window.Projects = Projects;
