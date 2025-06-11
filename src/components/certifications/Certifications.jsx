//
// Certifications Component

//Libraries
import React, {useState} from 'react';

//Styles
import './certifications.css';


const Certifications = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="certifications section" id="certifications">
            <h2 className="section__title">Certifications</h2>
            <span className="section__subtitle">My Credentials</span>

            <div className="certifications__container container grid">
                <div className="certifications__content">
                    <div>
                        <i className="uil uil-web-grid certifications__icon"></i>
                        <h3 className="certifications__title">Java <br/> Certification </h3>
                    </div>

                    <span className="certifications__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right certifications__button-icon"></i></span>

                    <div className={toggleState === 1 ? "certifications__modal active-modal" : "certifications__modal"}>
                        <div className="certifications__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times certifications__modal-close"></i>

                            <h3 className="certifications__modal-title" >Java (Basic) Certificate</h3>
                            <p className="certifications__modal-description">Issued by: HackerRank</p>

                            <ul className="certifications__modal-certifications grid"></ul>
                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Basic topics in Java language</p>
                            </li>
                            
                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Data structures, inheritance, exception handling, etc.</p>
                            </li>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Proficient in either Java 7 or Java 8</p>
                            </li>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info"><a href="https://www.hackerrank.com/certificates/c52a27c49909" target="_blank" rel="noopener noreferrer">View Certification</a></p>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="certifications__content">
                    <div>
                        <i className="uil uil-arrow certifications__icon"></i>
                        <h3 className="certifications__title">JavaScript <br/> Certification </h3>
                    </div>

                    <span className="certifications__button"  onClick={() => toggleTab(2)} >View More <i className="uil uil-arrow-right certifications__button-icon"></i></span>

                    <div className={toggleState === 2 ? "certifications__modal active-modal" : "certifications__modal"}>
                        <div className="certifications__modal-content">
                            <i className="uil uil-times certifications__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="certifications__modal-title">JavaScript (Intermediate) Certificate</h3>
                            <p className="certifications__modal-description">Issued by: HackerRank</p>
                            <ul className="certifications__modal-certifications grid"></ul>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Design Patterns</p>
                            </li>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Memory Management</p>
                            </li>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Concurrency Model</p>
                            </li>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Event Loops</p>
                            </li>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info"><a href="https://www.hackerrank.com/certificates/6bdad910bc6d" target="_blank" rel="noopener noreferrer">View Certification</a></p>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="certifications__content">
                    <div>
                        <i className="uil uil-web-grid certifications__icon"></i>
                        <h3 className="certifications__title">Technical Writer <br/> Certification </h3>
                    </div>

                    <span className="certifications__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right certifications__button-icon"></i></span>

                    <div className={toggleState === 1 ? "certifications__modal active-modal" : "certifications__modal"}>
                        <div className="certifications__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times certifications__modal-close"></i>

                            <h3 className="certifications__modal-title" >Technical Writer Certificate in Progress</h3>
                            <p className="certifications__modal-description">Issued by: Technical Writer HQ</p>

                            <ul className="certifications__modal-certifications grid"></ul>
                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Fundamental skills and best practices for Technical Writing</p>
                            </li>
                            
                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Formatting, editing, readability, etc.</p>
                            </li>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">Graphs, charts, tables, etc.</p>
                            </li>

                            <li className="certifications__modal-service">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info"><a href="https://technicalcommunication.mn.co/" target="_blank" rel="noopener noreferrer">View Course</a></p>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certifications