import style from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className={style.header}>Mitlan</div>
      <div className={style.aboutme}>
        <h2>About Me</h2>
        <p class="description">
          My name is Mitch,
          this site documents various personal projects including software and
          web development, hardware projects, and some other bits.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Header;
