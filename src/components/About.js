import React from "react";
import CV from '../../src/assets/CV_Aleksander_Koptoń_EN.pdf';

const About = () => {
    return (
        <section className="about__wrap">
            <div className="about__name">
                <h1>I'm Aleksander</h1>
            </div>
            <div className="container--flex">
                <div className="about__main-photo">
                </div>
                <div className="about__content">
                    <p>
                        My story started 2 years ago when I went to College for the Computer Science.  
                    <br></br>
                    <br></br>
                        I was learning there languages like C# or C++, but it inspired me to go my own way, and then I started to learn Front-end technologies overtime.
                    </p>
                    <div className="content__buttons-wrap">
                        <a href={CV} download  className="btn--inverted">Download CV</a>
                        <a href="#contact" className="btn">Let's Talk</a>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default About;