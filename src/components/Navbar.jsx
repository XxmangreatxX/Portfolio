// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1 id="logo">My Portfolio</h1>
      <ul className="navigation-items">
        <li className="navigation-item"><Link to="/">Home</Link></li>
        <li className="navigation-item"><Link to="/projects">Projects</Link></li>
        <li className="navigation-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;