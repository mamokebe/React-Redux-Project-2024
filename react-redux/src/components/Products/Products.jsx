import React from "react";
import classes from "./Products.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Products = ({ items, heading }) => {
  const dispatch = useDispatch();
  const addToCartHandling = (item) => {
    dispatch(addToCart(item));
  };

  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };
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
                <button
                  className={classes.icon}
                  onClick={() => addToCartHandling(item)}
                >
                  <CiShoppingCart />
                  Add to cart
                </button>
                <button
                  className={classes.icon}
                  onClick={() => handleViewDetails(item.id)}
                >
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
