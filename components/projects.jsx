// WORK: project cards + the case study content each one opens

const PROJECTS = [
  {
    id: "bluebeam",
    title: "AI for Studio Projects at Bluebeam",
    kind: "An AI feature, idea to production",
    role: "PM Intern",
    year: "2026",
    timeline: "10 weeks, Summer 2026",
    team: "Engineers, architects, product & leadership",
    blurb: "In 10 weeks I took an AI-powered feature through the full product lifecycle, from research and PRD to build, security review, and production. It shipped to the Bluebeam Early Access Program for alpha testing with early customers.",
    tags: ["Product", "AI", "Full-stack"],
    icon: "spark",
    badge: "Shipped to early access",
    tint: "linear-gradient(135deg, #7FB8D9 0%, #2F74A6 100%)",
    brief: "Teams collaborating in Studio Projects lose time catching up on what changed and what it actually means, and those gaps can turn into expensive miscommunication. I set out to build an AI feature that saves that catch-up time and catches the gaps early.",
    process: "I came in as a PM intern and got to bring my technical skills to the table too. Not just observing or handing things off, but digging into the codebase. I ran customer discovery conversations and let that feedback shape the feature, wrote the PRDs, and managed my own tickets and epics. Then I built a backend service with two API endpoints grounded in Bluebeam's internal services and data, plus the frontend that calls them, and took it through security review and production deployment.",
    steps: [
      "Customer discovery conversations and competitor analysis to shape the problem",
      "Wrote the PRDs and owned my own epic and tickets alongside engineers",
      "Built the backend service and frontend, with guardrails for data minimization and authentication",
      "Took it through security review and production, into the Bluebeam Early Access Program",
    ],
    quote: "i never felt like i was just observing. i was trusted to own my project, make real decisions, and learn by doing.",
    outcome: "The feature entered alpha testing with early customers through the Bluebeam Early Access Program. Along the way I learned how much distance there is between \"it works on my machine\" and something ready for customers: the unglamorous work of security, infrastructure, and process that makes all the difference. And yes, I won \"Most Likely to Build the Future\" at our TopGolf outing.",
    tools: ["AWS Bedrock", "GitHub Copilot", "Jira", "Miro", "Pendo", "Power BI"],
  },
  {
    id: "waves",
    title: "Waves",
    kind: "A mental health wearable concept",
    role: "Designer & UX Researcher",
    year: "2025",
    timeline: "Design-a-thon",
    team: "2 designers",
    blurb: "An AI app paired with a discreet biosensor bracelet that detects and responds to anxiety in real time. Designed at UCI Design-a-thon 2025.",
    tags: ["Figma", "Procreate", "UX Research"],
    icon: "wave",
    tint: "linear-gradient(135deg, #B9DDF1 0%, #4E95C2 100%)",
    brief: "Over one in five U.S. adults live with mental illness, yet therapy and service animals remain out of reach for most. We wanted an affordable, always-present alternative that could actually help in the critical moments of an anxiety or panic attack.",
    process: "We spent almost 5 to 6 hours just ideating before touching Figma. User research shaped every decision, from how we asked sensitive questions to how the mascot should feel (supportive, not robotic). I designed the app in Figma and drew our dolphin mascot in Procreate, while we iterated on the Sonaband bracelet and the app flow together.",
    steps: [
      "5 to 6 hours of user research and ideation before opening Figma",
      "Designed both the Sonaband wearable and the AI-powered app",
      "Created the dolphin mascot to feel like a supportive friend, not a chatbot",
      "Worked through privacy, sensitive health data, and daily wearability",
    ],
    quote: "we spent almost 5 to 6 hours just thinking, and it made all the difference.",
    outcome: "A functional prototype our users found intuitive and comforting. Sonaband monitors heart rate, breathing, and temperature, then guides you through exercises with the dolphin mascot, and can notify emergency contacts in severe situations.",
    tools: ["Figma", "Procreate"],
  },
  {
    id: "nomad",
    title: "Nomad",
    kind: "A remote workspace finder",
    role: "Technical Product Manager",
    year: "2025",
    timeline: "4 weeks, Apr to May 2025",
    team: "Team of 5 (design, frontend, backend, full-stack)",
    blurb: "A web app that matches remote workers, students, and travelers with the right workspace nearby, based on what they need: noise level, wifi, food, price, and how long they want to stay.",
    tags: ["Product", "User research", "React", "Firebase"],
    icon: "compass",
    badge: "Pitched to 60 people",
    brief: "Remote work took off after covid, but home isn't always a good place to focus. Everyone needs something different: quiet, strong wifi for calls, food nearby, a little background buzz. Finding that spot usually means digging through reviews, guessing, and sometimes showing up somewhere that's closed, full, or too loud.",
    process: "I led a team of 5 as the technical product manager. We started with customer discovery, interviewing remote workers, a family, and college students about where they work and why, then turned what we heard into personas, an empathy map, a user journey map, and a user flow. I wrote a 20-page design doc and scored every feature on priority, complexity, and value to decide what made the MVP. Our designer took it into Figma, and the team built a functional prototype: a preference questionnaire, matched results, workspace details, and a profile with saved spots.",
    steps: [
      "Interviewed remote workers and college students about how they choose a place to work",
      "Turned the interviews into 3 personas, an empathy map, a journey map, and a user flow",
      "Wrote a 20-page design doc and scored features by priority, complexity, and value to scope the MVP",
      "Aligned a cross-functional team of 5 on a 4-week roadmap and shipped a functional prototype",
    ],
    outcome: "We delivered a working prototype in 4 weeks and pitched Nomad to 60 people. Users answer a quick questionnaire (location, noise, wifi, price, food, hours), a Python scraper finds nearby workspaces through a Node.js backend, and Firebase handles login and saved favorites. Ideas for next time: AI-powered suggestions, a map view, and sorting by distance, rating, and price.",
    tools: ["Figma", "React.js", "Python", "Node.js", "Firebase", "GitHub"],
  },
  {
    id: "releaf",
    title: "ReLeaf",
    kind: "A property energy dashboard",
    role: "Front-End Developer",
    year: "2024",
    timeline: "24 hours",
    team: "Team of 4",
    blurb: "A web app that makes carbon emissions and energy cost data actually readable. Built in 24 hours at HackUTD 2024 for CBRE's track.",
    tags: ["React.js", "TypeScript", "Tailwind"],
    icon: "leaf",
    tint: "linear-gradient(135deg, #CDEBE6 0%, #4C9FA6 100%)",
    brief: "Property managers are swimming in energy consumption data with no simple way to read it. ReLeaf surfaces carbon footprint and cost metrics per property in a way that's clean, visual, and actionable.",
    process: "We started on a React Native mobile app, then pivoted mid-hackathon to a React.js website. A big call under the clock, but the right one. I designed and built the UI: the properties dashboard, individual property views, and charts that adjust themselves to real parsed data.",
    steps: [
      "Designed and implemented the full UI as front-end developer",
      "Pivoted from a mobile app to a website mid-hackathon",
      "Built dynamic charts that parse and visualize real energy datasets",
      "Competed in CBRE's track, where judges noted the depth and polish",
    ],
    quote: "even though we ran into setbacks, we shipped something we were proud to demo.",
    outcome: "A fully functional frontend with a properties dashboard, data input, pie charts, bar graphs, a carbon emission calculator, and personalized reduction recommendations. CBRE's judges were impressed by the detail.",
    tools: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Figma"],
  },
  {
    id: "nova",
    title: "NOVA",
    kind: "A magical networking app",
    role: "Lead Developer",
    year: "2024",
    timeline: "24 hours",
    team: "Team of 4",
    blurb: "A magic-themed app that matches you with people going to the same career events. Built in 24 hours at WEHack UTD 2024.",
    tags: ["React Native", "Expo", "Figma"],
    icon: "moon",
    badge: "1st place, Design Track",
    tint: "linear-gradient(135deg, #C9D7F2 0%, #4A68B0 100%)",
    brief: "Growing a career network without a friend or mentor can be intimidating. We wanted to get people out of their comfort zone and into the same room as the right connections.",
    process: "We nailed the magic-themed look in Figma first, then coded the app in React Native. We originally set up Flutter but pivoted mid-hackathon, which fit our goals much better. Expo let us test on device the whole way through.",
    steps: [
      "Designed the full app flow and visual system before writing code",
      "Pivoted from Flutter to React Native mid-hackathon and shipped anyway",
      "Built a quiz and event-selection matching system in under 24 hours",
      "Won 1st place in the Design Track at WEHack UTD 2024",
    ],
    quote: "we're proud of how much we did in 24 hours, and proud of the team we became doing it.",
    outcome: "1st place in the Design Track at our team's very first hackathon. We built nearly everything we planned: a personality quiz, event selection, and matching for people attending the same events.",
    tools: ["React Native", "Expo", "JavaScript", "Figma"],
  },
  {
    id: "trends",
    title: "UTD Trends",
    kind: "Compare and planner design for UTD Trends",
    role: "UX Designer",
    year: "2024",
    timeline: "October 2024",
    team: "Nebula Labs design team",
    blurb: "I designed the Compare and My Planner features for UTD Trends, a data viz tool students use to pick professors and plan their semester.",
    tags: ["UI/UX", "UX Research", "Data Viz"],
    icon: "chart",
    badge: "76% preferred it",
    tint: "linear-gradient(135deg, #DCEDF7 0%, #5C9BC6 100%)",
    brief: "Compare lets students weigh professors side by side across grades, ratings, and difficulty. But graph colors were disconnected from who they represented, key metrics were hard to scan, and the layout made new metrics nearly impossible to add.",
    process: "I found four core pain points and designed around them with a card-based layout that groups each professor's data for direct left-to-right comparison. Card colors match the graph, so there's no mental mapping. Round one set the structure; round two refined spacing, weight, contrast, and color.",
    steps: [
      "Identified 4 key pain points through analysis and user feedback",
      "Designed a card layout that removes color-to-professor guessing",
      "Iterated twice: structure first, then spacing, contrast, and hierarchy",
      "76% of users preferred the redesign over the original",
      "Designed My Planner, so students can save sections and see them on a weekly calendar",
    ],
    quote: "this problem asked me to take an existing UI and push it to its most efficient.",
    outcome: "In user testing, 76% of UTD Trends users preferred the new Compare feature. One of the most technically specific design problems I've tackled.",
    tools: ["Figma"],
  },
  {
    id: "echo",
    title: "Echo",
    kind: "A campus social app concept",
    role: "Co-Designer",
    year: "2024",
    timeline: "6 hours",
    team: "2 designers",
    blurb: "UTD's own social space: post anonymously, ask for advice, and keep up with campus life in real time. Designed for UTD Nebula in 6 hours.",
    tags: ["Figma", "Branding", "Concept"],
    icon: "chat",
    tint: "linear-gradient(135deg, #D6E9F5 0%, #6AA6CF 100%)",
    brief: "UTD students needed a social space that understood campus life. Somewhere to ask which professor to pick, find which food spots are open, or share a random thought with people who get it.",
    process: "In a 6-hour design sprint, my partner and I built Echo from scratch: concept, feature set, branding, and the full Figma mockup. It was my first time co-designing, and we spent real time aligning on features and brand before opening Figma.",
    steps: [
      "Defined posting, anonymous mode, Echos (replies), and a live campus feed",
      "Designed the branding and visual identity in a single session",
      "Built every screen, component, and flow in Figma",
      "Learned to align on ideas with a partner before touching the tools",
    ],
    quote: "we got to think. a lot. about features, about branding, and it showed.",
    outcome: "A complete, polished concept. Students can post publicly or anonymously, reply with Echos, and browse a real-time campus feed.",
    tools: ["Figma"],
  },
  {
    id: "wasted",
    title: "Wasted",
    kind: "A campus sustainability app",
    role: "Front-End Developer & Designer",
    year: "2023",
    timeline: "10 weeks",
    team: "Team of 4 + PM",
    blurb: "Turns end-of-year student giveaways into a campus treasure hunt. Built over 10 weeks in ACM UTD Projects and presented to 200 people and industry judges.",
    tags: ["React Native", "Firebase", "Maps API"],
    icon: "pin",
    tint: "linear-gradient(135deg, #E3EEF6 0%, #7AAFD3 100%)",
    brief: "Every spring, students throw away couches, mirrors, TVs, and rugs that other students would happily take. Nothing connected them on campus in a way that was safe, simple, and fun.",
    process: "I led front-end and design for the login flow, home screen, post view with an integrated map and claim feature, and profile. A last-minute redesign made the home screen simpler yet more useful, and we cracked user location with Expo's Location library.",
    steps: [
      "Accepted into ACM UTD Projects",
      "Led front-end and design across login, home, post detail, map, and profile",
      "Pulled off a last-minute UI redesign that came out cleaner",
      "Presented live to about 200 people and industry judges",
    ],
    quote: "one post at a time, users turn their trash into someone else's treasure.",
    outcome: "A fully working app: post items, claim them through a map-based treasure hunt, and sign up securely with a college email. Every feature we planned shipped.",
    tools: ["React Native", "Expo", "Firebase", "Google Directions API"],
  },
  {
    id: "dash",
    title: "dash-",
    kind: "A calendar-connected errand app",
    role: "Team member",
    year: "2026",
    timeline: "Fall 2026, in progress",
    team: "Class team project",
    blurb: "An app that connects to your calendar and has an errand mode, so the little tasks in life find a place in your day. We're building it as a working prototype.",
    tags: ["React Native", "Expo", "Usability testing"],
    icon: "dash",
    badge: "In progress",
    tint: "linear-gradient(135deg, #CFE6F5 0%, #6FA9CF 100%)",
    brief: "Errands tend to slip through the cracks between classes, work, and everything else. dash- connects to your calendar and adds an errand mode to help you actually get them done.",
    process: "My team is building a functional prototype in React Native and Expo. I ran usability tests with 3 participants and I'm turning what they told us into a clear list of usability problems to fix next.",
    steps: [
      "Calendar connection and an errand mode at the core",
      "Building a functional prototype in React Native and Expo",
      "Ran usability tests with 3 participants",
      "Writing up usability problems and feedback to guide the next iteration",
    ],
    outcome: "Still swimming along. Next up: fixing what testing surfaced and growing the prototype.",
    tools: ["React Native", "Expo"],
  },
];

