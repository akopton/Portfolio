import { useState } from 'react'
import photo1 from '../assets/images/desktop/description-update.png'
import photo2 from '../assets/images/desktop/expired-popup.png'
import photo3 from '../assets/images/desktop/filter-tasks.png'
import photo4 from '../assets/images/desktop/find-task.png'
import photo5 from '../assets/images/desktop/logowanie.png'
import photo6 from '../assets/images/desktop/main-site.png'
import photo7 from '../assets/images/desktop/new-task-form.png'
import photo8 from '../assets/images/desktop/opened-task.png'
import photo9 from '../assets/images/desktop/pick-date.png'
import photo10 from '../assets/images/desktop/rejestracja-krok1.png'
import photo11 from '../assets/images/desktop/rejestracja-krok2.png'
import photo12 from '../assets/images/desktop/status-update.png'
import photo13 from '../assets/images/desktop/users-list.png'

const photoArr = [photo5, photo10, photo11, photo6, photo3, photo4, photo2, photo8, photo7, photo9, photo13, photo12, photo1]

export const Gallery = () => {
    const [currentId, setCurrentId] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'prev') {
            if (currentId < 1) {
                setCurrentId(photoArr.length - 1)
            } else setCurrentId(currentId - 1)
        } else if (direction === 'next') {
            if (currentId > photoArr.length - 2) {
                setCurrentId(0)
            } else setCurrentId(currentId + 1)
        }
    }

    return (
        <div className="photo-gallery">
            <div className='button left' onClick={() => handleClick('prev')} />
            {photoArr.map((el, id) => {
                return currentId === id &&
                    <div className='photo'>
                        <img src={el} />
                    </div>
            })}
            <div className='button right' onClick={() => handleClick('next')} />
        </div>
    )
}