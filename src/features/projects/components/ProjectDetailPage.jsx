import { Link, useParams } from "react-router-dom";
import { Badge } from "../../../shared/components/ui/Badge";
import { projects } from "../data/projects";
import "./Projects.css";

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="project-detail project-detail--empty">
        <p>No encontramos ese proyecto.</p>
        <Link className="btn btn--ghost" to="/proyectos">
          Volver a proyectos
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="project-detail__inner">
        <Link className="project-detail__back mono" to="/proyectos">
          ← Volver a proyectos
        </Link>

        <div className="project-detail__cover-wrap">
          <img
            className="project-detail__cover"
            src={project.image}
            alt={`Captura de ${project.title}`}
          />
        </div>

        <div className="project-detail__body">
          <h1>{project.title}</h1>
          <p>{project.longDescription || project.description}</p>

          <div className="project-detail__tags">
            {project.skills.map((s) => (
              <Badge key={s} layer="backend">
                {s}
              </Badge>
            ))}
          </div>

          {project.gallery?.length > 0 && (
            <div className="project-detail__gallery">
              {project.gallery.map((src) => (
                <img key={src} src={src} alt="Captura adicional del proyecto" />
              ))}
            </div>
          )}

          <div className="project-detail__links">
            {/* Renderiza múltiples repositorios si existen */}
            {project.repos &&
              project.repos.map((repo, idx) => (
                <a
                  key={idx}
                  className="btn btn--primary"
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo: {repo.label}
                </a>
              ))}

            {/* Mantiene compatibilidad con el formato viejo si no hay arreglo */}
            {!project.repos && project.repoUrl && (
              <a
                className="btn btn--primary"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositorio
              </a>
            )}

            {project.demoUrl && (
              <a
                className="btn btn--ghost"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
