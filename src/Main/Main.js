import React from "react";

import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Projects from './Components/Projects'
import Experience from "./Components/Experience";
import Technology from "./Components/Technology";

import classes from './Main.module.css'

const Main = () => {
    return (
        <main className={classes.main}>
            <Introduction/>
            <Skills />
            <Projects />
            <Experience />
            <Technology />
        </main>
    )
};

export default Main;