import React from 'react';

import classes from './SideBar.module.css'

import Signature from '../assets/signature-new.png'

const SideBar = (props) => {
    return (
        <section className={classes['nav-section']}>
            <Numbers 
                CurrentNumber = '01'
                NextNumber = "02"
                />
            <div className={classes['description-container']}>
                <PersonalInfo 
                    description="Name"
                    descriptionInfo="Aniket Sharma"
                />
                <PersonalInfo 
                    description="Title"
                    descriptionInfo="Web Developer"
                />
                <PersonalInfo 
                    description="Email"
                    descriptionInfo="aniketsharma312@gmail.com"
                />
                <PersonalInfo 
                    description="Contact Form"
                    descriptionInfo="Contact Me"
                />      
            </div>
            <img width={'250px'} height={'50px'} src={Signature}/>
            <span className={classes['page-number']}>{props.PageNumber}</span>
        </section>
    )
};

const Numbers = (props) => {
    return (
        <div className={classes['page-numbers']}>
            <p>{props.CurrentNumber}</p>
            <span></span>
           <p>{props.NextNumber}</p>
        </div>
    )
}

const PersonalInfo = (props) => {
    return (
        <div className={classes['description']}>   
               <h3>{props.description}</h3>
               <p>{props.descriptionInfo}</p>
        </div>
    )
}

export default SideBar;