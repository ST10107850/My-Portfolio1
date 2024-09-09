import { useState } from "react";
import gallery1 from "../assets/Images/home/all-gallary-1.png";
import gallery2 from "../assets/Images/home/all-gallary-2.png";
import gallery3 from "../assets/Images/home/all-gallary-3.png";
import gallery4 from "../assets/Images/home/all-gallary-4.png";
import gallery5 from "../assets/Images/home/all-gallary-5.png";
import gallery6 from "../assets/Images/home/all-gallary-6.png";
import gallery7 from "../assets/Images/home/all-gallary-7.png";
import gallery8 from "../assets/Images/home/all-gallary-8.png";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const openImg = (event, tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="portfolio">
      <div className="portfolio-1">
        <div className="container">
          <div className="portfo-center" data-aos="fade-up">
            <div className="w-50">
              <div className="flex gap-1">
                <hr className="gallary-hr1" />
                <h5>PORTFOLIO</h5>
              </div>
              <h2 className="mt-15">My Latest Projects.</h2>
              <p>
                Here are some of the recent web applications I've developed,
                focusing on clean code, responsive design, and seamless user
                experiences. Each project showcases my skills in front-end and
                back-end development, using technologies like React, Node.js,
                and Tailwind CSS.
              </p>
            </div>
            <div className="flex flex-end w-100">
              <a href="portfolio.html" className="btn_hover2">
                View All Projects
              </a>
            </div>
            <hr className="mt-30" />
          </div>
        </div>
      </div>

      <div className="gallary">
        <div className="ga-bg"></div>
        <span> </span>
        <div className="container" data-aos="fade-up">
          <div className="tab mb-15">
            <button
              className={`tablinks ${activeTab === "all" ? "active" : ""}`}
              onClick={(e) => openImg(e, "all")}
            >
              ALL
            </button>
            <button
              className={`tablinks ${activeTab === "design" ? "active" : ""}`}
              onClick={(e) => openImg(e, "design")}
            >
              DESIGN
            </button>
            <button
              className={`tablinks ${activeTab === "development" ? "active" : ""}`}
              onClick={(e) => openImg(e, "development")}
            >
              DEVELOPMENT
            </button>
          </div>

          {/* All Tab Content */}
          <div
            id="all"
            className={`tabcontent ${activeTab === "all" ? "block" : "hidden"} `}data-aos="fade-up"
          >
            <div className="flex flex-center">
              <div className="flex w-100">
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery1} alt="Project 1" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery2} alt="Project 2" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery3} alt="Project 3" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery4} alt="Project 4" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery5} alt="Development 1" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery6} alt="Development 2" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery7} alt="Development 2" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery8} alt="Development 2" />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Design Tab Content */}
          <div
            id="design"
            className={`tabcontent ${activeTab === "design" ? "block" : "hidden"}`}
          >
            <div className="flex flex-center">
              <div className="flex w-100">
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery1} alt="Design 1" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery2} alt="Design 2" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery8} alt="Design 2" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery5} alt="Design 2" />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Development Tab Content */}
          <div
            id="development"
            className={`tabcontent ${activeTab === "development" ? "block" : "hidden"}`}
          >
            <div className="flex flex-center">
              <div className="flex w-100">
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery3} alt="Development 1" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery4} alt="Development 2" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery6} alt="Development 2" />
                  </figure>
                </div>
                <div className="w-33">
                  <figure className="gallery-card">
                    <img src={gallery7} alt="Development 2" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
