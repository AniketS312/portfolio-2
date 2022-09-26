import React from 'react';

import Signature from '../../assets/signature-new.png'

import classes from './Experience.module.css';

const Experience = () => {
    return (
        <section id="experience" className={classes['experience-section']}>
            <Timeline />
            <CoverLetter />
        </section>
    )
};

const Timeline = () => {
    return (
        <div className={classes.experience}>
            <h4>Experience</h4>
            <div className={classes.timeline}>
                <TimelineSlot 
                year="2016"
                timeframe="2016-2018"
                description="Worked as a personal banking associate for a credit union. Took pride in learning the financial side of businesses. Formed many one on one relations as a floater with clients."
                />
                 <TimelineSlot 
                year="2018"
                timeframe="2018-2019"
                description=" Reported as a Junior Accountant for BDO. Completed compilations/audits for companies and oraganization on a timely manner. Report progress and complete tasks for immidiate superior"
                />
                <TimelineSlot 
                year="2019"
                timeframe="2019-2021"
                description="Established the first job in web development at a digital agency in Chicago. Provided design, development, and marketing input to clients in different industries."
                />
                <TimelineSlot 
                year="2021"
                timeframe="2021-2022"
                description="Futher improved desgin and development skills by helping local small businesses by imrpoving their digital footprint under Digital Main Street powered by Google."
                />
            </div>
        </div>
    
    )};

const TimelineSlot = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.year}>
                <h6>{props.year}</h6>
            </div>
            <div className={classes.info}>
                <p><span>{props.timeframe}</span>  {props.description}</p>
            </div>
        </ div>
    )
}



const CoverLetter = () => {
    return (
        <div className={classes['cover-letter']}>
            <h4>Cover Letter</h4>
            <span>Firstly, I would like to thank you for taking the time to view my portfolio website and if you have any questions I am more than happy to help if you reach out. </span>
            <p>I have made this website to showcase my talents and interest of working as a front end web developer. Currently I am working to become a full stack developer by using the MERN stack with the option of working with PostGRES.</p>
            <p>With over a year of development experience and multiple years of experience in web design, marketing and customer management, I am more than capable of handling projects in both solo and team environments. I have worked in many different types of induestires that needed help with their digital presense and my background in business helps me analyze many of the needs.</p>
            <p>I am confiendent in my abilties to learn the stack a oraganization uses. And with time to learn a companies culture and customs I will prove to be an asset and a major contributor on projects going forward.</p>
            <img width={'250px'} height={'50px'} alt="Signature of Aniket Sharma." src={Signature}/>
        </div>
        )};

export default Experience;