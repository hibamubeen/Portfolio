// OFF DUTY: life outside work, set as a short list

const OFF = [
  { icon: <Icon name="camera" />, title: "Behind the camera", body: "I grew up making films and doing theatre. Storytelling still shows up in everything I build." },
  { icon: <Icon name="shell" />, title: "Outdoors person", body: "Give me open water, a big sky, or a snowy morning. It's where I do my best thinking." },
  { icon: <PlushBearIcon />, title: "Plushie lover", body: "I have a soft spot (literally) for stuffed animals. A few of them are hiding in the snow on this page, go say hi." },
  { icon: <Icon name="leaf" />, title: "Making things", body: "Cooking, content, and little creative side projects. Anything that ends with something to share." },
];

const Extras = () => (
  <section id="offduty" className="pane frosted">
    <Scenery kind="birch" flip />
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
