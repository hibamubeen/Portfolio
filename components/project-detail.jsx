// PROJECT DETAIL: the story of one project, on its own frosted pane

const ProjectDetail = ({ project, onClose }) => {
  const closeRef = React.useRef(null);

  React.useEffect(() => {
    const prev = document.activeElement;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev && prev.focus && prev.focus();
    };
  }, [onClose]);

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

          <div className="gallery" aria-label="Screenshots coming soon">
            <div>screenshot coming soon</div><div>screenshot coming soon</div><div>screenshot coming soon</div>
          </div>

          <div style={{ marginTop: 44, textAlign: "center" }}>
            <button type="button" className="btn btn-warm" onClick={onClose}>Back to the window</button>
          </div>
        </div>
      </article>
    </div>
  );
};

window.ProjectDetail = ProjectDetail;
