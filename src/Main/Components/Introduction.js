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
                <img src={SelfImage} />
            </div>
        </section>
    )
};

const IntroductionText = () => {
    const LinkedIn = 'www.google.com';
    const Github = 'www.google.com';
    const ContactMe = 'www.google.com';

    return (
        <>
            <span>Hello, My Name Is</span> 
            <h1>Aniket Sharma</h1>
            <p>Text about me goes here</p>
            <div>
                <a href={LinkedIn}>LinkedIn</a>
                <a href={Github}>GitHub</a>
                <a href={ContactMe}>Contact Me</a>
            </div>
        </>
    )
}


export default Introducton;