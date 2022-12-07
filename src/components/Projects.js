import '../css/Projects.css';
import { BigCard } from './BigCard';
import { useState } from 'react';

const info = [
    {
        title: "Personal Website (ReactJs)",
        image: "",
        description: "Welcome to my website! This site was written in ReactJS, to check out the source code, please click to \"view\" button below! Please also check out my other projects by clicking the titles on the left!",
        tags: []
    },
    {
        title: "Closet Mobile App (React Native)",
        image: "",
        description: "Closet is the best!!!",
        tags: []
    },
    {
        title: "Cloud Memo Mobile App (IOS)",
        image: "",
        description: "This is cloud memo.",
        tags: []
    }
]

export const Projects = () => {
    const [projectSelected, setProjectSelected] = useState("Personal Website (ReactJs)");

    return (
        <div className='projects'>
            <div className='list-container'>
                <div className='list-line'/>
                <ul className='language-list'>
                    <li className='language-list-item' onClick={() => setProjectSelected("Personal Website (ReactJs)")}>Personal Website (ReactJs)</li>
                    <li className='language-list-item' onClick={() => setProjectSelected("Closet Mobile App (React Native)")}>Closet Mobile App (React Native)</li>
                    <li className='language-list-item' onClick={() => setProjectSelected("Cloud Memo Mobile App (IOS)")}>Cloud Memo Mobile App (IOS)</li>
                </ul>
            </div>
            <BigCard projectSelected={projectSelected}/>
        </div>
    );
}