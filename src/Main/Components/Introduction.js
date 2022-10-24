import React from "react";

import classes from './Introduction.module.css'

import SelfImage from '../../assets/aniket-sharma.webp'

const Introducton = (props) => {
    return (
        <section id="introduction" className={classes.introduction}>
            <div className={classes['introduction__text']}>
                <IntroductionText 
                    contactFunction={props.contactFunction}  
                />
            </div>
            <div className={classes['introduction__image']}>
                <img src={SelfImage} alt='Signature of Aniket Sharma'/>
            </div>
        </section>
    )
};

const IntroductionText = (props) => {
    const LinkedIn = 'https://www.linkedin.com/in/andy-s-554b03212/';
    const Github = 'https://github.com/AniketS312';

    return (
        <>
            <span>Hello, My Name Is</span> 
            <h1>Aniket Sharma</h1>
            <p>I am a developer, designer, and marketer. I love to create using Javascript on both frontend and backend. Not only do I develop but I started my career helping small businesses build or bolster their digital marketing. I enjoy helping businesses find solution to their digital problems.</p>
            <div>
                <a target="_blank"  href={LinkedIn}>LinkedIn</a>
                <a target="_blank"  href={Github}>GitHub</a>
                <a onClick={props.contactFunction}>Contact Me</a>
            </div>
        </>
    )
}


export default Introducton;