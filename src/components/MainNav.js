import { useEffect, useState } from "react"

const MainNav = ({ showNav, refs }) => {
    const handleClick = (ref, e) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div
            className="main-nav"
            style={showNav ?
                {
                    width: '270px',
                    padding: '0 20px 0 20px',
                    transition: 'all .3s ease'
                }
                :
                {
                    width: '0',
                    padding: '0',
                    transition: 'all .3s ease'
                }
            }
        >
            {showNav &&
                <ul className="main-nav__list">
                    <li className="item" onClick={() => handleClick(refs.about)}>About me</li>
                    <li className="item" onClick={() => handleClick(refs.skills)}>Skills</li>
                    <li className="item" onClick={() => handleClick(refs.projects)}>Projects</li>
                    <li className="item" onClick={() => handleClick(refs.experience)}>Experience</li>
                    <li className="item" onClick={() => handleClick(refs.contact)}>Contact</li>
                </ul>
            }
        </div>
    )
}

export default MainNav