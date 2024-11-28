import React from "react";
import classes from "./Category.module.css";
import { category } from "../../assets/products";

const Category = () => {
  return (
    <div className={classes.category__container}>
      {category.map((item) => (
        <div key={item.id} className={classes.category__wrapper}>
          <img src={item.image} alt="" />
          <div className={classes.category__info}>
            <h1>{item.title}</h1>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
