const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer flex-col">
      <div className="redes-sociales">
        <p>contactarme por:</p>
        <div className="redes">
          <a href="https://www.linkedin.com/in/julian-aguilar-" target="_blank">
            Linkedin 
          </a>
          <a href="https://github.com/lobonjulian" target="_blank">
            Github 
          </a>
          <a href="hhttps://jl-portfolio-cv.netlify.app/" target="_blank">
            Globe 
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
