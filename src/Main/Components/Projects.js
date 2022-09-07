import React from "react";

import classes from './Projects.module.css';

import PortfolioImage from '../../assets/website.jpg';

const Projects = () => {
    return (
        <section className={classes.projects}>
            <h4>Projects</h4>
            <div className={classes['project-grid']}>
                <IndividualProject 
                    project={classes.one}
                    href={`https://anikets312.github.io/Weather-App/`}
                    projectName={'Weather App'}
                />
                <IndividualProject 
                    project={classes.two}
                />
                <IndividualProject 
                    project={classes.one}
                />
                <IndividualProject 
                    project={classes.one}
                />
                <IndividualProject 
                    project={classes.one}
                />
                <IndividualProject 
                    project={classes.one}
                />
            </div>
        </section>
    )
};

const IndividualProject = (props) => {
    return (
            <a href={props.href} target="_blank"className={props.project}>{props.projectName}</a>
    )
}

export default Projects;