import "./footerstyles.css";

import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Sector i-10.
            </h4>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +923115241629
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              hamzarehan4623@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>You can contact me at my LinkedIn:</h4>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/hamza-rehan-170494268/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
          <h4>My Github:</h4>
          <a
            href="https://github.com/HamzaRehan4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={40}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
