import React from "react";
import classes from './Introduction.module.css'
import SelfImage from '../../assets/aniket-sharma.webp'
import LinkedIn from "./TechIcons/Linkedin";
import GitHub from "./TechIcons/Github";
import MailAdd from "./TechIcons/Email";

const Introducton = (props) => {
    return (
        <section id="introduction" className={classes.introduction}>
            <div className={classes['introduction__text']}>
                <IntroductionText 
                    contactFunction={props.contactFunction}  
                />
            </div>
            <div className={classes['introduction__image']}>
                <img src={SelfImage} alt='Aniket Sharma'/>
            </div>
        </section>
    )
};

const IntroductionText = (props) => {

    return (
        <>
            <span>Hello, My Name Is</span> 
            <h1>Aniket Sharma</h1>
            <p>I am a developer, designer, and marketer. I love to create using Javascript on both frontend and backend,as well as helping small businesses by improving their digital footprint all while continuously learning.</p>
            <div>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/andy-sharma-554b03212/'><LinkedIn /></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/AniketS312'><GitHub /></a>
                <a href="https://anikets.dev/" onClick={props.contactFunction}><MailAdd /></a>
            </div>
        </>
    )
}


export default Introducton;