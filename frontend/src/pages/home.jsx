import React from "react";

import Banner from "../components/banner";
import BrowseMenu from "../components/browse-menu";
import WelcomeRestauramt from "../components/welcome-restaurant";
import ExpertChef from "../components/expert-chef";
import FoodDelivery from "../components/food-delivery";
import ReviewSlider from "../components/review-slider";

const Home = () => {
  return (
    <>
      <Banner />
      <BrowseMenu />
      <WelcomeRestauramt />
      <ExpertChef />
      <FoodDelivery />
      <ReviewSlider />
    </>
  );
};

export default Home;
