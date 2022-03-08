import ProjectItem from "./ProjectItem";
import style from "./Project.module.css";
import { Fragment } from "react";

const Project = (props) => {
  let projectList = <h2>No Project.</h2>;

  if (props.projects.length > 0) {
    projectList = (
      <ul>
        {props.projects.map((project) => (
          <ProjectItem
            key={project.key}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          ></ProjectItem>
        ))}
      </ul>
    );
  }

  return (
    <Fragment>
      <div className={style.container}>
        <h2 className={style.title}> Projects </h2>
        {projectList}
      </div>
    </Fragment>
  );
};

export default Project;
