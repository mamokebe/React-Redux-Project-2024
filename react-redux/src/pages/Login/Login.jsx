import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.login__container}>
      <div className={classes.login__wrapper}>
        <form action="">
          <h1>Sign In</h1>
          <div className={classes.input__box}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={classes.input__box}>
            <input type="password" placeholder="Password" />
          </div>
          <div className={classes.remember__forgot}>
            <label htmlFor="">
              <input type="checkbox" /> Remember me
            </label>
            <a href="/#">Forgot password</a>
          </div>
          <button type="submit">Login</button>
          <div className={classes.register__link}>
            <p>
              Don't have an account ? click{" "}
              <Link to="/register">
                <strong>Register</strong>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
