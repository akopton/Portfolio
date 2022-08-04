import React from "react";
import projects from "./projects";

class Github extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calulator: '',
            todoList: {
                link: 'https://akopton.github.io/Todo-list' 
            }, 
        }
    }



    render() {
        return (
            <section id="github" className="github__wrap">
            <h2>My projects</h2>

            <div className="projects__carousel">
                {[...projects].map(project => {
                    return (
                        <div className="projects__card">
                            <h3><a href={project.link} target={project.link === '#' ? "_self" : "_blank"}>{project.title}</a></h3>
                            <div className={project.preview === '' ? "preview-coming-soon" : project.link === '#' ? "preview-in-progress" : "preview-image"}><img src={project.preview}></img></div>
                            <p>{project.technologies}</p>
                        </div>
                    )
                })}
            </div>
            <div className="swipe">
                <div className="swipe__arrow">
                    <div className="arrow__body"></div>
                    <div className="arrow__head">
                        <div className="head__part --top"></div>
                        <div className="head__part --bottom"></div>
                    </div>
                </div>
                <p className="swipe__text">Swipe to see more!</p>
            </div>
        </section>
        )
    }
}

export default Github;