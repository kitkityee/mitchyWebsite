import style from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className={style.header}>Mit.ch</div>
      <div className={style.aboutme}>
        <h2>About Me</h2>
        <p class="description">
          My name is Mitch, I am a Sys Admin/Cloud Engineer located in Brighton,
          England. <br></br>
          <br></br>
          This site documents various personal projects including software and
          web development, hardware projects, and some things relating to my
          work.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Header;
