import React, { useEffect, useState } from "react";

const Project = ({ project, index }) => {
  const [trasform, setTrasform] = useState(0);

  let time = (index + 1) * 1000 + 5000;

  useEffect(() => {
    let currentTransform = 0;
    let reversa = false;

    const intervalId = setInterval(() => {
      if (!reversa) {
        currentTransform += 100;
        if (currentTransform > 300) {
          currentTransform = 200;
          reversa = true;
        }
      } else {
        currentTransform -= 100;
        if (currentTransform < 0) {
          currentTransform = 100;
          reversa = false;
        }
      }
      setTrasform(currentTransform);
    }, time);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="project">
      <div
        className="project-img"
        style={{
          transform: `translateX(-${trasform}%)`,
        }}
      >
        {Object.keys(project.img).map((key, j) => (
          <img key={j} src={project.img[key]} alt={project.title} />
        ))}
      </div>
      {/* <a href={project.link}> */}
      <div
        className="text"
        style={{ color: project.color, background: project.background }}
      >
        <h2>{project.title}</h2>
        <div>
          <p>{project.texto}</p>
          {<project.icon />}
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};

export default Project;
