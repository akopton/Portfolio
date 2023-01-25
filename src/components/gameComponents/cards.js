import typescript from '../../assets/images/typescript-logo.png';
import javascript from '../../assets/images/javascript-1.svg';
import nodejs from '../../assets/images/nodejs-logo.svg';
import react from '../../assets/images/react-2.svg';
import git from '../../assets/images/git-icon.svg';
import html from '../../assets/images/html-1.svg';
import mongodb from '../../assets/images/mongodb-logo.svg';
import css from '../../assets/images/css-3.svg';


const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}

const cards = shuffle([
    shuffle([
        {number: 0, img: typescript, isRevealed: false},
        {number: 4, img: nodejs, isRevealed: false}, 
        {number: 5, img: html, isRevealed: false},
        {number: 2, img: react, isRevealed: false} 
    ]),
    shuffle([
        {number: 1, img: css, isRevealed: false}, 
        {number: 7, img: git, isRevealed: false}, 
        {number: 4, img: nodejs, isRevealed: false},
        {number: 3, img: mongodb, isRevealed: false}
    ]),
    shuffle([
        {number: 6, img: javascript, isRevealed: false}, 
        {number: 3, img: mongodb, isRevealed: false}, 
        {number: 2, img: react, isRevealed: false}, 
        {number: 0, img: typescript, isRevealed: false}
    ]),
    shuffle([
        {number: 5, img: html, isRevealed: false}, 
        {number: 6, img: javascript, isRevealed: false}, 
        {number: 1, img: css, isRevealed: false}, 
        {number: 7, img: git, isRevealed: false}
    ]),
])

const gameStart = {cards: cards, shuffle: shuffle}

export default gameStart