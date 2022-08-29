import React from 'react';

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
                year="2019"
                timeframe="2019-2021"
                description="Lorem ipsum dolor sit amet. Rem velit quia et nulla voluptates qui dignissimos sunt ea voluptatibus beatae aut ducimus dolorum sed voluptatem facilis. Ut facilis minus vel tempora corporis est voluptatem pariatur."
                />
                 <TimelineSlot 
                year="2019"
                timeframe="2019-2021"
                description="Lorem ipsum dolor sit amet. Rem velit quia et nulla voluptates qui dignissimos sunt ea voluptatibus beatae aut ducimus dolorum sed voluptatem facilis. Ut facilis minus vel tempora corporis est voluptatem pariatur."
                />
                <TimelineSlot 
                year="2019"
                timeframe="2019-2021"
                description="Lorem ipsum dolor sit amet. Rem velit quia et nulla voluptates qui dignissimos sunt ea voluptatibus beatae aut ducimus dolorum sed voluptatem facilis. Ut facilis minus vel tempora corporis est voluptatem pariatur."
                />
                <TimelineSlot 
                year="2019"
                timeframe="2019-2021"
                description="Lorem ipsum dolor sit amet. Rem velit quia et nulla voluptates qui dignissimos sunt ea voluptatibus beatae aut ducimus dolorum sed voluptatem facilis. Ut facilis minus vel tempora corporis est voluptatem pariatur."
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
        </div>
        )};

export default Experience;