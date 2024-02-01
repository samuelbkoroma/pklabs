import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import TeamPage from "./Pages/TeamPage";
import Techbiz from "./Pages/Projects/Techbiz";
import Dele from "./Pages/Projects/Dele";
import Lan4vote from "./Pages/Projects/Lan4vote";
import Allac from "./Pages/Projects/Allac";

const Routess = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/techbiz" element={<Techbiz />} />
            <Route path="/dele" element={<Dele />} />
            <Route path="lan4vote" element={<Lan4vote />} />
            <Route path="/allac" element={<Allac />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Routess;
