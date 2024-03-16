import { FcGlobe } from 'react-icons/fc';
import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="m-top flex-col">
      <div className="redes-sociales">
        <p>contactarme por:</p>
        <div className="redes">
          <a href="https://www.linkedin.com/in/julian-aguilar-" target="_blank">
            <RxLinkedinLogo />
          </a>
          <a href="https://github.com/lobonjulian" target="_blank">
            <RxGithubLogo />
          </a>
          <a href="https://jl-portfolio-cv.netlify.app/" target="_blank">
            <FcGlobe />
          </a>
        </div>
      </div>

      <div className="footer-text">
        <p>creado por Julian Aguilar </p>
        <p> 2024 - {date} </p>
      </div>
    </footer>
  );
};

export default Footer;
