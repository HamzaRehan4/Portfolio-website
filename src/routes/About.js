import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ContentAbout from "../components/ContentAbout";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="Scroll down to know more about me!" />
      <ContentAbout />
      <Footer />
    </div>
  );
};

export default About;
