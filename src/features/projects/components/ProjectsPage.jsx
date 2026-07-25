import { SectionTitle } from "../../../shared/components/ui/SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

export const ProjectsPage = () => {
  return (
    <section className="projects">
      <div className="projects__inner">
        <SectionTitle
          eyebrow="Proyectos"
          title="Cosas que he construido"
          description="Una selección de proyectos académicos y personales donde he aplicado desarrollo Full Stack, APIs REST y bases de datos."
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
