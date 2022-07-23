import React, { useState } from "react";
import emailjs from 'emailjs-com';
import emailjsValues from "../emailjs_values";
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailSent, setEmailSent] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        if (name && email && message) {
            const serviceId = emailjsValues.serviceId
            const templateId = emailjsValues.templateId
            const userId = emailjsValues.userId
            const templateParams = {
                name,
                email,
                message
            }

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error))
                
            setName('')
            setEmail('')
            setMessage('')
            setEmailSent(true)
        } else {
            alert('Please fill in all fields.')
        }
    }

    return (
        <section id="contact" className="contact__wrap">
            <h3></h3>
            <form className="contact__form">
                <input
                    className="text-input"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className="text-input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <textarea 
                    className="text-input"
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <input
                    className="submit-btn btn"
                    type="submit"
                    value="Send message"
                    onClick={submit}
                />
                <span className={emailSent ? 'visible' : 'hidden'}>Thank you for your message!<br></br> We will be in touch!</span>
            </form>
            <div className="icons">
                <a href="https://www.linkedin.com/in/aleksander-kopto%C5%84-657088201/" target='_blank'><FaLinkedin className="linkedin-icon"/></a>
                <a href="https://github.com/akopton" target='_blank'><FaGithub className="github-icon"/></a>
            </div>
        </section>
    )
}

export default Contact;