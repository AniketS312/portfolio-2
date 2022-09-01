import React from "react";

import {ImHtmlFive2, ImCss3} from 'react-icons/im';
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import { GrReactjs } from 'react-icons/gr';
import { FaNodeJs } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si'

import classes from './Technology.module.css'

const Technology = () => {
    return (
        <section className={classes.technology}>
            <h4>Technology</h4>
            <div className={classes['tech-stack']}>
                <TechStack 
                    icon={<ImHtmlFive2 />}
                    technology="HTML"
                />
                <TechStack 
                    icon={<ImCss3 />}
                    technology="CSS"
                />
                <TechStack 
                    icon={<TbBrandJavascript />}
                    technology="JavaScript"
                />
                <TechStack 
                    icon={<GrReactjs />}
                    technology="React"
                />
                <TechStack 
                    icon={<TbBrandNextjs />}
                    technology="Next JS"
                />
                <TechStack 
                    icon={<FaNodeJs />}
                    technology="Node JS"
                />
                <TechStack 
                    icon={<SiPostgresql />}
                    technology="PostgreSQL"
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