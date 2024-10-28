import React from "react";
import Menu from "../../components/Menu/Menu";
import Slider from "../../components/Slider/Slider";
import Location from "../../components/Location/Location";
import BestSelling from "../../components/BestSeller/BestSeller";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProduct";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Menu />
      <Location />
      <BestSelling />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
