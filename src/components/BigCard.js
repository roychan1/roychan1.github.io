import '../css/BigCard.css';
import { useEffect, useState } from 'react';


const TAGS_CONSTANTS = [
    {name: "ReactJS", color: "rgba(97, 219, 251, 0.7)"},
    {name: "React Native", color: "rgba(97, 151, 251, 0.7)"},
    {name: "JavaScript", color: "rgba(240, 240, 0, 0.7)"},
    {name: "HTML", color: "rgba(240, 145, 2, 0.7)"},
    {name: "CSS", color: "rgba(3, 70, 255, 0.7)"},
    {name: "Java", color: "rgba(255, 154, 46, 0.7)"},
    {name: "Swift", color: "rgba(252, 78, 15, 0.7)"},
    {name: "Node.js", color: "rgba(23, 230, 16, 0.7)"},
    {name: "AWS", color: "rgba(252, 198, 18, 0.7)"},
    {name: "MongoDB", color: "rgba(27, 135, 3, 0.7)"},
    {name: "Firebase", color: "rgba(245, 189, 5, 0.7)"},
    {name: "Google Cloud Storage", color: "rgba(5, 129, 245, 0.7)"},
    {name: "Tomcat", color: "rgba(209, 177, 17, 0.7)"},
    {name: "JQuery", color: "rgba(36, 112, 171, 0.7)"},
    {name: "MySQL", color: "rgba(192, 244, 252, 0.7"},
    {name: "Bootstrap", color: "rgba(139, 2, 250, 0.7)"}
]


export const BigCard = ({ info }) => {
    const { title, image, description, tags, link } = info;
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [additionalStyle, setAdditionalStyle] = useState();
    const [titleText, setTitleText] = useState(title);
    const [imageSource, setImageSource] = useState(image);
    const [descriptionText, setDescriptionText] = useState(description);
    const [tagsArray, setTagsArray] = useState(tags);
    const [linkText, setLinkText] = useState(link);

    const renderedTags = tagsArray.map((number) => {
        return <li className='card-tag' key={TAGS_CONSTANTS[number]["name"]} style={{backgroundColor: TAGS_CONSTANTS[number]["color"]}}>{TAGS_CONSTANTS[number]["name"]}</li>;
    })

    const goToLink = () => {
        if (linkText !== "")
            window.open(linkText);
    }

    const setNewCard = () => {
        setAdditionalStyle({"animationName": "inAnimation", "right": "0vw"});
        setTitleText(title);
        setImageSource(image);
        setDescriptionText(description);
        setTagsArray(tags);
        setLinkText(link);
    }

    useEffect(() => {
        if (!isInitialRender) {
            setAdditionalStyle({"animationName": "outAnimation", "right": "-70vw"});
        }
        setIsInitialRender(false);
    }, [title])          // eslint-disable-line

    return (
        <div className="card" style={additionalStyle} onAnimationEnd={setNewCard}>
            <div className='card-container'>
                <h2 className='card-title'>{titleText}</h2>
                <div className='card-subcontainer'>
                    <div className='card-image-container'>
                        {imageSource === "/images/React-icon.svg.png" ? 
                        <img className='card-image-react' alt='react-icon' src={window.location.origin + imageSource}/> : 
                        <img className='card-image' alt='project-thumbnail' src={window.location.origin + imageSource}/>}
                    </div>
                    <div className='card-description'>
                        <p className='card-description-text'>
                            {descriptionText}
                        </p>
                        <ul className='card-tag-list'>
                            {renderedTags}
                        </ul>
                        <div className='card-view-button' onClick={goToLink}>View</div>
                    </div>
                </div>
            </div>
        </div>
    );
}