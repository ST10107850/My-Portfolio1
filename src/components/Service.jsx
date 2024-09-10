import slider1 from "../assets/Images/icon/slider1.png";
import slider2 from "../assets/Images/icon/slider2.png";
import slider3 from "../assets/Images/icon/slider3.png";

export const Service = () => {
  return (
    <section className="service">
            <div className="service-1">
                <div className="container">
                    <div className="service-data" data-aos="fade-down">
                        <div className="w-66">
                            <div className="flex gap-1">
                                <hr className="service-hr1"/>
                                <h5>WHAT I OFFER</h5>
                            </div>
                            <h2 className="mt-15">My Services</h2>
                            <p className="mt-15">
                                As a software developer, I provide tailored solutions to bring your ideas to life. My focus is on creating clean, efficient, and scalable code that ensures high performance and user satisfaction.
                            </p>
                        </div>
                        <div className="w-33 mt-15 flex flex-end">
                            <a href="services.html" className="btn_hover2">Explore All Services</a>
                        </div>
                        <hr className="mt-15 mb-15"/>
                    </div>
                    <div className="flex gap-1 mt-15 s-card">
                        <div className="service-card" data-aos="fade-down">
                            <figure><img src={slider1} alt="frontend"/></figure>
                            <h3>Frontend Development</h3>
                            <p>
                                I build responsive and dynamic user interfaces using modern technologies like React, JavaScript, and Tailwind CSS.
                            </p>
                            <a href="services.html">Read more <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="service-card" data-aos="fade-up">
                            <figure><img src={slider2} alt="backend"/></figure>
                            <h3>Backend Development</h3>
                            <p>
                                I create scalable server-side applications using Node.js, Express, and REST APIs to handle business logic and data management.
                            </p>
                            <a href="services.html">Read more <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="service-card" data-aos="fade-down">
                            <figure><img src={slider3} alt="api"/></figure>
                            <h3>API Integration</h3>
                            <p>
                                I specialize in integrating third-party services and APIs, ensuring seamless communication between systems.
                            </p>
                            <a href="services.html">Read more <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
