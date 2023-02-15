import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'
const Header = () => {
    return (
        <div className="navbar bg-slate-900 text-white fixed z-10 shadow-md shadow-slate-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                        <li><Link to="home" spy={true} smooth={true}>Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                        <li><Link to="services" spy={true} smooth={true}>Services</Link></li>
                        <li><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
                        <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                        <li><Link to="education" spy={true} smooth={true}>Education</Link></li>
                        <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link activeClass='false' to="home" spy={true} smooth={true}>Home</Link></li>
                        <li><Link activeClass='false' to="about" spy={true} smooth={true}>About</Link></li>
                        <li><Link activeClass='false' to="services" spy={true} smooth={true}>Services</Link></li>
                        <li><Link activeClass='false' to="skills" spy={true} smooth={true}>Skills</Link></li>
                        <li><Link activeClass='false' to="projects" spy={true} smooth={true}>Projects</Link></li>
                        <li><Link activeClass='false' to="education" spy={true} smooth={true}>Education</Link></li>
                        <li><Link activeClass='false' to="contact" spy={true} smooth={true}>Contact</Link></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>

                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Header;