import React from "react";

function Footer() {

    // Replace links with social media profiles
    const icons = [
      {
        name: "fab fa-github",
        link: "https://github.com/kpfenning"
      },
      {
        name: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/kendall-pfenning-a244a01a9"
      },

    ]
  
    return (
      <footer className=" px-1">
        <div className="footer-container">
        <h3> You can find me here:</h3>
        <div className="icon-container">
          {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
          )}
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;