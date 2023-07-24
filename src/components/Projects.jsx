import "./CSS/Projects.scss";

const cards = [
  {
    title: "FiveM server-homepage",
    copy: "I developed a FiveM server-homepage, where you can find all the vital information about the server.",
    button: "View code",
    URL: "https://github.com/Lamboserker/COLA_HOMEPAGE",
  },
  {
    title: "Pokemon game",
    copy: "As a school project, I built a Pokemon game, offering a console-based Pokemon battle experience.",
    button: "View code",
    URL: "https://github.com/Lamboserker/pb-project",
  },
  {
    title: "First version of this website",
    copy: "Explore the first version of this website, a dreamy desert you´ve always yearned to see.",
    button: "View code",
    URL: "https://github.com/Lamboserker/portfolio",
  },
];

const handleButtonClick = (url) => {
  window.open(url, "_blank"); // Öffnet den Link in einem neuen Tab
};

const CardComponent = () => {
  return (
    <main className="page-content">
      {cards.map((card, index) => (
        <div className={`card ${index === 0 ? "first-card" : ""}`} key={index}>
          <div className="content">
            <h2 className="title">{card.title}</h2>
            <p className="copy">{card.copy}</p>
            <button
              className={`btn ${index === 0 ? "first-btn" : ""}`}
              onClick={() => handleButtonClick(card.URL)}
            >
              View code
            </button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default CardComponent;
