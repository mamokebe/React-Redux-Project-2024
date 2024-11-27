import React from "react";
import classes from "./Products.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Products = ({ items, heading }) => {
  return (
    <div>
      <h1 className={classes.heading}>{heading}</h1>
      <div className={classes.products__container}>
        {items.map((item) => {
          return (
            <div key={item.id} className={classes.product__wrapper}>
              <img src={item.image} alt="" />
              <div className={classes.product__desc}>
                <p>{item.name}</p>
                <span>{`$${item.priceCents / 100}`}</span>
              </div>
              <div className={classes.product__info}>
                <button className={classes.icon}>
                  <CiShoppingCart />
                  Add to cart
                </button>
                <button className={classes.icon}>
                  <CiSearch />
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
