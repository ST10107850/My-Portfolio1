export const Work = () => {
  return (
    <section className="work">
      <div className="container position-relative">
        <div
          className="work-para text-center"
          data-aos="fade-up"
        >
          <h5>HOW I WORK</h5>
          <h2 className="h2_margin">
            My Process for Delivering Successful Projects
          </h2>
          <p>
            My development process is structured to ensure clarity, efficiency,
            and the best possible outcome. I prioritize clear communication and
            a seamless workflow to bring your ideas to life.
          </p>
        </div>
        <div className="work-hr flex gap-1">
          <hr />
          <h6>Steps to Success</h6>
        </div>
        <div className="work-line flex flex-center gap-1 flex-wrap p-relative">
          <div data-aos="zoom-in">
            <h2>01.</h2>
            <h4>Initial Consultation</h4>
          </div>
          <div data-aos="zoom-in">
            <h2>02.</h2>
            <h4>Project Planning</h4>
          </div>
          <div data-aos="zoom-in">
            <h2>03.</h2>
            <h4>Design & Development</h4>
          </div>
          <div data-aos="zoom-in">
            <h2>04.</h2>
            <h4>Testing & Deployment</h4>
          </div>
        </div>
        <div
          className="flex flex-center"
          data-aos="zoom-in"
        >
          <a href="contact.html" className="btn_hover2">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
