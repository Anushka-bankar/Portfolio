// import "./Service.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import Services_Data from "../../assets/services_data.js";
// import arrow_icon from "../../assets/arrow_icon.svg";
// export const Service = () => {
//     return (
//         <div id="services" className="services">
//             <div className="services-title">
//                 <h1>My Services</h1>
//                 <img src={theme_pattern} alt="serices img" />
//             </div>
//             <div className="services-container">
//                 {Services_Data.map((service,index) => {
//                     return <div key={index} className="services-format">
//                         <h3>{service.s_no}</h3>
//                         <h2>{service.s_name}</h2>
//                         <p>{service.s_desc}</p>
//                         <div className="services-readmore">
//                             <p>Read More</p>
//                             <img src={arrow_icon} alt="" />
//                         </div>
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// };

import "./Service.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";

export const Service = () => {
    return (
        <div id="services" className="services">
             <div className="services-title">
                <h1>My <span>Skillset</span></h1>
                <img src={theme_pattern} alt="serices img" />
                <div className="services-container">
                    <li><FaReact /></li>
                    <li><IoLogoJavascript /></li>
                    <li><FaJava/></li>
                    <li><DiNodejs/></li>
                    <li><SiMongodb/></li>
                    <li><FaHtml5/></li>
                    <li><IoLogoCss3/></li>
                    <li><TbBrandCpp/></li>
                </div>
            </div>
        </div>
    )
}