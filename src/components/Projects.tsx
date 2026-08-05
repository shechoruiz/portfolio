import { projects } from '../data/projects'
import { useLanguage } from '../i18n'
import ProjectCard from './ProjectCard'

function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects-section" className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="display-4 text-center mb-5">{t.projects.title}</h2>

        {projects.length === 0 ? (
          <p className="text-center text-muted fs-5">{t.projects.comingSoon}</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="col">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
