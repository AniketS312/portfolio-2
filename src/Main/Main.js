import React from "react";

import Introduction from './Components/Introduction';
import Skills from './Components/Skills';

import classes from './Main.module.css'

const Main = () => {
    return (
        <main className={classes.main}>
            <Introduction/>
            <Skills />
        </main>
    )
};

export default Main;