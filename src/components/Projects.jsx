import React, { useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import "./CSS/Projects.css";

//import images
import VerIcon from "../assets/IMG_7060.jpg";
import ColaIcon from "../assets/1.png";
import PokemonIcon from "../assets/pokemon.jpg";
const Project = () => {
  useEffect(() => {
    const cardsContainer = document.querySelector('.cards');
    const cards = document.querySelectorAll('.card');
    cardsContainer.style.setProperty('--cards-count', cards.length);
    cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);
    Array.from(cards).forEach((card, index) => {
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;
      if (index === cards.length - 1) {
        return;
      }
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector('.card__inner');
      cardInner.style.transition = 'transform 0.3s, filter 0.3s';

      const handleScroll = () => {
        const { top, height } = nextCard.getBoundingClientRect();
        const percentageY = Math.max(0, Math.min(1, (window.innerHeight - top) / height));
        cardInner.style.transform = `scale(${1 - percentageY * 0.1})`;
        cardInner.style.filter = `brightness(${1 - percentageY * 0.4})`;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  }, []);
  return (
    <ParallaxProvider>
      <div className="z">
        <div>
        <div className="space space--small"></div>
        <div className="cards">
          <Parallax y={[-20, 20]}>
            <div className="card" data-index="0">
              <div className="card__inner">
                <div className="card__image-container">
                  <img className="card__image" src={VerIcon} alt="" />
                </div>
                <div className="card__content">
                  <h1 className="card__title">First version of this website</h1>
                  <p className="card__description">
                    For my school project, I created my first website using
                    Bootstrap and added my personal touch with custom styles. It
                    ignited my passion for web development and marked the
                    beginning of an exciting journey in this field.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
          <div className="space space--small"></div>
          <Parallax y={[-20, 20]}>
            <div className="card" data-index="0">
              <div className="card__inner">
                <div className="card__image-container">
                  <img className="card__image" src={ColaIcon} alt="" />
                </div>
                <div className="card__content">
                  <h1 className="card__title">Cola homepage</h1>
                  <p className="card__description">
                    My created website for our FiveM server offers a better way
                    to access server information, contact us, and join our
                    Discord community, while emphasizing that "Cola tastes
                    better." It serves as an informative and engaging platform
                    for our gaming community.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
          <div className="space space--small"></div>
          <Parallax y={[-20, 20]}>
            <div className="card" data-index="0">
              <div className="card__inner">
                <div className="card__image-container">
                  <img className="card__image" src={PokemonIcon} alt="" />
                </div>
                <div className="card__content">
                  <h1 className="card__title">Js-Pokemon game</h1>
                  <p className="card__description">
                    For my school project, I developed a Pokemon battle game in
                    JavaScript that can be played in the console. The intriguing
                    aspect of this project is the existence of multiple
                    development versions and even a graphical user interface,
                    offering diverse perspectives for an engaging gaming
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="space"></div>
      </div>
      </div>
    </ParallaxProvider>
  );
};

export default Project;
