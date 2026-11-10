// CONTACT: dusk outside, the lamp on inside, a polar bear on the sill

const Contact = () => (
  <>
    <section id="contact" className="pane frosted contact-pane">
      <Scenery friend={<><Lantern /><PlushPolarBear /></>} friendSide="right" />
      <div className="inner">
        <h2 className="h-section">Come say hi</h2>
        <p className="lede">
          An opportunity, a project, a movie rec, anything. My inbox is open, and I reply, promise.
        </p>
        <div className="links">
          <a className="btn btn-warm" href="mailto:hiba.mubeen7@gmail.com">hiba.mubeen7@gmail.com</a>
          <a className="plain" href="https://www.linkedin.com/in/hiba-mubeen" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="plain" href="https://github.com/hibamubeen" target="_blank" rel="noreferrer">GitHub</a>
          <a className="plain" href="https://devpost.com/hibamubeen" target="_blank" rel="noreferrer">Devpost</a>
        </div>
        <footer className="footer">
          <span>© 2026 Hiba Mubeen</span>
          <span>made with love, hope you enjoyed</span>
        </footer>
      </div>
    </section>
  </>
);

window.Contact = Contact;
