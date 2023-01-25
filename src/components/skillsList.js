import typescript from '.././assets/images/typescript-logo.png';
import javascript from '.././assets/images/javascript-1.svg';
import nodejs from '.././assets/images/nodejs-logo.svg';
import react from '.././assets/images/react-2.svg';
import git from '.././assets/images/git-icon.svg';
import html from '.././assets/images/html-1.svg';
import mongodb from '.././assets/images/mongodb-logo.svg';
import css from '.././assets/images/css-3.svg';

const skillsList = [
    {
        name: 'JavaScript',
        img: javascript,
        desc: 'Good knowledge. Mainly using it with React, and less but still with NodeJS.',
    },
    {
        name: 'HTML5',
        img: html,
        desc: `Good knowledge. As a fundamental language in front-end development I think that I can say I feel confident with it.`,
    },
    {
        name: 'CSS3',
        img: css,
        desc: 'Good knowledge. Using it with SCSS preprocessor and mainly with BEM methodology.',
    },
    {
        name: 'React',
        img: react,
        desc: 'Everyday getting better and better. Using as a main library for my projects.'
        // desc: `Made few simple projects and every single day feeling better with working with it. Currently I'm working on one bigger - some kind of simpler Jira copy.`
    },
    {
        name: 'TypeScript',
        img: typescript,
        desc: `Basic knowledge. For now I'm using its basic concepts but still learning.`
        // desc: `Basic knowledge. As a consequence of learning JavaScript and React, without being left behind with current technologies, I made friends with TS. For now I'm using its basic concepts but I'm trying to learn more and more.`
    },
    {
        name: 'GIT',
        img: git,
        desc: `Basic/good knowledge. I'm using GIT with GitHub on private, but worked with GitLab in a professional environment.`
    },
    {
        name: 'NodeJS',
        img: nodejs,
        desc: `Basic knowledge. For now I've only made one small back-end server with this, but it's working and not crashing.`
    },
    {
        name: 'MongoDB',
        img: mongodb,
        desc: `Basic knowdledge. Needed it for "Jira copy" project. Feeling good with CRUD operations.`
    },
]


export default skillsList