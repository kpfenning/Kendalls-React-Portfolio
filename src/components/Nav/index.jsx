import React from "react";
import { Link } from 'react-scroll';




function Nav({ onPageChange }) {
  const changePage = (page) => {
    onPageChange(page);
  };

  return (
    <nav className= 'navbar'>
      <div className="links">
        <Link to="About" onClick={() => changePage('About')}>
          Home
        </Link>
        <Link to="About" onClick={() => changePage('About')}>
          About Me
        </Link>

        <Link to="Portfolio" onClick={() => changePage('Portfolio')}>
          Portfolio
        </Link>

        <Link to="Contact" onClick={() => changePage('Contact')}>
          Contact
        </Link>
        
      </div>
    
    </nav>
  );
}

export default Nav;
