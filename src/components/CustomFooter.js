import '../css/CustomFooter.css';

export const CustomFooter = () => {
    return (
        <footer>
            <div className="about-me">
                <div className="profile">
                    <div className="description">
                        <span style={{fontWeight: 700, fontSize: '30px', marginBottom: '1em'}}>ROY CHAN</span>
                        <p>Welcome to my website! I am a 4th year computer science B.S. student at University of California, Irvine. Currently I am looking for a full time software engineer position in California. I have experience using frameworks such as React, React Native, Swift, etc. with projects you can find here and more!</p>
                        <p>A little about myself... I was born in Hong Kong and moved to the U.S. at the age of 11 and have lived in the bay area ever since! In my free time, I like to play badminton, watch anime, and occasionally learn some new skills!</p>
                        <p>To contact me, please use the social medias and email address I have provided below, thanks!</p>
                    </div>
                    <div className="picture">
                        <img alt="face" src="images/portrait.jpg" className="icon"></img>
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
                            navigator.clipboard.writeText("roychan.jobs@gmail.com");
                            document.getElementById("notification").style.visibility="visible";
                            document.getElementById("notification").style.animation="fade 4s ease";
                        }}
                    >
                        <img alt="email" src="images/email.png" />
                        <span>roychan.jobs@gmail.com</span>
                    </div>
                </div>
                <div
                    id="notification"
                    onAnimationEnd={() => {
                                document.getElementById("notification").style.animation="";
                                document.getElementById("notification").style.visibility="hidden";
                            }}
                >
                    Email address copied!
                </div>
            </div>
        </footer>
    );
}