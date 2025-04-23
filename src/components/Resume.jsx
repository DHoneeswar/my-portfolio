import React from "react";
import "./Resume.css";
import RevealWrapper from "../components/RevealWrapper";

const Resume = () => {
  return (
    <RevealWrapper>
    <section className="resume-section py-5" id="resume">
      <div className="container">
        <h2 className="section-title text-center mb-4">Resume</h2>
        <p className="text-center mb-4">
          Click the button below to download my resume.
        </p>
        <div className="text-center">
          <a
            href="/resume.pdf"
            download
            className="btn btn-outline-primary btn-lg"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
    </RevealWrapper>
  );
};

export default Resume;
