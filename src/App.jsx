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
import { Contact } from "./components/Contact";

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
        <section id="technologies">
          <Logoipsum />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="service">
          <Service />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="connect">
          <GetInTouch />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
      <TestButton />
    </div>
  );
}

export default App;
