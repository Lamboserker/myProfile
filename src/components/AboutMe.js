import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "../components/CSS/AboutMe.css";
import IconTable from "./IconTable";

//Import the Icons
import JsIcon from "../assets/icons/JS.png";
import HTMLIcon from "../assets/icons/HTML5.png";
import NodeJsIcon from "../assets/icons/nodejs-logo.png";
import npmIcon from "../assets/icons/npm.png";
import ReactIcon from "../assets/icons/react.png";
import GITIcon from "../assets/icons/Git.png";
import BootstrapIcon from "../assets/icons/bootstrap.png";
import SassIcon from "../assets/icons/sass.png";
import CSS3Icon from "../assets/icons/CSS3.png";
import SQLIcon from "../assets/icons/SQL.png";
import PHPIcon from "../assets/icons/PHP.png";

//Export Function
const AboutMe = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "My Skills",
      icon: null,
      text: null,
      ref: useRef(null),
    },
    // Programming Languages
    {
      title: "JavaScript",
      icon: JsIcon,
      text: "JavaScript and I go together like peanut butter and jelly, always cooking up interactivity.",
      ref: useRef(null),
    },
    // Web Technologies
    {
      title: "HTML5",
      icon: HTMLIcon,
      text: "I can create websites that make HTML5 jealous of its own elegance.",
      ref: useRef(null),
    },
    {
      title: "CSS3",
      icon: CSS3Icon,
      text: "CSS3 and I have an unspoken understanding – it always styles, and I never break!",
      ref: useRef(null),
    },

    {
      title: "React",
      icon: ReactIcon,
      text: "React is the magic wand in my coder`s toolkit, turning complex UIs into works of art.",
      ref: useRef(null),
    },
    {
      title: "Bootstrap",
      icon: BootstrapIcon,
      text: "Bootstrap is my web development wingman, making responsive layouts a breeze.",
      ref: useRef(null),
    },
    {
      title: "Sass",
      icon: SassIcon,
      text: "When Sass is around, my CSS feels like it`s dressed in designer clothes.",
      ref: useRef(null),
    },
    // Backend Technologies
    {
      title: "NodeJS",
      icon: NodeJsIcon,
      text: "Node.js swoops into action like the Avengers, assembling a team of powerful packages to save your web applications from sluggishness and deliver superhero-level performance!",
      ref: useRef(null),
    },

    {
      title: "SQL",
      icon: SQLIcon,
      text: "SQL lets me dance with databases, and together, we tango through data like pros.",
      ref: useRef(null),
    },
    {
      title: "PHP",
      icon: PHPIcon,
      text: "PHP and I are like a dynamic duo, scripting server-side wonders.",
      ref: useRef(null),
    },
    //Package Manager Control
    {
      title: "npm",
      icon: npmIcon,
      text: "npm is my trusty genie, granting my wishes for packages with a simple command.",
      ref: useRef(null),
    },

    {
      title: "GIT",
      icon: GITIcon,
      text: "GIT is my version control BFF, ensuring my code history remains drama-free.",
      ref: useRef(null),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      let activeIndex = 0;
      for (let i = 1; i < sections.length; i++) {
        const sectionOffset = sections[i].ref.current.offsetTop;
        if (scrollPosition >= sectionOffset - viewportHeight * 0.2) {
          activeIndex = i;
        }
      }
      setActiveSection(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="about-me-container">
      <motion.div className="wrapper">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            ref={section.ref}
            className={`section-container ${
              activeSection === index ? "active" : ""
            }`}
          >
            <motion.div
              className="section-title"
              initial={{ opacity: 0, y: "-100%" }}
              animate={
                activeSection === index ? { opacity: 1, y: 0 } : { opacity: 0 }
              }
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <h2>{section.title}</h2>
            </motion.div>

            <div className="section-content">
              {section.icon && (
                <motion.img
                  src={section.icon}
                  alt={`${section.title} Icon`}
                  className="section-icon"
                  initial={{ opacity: 0, scale: 0.5, x: "-100%" }}
                  animate={
                    activeSection === index
                      ? { opacity: 1, scale: 1, x: 0 }
                      : { opacity: 0 }
                  }
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
              )}
              {section.text && (
                <motion.p
                  className="section-text"
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={
                    activeSection === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0 }
                  }
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                  {section.text}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <IconTable sections={sections} />
    </div>
  );
};

export default AboutMe;