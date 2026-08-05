import type { Project } from '../types'
import { pick, useLanguage } from '../i18n'

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
  const { t, lang } = useLanguage()
  const color = GRADIENT_COLORS[index % GRADIENT_COLORS.length]
  const title = pick(project.title, lang)
  const initials = getInitials(title)

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
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-white-50 flex-grow-1">
          {pick(project.description, lang)}
        </p>

        <div className="mb-3 d-flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="badge badge-outline">
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
            {t.projectCard.viewProject}
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
