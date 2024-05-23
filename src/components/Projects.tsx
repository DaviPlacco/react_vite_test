import React, { useState, useEffect } from 'react';
import projectsData from '../../public/data/projects.json'; // Não é necessário usar '../' para subir um nível de diretório

const ProjectCarousel: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Definindo os projetos no estado
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <h2>Meus Projetos</h2>
      <div className="carousel">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <button>{project.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
