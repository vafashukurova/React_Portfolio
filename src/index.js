import ReactDOM from "react-dom";
import Menyu from "./components/Menyu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";



import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



ReactDOM.render(

  <>
    <Router>
      <Menyu />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />

    </Router>

  </>
  , document.getElementById("root"));

