import React from "react";

import classes from './Projects.module.css';

const Projects = () => {
    return (
        <section id="projects" className={classes.projects}>
            <h4>Projects</h4>
            <div className={classes['project-grid']}>
              <IndividualProject 
                projectLink='https://bank-dashboard-andy.netlify.app/'
                projectName="Better Bank Dashboard (Desktop Only)"
                projectStack="React, D3.js, React Hooks"
                projectClass={classes['one']}
              />
                <IndividualProject 
                projectLink='https://anikets312.github.io/Weather-App/'
                projectName="Weather App"
                projectStack="HTML, CSS, Javascript, FetchAPI"
                projectClass={classes['two']}
              />

              <IndividualProject 
                projectLink='https://www.lexiedrew.com/'
                projectName="Lexi Drew"
                projectStack="Wix, Javascript, React"
                projectClass={classes['three']}
              />
               <IndividualProject 
                projectLink='https://haze-photographer.netlify.app/'
                projectName="Haze"
                projectStack="HTML, SCSS, Javascript, React"
                projectClass={classes['four']}
              />
               <IndividualProject 
                projectLink='https://anikets312.github.io/Lana/'
                projectName="Lana"
                projectStack="HTML, SCSS, Javascript"
                projectClass={classes['five']}
              />
               <IndividualProject 
                projectLink='https://anikets312.github.io/arch/'
                projectName="Arch"
                projectStack="HTML, CSS, Javascript"
                projectClass={classes['six']}
              />
            </div>
        </section>
    )
};

const IndividualProject = (props) => {
    return (
        <div className={classes.project}>
            <a href={props.projectLink} target="_blank" rel="noreferrer">{props.projectName} <span>{props.projectStack}</span></a>
            <div className={props.projectClass}></div>
        </div>
    )
}

export default Projects;