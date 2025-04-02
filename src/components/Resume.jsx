import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Resume = () => {
  return (
    <div className="container text-center py-5">
      <h1>Resume</h1>
      <p>Download my resume <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>.</p>
    </div>
  );
};

export default Resume;
