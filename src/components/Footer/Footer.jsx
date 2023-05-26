import "./Footer.css";

import logoEmail from "../../assets/logo_email.png";
import logoGithub from "../../assets/logo_github.png";
import logoInstagram from "../../assets/logo_instagram.png";
import logoLinkedin from "../../assets/logo_linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Created with love 💕 by Brisna Páez for Rock The Code.</p>
      </div>

      <div className="icon-rrss">
        <a href="https://github.com/Brisnayu" target="_blank">
          <img src={logoLinkedin} alt="icon-linkedin" />
        </a>
        <a
          href="https://www.linkedin.com/in/brisna-a-paez-m-283934154"
          target="_blank"
        >
          <img src={logoGithub} alt="icon-github" />
        </a>
        <a href="https://www.instagram.com/mini_hera_/" target="_blank">
          <img src={logoEmail} alt="icon-email" />
        </a>
        <a href="mailto:brisnapaez25@gmail.com" target="_blank">
          <img src={logoInstagram} alt="icon-instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