const ProjectRow = ({ p, onOpen }) => (
  <li>
    <button
      type="button"
      className="project"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        onOpen(p, { x: e.clientX || r.left + r.width / 2, y: e.clientY || r.top + r.height / 2 });
      }}
      aria-label={`Open the story of ${p.title}`}
    >
      <div>
        <h3>{p.title}</h3>
        <p className="project-kind">{p.kind}</p>
      </div>
      <div>
        <p className="project-blurb">{p.blurb}</p>
        <div className="tags">
          {p.badge && <span className="gold-tag">{p.badge}</span>}
          {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
        </div>
      </div>
      <div className="project-year">
        <span>{p.year}</span>
        <span className="project-open" aria-hidden="true">read the story</span>
      </div>
    </button>
  </li>
);

// Screenshots and links for each project's story. Images live in assets/projects/<id>/.
const shots = (id, captions) => captions.map((caption, i) => ({ src: `assets/projects/${id}/0${i + 1}.jpg`, caption }));
const EXTRAS = {
  waves: { shape: "phone", gallery: shots("waves", ["The Waves app and Sonaband", "Your safe space, with Sona the dolphin", "Sona Waves: heart rate, breathing, and temperature", "Talking with Sona", "Calming activities", "Meeting Sona for the first time"]),
           links: [{ label: "See it on Devpost", href: "https://devpost.com/software/chocolate-covered-strawberry" }] },
  nova: { shape: "phone", gallery: shots("nova", ["Landing page", "Career goals quiz", "Matching page"]),
          links: [{ label: "See it on Devpost", href: "https://devpost.com/software/magic-match-y1svju" }] },
  echo: { shape: "phone", gallery: shots("echo", ["Echo on iPhone", "Welcome screen", "Home feed", "Creating a post", "Categories", "Profile"]) },
  nomad: { shape: "web", gallery: shots("nomad", ["Landing page", "Workspace map", "Questionnaire: location", "Questionnaire: workspace preferences", "Profile and saved preferences"]) },
  wasted: { shape: "phone", gallery: shots("wasted", ["Wasted on iPhone", "Landing page", "Home feed", "Viewing a post to claim it", "Creating a post", "Your profile", "My first hand-drawn sketches"]) },
  trends: { shape: "web", gallery: shots("trends", ["Course results and grade distribution", "Compare: professors side by side, color-matched to the chart", "My Planner: sections on a weekly calendar"]),
            links: [{ label: "Try UTD Trends", href: "https://trends.utdnebula.com/" }] },
  releaf: { shape: "web", gallery: shots("releaf", ["Landing page", "Login"]),
            links: [{ label: "Visit the live site", href: "https://releafutd.vercel.app/" }] },
};
PROJECTS.forEach(p => Object.assign(p, EXTRAS[p.id] || {}));

