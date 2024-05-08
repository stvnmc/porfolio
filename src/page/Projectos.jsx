import React from "react";

import Project from "../components/Project";
import { projects } from "../components/data/proyects";

const Projectos = () => {
  return (
    <main>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
};

export default Projectos;
