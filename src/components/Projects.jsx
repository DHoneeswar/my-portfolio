import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Short description of project 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Short description of project 2.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
