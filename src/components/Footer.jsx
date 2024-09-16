import Logo from "../assets/Images/logo.png";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-menu">
          <div className="container">
            <div className="flex flex-start footer-center">
              <div className="w-33 flex flex-col gap-2 flex-start">
                <a href="index.html">
                  <img src={Logo} alt="footer-logo" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <span className="flex gap-2 social-icons">
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
              </div>
              <div className="w-16 mt-1">
                <h4>Quick Links</h4>
                <ul className="flex flex-col gap-2 flex-start">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="w-16 mt-45 flex-end">
                <ul className="flex flex-col gap-2 flex-start">
                  
                  <li>
                    <a href="#technologies"> Technologies I Use</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#work">How I Work</a>
                  </li>
                </ul>
              </div>
              <div className="w-33 mt-1 flex flex-col flex-start">
                <h4>Contact Info</h4>
                <ul className="flex flex-col gap-2 flex-start">
                  <li>
                    <i className="fa-solid fa-phone"></i> +27-79-945-3446
                  </li>
                  <li>
                    <i className="fa-regular fa-envelope"></i>{" "}
                    <a href="mailto:samuelnhlakanipho08@gmail.com">
                      samuelnhlakanipho08@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container flex flex-sb gap-2 flex-wrap">
            <h6>&copy; 2024 Nhlakanipho Nsundwane. All Rights Reserved.</h6>
            <h6>
              Powered by <b>Nhlakanipho Nsundwane</b>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};
