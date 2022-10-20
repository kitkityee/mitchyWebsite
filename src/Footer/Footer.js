import style from "./Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={style.footer}>
        <p>
        Made by Mitch and <a href="http://kityee.uk">Kit</a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
