import { Link } from 'react-router-dom'
import { Badge } from '../../../shared/components/ui/Badge'

export const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <Link className="project-card__thumb" to={`/proyectos/${project.id}`}>
        <img
          src={project.image}
          alt={`Captura de ${project.title}`}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.parentElement.classList.add('project-card__thumb--empty')
          }}
        />
        <span className="project-card__thumb-label mono">Ver detalle</span>
      </Link>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__tags">
          {project.skills.map((s) => (
            <Badge key={s} layer="frontend">
              {s}
            </Badge>
          ))}
        </div>
        <div className="project-card__links">
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
