import React from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={classes.register__container}>
      <div className={classes.register__wrapper}>
        <form action="">
          <h1>Sign Up</h1>
          <div className={classes.input__box}>
            <input type="text" placeholder="Username" />
          </div>
          <div className={classes.input__box}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={classes.input__box}>
            <input type="password" placeholder="Password" />
          </div>
          <div className={classes.input__box}>
            <input type="tel" placeholder="Phone number" />
          </div>
          <div className={classes.input__box}>
            <input type="text" placeholder="Country" />
          </div>
          <div className={classes.register__agreement}>
            <label htmlFor="">
              <input type="checkbox" /> I agree to the <b>Terms</b> &{" "}
              <b>Privacy policy</b>
            </label>
          </div>
          <button type="submit">Create account</button>
          <div className={classes.login__link}>
            <p>
              Already have an account ?{" "}
              <Link to="/login">
                <b>Sign in</b>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
