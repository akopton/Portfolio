import { useEffect, useRef, useState } from "react"
import React from "react"
import skillsList from "../skillsList"
import SkillsRain from "./SkillsRain"
import CardRevealGame from "./CardRevealGame"

const Game = ({setShowSkills}) => {
    
    return (
        <div className="game-container">
            <CardRevealGame setShowSkills={setShowSkills}/>
            
        </div>
    )
}

export default Game