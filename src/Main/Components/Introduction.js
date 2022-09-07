import React from "react";

import classes from './Introduction.module.css'

import SelfImage from '../../assets/placeholder.jpg'

const Introducton = () => {
    return (
        <section className={classes.introduction}>
            <div className={classes['introduction__text']}>
                <IntroductionText />
            </div>
            <div className={classes['introduction__image']}>
                <img src={SelfImage} alt='Aniket Sharma'/>
            </div>
        </section>
    )
};

const IntroductionText = () => {
    const LinkedIn = 'www.google.com';
    const Github = 'www.google.com';
    const ContactMe = 'www.google.com';

    function preventDefault(e) {
        e.preventDefault();
    }

    return (
        <>
            <span>Hello, My Name Is</span> 
            <h1>Aniket Sharma</h1>
            <p>I am a developer, designer, and marketer. I love to create using Javascript on both frontend and backend. Not only do I develop but I started my career helping small businesses build or bolster their digital marketing. Most important of all my tasks, I help businesses find solutions to their problems.</p>
            <div>
                <a onClick={preventDefault} href={LinkedIn}>LinkedIn</a>
                <a onClick={preventDefault} href={Github}>GitHub</a>
                <a onClick={preventDefault} href={ContactMe}>Contact Me</a>
            </div>
        </>
    )
}


export default Introducton;