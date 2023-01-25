import { useState } from "react"

const ProjectCard = ({project, id}) => {
    const [switchContent, setSwitchContent] = useState(false)
    const [changeIndex, setChangeIndex] = useState(false)

    const handleSwitch = () => {
        setSwitchContent(!switchContent)
        setTimeout(() => {
            setChangeIndex(!changeIndex)
        }, 500);
    }

    return (
        <li key={id} className="project-card">
        
                            {
                                project.show ? 
                                <a href={project.link} target="_blank" className="project-card__title"><h3>{project.title}</h3></a>
                                :
                                <h3>{project.title}</h3>
                            }
                            <div className="project-card__content-wrapper">
                                <img 
                                    src={project.preview} 
                                    className={switchContent ? 'project-image animated' : 'project-image normal'} 
                                    onClick={handleSwitch}
                                    style={{
                                        zIndex: changeIndex ? '0' : '1'
                                    }}
                                />
                                <ul 
                                    className={switchContent ? 'project-tech animated' : 'project-tech normal'} 
                                    onClick={handleSwitch}
                                    style={{
                                        zIndex: changeIndex ? '1' : '0'
                                    }}
                                >
                                    {project.technologies.map((el, idx) => {
                                        return (
                                            <li key={idx}>
                                                {el}
                                            </li>
                                        )
                                    })}
                                    {!project.isDone && <span>*not finished</span>}
                                </ul>
                            </div>
                        </li>
    )
}

export default ProjectCard