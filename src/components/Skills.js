import React from 'react'
import './style.css';



export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>

                </div>

                <div className="row skills-content">

                    <div className="col-lg-6" data-aos="fade-up">

                        <div className="progress">
                            <span className="skill">HTML <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">CSS <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">65%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">MYSQL <i className="val">65%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                        <div className="progress">
                            <span className="skill">NODE JS <i className="val">50%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">MONGODB <i className="val">60%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">EXPRESS JS<i className="val">50%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">REACT JS<i className="val">50%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
