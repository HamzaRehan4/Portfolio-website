import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Cards from "../components/Cards";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my development is shown as" />
      <WorkCard />
      <Cards />
      <Footer />
    </div>
  );
};

export default Project;
