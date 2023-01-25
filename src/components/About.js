import Game from "./gameComponents/Game"
import SkillsRain from "./gameComponents/SkillsRain"
import skillsList from "./skillsList"
import { useState, useRef } from "react"
import { faBasketball } from "@fortawesome/free-solid-svg-icons"
import { FaBasketballBall, FaBicycle, FaCar, FaCarAlt, FaCarSide, FaCloud, FaDog, FaGamepad, FaKeyboard, FaMouse, FaTableTennis, FaWrench } from "react-icons/fa"

const About = ({ refs }) => {
    const handleClick = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className="about-section section" data-nav='about' ref={refs.about}>
            <div className="left side">
                <h2>Here you can learn some things about me...</h2>
                <p>I'm a young guy that likes learning new things, especially when it comes to move some brain cells to work.</p>
                <p>I went to college to get some motivation, and I found one!</p>
                <p>Unfortunately, there wasn't much that would steal my heart and that was the step to take matters into my own hands.</p>
                <p>All of my tech stack I learned by myself overtime - reading documentation, making smaller projects and sometimes YouTube videos, you can check it in my <span onClick={() => handleClick(refs.skills)}>Skills</span> section.</p>
                <p>Also I already have my first experience in professional environment behind me from college internship - you can check what I've learned in <span onClick={() => handleClick(refs.experience)}>Experience</span> section.</p>
                {/* <p>I started my adventure when I went to college some time ago and the only thing I knew was that I want to try programming but didn't know which way I'd like to go</p>
                <p>It showed me that I really like it, but none of technologies they were teaching us stole my heart, and then I got to know what web development is.</p>
                <p>Slowly started to learn by myself - first HTML and CSS, after that it was time to learn some JavaScript and I spent some time with these 3.</p>
                <p>Not much time ago I had opportunity to get internship from college with these 3 technologies, but more about that you can find in <b>Experience</b> section.</p>
                <p>Obviously I didn't stop on learning, now there are plenty more technologies that I'm using for every day, you can check them here <b>Skills</b></p> */}
            </div>
            <div className="right side">
                <h2>But not only programming is in my life...</h2>
                <div className="tiles-wrapper">
                    <div className="sports-tile tile">
                        <h3 className="tile-title">Sports</h3>
                        <div className="tile-icons"><FaBasketballBall style={{ color: 'orange' }} /><FaTableTennis /><FaBicycle /></div>
                        <div className="tile-content">
                            <p>I'm a big fan of active spending my free time.</p>
                            <p>Half of my life I spent on riding bike - especially in its extreme ways.</p>
                            <p>Regularly playing squash now.</p>
                        </div>
                    </div>
                    <div className="sports-tile tile">
                        <h3 className="tile-title">Automotive</h3>
                        <div className="tile-icons"><FaCloud /><FaCarSide style={{ color: 'rgb(255, 70, 50)' }} /><FaWrench style={{ color: 'grey' }} /></div>
                        <div className="tile-content">
                            <p>I'm in love in every aspect of cars - from mechanics, through tuning and just driving car to car events.</p>
                        </div>
                    </div>
                    <div className="sports-tile tile">
                        <h3 className="tile-title">Computer games</h3>
                        <div className="tile-icons"><FaMouse style={{ color: 'grey' }} /><FaKeyboard /><FaGamepad /></div>
                        <div className="tile-content">
                            <p>I'm playing games to relax, I'm in my world when playing, and also I really like competition.</p>
                        </div>
                    </div>
                    <div className="sports-tile tile">
                        <h3 className="tile-title">Dogs</h3>
                        <div className="tile-icons">
                            <FaDog style={{ color: 'brown' }} />
                            <FaDog style={{ color: 'brown' }} />
                            <FaDog style={{ color: 'brown' }} />
                        </div>
                        <div className="tile-content">
                            I like long walks and the peace that comes with it.
                            I adopted two dogs from shelter, unfortunately they are not with me anymore, but always in my heart!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About