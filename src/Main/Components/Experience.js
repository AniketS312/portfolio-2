import React from 'react';

import Signature from '../../assets/signature-new.png'

import classes from './Experience.module.css';

const Experience = () => {
    return (
        <section className={classes['experience-section']}>
            <Timeline />
            <CoverLetter />
        </section>
    )
};

const Timeline = () => {
    return (
        <div>
            <h4>Experience</h4>
            <div className={classes.timeline}>
                <TimelineSlot 
                year="2016"
                timeframe="2016-2018"
                description="Worked as a personal banking associate for a credit union. Took pride in learning the financial side of businesses. Formed many one on one relations as a floater with clients."
                />
                 <TimelineSlot 
                year="2018"
                timeframe="2018-2019"
                description=" Reported as a Junior Accountant for BDO. Completed compilations/audits for companies and oraganization on a timely manner. Report progress and complete tasks for immidiate superior"
                />
                <TimelineSlot 
                year="2019"
                timeframe="2019-2021"
                description="Established the first job in web development at a digital agency in Chicago. Provided design, development, and marketing input to clients in different industries."
                />
                <TimelineSlot 
                year="2021"
                timeframe="2021-2022"
                description="Futher improved desgin and development skills by helping local small businesses by imrpoving their digital footprint under Digital Main Street powered by Google."
                />
            </div>
        </div>
    
    )};

const TimelineSlot = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.year}>
                <h6>{props.year}</h6>
            </div>
            <div className={classes.info}>
                <p><span>{props.timeframe}</span>  {props.description}</p>
            </div>
        </ div>
    )
}



const CoverLetter = () => {
    return (
        <div>
            <h4>Cover Letter</h4>
            <p>Lorem ipsum dolor sit amet. Non quos suscipit qui nobis incidunt et optio asperiores At tenetur doloremque. Qui dolore sapiente sit explicabo odio cum nulla facilis aut fuga animi hic odio possimus.</p>
            <p>Sit quidem totam aut velit libero quo facilis temporibus. Eum veritatis culpa sed dolores excepturi eos commodi perspiciatis qui voluptatem odio quo perspiciatis facilis rem tempora minus et deserunt praesentium.</p>
            <p>Ad asperiores inventore nam totam ullam a molestiae fuga qui reiciendis quia vel explicabo laudantium quo tempore reiciendis sit rerum consequuntur. Eos saepe consequuntur id dignissimos atque id reprehenderit quos. Qui quam pariatur et temporibus nihil ut aspernatur quaerat? Et atque Quis qui fugit corporis non nobis quam.</p>
            <img width={'250px'} height={'50px'} src={Signature}/>
        </div>
        )};

export default Experience;