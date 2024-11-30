import React from "react";
import classes from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { footerLinks } from "../../assets/products";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import payment from "../../assets/images/payment.png";

const Footer = () => {
  return (
    <div className={classes.top}>
      <div className={classes.footer__container}>
        <div className={classes.footer__left}>
          <h1>ALL-IN-ALL</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            praesentium minima ratione ipsa numquam incidunt dolor.
          </p>
          <div className={classes.social__container}>
            <div
              className={classes.social__icon}
              style={{ backgroundColor: "#3b5999" }}
            >
              <FaFacebook style={25} />
            </div>
            <div
              className={classes.social__icon}
              style={{ backgroundColor: "#55acee" }}
            >
              <FaInstagram style={25} />
            </div>
            <div
              className={classes.social__icon}
              style={{ backgroundColor: "#3b5999" }}
            >
              <CiTwitter style={25} />
            </div>
            <div
              className={classes.social__icon}
              style={{ backgroundColor: "#55acee" }}
            >
              <FaPinterest style={25} />
            </div>
          </div>
        </div>

        <div className={classes.footer__middle}>
          <h3> Links</h3>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.id}>{link.title} </li>
            ))}
          </ul>
        </div>

        <div className={classes.footer__right}>
          <h3>Contact</h3>
          <div className={classes.contact__item}>
            <FaLocationDot style={{ marginRight: "10px" }} />
            123 street, city
          </div>
          <div className={classes.contact__item}>
            <FaPhoneAlt style={{ marginRight: "10px" }} />
            +123456789
          </div>
          <div className={classes.contact__item}>
            <IoMdMail style={{ marginRight: "10px" }} />
            email@gmail.com
          </div>
          <img src={payment} alt="" />
        </div>
      </div>
      <hr />
      <div className={classes.login_footer_copy}>
        <p>
          {" "}
          Copyright &copy;2024 all right reserved, all-in-all.com, Inc. or its
          affiliates
        </p>
      </div>
    </div>
  );
};

export default Footer;
