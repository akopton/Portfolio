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
                            <h3><a href={project.title} target="_blank">Todo List</a></h3>
                            <div className="preview-image"><img src={project.preview}></img></div>
                            <p>{project.technologies}</p>
                            <p><a href={project.repo} target="_blank">GitHub Link</a></p>
                        </div>
                    )
                })}
                {/* <div className="projects__card --calculator">
                    <h3><a></a></h3>
                    <p>website link</p>
                    <div>Project preview</div>
                    <p>Technologies used</p>
                    <p>Github link</p>
                </div>
                <div className="projects__card --todoList">
                    <h3><a href={this.state.todoList.link} target="_blank">Todo List</a></h3>
                    <div>Project preview</div>
                    <p>Technologies used</p>
                    <p>Github link</p>
                </div>
                <div className="projects__card --contactForm">
                    <h3>Project title</h3>
                    <div>Project preview</div>
                    <p>Technologies used</p>
                    <p>Github link</p>
                </div>
                <div className="projects__card --notes">
                    <h3>Project title</h3>
                    <div>Project preview</div>
                    <p>Technologies used</p>
                    <p>Github link</p>
                </div> */}
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