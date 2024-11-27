import React from "react";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import NewArrivals from "../../components/Products/NewArrivals";
import BestSellers from "../../components/Products/BestSellers";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Category />
      <NewArrivals />
      <BestSellers />
    </>
  );
};

export default Home;
