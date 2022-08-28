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
                skill={'Skill 1'}
                description={'This is a long description of the skill I have. I will ahve to edit this to form a more meaning action'}
            />
             <Description 
                icon={<TerminalFilled />}
                skill={'Skill 1'}
                description={'This is a long description of the skill I have. I will ahve to edit this to form a more meaning action'}
            />
             <Description 
                icon={<Bookmark />}
                skill={'Skill 1'}
                description={'This is a long description of the skill I have. I will ahve to edit this to form a more meaning action'}
            />
             <Description 
                icon={<Application />}
                skill={'Skill 1'}
                description={'This is a long description of the skill I have. I will ahve to edit this to form a more meaning action'}
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
            <h4>Services</h4>
            <span>eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Vitae proin sagittis nisl rhoncus mattis. Faucibus a pellentesque sit amet porttitor eget. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Enim lobortis scelerisque fermentum dui faucibus in. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Eget felis eget nunc lobortis mattis aliquam. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Tristique nulla aliquet enim tortor at auctor urna nunc id. Tincidunt vitae semper quis lectus nulla at volutpat diam.</p>
            <div className={classes.buttons}>
                <button>Button One</button>
                <button>Button Two</button>
            </div>
        </div>
    )
}

export default Skills;