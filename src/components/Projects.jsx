import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectList = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio made using React, showcasing my skills and projects.",
    link: "https://github.com/DHoneeswar/my-portfolio",
  },
  {
    title: "Student Attendance System",
    description: "A web app for tracking student attendance, with faculty and student login features.",
    link: "https://github.com/yourusername/attendance-app",
  },
  {
    title: "AI Crop Advisor",
    description: "An AI-based recommendation system for crops based on region and season.",
    link: "https://github.com/yourusername/crop-ai",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="row">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="card project-card shadow">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
