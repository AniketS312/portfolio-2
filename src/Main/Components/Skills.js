import React from "react";

import classes from './Skills.module.css'
import { Desktop, TerminalFilled, Bookmark, Application } from './SkillsIcon'
 
const Skills = (props) => {
    return (
        <section id="skills" className={classes.skills}>
            <SkillsDiscription />
            <SkillsCoverLetter />
        </section>
    )
};

const SkillsDiscription = () => {
    return (
        <div className={classes.description}>
            <Description 
                icon={<Desktop />}
                skill={'Design'}
                description={'Create appealing designs based on feedback provided by clients and solve design painpoints.'}
            />
             <Description 
                icon={<TerminalFilled />}
                skill={'Development'}
                description={'Develop, maintain and improve the structure of the website and implement new technologies.'}
            />
             <Description 
                icon={<Bookmark />}
                skill={'Marketing'}
                description={'Implement wide variety of tools to collect data. Furthermore, create business ideas and oppurtunites to drive growth.'}
            />
             <Description 
                icon={<Application />}
                skill={'Reporting / Admin'}
                description={'Maintain a solid chain of command internally and onboard and offboard clients.'}
            />
        </div>
    )
}


const Description = (props) => {
    return (
        <div className={classes['description__container']}>
            <span>{props.icon}</span>
            <h5>{props.skill}</h5>
            <p>{props.description}</p>
        </div>
    )
};

const toGithub = function() {
    window.open('https://github.com/AniketS312')
}
// const toResume = function() {
//     window.open('https://drive.google.com/file/d/1lXJ8CFz5fr465V9d0uewQ2m97gZsgr8I/view?usp=sharing')
// }

const SkillsCoverLetter = () => {
    return (
        <div className={classes.services}>
            <h4>My Skills</h4>
            <div className={classes.text}>
                <p>I strongly consider myself a motivated person who is always interested in facing challenges. A goal-oriented professional with experience in software development, technical troubleshooting, develop and integration of websites and web applications.</p>
                <p>I have a strong background in UI/UX design, eCommerce, and project management. I am bble to explain complex technological concepts and processes in a clear and accessible manner. Experienced in meeting deadlines and working under pressure with a high level of awareness and adaptability.</p>
                <p>Not only do I excel in the front end designs but I am actively working with back end technologies to communicate with databases and API to build a complete user experience.</p>
            </div>
            <div className={classes.buttons}>
                {/* <button onClick={toResume}>My Resume</button> */}
                <button onClick={toGithub}>My Github</button>
            </div>
        </div>
    )
}

export default Skills;