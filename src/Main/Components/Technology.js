import React from "react";

import HTMLIcon from "./TechIcons/Html";
import Css from './TechIcons/Css';
import Javascript from './TechIcons/JavaScript';
import NodeJs from './TechIcons/Nodejs';
import PostgreSQL from "./TechIcons/Postgresql";
import ReactIcon from './TechIcons/ReactIcon';
import Sass from './TechIcons/Sass';

import classes from './Technology.module.css'

const Technology = () => {
    return (
        <section id="technology" className={classes.technology}>
            <h4>Technology</h4>
            <div className={classes['tech-stack']}>
                <TechStack 
                    icon={<HTMLIcon />}
                    technology="HTML"
                />
                <TechStack 
                    icon={<Css />}
                    technology="CSS"
                />
                <TechStack 
                    icon={<Javascript />}
                    technology="JavaScript"
                />
                <TechStack 
                    icon={<ReactIcon />}
                    technology="React"
                />
                
                <TechStack 
                    icon={<NodeJs />}
                    technology="Node JS"
                />
                <TechStack 
                    icon={<PostgreSQL />}
                    technology="PostgreSQL"
                />
                {/* Next JS has to be last as fill will not work on svg design
                 */}
                <TechStack 
                    icon={<Sass />}
                    technology="SASS"
                />
            </div>
        </section>
    )
}

const TechStack = (props) => {
    return (
        <div>
            {props.icon}
            <h6>{props.technology}</h6>
        </div>
    )
}

export default Technology;