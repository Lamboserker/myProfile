import Github from "../../../assets/github/github-mark-white.png";
// import FirstVersionImage from "../../../assets/IMG_7060.JPG";
// import PokemonImage from "../../../assets/pokemon.jpg";
// import ColaImage from "../../../assets/1.png";

export const projects = [
  {
    title: "First version of this website",
    description:
      "For my school project, I created my first website using Bootstrap and added my personal touch with custom styles. It ignited my passion for web development and marked the beginning of an exciting journey in this field.",
    link: null, // Kein GitHub-Link
    isBigTitle: true,
    image: "first-version-entry", // Bild wird durch CSS angesprochen
    cssClass: "first-version-entry",
  },
  {
    title: "Watch code",
    description: "Visit GitHub to see the code.",
    link: "https://github.com/Lamboserker/portfolio",
    isBigTitle: false,
    image: Github,
  },
  {
    title: "Pokemon Game",
    description:
      "For my school project, I developed a Pokemon battle game in JavaScript that can be played in the console. The intriguing aspect of this project is the existence of multiple development versions and even a graphical user interface, offering diverse perspectives for an engaging gaming experience.",
    link: null, // Kein GitHub-Link
    isBigTitle: true,
    image: "pokemon-entry", // Bild wird durch CSS angesprochen
    cssClass: "pokemon-entry",
  },
  {
    title: "Watch code",
    description: "Visit GitHub to see the code.",
    link: "https://github.com/Lamboserker/pb-project",
    isBigTitle: false,
    image: Github,
  },
  {
    title: "Cola Homepage",
    description:
      "My created website for our FiveM server offers a better way to access server information, contact us, and join our Discord community, while emphasizing that 'Cola tastes better.' It serves as an informative and engaging platform for our gaming community.",
    link: null, // Kein GitHub-Link
    isBigTitle: true,
    image: "cola-entry", // Bild wird durch CSS angesprochen
    cssClass: "cola-entry",
  },
  {
    title: "Watch code",
    description: "Visit GitHub to see the code.",
    link: "https://github.com/Lamboserker/COLA_HOMEPAGE",
    isBigTitle: false,
    image: Github,
  },
];
