import  { useState } from "react";
import Logo from "../assets/Images/logo.png";
import "../css/NavBar.css";

export const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [isMoreOpen, setMoreOpen] = useState(false); // Add state for "More" dropdown

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleSearchBar = () => setSearchBarOpen(!isSearchBarOpen);
  const toggleRightSidebar = () => setRightSidebarOpen(!isRightSidebarOpen);
  const toggleMore = () => setMoreOpen(!isMoreOpen); // Toggle function for "More"

  return (
    <header>
      <nav className="container navbar">
        <div className="container-nav flex">
          <a className="navbar-logo" href="/">
            <img src={Logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            onClick={toggleSidebar}
            type="button"
          >
            <span className="fa-solid fa-bars"></span>
          </button>
          <ul className="navbar-nav flex">
            <li>
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#technologies">
                    Technologies I Use
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#work">
                    How I Work
                  </a>
                </li>
                <li>
                    <a className="nav-link" href="#connect">
                    Get In Touch
                    </a>
                  </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex nav-right">
          <p>
            Contact Me: <span>+2779 945 3446</span>
          </p>
          <i
            onClick={toggleSearchBar}
            className="fa-solid fa-magnifying-glass"
          ></i>
          <i onClick={toggleRightSidebar} className="fa-solid fa-bars"></i>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`sidepanel ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar flex">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <button className="closebtn" onClick={toggleSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div>
          <ul>
            <li>
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="pages">
              <a href="#">More</a>
            </li>
            <li className="collapse_btn">
              <a className="nav-link plus_collapse" onClick={toggleMore}>
                <i
                  className={`fa-solid fa-plus ${isMoreOpen ? "rotated" : ""}`}
                ></i>
              </a>
              <div className={`collapse ${isMoreOpen ? "show" : ""}`}>
                <ul>
                  <li>
                    <a className="nav-link" href="#technologies">
                      Technologies I Use
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#service">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#work">
                      How I Work
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#connect">
                    Get In Touch
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      

      {/* Right Sidebar */}
      <section
        className={`header-right-sidebar ${isRightSidebarOpen ? "open" : ""}`}
      >
        <div className="flex flex-sb">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <button className="close_right_sidebar" onClick={toggleRightSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <p>
          I am a passionate software developer specializing in creating dynamic,
          user-friendly web applications. With a strong foundation in
          JavaScript, React, and backend development,......
        </p>
        <a href="#about" className="btn_hover1">
          Discover More
        </a>
        <hr />
        <h4>Connected details:</h4>
        <ul className="flex">
          <li>
            <a href="#">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="tel:+27799453446" className="text-lowercase">
              +2779-945-3446
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samuelnhlakanipho08@gmail.com">
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samuelnhlakanipho08@gmail.com"
              target="_blank"
            >
              samuelnhlakanipho08@gmail.com
            </a>
          </li>
        </ul>
        <span className="flex">
          <a href="https://www.facebook.com/nhlakanipho.jiyan">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://wa.link/ko1syj">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://github.com/ST10107850">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nhlakanipho-nsundwane-9bb368249/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </span>
      </section>
    </header>
  );
};
