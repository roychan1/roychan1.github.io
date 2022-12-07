import '../css/BigCard.css';
import { useEffect, useState } from 'react';

const DEFAULT_CARD_DESCRIPTION_1 = "Welcome to my website! This site was written in ReactJS, to check out the source code, please click to \"view\" button below!";
const DEFAULT_CARD_DESCRIPTION_2 = "Please also check out my other projects by clicking the titles on the left!";

const goToLink = ({ link }) => {
    window.open("https://github.com/roychan1");
}

export const BigCard = ({ projectSelected }) => {
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [additionalStyle, setAdditionalStyle] = useState();
    const [title, setTitle] = useState(projectSelected);
    const setNewCard = () => {
        setAdditionalStyle({"animationName": "inAnimation", "right": "0vw"});
        setTitle(projectSelected);
    }

    useEffect(() => {
        if (!isInitialRender) {
            setAdditionalStyle({"animationName": "outAnimation", "right": "-70vw"});
        }
        setIsInitialRender(false);
    }, [projectSelected])          // eslint-disable-line

    return (
        <div className="card" style={additionalStyle} onAnimationEnd={setNewCard}>
            <div className='card-container'>
                <h2 className='card-title'>{title}</h2>
                <div className='card-subcontainer'>
                    <div className='card-image-container'>
                        <img className='card-image' alt='react-icon' src={require('../assets/img/React-icon.svg.png')}/>
                    </div>
                    <div className='card-description'>
                        <p className='card-description-text'>
                            {DEFAULT_CARD_DESCRIPTION_1}
                            <br/><br/>
                            {DEFAULT_CARD_DESCRIPTION_2}
                        </p>
                        <div className='card-view-button' onClick={goToLink}>View</div>
                    </div>
                </div>
            </div>
        </div>
    );
}