import MainNav from "./MainNav"
import '../assets/images/my-photo.jpeg';
import DynamicText from "./DynamicText";
import { useEffect, useState } from "react";

const Welcome = ({setShowNav, refs}) => {
    const [isTextRendered, setIsTextRendered] = useState(false)

    useEffect(() => {
        if (isTextRendered) {
            setTimeout(() => {
                setShowNav(true)
            }, 100);
        }
    }, [isTextRendered])

    const desktopText = `Welcome to my page! Hope that you will get to know me better and like the page I made! I'm starting Front-end Developer with a little experience behind me. On the right you can choose which section you want to check.`
    
    return (
        <div className="welcome-section section" ref={refs.welcome}>
            <div className="welcome-section__photo">
                <span className="photo-title">Hello! I'm Aleksander</span>
                <div className="photo" />
            </div>
            <div className="welcome-section__desc">
                <DynamicText text={desktopText} setIsTextRendered={setIsTextRendered}/>
            </div>
        </div>
    )
}

export default Welcome