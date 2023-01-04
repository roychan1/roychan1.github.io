import '../css/Projects.css';
import { BigCard } from './BigCard';
import { useState } from 'react';

const info = [
    {
        title: "Personal Website",
        image: "/images/React-icon.svg.png",
        description: "Welcome to my website! This site was written in ReactJS, to check out the source code, please click to \"view\" button below! Please also check out my other projects by clicking the titles on the left!",
        tags: [0, 2, 3, 4],
        link: "https://github.com/roychan1/roychan1.github.io"
    },
    {
        title: "Closet Mobile App (React Native)",
        image: "/images/closet-thumbnail.png",
        description: "(IN PROGRESS) A react native mobile app, served as a social media for sharing design, fashion, and other inspirations.",
        tags: [1, 2, 3, 4, 7, 9],
        link: "https://github.com/roychan1/Closet-React-Native"
    },
    {
        title: "Fabflix Webapp",
        image: "/images/fabflix-thumbnail.png",
        description: "A fullstack webapp for browsing and searching movies from different genres.",
        tags: [2, 3, 5, 8, 12, 13, 14, 15],
        link: "https://github.com/roychan1/Fabflix-Webapp"
    },
    {
        title: "Cloud Memo Mobile App (IOS)",
        image: "/images/cloud-memo-thumbnail.png",
        description: "An IOS app for note taking with cloud storage capability.",
        tags: [6, 10],
        link: "https://github.com/roychan1/Cloud-Memo-IOS"
    }
]

export const Projects = () => {
    const [projectSelected, setProjectSelected] = useState(info[0]);

    return (
        <div className='projects'>
            <div className='list-container'>
                <div className='list-line'/>
                <ul className='language-list'>
                    <li className='language-list-item' onClick={() => setProjectSelected(info[0])}>Personal Website</li>
                    <li className='language-list-item' onClick={() => setProjectSelected(info[1])}>Closet Mobile App (React Native)</li>
                    <li className='language-list-item' onClick={() => setProjectSelected(info[2])}>Fabflix Webapp</li>
                    <li className='language-list-item' onClick={() => setProjectSelected(info[3])}>Cloud Memo Mobile App (IOS)</li>
                </ul>
            </div>
            <BigCard info={projectSelected}/>
        </div>
    );
}