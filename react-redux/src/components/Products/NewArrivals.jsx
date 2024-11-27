import React from "react";
import Products from "./Products";
import { newArrivals } from "../../assets/products";

const NewArrivals = () => {
  return (
    <>
      <Products items={newArrivals} heading={"New Arrivals"} />
    </>
  );
};

export default NewArrivals;
