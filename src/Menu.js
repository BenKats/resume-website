import React from 'react';
// import { HashRouter, NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
function Menu() {
    return (
        <div>
            <Link activeClass='active' to='about' spy={true} smooth={true} duration={300}>
                About
            </Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} duration={300}>
                Contact
            </Link>
            <Link activeClass='active' to='footer' spy={true} smooth={true} duration={300}>
                Footer
            </Link>
        </div>
    );
}

export default Menu;
