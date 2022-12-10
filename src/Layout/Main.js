import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Education from '../Pages/Education/Education';
import Footer from '../Pages/Footer/Footer';
import Projects from '../Pages/Projects/Projects';
import Services from '../Pages/Services/Services';
import Skills from '../Pages/Skills/Skills';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;