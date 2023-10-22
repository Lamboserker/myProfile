import "./CSS/Projects.css";
import Github from "../assets/github/github-mark-white.png";

// Write code here
function Projects() {
  return (
    <div className="timeline-container">
      <div className="entries">
        <div className="entry first-version-entry">
          <div className="title big">First version of this website</div>
          <div className="body">
            <p>
              For my school project, I created my first website using Bootstrap
              and added my personal touch with custom styles. It ignited my
              passion for web development and marked the beginning of an
              exciting journey in this field.
            </p>
          </div>
        </div>
        <div className="entry github-entry">
          <div className="title">Watch code</div>
          <div className="body">
            <p>
              Visit GitHub to see the code.
              <button className="btn">
                <a
                  href="https://github.com/Lamboserker/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={Github} alt="Github Icon" />
                  <span className="text">visit github</span>
                </a>
              </button>
            </p>
          </div>
        </div>
        <div className="entry pokemon-entry">
          <div className="title big">Pokemon Game</div>
          <div className="body">
            <p>
              For my school project, I developed a Pokemon battle game in
              JavaScript that can be played in the console. The intriguing
              aspect of this project is the existence of multiple development
              versions and even a graphical user interface, offering diverse
              perspectives for an engaging gaming experience.
            </p>
          </div>
        </div>
        <div className="entry github-entry">
          <div className="title">Watch code</div>
          <div className="body">
          <p>
              Visit GitHub to see the code.
              <button className="btn">
                <a
                  href="https://github.com/Lamboserker/pb-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={Github} alt="Github Icon" />
                  <span className="text">visit github</span>
                </a>
              </button>
            </p>
          </div>
        </div>
        <div className="entry cola-entry">
          <div className="title big">Cola Homepage</div>
          <div className="body">
            <p>
              My created website for our FiveM server offers a better way to
              access server information, contact us, and join our Discord
              community, while emphasizing that "Cola tastes better." It serves
              as an informative and engaging platform for our gaming community.
            </p>
          </div>
        </div>
        <div className="entry github-entry">
          <div className="title">Watch code</div>
          <div className="body">
          <p>
              Visit GitHub to see the code.
              <button className="btn">
                <a
                  href="https://github.com/Lamboserker/COLA_HOMEPAGE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={Github} alt="Github Icon" />
                  <span className="text">visit github</span>
                </a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
