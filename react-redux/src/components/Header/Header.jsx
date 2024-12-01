import React from "react";
import classes from "./Header.module.css";
import { GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import LowerHeader from "../LowerHeader/LowerHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  //updating the total number of cart display
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;
  return (
    <>
      <div className={classes.header__container}>
        <div className={classes.header__wrapper}>
          <div className={classes.header__left}>
            <Link to="/">
              <h1>ALL-IN-ALL</h1>
            </Link>
          </div>

          <div className={classes.header__middle}>
            <div className={classes.search__container}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search" />
              <GoSearch size={25} />
            </div>
            <select name="" id="">
              <option value="">EN</option>
              <option value="">SP</option>
              <option value="">AM</option>
              <option value="">AO</option>
            </select>
          </div>

          <div className={classes.header__right}>
            <Link to="/register">
              <p className={classes.header__menu}>Register</p>
            </Link>
            <Link to="/login">
              <p className={classes.header__menu}>Login</p>
            </Link>
            <div className={classes.header__menu}>
              <LuShoppingCart size={35} />
              {/* {totalItems > 0 && (
                <span className={classes.cart__badge}>{totalItems}</span>
              )} */}
              {totalItems ? (
                <span className={classes.cart__badge}>{totalItems}</span>
              ) : (
                <span className={classes.cart__badge}>0</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <LowerHeader />
    </>
  );
};

export default Header;
