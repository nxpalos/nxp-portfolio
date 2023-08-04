//
// Header Component
//

//Libraries
import React, { useState } from 'react';

//Styles
import "./header.css"


const Header = () => {
    //Toggle Menu
    const[Toggle, showMenu] = useState(false);

  return (

    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">NXP</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            {/* <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link> */}
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link" active-link>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#certifications" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i> Certifications
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#experience" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i> Experience
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Connect
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}>    
                </i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
            {/* <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<BigAbout/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes> */}
    </header>
  );
};

export default Header