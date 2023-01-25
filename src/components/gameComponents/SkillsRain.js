
import { useState, useEffect } from "react"
import skillsList from "../skillsList"
import RainDrop from "./RainDrop"

const SkillsRain = ({raindropRef}) => {
    const [currentElementIndex, setCurrentElementIndex] = useState(0)
    const [isRendering, setIsRendering] = useState(false)

    useEffect(() => {
        if (!isRendering && currentElementIndex < skillsList.length) {
            setIsRendering(true)
            setTimeout(() => {
                setIsRendering(false)
                setCurrentElementIndex(currentElementIndex + 1)
            }, 1000)
        }
    }, [currentElementIndex, isRendering, skillsList])

    return (
        <div
            className="rain"
        >
            {skillsList.map((skill, index) => {
                return (
                        <div key={index}>
                            {index <= currentElementIndex ? <RainDrop key={index} index={index} skill={skill} currentElementIndex={currentElementIndex} raindropRef={raindropRef}/> : null}
                        </div>
                )
            })}
        </div>
    )
}

export default SkillsRain