import { BrowserRouter, Routes, Route } from "react-router-dom";

// Install the Styles
import "./sass/App.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import

// Import components
import Parent from "./components/Parent";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

//App Function

function App() {
  return (
    <div className="App">
      {/*The Router of my Page */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
