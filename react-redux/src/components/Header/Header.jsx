import React from "react";
import classes from "./Header.module.css";
import { GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import LowerHeader from "../LowerHeader/LowerHeader";

const Header = () => {
  return (
    <>
      <div className={classes.header__container}>
        <div className={classes.header__wrapper}>
          <div className={classes.header__left}>
            <h1>ALL-IN-ALL</h1>
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
            <p className={classes.header__menu}>Register</p>
            <p className={classes.header__menu}>Login</p>
            <div className={classes.header__menu}>
              <LuShoppingCart size={35} />
              <span className={classes.cart__badge}>0</span>
            </div>
          </div>
        </div>
      </div>
      <LowerHeader />
    </>
  );
};

export default Header;