// Each postcard gets its own warm winter tint
const POSTCARD_TINTS = [
  ["#F8C9A8", "#F4A783"], ["#CFE0F2", "#A9C4E6"], ["#D9E8CF", "#B5D1A8"], ["#DCD3EF", "#BFB1E3"],
  ["#FBE0A9", "#F2C46E"], ["#F6CFD5", "#EBA9B4"], ["#CDE5E4", "#9FCBCB"], ["#F9D6C4", "#F0B49A"],
];

const Postcard = ({ p, i, onOpen, dragged }) => {
  const [a, b] = POSTCARD_TINTS[i % POSTCARD_TINTS.length];
  return (
    <li className="postcard-slot" style={{ "--tilt": `${i % 2 ? 1.6 : -1.8}deg` }}>
      <span className="peg" aria-hidden="true" />
      <button
        type="button"
        className="postcard"
        onClick={(e) => { if (dragged.current) { e.preventDefault(); return; } onOpen(p); }}
        aria-label={`Open the story of ${p.title}`}
      >
        <span className="postcard-art" style={{ background: `linear-gradient(160deg, ${a}, ${b})` }} aria-hidden="true">
          <svg className="postcard-hills" viewBox="0 0 300 120" preserveAspectRatio="none">
            <path d="M0 70 C60 40 120 60 170 50 C220 40 260 55 300 45 V120 H0 Z" fill="#FFFFFF" opacity=".45" />
            <path d="M0 92 C70 74 140 96 210 84 C250 78 280 82 300 80 V120 H0 Z" fill="#FFFFFF" opacity=".9" />
          </svg>
          <Icon name={p.icon} className="postcard-icon" />
          <span className="stamp"><span>{p.year}</span></span>
          <span className="postmark">{p.role}</span>
        </span>
        <span className="postcard-body">
          <span className="postcard-title">{p.title}</span>
          <span className="postcard-hook">{p.kind}</span>
          {p.badge && <span className="gold-tag">{p.badge}</span>}
          <span className="tags">{p.tags.slice(0, 3).map(t => <span key={t} className="chip">{t}</span>)}</span>
          <span className="postcard-cta">read the story</span>
        </span>
      </button>
    </li>
  );
};

