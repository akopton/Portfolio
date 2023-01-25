import { useState } from "react"
import { Gallery } from "./Gallery"
import { JiraPreview } from "./JiraPreview"
import ProjectCard from "./ProjectCard"
import projectsList from "./projectsList"

const Projects = ({ refs }) => {

    return (
        <div className="projects-section section" ref={refs.projects}>
            <h2 className="title">There are only few small projects done by myself for this moment, you can check them also on my <b>GitHub</b> profile.</h2>
            <div className="content">
                <ul className="projects-list">
                    {projectsList.filter(project => project.show).map((project, id) => {
                        return (
                            <ProjectCard project={project} id={id} />
                        )
                    })}
                </ul>
                <div className="main-project">
                    <span>And this is my big project which I'm working on recently.</span>
                    <span>Unfortunately, I can't share the code publicly, but here you can check its preview.</span>
                    {projectsList.filter(project => !project.show).map((project, id) => {
                        return <JiraPreview project={project} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects