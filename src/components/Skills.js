import { useState, useRef } from "react"
import Game from "./gameComponents/Game"
import SkillsRain from "./gameComponents/SkillsRain"

const Skills = ({refs}) => {
    const [showSkills, setShowSkills] = useState(false)
    const raindropRef = useRef()

    return (
        <div 
            className="skills-section section" 
            ref={refs.skills}
        >
            <div className="top-row">
                <Game setShowSkills={setShowSkills}/>
                <div className="game-description">
                    To introduce you my skills, first you have to show me how you can handle my game ;)
                    <br/>
                    Click on the tile to reveal a card.
                    <br/>
                    You have to make pairs with 2 cards with same pictures.
                    <br/>
                    Pair all cards together to show what I've learned so far!
                </div>
            </div>
                <div className="bottom-row">
                {showSkills && 
                    <SkillsRain raindropRef={raindropRef}/>
                }
            </div>
        </div>
    )
}

export default Skills