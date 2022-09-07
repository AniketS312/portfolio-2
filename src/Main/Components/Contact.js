import React, { useState } from "react";

import classes from './Contact.module.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');


    function clearInitalValue(event) {
        console.log(event)
    }

    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    function handleTopicChange (event) {
        setTopic(event.target.value)
    }

    function handleMessageChange (event) {
        setMessage(event.target.value)
    }

    function handleFormSubmit (event) {
        event.preventDefault();
    }

    return (
        <section className={classes.contact}>
            <div className={classes['contact-info']}>
                <h4>Get In Touch</h4>
                <span>Lorem ipsum dolor sit amet. Non nisi fugiat quia mollitia At nemo facere. Aut quos facere ab voluptatibus amet est nostrum quae ut internos possimus. Architecto voluptatem qui fugit odit a excepturi dignissimos qui illum atque rem soluta eius.</span>
                <p>
                Ut illum nemo ea repellat fuga et obcaecati iusto non ullam tempore est nihil nemo id voluptatem sunt quo consectetur totam. Ut sapiente odit sed quam natus eum itaque assumenda placeat incidunt.

Ut galisum recusandae in enim minima et voluptas sunt eos praesentium adipisci vel excepturi iusto in facere minima. Et adipisci commodi ut nulla corrupti ut odit quaerat qui voluptatem blanditiis. Nam eius quasi in quam sunt id necessitatibus quos non repellat eligendi et commodi quia qui ipsa quod ut temporibus reiciendis. Non consequatur unde eos quasi harum et beatae dignissimos est reprehenderit animi qui nihil dicta non sint voluptatibus.
                </p>
            </div>
            <div className={classes['contact-form']}>
                <div className={classes.form}>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" value={name} placeholder="Name" onClick={clearInitalValue} onChange={handleNameChange}/>
                        <input type="text" value={email} placeholder="Email" onChange={handleEmailChange}/>
                        <input type="text" value={topic} placeholder="Topic" onChange={handleTopicChange}/>
                        <input type="text" placeholder="Message" className={classes.message} value={message} onChange={handleMessageChange}/>
                        <input type="submit" value="Submit"/>
                    </form>    
                </div>
            </div>
        </section>
    )
};



export default Contact;