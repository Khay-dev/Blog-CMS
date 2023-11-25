import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="copy">Copyright © CK-BlOGS 2023 </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/uju-chinedum/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://github.com/Uju-Chinedum">
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
