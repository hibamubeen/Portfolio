// ABOUT: the product / design / code circles, then the story

const VENN = {
  product: { label: "Product", note: "Talking to people, figuring out what they actually need, and owning the plan to get there." },
  design: { label: "Design", note: "Flows, systems, and the small details that make something feel good to use." },
  code: { label: "Code", note: "React, React Native, and getting it all the way to production." },
};

const Venn = () => {
  const [active, setActive] = React.useState(null);
  return (
    <div className="venn-wrap">
      <div className="venn" onMouseLeave={() => setActive(null)}>
        {Object.entries(VENN).map(([k, v]) => (
          <button
            key={k}
            type="button"
            className={`venn-bubble v-${k}${active === k ? " on" : ""}`}
            onMouseEnter={() => setActive(k)}
            onFocus={() => setActive(k)}
            onClick={() => setActive(active === k ? null : k)}
            aria-pressed={active === k}
          >
            <span>{v.label}</span>
          </button>
        ))}
        <span className="venn-me" aria-hidden="true">me</span>
      </div>
      <p className="venn-note" aria-live="polite">
        {active ? VENN[active].note : "Hover or tap a circle to see what each one means to me."}
      </p>
    </div>
  );
};

const About = () => (
  <section id="about" className="pane frosted">
    <Scenery kind="birch" />
    <div className="inner">
      <div className="about-head">
        <h2 className="h-section">I sit somewhere between product, design, and code.</h2>
        <Venn />
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
