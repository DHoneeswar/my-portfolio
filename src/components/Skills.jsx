import React from "react";
import "./Skills.css";
import RevealWrapper from "../components/RevealWrapper";


const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "Python", level: "85%" },
  ];

  return (
    <RevealWrapper>
      <section className="skills-section py-5" id="skills">
        <div className="container">
          <h2 className="section-title text-center mb-4">My Skills</h2>
          <div className="row">
            {skills.map((skill, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <h5>{skill.name}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.level }}
                    aria-valuenow={parseInt(skill.level)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
};

export default Skills;
