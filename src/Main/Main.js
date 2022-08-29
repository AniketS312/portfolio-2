import React from "react";

import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Projects from './Components/Projects'

import classes from './Main.module.css'
import Experience from "./Experience";

const Main = () => {
    return (
        <main className={classes.main}>
            <Introduction/>
            <Skills />
            <Projects />
            <Experience />
        </main>
    )
};

export default Main;