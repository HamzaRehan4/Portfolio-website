import React from "react";
import Navbar from "../components/Navbar";
import Infopage from "../components/Infopage";
import Footer from "../components/Footer";
import "../components/Homestyles.css";

const Home = () => {
  return (
    <div className="hello">
      <Navbar />
      <Infopage />
      <Footer />
    </div>
  );
};

export default Home;
