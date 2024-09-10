import Exp from "../assets/Images/home/experience.png";

export const Contact = () => {
  return (
    <section className="experience">
            <div className="container">
                <div className="flex-wrap exp-center" data-aos="fade-up">
                    <div className="w-66">
                        <div className="flex gap-1">
                            <hr className="experience-hr1 m-0"/>
                            <h5>Contact Me</h5>
                        </div>
                        <h2>Get in Touch</h2>
                        <p className="mt-1"> I would love to hear from you! Whether you have questions, feedback, 
                            or just want to connect, feel free to reach out. I'll do my best to respond promptly.
                        </p>
                    </div>
                    <div className="w-33 mt-30 flex flex-end">
                        <a href="tel:+27799453446" className="btn_hover1">Call Me Now</a>
                    </div>
                    <hr/>
                </div>
                <div className="flex flex-sb">
                    <div className="w-50 p-relative flex flex-center" data-aos="zoom-in">
                        <div className="experience_mask">
                            <figure><img src={Exp}alt="img"/></figure>
                        </div>
                        <div className="experience-hr flex gap-1">
                            <hr/>
                            <h6> Let's Connect </h6>
                        </div>
                    </div>
                    <div className="w-50 flex flex-col gap-2 mt-1">
                        <div className="flex gap-1 ex-card" data-aos="fade-up">
                            <div className="flex flex-center">
                            <h3>📧</h3>
                            </div>
                            <div>
                                <h4>Email Address</h4>
                                <p>samuelnhlakanipho08@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-1 ex-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="flex flex-center">
                            <h3>🌐</h3>
                            </div>
                            <div>
                                <h4>Socila Media</h4>
                                <p>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> WhatApp</a>
                </p>
                            </div>
                        </div>
                        <div className="flex gap-1 ex-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="flex flex-center">
                            <h3>📞</h3>
                            </div>
                            <div>
                                <h4>Phone Numbery</h4>
                                <p>(+2779) 945-3446</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
