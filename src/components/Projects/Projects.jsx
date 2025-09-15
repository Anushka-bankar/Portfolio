import "./Project.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"
export const Projects = () => {
    return (
        <div id="project" className="projects">
            <div className="project-title">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="theme img" />
            </div>
            <div className="project-container">
                {mywork_data.map((work, idx) => {
                    return (
                    <div key={idx} className="project-box">
                        <img src={work.w_img} alt="project_img" />
                        <p>{work.w_name}</p>
                    </div>
                    );
                })}
            </div>

            <div className="project-show_more">
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow_img" />
            </div>
        </div>
    );
};