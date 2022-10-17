import style from "./ProjectItems.module.css";

const ProjectItem = (props) => {
  const clickItemHandler = () => {
    window.location.replace(props.link);
  };

  return (

      <li className={style.bounce} onClick={clickItemHandler} key={`${props.name}`}>
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
