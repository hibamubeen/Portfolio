// OFF DUTY: life outside work, set as a short list

const CatIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true" className="bear-icon">
    <path d="M20 44 L18 12 L42 30 Z M80 44 L82 12 L58 30 Z" fill="#F2C48A" />
    <path d="M24 36 L23 20 L36 30 Z M76 36 L77 20 L64 30 Z" fill="#F5B8C4" />
    <ellipse cx="50" cy="58" rx="36" ry="32" fill="#F2C48A" />
    <path d="M40 30 L44 40 M50 28 L50 40 M60 30 L56 40" stroke="#D9A066" strokeWidth="4" strokeLinecap="round" />
    <circle cx="37" cy="56" r="4.5" fill="#1E3A52" /><circle cx="63" cy="56" r="4.5" fill="#1E3A52" />
    <path d="M46 66 L54 66 L50 71 Z" fill="#E9A0B2" />
    <path d="M50 71 Q44 77 40 73 M50 71 Q56 77 60 73" fill="none" stroke="#1E3A52" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M14 62 L30 64 M14 72 L30 70 M86 62 L70 64 M86 72 L70 70" stroke="#FFF6EC" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DessertIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true" className="bear-icon">
    <path d="M12 56 H88 C86 76 70 88 50 88 C30 88 14 76 12 56 Z" fill="#9FCBE3" />
    <path d="M18 64 C30 70 70 70 82 64" fill="none" stroke="#FFF6EC" strokeWidth="3" strokeLinecap="round" opacity=".8" />
    <path d="M20 56 C22 40 36 32 50 34 C62 32 76 40 80 56 Z" fill="#FFFBF6" />
    <path d="M30 46 C30 44 34 44 34 46 M44 40 C44 38 48 38 48 40 M58 44 C58 42 62 42 62 44" stroke="#E6DDD0" strokeWidth="2" fill="none" />
    <path d="M44 50 C52 30 74 26 84 34 C80 44 62 54 44 50 Z" fill="#F7B84E" />
    <path d="M50 48 C58 38 70 34 78 36" fill="none" stroke="#FCD27C" strokeWidth="3" strokeLinecap="round" />
    <circle cx="36" cy="52" r="2.5" fill="#1E3A52" /><circle cx="28" cy="50" r="2" fill="#1E3A52" />
  </svg>
);

const OFF = [
  { icon: <Icon name="camera" />, title: "Behind the camera", body: "I grew up making films and doing theatre. Storytelling still shows up in everything I build." },
  { icon: <Icon name="wave" />, title: "Out on the water", body: "I love kayaking and spending time at the beach. Fresh air and cool weather are my favorite thing ever." },
  { icon: <CatIcon />, title: "Animal lover", body: "I have two cats! I'm a huge animal enthusiast and lover." },
  { icon: <DessertIcon />, title: "Sweet tooth", body: "I loveee desserts and sweet treats. Really obsessed with mango sticky rice recently." },
];

const Extras = () => (
  <section id="offduty" className="pane frosted">
    <Scenery kind="birch" flip friend={<PenguinFamily />} friendSide="right" />
    <div className="inner">
      <h2 className="h-section">Off duty</h2>
      <ul className="offduty">
        {OFF.map(o => (
          <li key={o.title} className="plank">
            {o.icon}
            <div>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

window.Extras = Extras;
