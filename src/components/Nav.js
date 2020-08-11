import React from 'react'

export default function Nav() {
    return (
        <nav class="nav-menu">
            <ul>
                <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#skills"><i class="bx bx-file-blank"></i> Skills</a></li>
                <li><a href="#portfolio"><i class="bx bx-book-content"></i> Portfolio</a></li>
                <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li>

            </ul>
        </nav>
    )
}
