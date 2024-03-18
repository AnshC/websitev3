// import { Link } from "react-router-dom";
import "./styles.css";
import data from "../data/dev.json";
import { useEffect } from "react";

// Icon Imports
import { FaGithub } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Dev() {
  useEffect(() => {
    console.log(data.data);
  }, []);
  return (
    <div className="Dev">
      <h1 className="fancy">Development Portfolio</h1>
      <p>a collection of my development projects.</p>
      <div className="projects">
        {data.data.map((obj) => {
          return (
            <div className="year" key={obj.year}>
              <h1 className="fancy">{obj.year}</h1>
              <div className="row">
                {obj.projects.map((project) => {
                  return (
                    <Project
                      key={project.name}
                      name={project.name}
                      desc={project.description}
                      fw={project.frameworks}
                      gLink={project.gLink}
                      wLink={project.wLink}
                      display={project.picture}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Project(props) {
  return (
    <div className="Project">
      <div
        className="picture"
        style={{
          backgroundImage: `url('/img/dev/${props.display}')`,
        }}
      ></div>
      <div className="content">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <p style={{ fontSize: 10, color: 'var(--beige-active)', marginTop: 5 }}>{props.fw}</p>
        <div className="icons">
          <a className="" href={props.gLink}>
            <FaGithub className="icon" />
          </a>
          <a className="" href={props.wLink}>
            <FaGlobeAmericas className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
