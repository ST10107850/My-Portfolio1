import React, { useState } from "react";
import emailjs from "emailjs-com";

export const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tn6cwfs",
        "template_cl04zmc",
        {
          name: name,
          email: email,
          message: message,
        },
        "H2dK93q-QeEn6GhiQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="faq p-relative">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-50 text-center" data-aos="fade-up">
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
                onSubmit={sendEmail}
              >
                <div id="footer-message"></div>

                {/* Input for name */}
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                />

                {/* Input for email */}
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />

                {/* Textarea for message */}
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Enter your message"
                ></textarea>

                {/* Submit button */}
                <button type="submit">Send Message</button>

                {success && (
                  <p className="mt-2 text-white">
                    Your message has been sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
