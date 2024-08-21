import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import "../components/CSS/Home.css";

const Home = () => {
  const [isOverlapping, setIsOverlapping] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Lukas Oliver Lamberz...",
        "As an ambitious Fullstack Web Developer from Gummersbach, Germany.",
        "My primary focus is on JavaScript and Js Libraries, with a strong emphasis on React.",
        "Feel free to explore my work in this area.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(".typed-text", options);

    const checkOverlap = () => {
      const textElement = document.querySelector(".typed-text");
      const imgElement = document.querySelector(".img");

      if (textElement && imgElement) {
        const textRect = textElement.getBoundingClientRect();
        const imgRect = imgElement.getBoundingClientRect();

        // Check if there is any overlap
        const overlap = !(
          textRect.right < imgRect.left ||
          textRect.left > imgRect.right ||
          textRect.bottom < imgRect.top ||
          textRect.top > imgRect.bottom
        );

        setIsOverlapping(overlap);
      }
    };

    checkOverlap();
    window.addEventListener("resize", checkOverlap);
    window.addEventListener("scroll", checkOverlap);

    return () => {
      typed.destroy();
      window.removeEventListener("resize", checkOverlap);
      window.removeEventListener("scroll", checkOverlap);
    };
  }, []);

  return (
    <main>
      <div className="container text-center" style={{ marginTop: "100px" }}>
        <div className="animated-text-container">
          <h1 className="display-4 text-light">
            <mark
              className={`highlighted-text ${
                isOverlapping ? "text-black" : "text-white"
              }`}
            >
              <span className="typed-text mono-font"></span>
              <span className="typed-cursor"></span>
            </mark>
          </h1>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
