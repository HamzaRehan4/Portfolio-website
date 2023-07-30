import "./infopagestyles.css";
import React from "react";
import pic4 from "../assets/pic4.avif";
import { Link } from "react-router-dom";

const Infopage = () => {
  return (
    <div className="info">
      <div className="mask">
        <img className="into-img" src={pic4} alt="hello"></img>
      </div>
      <div className="content">
        <p>Hi, I'M A FRONT END DEVELOPER.</p>
        <Link to="/project" className="btn">
          My Projects
        </Link>
        <Link to="/contact" className="btn-btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Infopage;
