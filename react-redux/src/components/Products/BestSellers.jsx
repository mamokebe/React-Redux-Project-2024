import React from "react";
import Products from "./Products";
import { bestsellers } from "../../assets/products";

const BestSellers = () => {
  return (
    <>
      <Products items={bestsellers} heading={"Best sellers"} />
    </>
  );
};

export default BestSellers;
