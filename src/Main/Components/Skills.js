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
const toResume = function() {
    window.open('https://drive.google.com/drive/folders/1A8OAslUig317to8fGIeb5K7iSTROcjSn?usp=sharing')
}

const SkillsCoverLetter = () => {
    return (
        <div className={classes.services}>
            <h4>My Skills</h4>
            <p>I started my career in tech when I was fortunate enough to work for an agency owner in Chicago. Originally I was hired to work as a website designer but I quickly took up many hats which introduced me to all different aspects of the web.</p>
            <p>Using the backend of wix, which is built on the react library, allowed me to further expand my knowledge of what is possible. From building components such as product review and recommendations, enabling APIs to connect 3rd party apps, and much more.</p>
            <p>I worked with some of the most memorable clients. Through them I learned how to manage expectations and the flexiblity of finding and communicating solutions.</p>
            <p>I want to bring everything I have learned throughout the years to your oragnization and projects and build a solution that works for you.</p>
            <div className={classes.buttons}>
                <button onClick={toResume}>My Resume</button>
                <button onClick={toGithub}>My Github</button>
            </div>
        </div>
    )
}

export default Skills;