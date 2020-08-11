import React from 'react'
import "./style.css";

export default function Nav() {
    return (
        <nav className="nav-menu">
            <ul>
                <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#skills"><i className="bx bx-file-blank"></i> Skills</a></li>
                <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>

            </ul>
        </nav>
    )
}
