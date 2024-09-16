import "../css/style.css";


export const Hero = () => {
  return (
    <section className="hero">
      <div className="container animate__animated animate__zoomIn animate__delay-1.5s animate__zoomIn-custom-duration">
        <div>
          <div className="hero-social-icon flex">
            <a href="https://www.facebook.com/nhlakanipho.jiyan"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://wa.link/ko1syj"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/nhlakanipho-nsundwane-9bb368249/"><i className="fa-brands fa-linkedin"></i></a>
            <hr className="d-md-block d-sm-none d-none"/>
          </div>
          <div className="center-data">
            <h1>Hello, I'm Nhlakanipho Samuel Nsundwane</h1>
            <h3>Crafting Innovative Solutions in Software Development</h3>
            <div className="center-btn flex">
              <a href="#contact" className="btn_hover1">Hire Me</a>
              <a href="#portfolio" className="btn_hover2">My Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
