import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
// import about_profile from "../../assets/about_profile.svg"
import me from "../../assets/me.png"
export const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="about img" />
            </div>
            <div className="about-sec">
                <div className="about-left">
                    {/* <img src={about_profile} alt="" /> */}
                    <img src={me} alt="profile img" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a Full Stack Developer who loves turning ideas into interactive digital experiences. For me, coding is more than just writing logic — it’s about crafting smooth user journeys, bringing designs to life, and building products that feel both powerful and effortless. Whether it’s a sleek frontend or a rock-solid backend, I enjoy weaving technology and creativity together.</p>
                        <p>Outside of the code editor, I’m a curious learner who’s always exploring new tools, frameworks, and possibilities. I see every project as a story waiting to be told through design and functionality, and I aim to make each one a little better than the last. My mission? To build applications that not only work flawlessly but also leave a lasting impression.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{width:"75%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p> <hr style={{width:"80%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>JAVAScript</p> <hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>SQL</p> <hr style={{width:"80%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Node JS</p> <hr style={{width:"50%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achive">
                <div className="about-achiv">
                    <h1>A Fresher</h1>
                </div>
                <hr />
                <div className="about-achiv">
                    <h1>5+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
            </div>
        </div>
    );
};

