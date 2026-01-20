"use client";

import { ReactNode, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";
import AnimatedTitle from "../AnimatedTitle";
import { createProjectIcon } from "../../lib/utils";
import projectsData from "../../data/projects.json";
import type { ProjectData } from "../../lib/types";

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  url?: string;
  icon: ReactNode;
  images?: string[];
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = (projectsData as unknown as ProjectData[]).map(
    (project) => ({
      id: project.id,
      title: project.title,
      subtitle: project.subtitle,
      description: project.description,
      url: project.url,
      icon: createProjectIcon(project),
      images: project.images,
    })
  );

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <AnimatedTitle text="Projects" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            url={project.url}
            icon={project.icon}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          description={selectedProject.description}
          url={selectedProject.url}
          icon={selectedProject.icon}
          images={selectedProject.images}
        />
      )}
    </section>
  );
}

export default Projects;
