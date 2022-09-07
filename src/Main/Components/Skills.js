import React from "react";

import classes from './Skills.module.css'
import { Desktop, TerminalFilled, Bookmark, Application } from './SkillsIcon'
 
const Skills = () => {
    return (
        <section className={classes.skills}>
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


const SkillsCoverLetter = () => {
    return (
        <div className={classes.services}>
            <h4>My Skills</h4>
            <p>I started my career in tech when I was fortunate enough to work for an agency owner in Chicago. Originally I was hired to work as a website designer but I quickly took up many hats which introduced me to all different aspects of the web.</p>
            <p>I started out with building websites on wix from scratch. But soon the job did not just stop there. Over time I learned how to propely use the right marketing tools.</p>
            <p>As I learned more web design and marketing I was given more complex Projects. Projects that needed some setup of javascript code. Wix itself uses React on the backed with documentations to proivde some custom solutions.</p>
            <p>Throughout my work I decided that I cannot be a jack of all trades. I had to specialize. I chose to dive deeper into web development. NEED TO FINISH THIS</p>
            <div className={classes.buttons}>
                <button>My Resume</button>
                <button>My Github</button>
            </div>
        </div>
    )
}

export default Skills;