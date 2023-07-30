import "./workCardstyles.css";
import React from "react";
import pro1 from "../assets/picc2.png";
import pro2 from "../assets/picc3.png";
import pro3 from "../assets/react3.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="project screenshot" />
          <h2 className="project-title">E-Commerce Store</h2>
          <div className="pro-details">
            <p>
              This e-commerce store is developed using HTML, CSS, JavaScript and
              ReactJs. The data is fetched through an API, enabling customers to
              access a diverse array of products and enjoy a smooth shopping
              journey. The website allows users to browse and purchase items.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://github.com/HamzaRehan4/E-commerce-Project"
                className="btn"
              >
                View Source Code
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro3} alt="project screenshot" />
          <h2 className="project-title">Pizza-Menu</h2>
          <div className="pro-details">
            <p>
              A captivating front page for a pizza menu using React, showcasing
              enticing visuals and an intuitive user interface. Users can
              explore a variety of mouthwatering pizza options and interact with
              a responsive design that enhances their browsing experience..
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://github.com/HamzaRehan4/Apparel-Recommender"
                className="btn"
              >
                View Source Code
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro2} alt="project screenshot" />
          <h2 className="project-title">E-Learning Platform</h2>
          <div className="pro-details">
            <p>
              The Apparel Recommendation System utilizes reverse image search
              technology. By allowing users to upload images of apparel, the
              website then showcases the five most closely related images to aid
              in finding visually similar clothing items. This system provides a
              convenient and efficient way for users to discover and explore
              relevant fashion choices.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://github.com/HamzaRehan4/E-commerce-Project"
                className="btn"
              >
                View Source Code
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro2} alt="project screenshot" />
          <h2 className="project-title">E-Learning Platform</h2>
          <div className="pro-details">
            <p>
              The Apparel Recommendation System utilizes reverse image search
              technology. By allowing users to upload images of apparel, the
              website then showcases the five most closely related images to aid
              in finding visually similar clothing items. This system provides a
              convenient and efficient way for users to discover and explore
              relevant fashion choices.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://github.com/HamzaRehan4/E-commerce-Project"
                className="btn"
              >
                View Source Code
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
