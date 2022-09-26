import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


import classes from './Contact.module.css'

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
                <span>Lorem ipsum dolor sit amet. Non nisi fugiat quia mollitia At nemo facere. Aut quos facere ab voluptatibus amet est nostrum quae ut internos possimus. Architecto voluptatem qui fugit odit a excepturi dignissimos qui illum atque rem soluta eius.</span>
                <p>
                Ut illum nemo ea repellat fuga et obcaecati iusto non ullam tempore est nihil nemo id voluptatem sunt quo consectetur totam. Ut sapiente odit sed quam natus eum itaque assumenda placeat incidunt.

                Ut galisum recusandae in enim minima et voluptas sunt eos praesentium adipisci vel excepturi iusto in facere minima. Et adipisci commodi ut nulla corrupti ut odit quaerat qui voluptatem blanditiis. Nam eius quasi in quam sunt id necessitatibus quos non repellat eligendi et commodi quia qui ipsa quod ut temporibus reiciendis. Non consequatur unde eos quasi harum et beatae dignissimos est reprehenderit animi qui nihil dicta non sint voluptatibus.
                </p>
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