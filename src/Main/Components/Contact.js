import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


import classes from './Contact.module.css'
import LinkedInIcon from "./ContactIcons/Linkedin";
import EmailIcon from "./ContactIcons/Email";

const Contact = () => {
    const form = useRef();
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false)
    const [topic, setTopic] = useState('');
    const [topicError, setTopicError] = useState(false)
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)



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
    
    function resetFields() {
        setError(false)
        setName("")
        setNameError(false)
        setEmail("")
        setEmailError(false)
        setTopic("")
        setTopicError(false)
        setMessage("")
        setMessageError(false)
    }

    function resetErrors() {
        setError(false)
        setNameError(false)
        setEmailError(false)
        setTopicError(false)
        setMessageError(false)
    }
 
    function handleFormSubmit (event) {
        event.preventDefault();
        resetErrors();
        if( name === '') {
            setError(true) 
            setNameError(true)
        }
        if( email === '') {
            setError(true)
            setEmailError(true)
        }
        if( topic === '') {
            setError(true)
            setTopicError(true)
        }
        if( message === '') {
            setError(true)
            setMessageError(true)
        }
        if(name !== '' && email !== '' && topic !== '' && message !== '') {
            emailjs.sendForm('service_zpty8q9', 'template_yqollpf', form.current, 'L6ZKmDHdlmjj9uzuf')
            .then((result) => {
                console.log(result.text);
                resetFields()
                setSuccessMessage(true)
                setTimeout(() => {
                    setSuccessMessage(false)
                }, 5000)
    
            }, (error) => {
                console.log(error.text);
            });
        }
    }

    

    return (
        <section className={classes.contact} id="contact">
            <div className={classes['contact-info']}>
                <h4>Get In Touch</h4>
                <p>Would you like to contact me regarding a work oppurtunity? Got any feedback for me? Don't hesitate to reach out via the contact form. Here are other ways you can reach out to me:</p>
                <ul>
                    <li><span>{<LinkedInIcon />}</span><a href="https://www.linkedin.com/in/andy-sharma-554b03212/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><span>{<EmailIcon />}</span><a href="mailto: aniketsharma312@gmail.com">Email</a></li>
                </ul>
            </div>
            <div className={classes['contact-form']}>
                <div className={classes.form}>
                    <form ref={form} onSubmit={handleFormSubmit} id="contact-form">
                        <input type="text" value={name} name="from_name" placeholder="Name" onChange={handleNameChange} className={nameError ? classes.error : ''}/>
                        <input type="email" name="reply_to" value={email} placeholder="Email" onChange={handleEmailChange} className={emailError ? classes.error : ''}/>
                        <input type="text" value={topic} name="topic" placeholder="Topic" onChange={handleTopicChange} className={topicError ? classes.error : ''} />
                        <textarea form="contact-form" name="message" type="text" placeholder="Message" value={message} onChange={handleMessageChange} className={messageError ? classes.error : ''}/>
                        <input type="submit" value="Submit"/>
                        {error && <span>Whoops, Looks like something went wrong!</span>}
                        {successMessage && <span>Form Submitted! Thank you.</span>}
                    </form>    
                </div>
            </div>
        </section>
    )
};



export default Contact;