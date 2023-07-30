import React, { useState } from "react";
import "./Navbarstyles.css";
import { Link } from "react-router-dom";
import About from "../routes/About";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click_icon, setClick_icon] = useState(false);
  const handleClickIcon = () => setClick_icon(!click_icon);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          <h1>Portofolio</h1>
        </Link>
        <ul className={click_icon ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClickIcon}>
          {click_icon ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
