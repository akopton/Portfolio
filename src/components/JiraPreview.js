import { useState } from "react"
import { Gallery } from "./Gallery"
import photo from '../assets/images/desktop/main-site.png'


export const JiraPreview = (props) => {
    const [showGallery, setShowGallery] = useState(false)


    return (
        <div className="preview-wrap">
            <h3 className="preview-title">{props.project.title}</h3>
            <div className="preview-photo" onClick={() => setShowGallery(true)}>
                <img src={photo} />
            </div>
            <div className="preview-gallery">
                {showGallery && <Gallery />}
            </div>
            <div className="preview-desc">
                <span>Technologies used:</span>
                <span className="tech">ReactJS</span>
                <span className="tech">TypeScript</span>
                <span className="tech">HTML</span>
                <span className="tech">CSS</span>
                <span className="tech">Node.JS</span>
                <span className="tech">MongoDB</span>
            </div>
            {showGallery && <div className="gallery-blur"><div className="close-btn" onClick={() => setShowGallery(false)} /></div>}
        </div>
    )
}