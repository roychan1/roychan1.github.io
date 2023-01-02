import '../css/CustomFooter.css';

export const CustomFooter = () => {
    return (
        <footer>
            <div className="about-me">
                <div className="profile">
                    <div className="description">
                        <span style={{fontWeight: 700, fontSize: '30px'}}>ROY CHAN</span>
                        <span>Welcome to my website! I am a 4th year computer science B.S. student at University of California, Irvine. Currently I am looking for a full time software engineer position in California. I have experience using frameworks such as React, React Native, Swift, etc. with projects you can find here and more!</span>
                        <span>A little about myself... I was born in Hong Kong and moved to the U.S. at the age of 11 and have lived in the bay area ever since! I enjoy playing badminton and watching anime in my free time, tell me all about your anime recommendations! (hopefully I haven't watched it already)</span>
                        <span>To contact me, please use the social medias and email address I have provided below, thanks!</span>
                    </div>
                    <div className="picture">
                        <img alt="face" src="images/face.png" className="icon"></img>
                    </div>
                </div>
                <div className="social">
                    <div className="linkedin" onClick={() => {window.open("https://www.linkedin.com/in/roy-chan-093677167/")}}>
                        <img alt="linkedin" src="images/linkedin.png" />
                        <span>LinkedIn</span>
                    </div>
                    <div className="github" onClick={() => {window.open("https://github.com/roychan1")}}>
                        <img alt="github" src="images/github.png" />
                        <span>GitHub</span>
                    </div>
                    <div 
                        className="email" 
                        onClick={() => {
                            navigator.clipboard.writeText("roychc1@gmail.com");
                            document.getElementById("notification").style.animation="fade 4s ease";
                        }}
                        onAnimationEnd={() => {
                            document.getElementById("notification").style.animation=""; 
                        }}
                    >
                        <img alt="email" src="images/email.png" />
                        <span>roychc1@gmail.com</span>
                    </div>
                </div>
                <div id="notification">Email address copied!</div>
            </div>
        </footer>
    );
}