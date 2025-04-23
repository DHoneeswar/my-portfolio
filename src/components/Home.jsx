import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';


const Home = () => {
  return (
    <section className="hero text-center py-5 bg-light">
      <div className="container">
        <h1 className="display-4">Hi, I'm John Doe</h1>
        <h3 className="mt-3 text-secondary">
          I'm a{' '}
          <span className="text-primary">
            <Typewriter
              words={['Web Developer', 'UI/UX Designer', 'Tech Enthusiast', 'React Wizard']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <a href="contact" className="btn btn-primary mt-4">Hire Me</a>
      </div>
    </section>
  );
};


export default Home;
