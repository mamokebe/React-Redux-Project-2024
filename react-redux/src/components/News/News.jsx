import React from "react";
import classes from "./News.module.css";
import { IoIosSend } from "react-icons/io";

const News = () => {
  return (
    <div className={classes.news__container}>
      <h1>News </h1>
      <div className={classes.news__desc}>
        what's fresh and new: updates you don't want to miss
      </div>
      <div className={classes.input__container}>
        <input type="email" placeholder="Your email" />
        <button>
          <IoIosSend size={30} />
        </button>
      </div>
    </div>
  );
};

export default News;
