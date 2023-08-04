//
// App.js
//

//Libraries
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

//Styles
import './App.css';

//Components
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Qualification from './components/qualifiations/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
// import Testamonials from './components/testimonials/Testimonials';
import Projects from './components/projects/Projects';


function App() {
  return (
    <>
    <Header />
   
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Qualification />
      <Projects />
      <Contact />
    </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App;
