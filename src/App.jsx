import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "./css/easy.css";
import "./css/slick.min.css";
import "./css/style.css";
import "./css/responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { Logoipsum } from "./components/Logoipsum";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Service } from "./components/Service";
import { Work } from "./components/Work";
import { GetInTouch } from "./components/GetInTouch";
import { Footer } from "./components/Footer";
import TestButton from "./components/TestButton";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="site-wrapper">
      <div className="header-index">
        <NavBar />
        <Hero />
        <Card />
        <Logoipsum />
        <About />
        <Portfolio />
        <Service />
        <Work />
        <GetInTouch />
        <Footer />

        
      </div>
      <TestButton/>
    </div>
  );
}

export default App;
