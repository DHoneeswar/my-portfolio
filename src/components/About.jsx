import React from "react";
import { motion } from "framer-motion";
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section py-5 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4">About Me</h2>
        <p className="lead">
          I’m a passionate developer focused on crafting clean & user-friendly experiences.
          Always learning, always growing 🌱.
          
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vitae necessitatibus minus corrupti dolores aut sit maiores eos aliquam pariatur libero totam similique, porro qui rem, voluptates officia accusantium, magnam fuga vel. Saepe, harum! Et, quae beatae nam, unde perspiciatis amet modi incidunt debitis ea eos quidem dolor voluptatum accusantium.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
