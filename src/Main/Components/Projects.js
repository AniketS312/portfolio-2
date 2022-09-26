import React from "react";

import classes from './Projects.module.css';

const Projects = () => {
    return (
        <section id="projects" className={classes.projects}>
            <h4>Projects</h4>
            <div className={classes['project-grid']}>
              <IndividualProject 
                projectLink='#'
                projectLinkClass={classes['one-project']}
                projectName="Weather App"
                projectStack="HTML, CSS, Javascript, FetchAPI"
                projectClass={classes['one']}
              />
                <IndividualProject 
                projectLink='#'
                projectName="Arch"
                projectStack="HTML, SCSS, Javascript"
                projectClass={classes['two']}
              />

              <IndividualProject 
                projectLink='#'
                projectName="Lana"
                projectStack="HTML, SCSS, Javascript"
                projectClass={classes['three']}
              />
               <IndividualProject 
                projectLink='#'
                projectName="Lana"
                projectStack="HTML, SCSS, Javascript"
                projectClass={classes['three']}
              />
               <IndividualProject 
                projectLink='#'
                projectName="Lana"
                projectStack="HTML, SCSS, Javascript"
                projectClass={classes['three']}
              />
               <IndividualProject 
                projectLink='#'
                projectName="Lana"
                projectStack="HTML, SCSS, Javascript"
                projectClass={classes['three']}
              />
            </div>
        </section>
    )
};

const IndividualProject = (props) => {
    return (
        <div className={classes.project}>
            <a href={props.projectLink} >{props.projectName} <span>{props.projectStack}</span></a>
            <div className={props.projectClass}></div>
        </div>
    )
}

export default Projects;