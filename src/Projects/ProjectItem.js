import style from "./ProjectItems.module.css";
import { Fragment } from "react";

const ProjectItem = (props) => {
  const clickItemHandler = () => {
    window.location.replace(props.link);
  };

  return (

      <li className={style.bounce} onClick={clickItemHandler} key={`${props.name}`}>
      <span className={style.tiptext}>Click to go the project</span>
      <div className={style.imgbox}>
        <img src={props.image} />
      </div>
      <div className={style.wordbox}>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
      </div>
    </li>

  );
};

export default ProjectItem;
