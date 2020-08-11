import React from 'react'
import Nav from "./Nav"
import './style.css';


export default function Header() {
    return (
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src={process.env.PUBLIC_URL +"/images/Pri.JPG" }  alt="" className="img-fluid rounded-circle"></img>
                    <h1 className="text-light"><a href="index.html">Priyanka Singh</a></h1>
                    <h5 className="text-light ml-2"><em>Full Stack Web Developer</em></h5>
                    <div className="social-links mt-3 text-center">
                        <a href="https://github.com/singhpri30" className="github" target="_blank" rel="noopener noreferrer"><i
                            className="bx bxl-github"></i></a>
                        <a href="https://www.facebook.com/priyanka.singh.96343" className="facebook" target="_blank" rel="noopener noreferrer"><i
                            className="bx bxl-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/priyanka-singh-94014719/" className="linkedin" target="_blank" rel="noopener noreferrer"><i
                            className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                <Nav></Nav>
                <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            </div>

        </header>
    )
}
