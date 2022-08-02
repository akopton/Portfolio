import React from "react";

const Experience = () => {
    return (
        <section id="experience" className="experience__wrap">
            <h2>My experience</h2>
            <div className="experience">
                <div className="text-wrap experience__main-text">
                    <p>
                        Currently there is not much for this moment.<br></br>
                        I'm during my 3-month internship as<br></br>
                        Front-End Developer at ARRIS AGENCY<br></br>
                        ending on 12.08.2022r.

                        <span className="desktop">
                            You can check my projects below on GitHub section!
                        </span>
                    </p>
                </div>
                <div className="text-wrap experience__aside-text">
                    <p>
                        In current work I'm working with HTML, CSS, pure JavaScript and Git with GitLab. Also I have opportunity to work together with UI/UX designers.<br></br>
                        <br></br>Besides that I'm learning at home for my own, all of the 3 previous technologies, and additionally started with React which I really liked!
                    </p>
                </div>
            </div>
            <h3 className="mobile">
                You can check my projects below on GitHub section!
            </h3>
        </section>
    )
}

export default Experience;