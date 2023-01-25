import { RiTeamLine } from "react-icons/ri"
import { SiJira, SiJavascript } from "react-icons/si"
import { FaFigma, FaRegKeyboard, FaDocker, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa"
import { AiOutlineGitlab } from "react-icons/ai"
import { FiMonitor } from "react-icons/fi"
import { MdOutlineMouse, MdOutlineDesignServices } from 'react-icons/md'
import { BiRightArrowAlt } from 'react-icons/bi'



const Experience = ({ refs }) => {

    return (
        <div className="experience-section section" ref={refs.experience}>
            <h2 className="experience-section__title">Just a little, but still...</h2>
            <div className="subsection" style={{ marginLeft: '200px' }}>
                <h3 className="subsection__title">I had opportunity to work in professional environment with:</h3>
                <div className="items-wrapper">
                    <span className='subsection__item'><BiRightArrowAlt className="arrow" /> team of 10+ people <RiTeamLine className="icon" /></span>
                    <span className='subsection__item'><BiRightArrowAlt className="arrow" /> designers for UI concepts <MdOutlineDesignServices className="icon" /></span>
                    <span className='subsection__item'><BiRightArrowAlt className="arrow" /> other developers <FaRegKeyboard className="icon" /><FiMonitor className="icon" /><MdOutlineMouse className="icon" /></span>
                </div>
            </div>

            <div className="subsection" style={{ marginLeft: '400px' }}>
                <h3 className="subsection__title">As a team we were using:</h3>
                <div className="items-wrapper">
                    <span className="subsection__item"><BiRightArrowAlt className="arrow" /> Jira to plan our tasks <SiJira className="icon" /></span>
                    <span className="subsection__item"><BiRightArrowAlt className="arrow" /> Figma for visual projects <FaFigma className="icon" /></span>
                    <span className="subsection__item"><BiRightArrowAlt className="arrow" /> Gitlab to hold project's repos <AiOutlineGitlab className="icon" /></span>
                </div>
            </div>

            <div className="subsection" style={{ marginLeft: '600px' }}>
                <h3 className="subsection__title">And of course for development: </h3>
                <div className="items-wrapper">
                    <span className="subsection__item"><BiRightArrowAlt className="arrow" /> JavaScript, HTML, CSS <SiJavascript className="icon" /><FaHtml5 className="icon" /><FaCss3Alt className="icon" /></span>
                    <span className="subsection__item"><BiRightArrowAlt className="arrow" /> PHP and Twig<FaPhp className="icon" /></span>
                    <span className="subsection__item"><BiRightArrowAlt className="arrow" /> Docker <FaDocker className="icon" /></span>
                </div>
            </div>

        </div>
    )
}

export default Experience