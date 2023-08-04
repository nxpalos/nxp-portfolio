//
// Portfolio Component
//


//Libraries
import React from 'react';

//Components
import Projects from './Projects';

//Styles
import "./projects.css";


const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <Projects />
    </section>
  );
}

export default Portfolio;