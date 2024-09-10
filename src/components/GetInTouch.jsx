import React from "react";

export const GetInTouch = () => {
  return (
    <section className="faq p-relative">
      <div className="container">
        <div className="flex flex-wrap">
          <div
            className="w-50 text-center"
            data-aos="fade-up"
          >
            <div className="flex gap-2">
              <hr className="faq-hr1" />
              <h5>Stay Connected</h5>
            </div>
            <h2 className="mt-1">Send Me a Message</h2>
            <p className="mt-1">
              Have questions or want to discuss a project? Drop me a message
              directly to my Gmail and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="w-50 mt-15 animate__animated animate__zoomIn animate__delay-1.5s animate__zoomIn-custom-duration">
            <div
              className="accordion flex flex-col gap-2"
              id="accordionExample"
              data-aos="fade-down"
            >
              <form
                id="footer-form"
                data-aos="zoom-in"
                data-aos-delay="400"
                action="mailto:yourname@gmail.com"
                method="POST"
              >
                <div id="footer-message"></div>

                {/* Input for name */}
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                />

                {/* Input for email */}
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />

                {/* Textarea for message */}
                <textarea
                  name="message"
                  required
                  placeholder="Enter your message"
                ></textarea>

                {/* Submit button */}
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
