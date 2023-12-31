import React from 'react';
import Intro from "../../components/Intro"
import About from "../../components/About"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import Resume from "../../components/Resume"
import Contact from "../../components/Contact"
import Nav from '../../components/Nav';

const Main = () => {
    return (
        <>
            <Nav />
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
        </>
    );
}

export default Main;