const Carousel = ({ onOpen }) => {
  const track = React.useRef(null);
  const dragged = React.useRef(false);
  const [edge, setEdge] = React.useState({ start: true, end: false });

  const update = () => {
    const el = track.current; if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  };
  const go = (dir) => {
    const el = track.current;
    const card = el.querySelector(".postcard-slot");
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 24 : 320), behavior: motionOff() ? "auto" : "smooth" });
  };

  // drag to scroll with a mouse
  React.useEffect(() => {
    const el = track.current;
    let down = null;
    const onDown = (e) => { if (e.pointerType !== "mouse") return; down = { x: e.clientX, left: el.scrollLeft }; dragged.current = false; };
    const onMove = (e) => {
      if (!down) return;
      const dx = e.clientX - down.x;
      if (Math.abs(dx) > 6) { dragged.current = true; el.classList.add("dragging"); }
      el.scrollLeft = down.left - dx;
    };
    const onUp = () => { down = null; el.classList.remove("dragging"); setTimeout(() => { dragged.current = false; }, 0); };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div className="carousel">
      <ul className="carousel-track" ref={track} aria-label="Projects">
        {PROJECTS.map((p, i) => <Postcard key={p.id} p={p} i={i} onOpen={onOpen} dragged={dragged} />)}
      </ul>
      <div className="carousel-controls">
        <button type="button" className="round-btn" onClick={() => go(-1)} disabled={edge.start} aria-label="Previous projects"><Icon name="arrowL" className="" /></button>
        <button type="button" className="round-btn" onClick={() => go(1)} disabled={edge.end} aria-label="Next projects"><Icon name="arrowR" className="" /></button>
      </div>
    </div>
  );
};

const Projects = ({ onOpenProject }) => {
  const [all, setAll] = React.useState(false);
  return (
    <section id="work" className="pane frosted">
      <Scenery flip />
      <div className="inner">
        <div className="work-head">
          <h2 className="h-section">Things I've made</h2>
          <p>A few postcards from projects I loved working on. Drag through them, or open one for the full story.</p>
        </div>
        <Carousel onOpen={onOpenProject} />
        <div className="see-all">
          <button type="button" className="btn btn-soft" onClick={() => setAll(v => !v)} aria-expanded={all} aria-controls="all-projects">
            {all ? "Show fewer" : `See all ${PROJECTS.length} projects`}
          </button>
        </div>
        {all && (
          <ul className="projects" id="all-projects">
            {PROJECTS.map(p => <ProjectRow key={p.id} p={p} onOpen={onOpenProject} />)}
          </ul>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { Projects, PROJECTS });
