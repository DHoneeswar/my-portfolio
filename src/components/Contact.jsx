import React, { useState } from "react";
import "./Contact.css";
import RevealWrapper from "../components/RevealWrapper";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Try again later.");
    }
  };
  return (
    <RevealWrapper>
      <section className="contact-section py-5" id="contact">
        <div className="container">
          <h2 className="section-title text-center mb-4">Contact Me</h2>
          <p className="text-center mb-5">
            Feel free to reach out via the form below or directly through my email/socials!
          </p>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>

              <div className="contact-links mt-5 text-center">
                <p>OR connect with me directly:</p>
                <a href="mailto:youremail@example.com" className="me-3 text-decoration-none text-primary">
                  📧 Email
                </a>
                <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="me-3 text-decoration-none text-primary">
                  🔗 LinkedIn
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
};

export default Contact;
 