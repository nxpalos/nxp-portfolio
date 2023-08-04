//
// Projects Component
//

//Libraries
import React, {useState} from 'react';

//Styles
import './projects.css';


const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="project section" id="portfolio">
           <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Development Projects</span>

            <div className="dev_project__container container grid">
                <div className="project__content">
                    <div>
                        <i className="bx bx-heart-square project__icon"></i>
                        <h3 className="project__title">Agape <br/>Dating App </h3>
                    </div>

                    <span className="project__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toggleState === 1 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content-small">
                            <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>

                            <h3 className="project__modal-title" >Agape React Native Dating App</h3>
                            <p className="project__modal-description">Frontend Developer & Presentation Lead</p>

                            <ul className="project__modal-project grid"></ul>
                            <li className="project__modal-service">
                                <p className="project__modal-info">I spent August 2021 - December 2021 creating a project management plan for a dating app, Agape, with a team of 4 other developers. 
                                We planned the project using Agile methodologies with each sprint being 2 weeks. We then spent January 2022 - May 2022 executing our plan using the MERNstack as well 
                                as typescript. I worked on this team as a Front End team member and Presentation Lead. Agape is a mobile application powered by React Native and Node.js, compatible for 
                                iOS and Android devices, that emphasizes in relationships and creating fellowships based on a Christian foundation. Find Christ-centered relationships and be transformed 
                                in community through fellowship!</p>
                            </li>
                            

                            <li className="project__modal-service">
                                <p className="project__modal-info"><a href="https://github.com/agape-io/agape" target="_blank" rel="noopener noreferrer">View the Github Repository!</a></p>
                            </li>

                            <li className="project__modal-service">
                                <iframe src="https://drive.google.com/file/d/1oXbhflZCofxUb_2eYup7KDDRoKKB02rb/preview" title="Agape Screens" width="640" height="420" allow="autoplay"></iframe>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="project__content">
                    <div>
                        <i className="bx bx-network-chart project__icon"></i>
                        <h3 className="project__title">Natural Gas Storage <br/> Monitoring System</h3>
                    </div>

                    <span className="project__button"  onClick={() => toggleTab(2)} >View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toggleState === 2 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content-small">
                            <i className="uil uil-times project__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="project__modal-title">Natural Gas Storage Monitoring System</h3>
                            <p className="project__modal-description">Research Assistant & Co-Author</p>
                            <ul className="project__modal-project grid"></ul>

                            <li className="project__modal-service">
                                {/* <i className="uil uil-check-circle project__modal-icon"></i> */}
                                <p className="project__modal-info">From May 2020 to May 2022, I worked as a Research Assistant to the Chair of the 
                                Engineering and Computer Science Department, Dr. James Yeh. Alongside a team of undergraduate researchers, we were able to 
                                design a low-cost, deploy-anywhere system as a direct solution to undetected gas leaks in pipelines and other storage systems. 
                                Our project sought to address the inefficiency of the current systems in searching for a leak as natural gas is continuously released 
                                into the atmosphere. <br/><br/>We utilized Internet of Things technologies to create a system of nodes consisting of a LoRa32 microcontroller, a gas sensor,
                                and a solar panel which would be configured in a daisy-chain topology. We programmed each microcontroller to send data along the daisy-chain to
                                a home node connected to Wi-Fi which would then store the data in a cloud-based Firebase database. We also created mockups for a mobile app that 
                                administrators could use to view the data in a user-friendly app.  
                                </p>
                            </li>

                            <li className="project__modal-service">
                                <iframe src="https://drive.google.com/file/d/1-YkBJXXdX4RnJ3QEMKFWcRIvtk9VEfYz/preview" title="SRS Natural Gas Monitoring" width="640" height="420" allow="autoplay"></iframe>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <span className="section__subtitle">My Technical Writing Projects</span>

            <div className="techwrit_project__container container grid">
                <div className="project__content">
                    <div>
                        <i className="bx bx-code-block project__icon"></i>
                        <h3 className="project__title">Intro to CS <br/>Lab Guide </h3>
                    </div>

                    <span className="project__button" onClick={() => toggleTab(4)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toggleState === 4 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content-big">
                            <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>

                            <h3 className="project__modal-title" >Intro to Computer Science Lab Guide</h3>
                            <p className="project__modal-description">Laboratory Technician</p>

                            <ul className="project__modal-project grid"></ul>
                            <li className="project__modal-service">
                                {/* <i className="uil uil-check-circle project__modal-icon"></i> */}
                                <p className="project__modal-info">For three years of my college education, I worked as a Lab Technician for the 
                                Intro to Computer Science I and II courses. My responsibilities included tutoring the students during their allotted 
                                lab time and helping students during walk-in hours. Many students taking these courses are beginner programmers with 
                                no prior coding experience. Teaching these students required that I break down the programming concepts used in the solution 
                                of each Project/Lab into easily digestible blocks of code.
                                <br/>
                                <br/>
                                 An aspect of this course that I discussed with the instructor was how easy it would be to fall behind in the curriculum as 
                                each concept builds on the others. This guide is meant as a tutorial for students that may have fallen behind in the curriculum or
                                students that want a more complete explanation of the solution.</p>
                            </li>
                            

                            <li className="project__modal-service">
                                <iframe src="https://drive.google.com/file/d/12h20kLTK3dY1WrJl33RNks07duu-2jmE/preview" title="Intro to CS Lab Guide" width="640" height="480" allow="autoplay"></iframe>
                                <br/>
                                <iframe src="https://www.jdoodle.com/embed/v0/4XZh" width="640" height="480" allow="autoplay"></iframe>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="project__content">
                    <div>
                        <i className="bx bx-network-chart project__icon"></i>
                        <h3 className="project__title">Natural Gas Storage <br/> Monitoring System</h3>
                    </div>

                    <span className="project__button"  onClick={() => toggleTab(5)} >View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toggleState === 5 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content-small">
                            <i className="uil uil-times project__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="project__modal-title">Natural Gas Storage Monitoring System</h3>
                            <p className="project__modal-description">Research Assistant & Co-Author</p>
                            <ul className="project__modal-project grid"></ul>

                            <li className="project__modal-service">
                                {/* <i className="uil uil-check-circle project__modal-icon"></i> */}
                                <p className="project__modal-info"> During my time as a Research Assistant to the Dean of the Engineering and Computer Science Department, Dr. James Yeh,
                                our research team collaborated to write a proof of concept paper detailing our research findings and designs. We were able to present the project at  
                                multiple Azusa Pacific University STEM research symposiums and the IN4PL 2021 international conference where it was published by the IN4PL 2021 conference 
                                on SciTePress Digital Library.</p>
                            </li>

                            <li className="project__modal-service">
                                <p className="project__modal-info"><a href="https://www.scitepress.org/PublicationsDetail.aspx?ID=jUDQMbYIeEI%3D&t=1" target="_blank" rel="noopener noreferrer">View the Publication!</a></p>
                            </li>

                            <li className="project__modal-service">
                                {/* <i className="uil uil-check-circle project__modal-icon"></i> */}
                                {/* <p className="project__modal-info"><a href="https://drive.google.com/file/d/1Qft1wG_fF9lQk0pmAd0rhU-eHGs2hRsM/view" target="_blank" rel="noopener noreferrer">View Publication</a></p> */}
                                <iframe src="https://drive.google.com/file/d/1Qft1wG_fF9lQk0pmAd0rhU-eHGs2hRsM/preview" title="Natural Gas Monitoring System Paper" width="640" height="400" allow="autoplay"></iframe>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="project__content">
                    <div>
                        <i className="bx bx-edit project__icon"></i>
                        <h3 className="project__title">SAP Concur <br/> Training Guide</h3>
                    </div>

                    <span className="project__button"  onClick={() => toggleTab(6)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toggleState === 6 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content-small">
                            <i className="uil uil-times project__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="project__modal-title">SAP Concur Training Guide</h3>
                            <p className="project__modal-description">SaaS User Guide</p>

                            <ul className="project__modal-project grid"></ul>  
                            <li className="project__modal-service">
                                {/* <i className="uil uil-check-circle project__modal-icon"></i> */}
                                <p className="project__modal-info">For three years of my time at Azusa Pacific University, I worked as an office intern for the Engineering and  
                                Computer Science Department. My responsibilities included purchasing, reconciling accounts, and other administrative and clerical tasks. Oftentimes, 
                                there would be more than one office intern working for the department and in order to keep our work and various processes consistent I wrote several 
                                guides detailing how to perform certain tasks. <br/> <br/>Here is a guide for using SAP Concur to reconcile accounts. First, I researched this service and learned 
                                how the university's business office's requirements on each department to use it. Then, after learning the process myself, I developed this guide for our 
                                department's use in training and as a standard of how to perform the task. As a result of guides like this, we were able to onboard and train new office
                                interns quickly and help them to become effective employees independantly.</p>
                            </li>

                            <li className="project__modal-service">
                                {/* <i className="uil uil-check-circle project__modal-icon"></i> */}
                                {/* <p className="project__modal-info"><a href="https://drive.google.com/file/d/1_QHqcoZ5vkMrlYfQPr13rYI96SUr8i3H/view" target="_blank" rel="noopener noreferrer">View User Guide</a></p> */}
                                <iframe src="https://drive.google.com/file/d/1_QHqcoZ5vkMrlYfQPr13rYI96SUr8i3H/preview" title="SAP Concur User Guide" width="640" height="400" allow="autoplay"></iframe>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects