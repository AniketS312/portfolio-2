import React, { useEffect, useState } from "react";

import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Projects from './Components/Projects'
import Experience from "./Components/Experience";
import Technology from "./Components/Technology";
import Contact from './Components/Contact';

import classes from './Main.module.css'

const Main = (props) => {  


    return (
        <main className={classes.main} id="main">
            <Introduction />
            <Skills />
            <Projects />
            <Experience />
            <Technology />
            <Contact />
        </main>
    )
};

export default Main;