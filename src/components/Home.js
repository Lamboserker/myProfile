import React, { useEffect } from "react";
import Typed from "typed.js";
import myImage from "../assets/IMG_7060.JPG";
import "../components/CSS/Home.css";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Lukas Oliver Lamberz...",
        "As an ambitious Fullstack Web Developer in training. My primary focus is on JavaScript and Js Libraries, with a strong emphasis on React. Feel free to explore my work in this area.",
      ],
      typeSpeed: 150,
      loop: true,
      showCursor: true, // Cursor anzeigen, um den Terminal-Effekt zu erzeugen
      cursorChar: "|", // Benutzerdefinierter Cursor (optional)
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="animated-text-container">
              <h1 className="display-4 text-light">
                <mark className="highlighted-text">
                  <span className="typed-text mono-font"></span>
                  <span className="typed-cursor"></span>{" "}
                  {/* Element für den animierten Cursor */}
                </mark>
              </h1>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img
              src={myImage}
              className="card-img-top h-100 rounded transparent-image"
              alt="Bild von mir"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
