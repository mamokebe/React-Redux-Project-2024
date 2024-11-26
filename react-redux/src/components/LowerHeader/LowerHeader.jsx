import React from "react";
import classes from "./LowerHeader.module.css";

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <h1>Your prime with reward</h1>
      <h1>Welcome offer 20% off</h1>
      <h1>Free Return </h1>
      <h1>Free Delivery</h1>
    </div>
  );
};

export default LowerHeader;
