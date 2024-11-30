import React from "react";
import classes from "./Category.module.css";
import { category } from "../../assets/products";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className={classes.category__container}>
      {category.map((item) => (
        <div key={item.id} className={classes.category__wrapper}>
          <img src={item.image} alt="" />
          <div className={classes.category__info}>
            <h1>{item.title}</h1>
            <Link to="/product">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
