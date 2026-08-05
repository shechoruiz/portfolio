import { experiences } from '../data/experience'
import { pick, useLanguage } from '../i18n'

function Experience() {
  const { t, lang } = useLanguage()

  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="display-4 text-center mb-5">{t.experience.title}</h2>

        <div className="row">
          {experiences.map((exp, index) => {
            const role = pick(exp.role, lang)
            const period = pick(exp.period, lang)
            const highlights = exp.highlights.map((highlight) =>
              pick(highlight, lang),
            )
            return (
              <div key={exp.id} className="col-12 timeline-item mb-4">
                <div className="row">
                  <div className="col-md-3 mb-2 mb-md-0">
                    <small className="text-white-50">{period}</small>
                  </div>
                  <div className="col-md-9">
                    <div className="border-start border-accent border-4 ps-3">
                      <h5 className="fw-bold mb-0">{exp.company}</h5>
                      <p className="text-white-50 mb-2" style={{ fontSize: '0.9rem' }}>
                        {role}
                      </p>
                      <ul className="mb-0 text-white-50">
                        {highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < experiences.length - 1 && <hr className="mt-4 mb-0 border-secondary" />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
