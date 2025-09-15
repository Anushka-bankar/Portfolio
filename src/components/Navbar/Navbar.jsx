import "./Navbar.css";
import logo_1 from "../../assets/logo_1.png";
export const Navbar = () => {

    // const [menu, setMenu] = useState(false);

    return (
        <div className="navbar">
            <img src={logo_1} className="logo" alt="logo img" />
            
            <ul className="nav-menu">
                <li><a href="#">Home</a> </li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-connect"><a href="#contact">Connect With Me</a></div>
        </div>
    )
};