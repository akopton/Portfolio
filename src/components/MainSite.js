import React, { useEffect, useRef, useState } from "react";
import MainNav from "./MainNav";
import Welcome from "./Welcome";
import About from "./About";
import { FaCheck, FaTrashAlt, FaArrowUp } from 'react-icons/fa';
import Skills from "./Skills";
import Projects from "./Projects.js";
import Experience from "./Experience";
import Career from "./Career";
import Contact from "./Contact";

const MainSite = () => {
    const [showNav, setShowNav] = useState(false)
    const [showSite, setShowSite] = useState(false)
    const [showWelcome, setShowWelcome] = useState(false)
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsScrolledDown(true)
        } else {
            setIsScrolledDown(false)
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setShowSite(true)
        }, 500);

        setTimeout(() => {
            setShowWelcome(true)
        }, 1000);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    const refs = {
        welcome: useRef(),
        about: useRef(),
        skills: useRef(),
        projects: useRef(),
        experience: useRef(),
        career: useRef(),
        contact: useRef()
    }

    return (
        <div style={{ opacity: showSite ? '1' : '0', transition: '1.5s ease' }}>
            {showWelcome && <Welcome refs={refs} setShowNav={setShowNav} />}
            <MainNav showNav={showNav} refs={refs} />
            {
                showNav &&
                <>
                    <About refs={refs} />
                    <Skills refs={refs} />
                    <Projects refs={refs} />
                    <Experience refs={refs} />
                    <Contact refs={refs} />
                </>
            }

            <button
                className="go-up"
                style={{
                    bottom: isScrolledDown ? '20px' : '-40px',
                    transition: '.3s ease'
                }}
                onClick={() => {
                    refs.welcome.current.scrollIntoView({ behavior: 'smooth' }
                    )
                }}
            >
                <FaArrowUp />
            </button>
        </div>
    )
}

export default MainSite