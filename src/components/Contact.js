import React, { useState } from "react";
import emailjs from 'emailjs-com';
import emailjsValues from "../emailjs_values";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import CV from '../assets/docs/CV_Aleksander_Koptoń_EN.pdf'

const Contact = ({ refs }) => {
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
        <div className="contact-section section" ref={refs.contact}>
            <div className="contact__socials">
                <h3>Contact me!</h3>
                <p>Send me email or...</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/aleksander-kopto%C5%84-657088201/" target='_blank' className="linkedin-icon__wrap"><FaLinkedin className="linkedin-icon contact-icon" /></a>
                    <a href="https://github.com/akopton" target='_blank'><FaGithub className="github-icon contact-icon" /></a>
                </div>
                <a href={CV} download='CV_Aleksander_Koptoń' className="download-btn" >Download CV</a>
            </div>
            <form className="contact__form">
                <input
                    className="text-input"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className="text-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <textarea
                    className="text-input --message"
                    type="text"
                    placeholder="Write your message..."
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

        </div>
    )
}

export default Contact