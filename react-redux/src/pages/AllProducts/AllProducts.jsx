import React from "react";
import Products from "../../components/Products/Products";
import { allProducts } from "../../assets/products";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AllProducts = () => {
  return (
    <>
      <Header />
      <Products items={allProducts} heading={"All Products"} />
      <Footer />
    </>
  );
};

export default AllProducts;
