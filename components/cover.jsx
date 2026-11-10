// HERO: the valley at golden hour. Your name on the left, the cabin glowing on the right.

const Cover = ({ onExplore }) => (
  <header id="home" className="hero">
    <div className="hero-copy">
      <h1 className="name"><span className="name-hi">hi, I'm</span>Hiba Mubeen</h1>
      <p className="lede">
        Studying CS at UT Dallas and making things that are useful, pretty,
        and delightful. I love bringing product, design, and code together to build cool things.
      </p>
      <div className="hero-actions">
        <button type="button" className="sign-btn" onClick={onExplore}>
          <span className="sign-text">Explore my world</span>
          <span className="sign-sub">pick a plushie and walk around</span>
        </button>
        <a className="tag-btn" href="#about">or just scroll the page</a>
      </div>
    </div>
    <div className="friend friend-hero"><FoxActor /></div>
    <div className="hero-haze" aria-hidden="true" />
  </header>
);

window.Cover = Cover;
