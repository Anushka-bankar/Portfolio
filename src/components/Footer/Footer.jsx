import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About text */}
        <p className="footer-text">
          “Thank you for visiting my portfolio. I’m passionate about learning,
          building, and contributing to impactful projects. Let’s connect and
          create something meaningful together!”
        </p>


        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="https://github.com/Anushka-bankar"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="https://www.linkedin.com/in/anushka-bankar-25897a289/"><FaLinkedin /></a>
          <a href="https://instagram.com/" target="_blank" rel="https://www.instagram.com/anushkab_77"><FaInstagram /></a>
        </div>

        {/* Bottom text */}
        <p className="footer-bottom">© {new Date().getFullYear()} Anushka Bankar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
