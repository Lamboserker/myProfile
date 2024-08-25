import { BrowserRouter, Routes, Route } from "react-router-dom";

// Install the Styles
import "./sass/App.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import
import "./components/CSS/Background.css";
import "./components/CSS/Footer.css";

// Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/Tech-Stack/AboutMe";
import Contact from "./components/Contact";
import PageNotFound from "./components/404/PageNotFound";
import SVGWithFooter from "./components/Footer/SVGWithFoter";
import Projects from "./components/Projects/Projects";

//App Function
function App() {
  return (
    <div className="App">
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <SVGWithFooter />
    </div>
  );
}

export default App;
