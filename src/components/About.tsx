import { skills } from '../data/skills'
import type { SkillCategory } from '../types'
import SkillBadge from './SkillBadge'

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  Frontend: 'Frontend',
  'Backend & Cloud': 'Backend & Cloud',
  Tools: 'Tools',
}

const CATEGORY_ORDER: SkillCategory[] = ['Frontend', 'Backend & Cloud', 'Tools']

function About() {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    items: skills.filter((s) => s.category === category),
  }))

  return (
    <section className="bg-dark text-light" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        <h2 className="display-4 text-center mb-5" id="about-top">Sobre Mí</h2>

        <p className="lead text-center mx-auto mb-5 text-white-50" style={{ maxWidth: 720 }}>
          Soy un desarrollador fullstack apasionado por crear aplicaciones web y
          móviles de alta calidad. Me especializo en React, React Native y
          Node.js, combinando buenas prácticas de desarrollo, pruebas
          automatizadas y diseño responsive para construir productos que marcan
          la diferencia. Creo firmemente en el aprendizaje continuo y en
          compartir conocimiento con la comunidad.
        </p>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {grouped.map(
            (group) =>
              group.items.length > 0 && (
                <div key={group.category}>
                  <h5 className="fw-bold mb-3 text-light-emphasis">{group.label}</h5>
                  <div className="d-flex flex-wrap">
                    {group.items.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        category={skill.category}
                      />
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  )
}

export default About
