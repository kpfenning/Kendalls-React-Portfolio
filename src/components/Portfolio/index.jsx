import React from "react";
import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Tackle-Times',
      description: 'Keep up with your favorite NFL teams!',
      link: "https://tackle-a6362ae6d6c7.herokuapp.com/Links to an external site.",
      repo: "https://github.com/kpfenning/Tackle-Times"
    },
    {
      name: 'Oh-Ive-Seen-That',
      description: 'A movie search engine where you can keep track of your favorite movies!',
      link: "https://jcwarwick.github.io/Group2-Project/",
      repo: "https://github.com/jcwarwick/Group2-Project"
    },
    {
      name: 'Catnip-Chronicles',
      description: 'React game',
      link: "https://github.com/dsatpm/catnip-chronicles",
      repo: "https://github.com/dsatpm/catnip-chronicles"
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        <div className="portfolio-container"> 
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;