import { useEffect, useState } from "react"
import React from "react"
import gameStart from "./cards"


const CardRevealGame = ({setShowSkills}) => {
    const [grid, setGrid] = useState(gameStart.cards)
    const [previousClick, setPreviousClick] = useState()
    const [isGameWon, setIsGameWon] = useState(false)
    const [shouldCardsShuffle, setShouldCardsShuffle] = useState(false)


    useEffect(()=>{
        gameStart.shuffle(grid)
    },[shouldCardsShuffle])


    const handleCardClicked = (rowIndex, colIndex) => {
        const clickedNumber = grid[rowIndex][colIndex].number
        grid[rowIndex][colIndex].isRevealed = true
        
        if (previousClick) {
            const previousClickNumber = grid[previousClick.row][previousClick.col].number
            if (previousClickNumber !== clickedNumber) {
                setTimeout(()=>{
                    grid[rowIndex][colIndex].isRevealed = false 
                    grid[previousClick.row][previousClick.col].isRevealed = false
                    setGrid([...grid])
                }, 500)
            }
            setPreviousClick(undefined)
        } else {
            setPreviousClick({
                row: rowIndex,
                col: colIndex
            })
        }
        checkWin()
    }


    const checkWin = () => {
        const isGridCorrect = new Array(grid.length).fill(false)
        grid.forEach((row, rowId) => {
            if (row.every(el => el.isRevealed)) isGridCorrect[rowId] = true
        })
        if (isGridCorrect.every(el => el === true)) {
            setTimeout(()=>{
                setIsGameWon(true)
            },200)

            setTimeout(()=>{
                setShowSkills(true)
            },750)
        }
    }

    const clearGame = () => {
        setIsGameWon(false)
        grid.forEach(row => {
            row.forEach(el => el.isRevealed = false)
        })
        setShouldCardsShuffle(!shouldCardsShuffle)
    }

    return (
        <div className="card-reveal-game">
            {grid.map((row, rowIndex)=>{
                return <div className="card-reveal-game__row" key={rowIndex}>
                            {
                                row.map((col, colIndex) => {
                                return <div 
                                            className="card"
                                            style={grid[rowIndex][colIndex].isRevealed ? 
                                                    {transform:'rotateY(360deg)', transition: 'transform .3s ease'} 
                                                : 
                                                    {transform:'rotateY(0deg)', transition: 'transform .3s ease'}
                                            }
                                            key={colIndex}
                                            onClick={()=> {
                                                if (grid[rowIndex][colIndex].isRevealed) return
                                                handleCardClicked(rowIndex, colIndex)
                                            }}
                                        >
                                            {grid[rowIndex][colIndex].isRevealed ? <img className='card__image' src={col.img}/> : <></>}
                                        </div>
                                })
                            }
                        </div>
            })}
            <div 
                className="card-reveal-game__winning-screen" 
                style={{
                    height: isGameWon ? '110%' : '0',
                    width: isGameWon ? '110%' : '0',
                    transition: 'all .3s ease'
                }}
            >
                {isGameWon &&
                    <>
                        <span className="win-alert">Congratulations,<br/>you won!</span>
                        <button 
                            onClick={clearGame}
                            className="restart-button"
                        >
                            Try again
                        </button>
                    </>
                }
            </div>
        </div>
    )
}

export default CardRevealGame