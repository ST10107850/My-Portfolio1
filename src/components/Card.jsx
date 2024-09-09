import feature1 from "../assets/Images/icon/feature1.png";
import feature2 from "../assets/Images/icon/feature2.png";
import feature3 from "../assets/Images/icon/feature3.png";
import feature4 from "../assets/Images/icon/feature4.png";

export const Card = () => {
  return (
    <section className="feature">
      <div className="container">
        <div className="flex">
          <div
            className="header-card animate__animated animate__fadeInUp animate__delay-1.5s animate__zoomIn-custom-duration"
            data-aos="fade-up"
          >
            <div>
              <figure>
                <img src={feature1} className="feature-img1" alt="feature" />
              </figure>
              <h4>Customized Solutions</h4>
              <p>
                Crafting tailored solutions to meet unique project needs and
                deliver exceptional results.
              </p>
            </div>
          </div>
          <div
            className="header-card animate__animated animate__fadeInDown animate__delay-1.5s animate__zoomIn-custom-duration"
            data-aos="fade-down"
          >
            <div>
              <figure>
                <img src={feature2} alt="feature" />
              </figure>
              <h4>ROI-Driven Approach</h4>
              <p>
                Focusing on strategies that ensure a strong return on investment
                for your projects.
              </p>
            </div>
          </div>
          <div
            className="header-card animate__animated animate__fadeInUp animate__delay-1.5s animate__zoomIn-custom-duration"
            data-aos="fade-up"
          >
            <div>
              <figure>
                <img src={feature3} alt="feature" />
              </figure>
              <h4>Creative Solutions</h4>
              <p>
                Implementing innovative and creative strategies to solve complex
                problems effectively.
              </p>
            </div>
          </div>
          <div
            className="header-card animate__animated animate__fadeInDown animate__delay-1.5s animate__zoomIn-custom-duration"
            data-aos="fade-down"
          >
            <div>
              <figure>
                <img src={feature4} alt="feature" />
              </figure>
              <h4>Expert Team</h4>
              <p>
                Collaborating with a team of skilled professionals to achieve
                excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
