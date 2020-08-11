import React from 'react'

import './style.css';


export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title" >
                    <h2>About</h2>
                    <p>My name is Priyanka Singh, and I am excited to transition my career from Software Test Engineer
                    to Full
                    Stack Web Developer. I recently earned a certificate in Full Stack Web Development from the
                    University of
                    New Hampshire, Coding Bootcamp. The new technologies that I learned during the course are
                    JavaScript, HTML,
                    CSS, jQuery, Node.js, Express.js, SQL, MongoDB, DevOps and React.js
                    </p>

                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={process.env.PUBLIC_URL +"/images/Pri.JPG" }  className="img-fluid rounded-circle " alt=""></img>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">

                        <div className="row">

                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Name:</strong> Priyanka Singh</li>
                                    <li><i className="icofont-rounded-right"></i>
                                        <strong>Email:</strong> priyankasingh30@gmail.com
                                    </li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> 603-978-8279</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Rochester,
                                        New Hampshire</li>
                                </ul>

                            </div >
                            <div className="col-lg-6">
                                <a id="resume" href= "assets/resume/Priyanka_Singh_Resume.pdf" target="_blank"
                                    download="Priyanka_Singh_Resume">
                                    <button className="mt-2 btn btn-info">Download
                                    Resume
                                        </button>
                                </a>

                            </div>


                        </div>
                        <p>
                            I have a bachelor’s degree in engineering. My experience includes Software Quality
                            Assurance
                            for
                            various web and window-based applications with .Net and Java environment. I
                            have experience with different SDLC methodologies such as Waterfall, and Agile Process
                            (Scrum Methodology) and very well acquainted with Software Development Life Cycle
                            (SDLC),
                            Software Testing Life Cycle (STLC), and Defect Life Cycle (DLC).
                            I have expertise in Functional Testing, System Testing, Regression Testing, Smoke
                            Testing,
                            UAT Testing, Performance Testing, and GUI testing. Also, have experience in
                            writing and executing SQL statements and creating functional specification document,
                            requirement traceability matrix document.

                            I have hands-on experience in Defect Management Tracking tools like JIRA, Quality Center,
                            and
                            Mantis.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

