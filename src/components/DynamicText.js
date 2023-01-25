import { useEffect, useState } from "react";

const DynamicText = ({ text, setIsTextRendered }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex == letters.length && setIsTextRendered) setIsTextRendered(true)
    }, 50)
    
    const letters = text.split('')
    const currentLetter = letters.slice(0, currentIndex)
    
    return (
        <div className="dynamic-text__container">
            <span className="text">
                {currentLetter}
                <span className={currentIndex >= letters.length ? 'cursor blink' : 'cursor'}>|</span>
            </span>
        </div>
    )
}

export default DynamicText