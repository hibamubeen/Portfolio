// PROJECT DETAIL: the story of one project, on its own frosted pane

// A big view of one screenshot, with arrows to step through the rest
const Lightbox = ({ shots, index, setIndex }) => {
  const s = shots[index];
  const go = (d) => setIndex((index + d + shots.length) % shots.length);
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={s.caption} onClick={(e) => { if (e.target === e.currentTarget) setIndex(null); }}>
      <figure>
        <img src={s.src} alt={s.caption} />
        <figcaption>{s.caption} <span className="muted">{index + 1} of {shots.length}</span></figcaption>
      </figure>
      {shots.length > 1 && <button type="button" className="round-btn lb-prev" onClick={() => go(-1)} aria-label="Previous screenshot"><Icon name="arrowL" className="" /></button>}
      {shots.length > 1 && <button type="button" className="round-btn lb-next" onClick={() => go(1)} aria-label="Next screenshot"><Icon name="arrowR" className="" /></button>}
      <button type="button" className="sheet-close lb-close" onClick={() => setIndex(null)} aria-label="Close screenshot"><Icon name="close" className="" /></button>
    </div>
  );
};

const ProjectDetail = ({ project, onClose }) => {
  const closeRef = React.useRef(null);
  const [zoom, setZoom] = React.useState(null);
  const zoomRef = React.useRef(null); zoomRef.current = zoom;

  React.useEffect(() => {
    const prev = document.activeElement;
    const onKey = (e) => {
      const n = (project && project.gallery || []).length;
      if (zoomRef.current !== null) {
        if (e.key === "Escape") setZoom(null);
        if (e.key === "ArrowRight") setZoom((zoomRef.current + 1) % n);
        if (e.key === "ArrowLeft") setZoom((zoomRef.current - 1 + n) % n);
        return;
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev && prev.focus && prev.focus();
    };
  }, [onClose, project]);

  if (!project) return null;
  const p = project;

  return (
    <div className="overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <article className="sheet postcard-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
        <span className="tape tape-l" aria-hidden="true" /><span className="tape tape-r" aria-hidden="true" />
        {(() => {
          const i = Math.max(0, PROJECTS.indexOf(p));
          const [a, b] = POSTCARD_TINTS[i % POSTCARD_TINTS.length];
          return (
            <div className="sheet-art" style={{ background: `linear-gradient(160deg, ${a}, ${b})` }} aria-hidden="true">
              <svg className="postcard-hills" viewBox="0 0 300 120" preserveAspectRatio="none">
                <path d="M0 70 C60 40 120 60 170 50 C220 40 260 55 300 45 V120 H0 Z" fill="#FFFFFF" opacity=".45" />
                <path d="M0 92 C70 74 140 96 210 84 C250 78 280 82 300 80 V120 H0 Z" fill="#FFFFFF" opacity=".95" />
              </svg>
              <Icon name={p.icon} className="sheet-icon" />
              <span className="stamp stamp-lg"><span>{p.year}</span></span>
              <span className="postmark postmark-lg">greetings from {p.id === "bluebeam" ? "Bluebeam" : p.title.replace(/-$/, "")}</span>
            </div>
          );
        })()}
        <button ref={closeRef} type="button" className="sheet-close" onClick={onClose} aria-label="Close project">
          <Icon name="close" className="" />
        </button>

        <div className="inner">
          <p className="sheet-kind">{p.kind}, {p.year}</p>
          <h2 id="sheet-title">{p.title}</h2>
          <p className="lede" style={{ margin: 0 }}>{p.blurb}</p>

          <dl className="meta-row">
            <div><dt>Role</dt><dd>{p.role}</dd></div>
            <div><dt>Timeline</dt><dd>{p.timeline}</dd></div>
            <div><dt>Team</dt><dd>{p.team}</dd></div>
          </dl>

          {p.links && p.links.length > 0 && (
            <div className="project-links">
              {p.links.map(l => <a key={l.href} className="btn btn-soft" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
            </div>
          )}

          {p.gallery && p.gallery.length > 0 && (
            <div className="shots-wrap">
              <h3 className="shots-title">A peek inside</h3>
              <ul className={`shots ${p.shape || "phone"}`} aria-label={`Screenshots of ${p.title}`}>
                {p.gallery.map((g, i) => (
                  <li key={g.src}>
                    <button type="button" className="shot" onClick={() => setZoom(i)} aria-label={`Open screenshot: ${g.caption}`}>
                      <img src={g.src} alt={g.caption} loading="lazy" />
                    </button>
                    <span className="shot-cap">{g.caption}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="story">
            <h3>The problem</h3>
            <p>{p.brief}</p>
            <h3>What I did</h3>
            <p>{p.process}</p>
            {p.steps.length > 0 && (
              <ul className="steps">{p.steps.map(s => <li key={s}>{s}</li>)}</ul>
            )}
            {p.quote && <blockquote className="quote">"{p.quote}"</blockquote>}
            <h3>Where it landed</h3>
            <p>{p.outcome}</p>
            {p.tools.length > 0 && (
              <>
                <h3>Tools</h3>
                <div className="tool-row">{p.tools.map(t => <span key={t} className="chip">{t}</span>)}</div>
              </>
            )}
          </div>

          <div style={{ marginTop: 44, textAlign: "center" }}>
            <button type="button" className="btn btn-warm" onClick={onClose}>Back to the projects</button>
          </div>
        </div>
      </article>
      {zoom !== null && p.gallery && ReactDOM.createPortal(<Lightbox shots={p.gallery} index={zoom} setIndex={setZoom} />, document.body)}
    </div>
  );
};

window.ProjectDetail = ProjectDetail;
