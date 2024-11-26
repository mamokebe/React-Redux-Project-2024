import React, { useState } from "react";
import classes from "./Slider.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { sliderItems } from "../../assets/products";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideHandling = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className={classes.slider__container}>
      <div
        className={classes.arrow}
        direction="left"
        onClick={() => slideHandling("left")}
      >
        <IoMdArrowDropleft className={classes.icon} />
      </div>
      <div
        className={classes.slider__wrapper}
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => {
          return (
            <div
              key={item.id}
              className={classes.slide}
              style={{ backgroundColor: `#${item.bg}` }}
            >
              <div className={classes.img__container}>
                <img src={item.image} alt="" />
              </div>
              <div className={classes.info__container}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button>Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={classes.arrow}
        direction="right"
        onClick={() => slideHandling("right")}
      >
        <IoMdArrowDropright className={classes.icon} />
      </div>
    </div>
  );
};

export default Slider;
