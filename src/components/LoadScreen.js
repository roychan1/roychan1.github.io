import { useEffect } from 'react';
import '../css/LoadScreen.css';

export const LoadScreen = ({loadPercentage, ready}) => {
    useEffect(() => {
        if (ready) {
            document.getElementById("load-screen").style.visibility = "hidden";
        }
    }, [ready])

    return (
        <div id="load-screen">
            <div className="circle-outer" style={{background: `conic-gradient(white ${(loadPercentage / 100) * 360}deg, transparent ${(loadPercentage / 100) * 360}deg 360deg)`}}>
                {loadPercentage < 100 && <span className="status-text">Loading 3D model...</span>}
                {loadPercentage === 100 && <span className="status-text">Setting up...</span>}
                <div className="circle-inner"/>
            </div>
            <span style={{fontWeight: 300, fontSize: 13, marginTop: '10px'}}>{loadPercentage}%</span>
        </div>
    );
}