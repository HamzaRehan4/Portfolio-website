import "./CardsStyles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- What You Will Get? -</h3>
          <span className="bar"></span>
          <p>- Responsive Design -</p>
          <p>- Attractive UI -</p>
          <p>- Friendly Interface -</p>
          <Link to="/contact" className="btn">
            Contact Now
          </Link>
        </div>

        <div className="card">
          <h3>- What You Will Get? -</h3>
          <span className="bar"></span>
          <p>- Fast Loading Time -</p>
          <p>- Clear Visuals and Graphics -</p>
          <p>- Security Features -</p>
          <Link to="/contact" className="btn">
            Contact Now
          </Link>
        </div>

        <div className="card">
          <h3>- What You Will Get? -</h3>
          <span className="bar"></span>
          <p>- Navigation Menu -</p>
          <p>- Homepage with Clear Call-to-Action -</p>
          <p>- Security Features -</p>
          <Link to="/contact" className="btn">
            Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
