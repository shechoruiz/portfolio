import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  index: number
}

const GRADIENT_COLORS = ['#4A90D9', '#50C878', '#FF6B6B']

function getInitials(title: string): string {
  return title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const color = GRADIENT_COLORS[index % GRADIENT_COLORS.length]
  const initials = getInitials(project.title)

  return (
    <div
      className="card card-dark h-100 shadow-sm fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className="card-img-top d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}dd)`,
          height: 180,
        }}
      >
        <span
          className="fw-bold text-white"
          style={{ fontSize: '2.5rem', fontFamily: 'var(--bs-heading-font-family)' }}
        >
          {initials}
        </span>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text text-white-50 flex-grow-1">{project.description}</p>

        <div className="mb-3">
          {project.techStack.map((tech) => (
            <span key={tech} className="badge badge-outline me-1">
              {tech}
            </span>
          ))}
        </div>

        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-sm align-self-start"
          >
            Ver proyecto
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
