import React from 'react'
import "./style.css";

export default function Hero() {
    return (

        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Priyanka Singh</h1>
                <p>I'm <span className="typed" data-typed-items="Developer, Painter, Photographer"></span></p>
            </div>
        </section>
    )
}
