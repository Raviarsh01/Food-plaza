import React from "react";
import AboutBanner from "../../components/about-banner";
import ThreeColumns from "../../components/three-columns.jsx";
import FourCards from "../../components/four-cards/index.jsx";

const About = () => {
  return (
    <>
      <AboutBanner />
      <ThreeColumns />
      <FourCards />
    </>
  );
};

export default About;
