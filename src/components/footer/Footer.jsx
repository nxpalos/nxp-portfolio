//
// Footer Component
//

//Lirbaries
import React from 'react';

//Styles
import "./footer.css";

//Assets
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">NXP</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#certifications" className="footer__link">Certifications</a>
                </li>
                <li>
                    <a href="#experience" className="footer__link">Experience</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#connect" className="footer__link">Connect</a>
                </li>
            </ul>
            <div className="footer__social">
                {/* <a href="https://twitter.com/cyphrsylph" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiTwitter />
                </a> */}
                <a href="https://github.com/nxpalos" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/natalie-palos-376625194/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;