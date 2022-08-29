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
                />
            </div>
        </section>
    )
};

const IndividualProject = (props) => {
    return (
            <a className={props.project}></a>
    )
}

export default Projects;