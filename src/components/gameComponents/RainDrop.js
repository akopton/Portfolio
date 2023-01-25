import { useEffect, useState, useRef } from "react"
import DynamicText from "../DynamicText"
import skillsList from "../skillsList"

const RainDrop = ({index, skill, randomNumber, raindropRef}) => {
    const [shouldType, setShouldType] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setShouldType(true)
        }, 600)
    },[])

    return (
        <div     
            className="raindrop"
            key={index}
            ref={raindropRef}
        >
            <div className="raindrop__image"><img src={skill.img}/></div>
            {shouldType ? <DynamicText text={skill.desc} randomNumber={randomNumber} index={index}/> : <div style={{width: '100%'}}></div>}
        </div>
    )
}

export default RainDrop