import React from "react";
import unnamed from "../assets/Images/slider/unnamed.jpg";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-data flex-sb">
          <div className="w-50" data-aos="fade-up">
            <div className="flex about-title">
              <hr />
              <h5>ABOUT ME</h5>
            </div>
            <h2>Empowering Your Ideas with Innovative Software Solutions</h2>
            <p>
              I am a passionate software developer specializing in creating
              dynamic, user-friendly web applications. With a strong foundation
              in JavaScript, React, and backend development, I bring innovative
              solutions to life, focusing on performance, scalability, and
              seamless user experience. My goal is to transform complex problems
              into efficient, clean code that meets business goals and user
              needs.
            </p>
            <div className="flex gap-1 mt-15">
              <i className="fa-solid fa-check"></i>
              <h5>
                Experienced in JavaScript, React, Node.js, and Tailwind CSS.
              </h5>
            </div>
            <div className="flex gap-1 mt-15">
              <i className="fa-solid fa-check"></i>
              <h5>
                Skilled in building responsive, mobile-first applications.
              </h5>
            </div>
            <div className="flex gap-2 mt-30">
              <a href="projects.html" className="btn_hover1">
                View My Work
              </a>
              <a href="contact.html" className="btn_hover2">
                Get in Touch
              </a>
            </div>
          </div>
          <div
            className="about-imgs flex flex-center w-50"
            data-aos="fade-down"
          >
            <div>
              <figure>
                <img src={unnamed} alt="Developer Image" />
              </figure>
            </div>
            <div className="ab-count flex flex-center">
              <div className="flex flex-center">
                <h2>6 </h2>
                <h2>+</h2>
              </div>
              <p>months of coding experience</p>
            </div>
            <div className="about-hr flex gap-1">
              <hr />
              <h6>My Journey</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
