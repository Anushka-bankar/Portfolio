import "./Hero.css";
// import profile_img from "../../assets/profile_img.svg";
import me from "../../assets/me.png";
import Anushka_Bankar_Resume from "../../assets/Anushka_Bankar_Resume.pdf";
export const Hero = () => {
    return (
        <div id="home" className="hero">
            {/* <img src={profile_img} alt="profile img" /> */}
            <img src={me} alt="profile img" />
            <h1><span>I'm Anushka Bankar,</span> A FullStack Devloper</h1>
            <p>
                I am a passionate FullStack Developer with expertise in building dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to create seamless user experiences and efficient server-side solutions. My goal is to leverage my skills to contribute to innovative projects and continuously grow as a developer.
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <a href="#contact">Let's Connect</a>
                    </div>
                {/* <div className="hero-resume">
                    <a href={Anushka_Bankar_Resume} target="_blank" rel="noopener noreferrer">
                        My Resume
                    </a>
                </div> */}
                <div className="hero-resume">
                    <a
                        href={Anushka_Bankar_Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    )
};