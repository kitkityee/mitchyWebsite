import style from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className={style.header}>Mit.ch</div>
      <div className={style.aboutme}>
        <h2>About Me</h2>
        <p>My name is Mitch, this site documents my various projects</p>
        <p>
          ("Design" by me, site by <a href="http://kityee.uk">Kit</a>)
        </p>
      </div>
    </React.Fragment>
  );
};

export default Header;
