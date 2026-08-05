import { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n'

function Navigation() {
  const [expanded, setExpanded] = useState(false)
  const { t, lang, setLang } = useLanguage()

  const navItems = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/about' },
  ]

  const handleNavClick = useCallback(() => {
    setExpanded(false)
  }, [])

  const handleContactClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      setExpanded(false)
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    },
    [],
  )

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand"
          onClick={handleNavClick}
        >
          <span className="font-monospace fs-3 fw-bold">SR</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label={t.nav.toggleAriaLabel}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse${expanded ? ' show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navItems.map(({ label, to }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                  onClick={handleNavClick}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={handleContactClick}
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>

          <div
            className="btn-group btn-group-sm ms-3 mt-2 mt-lg-0"
            role="group"
            aria-label={t.nav.languageSelectorAriaLabel}
          >
            <button
              type="button"
              className={`btn ${lang === 'es' ? 'btn-accent' : 'btn-outline-light'}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <button
              type="button"
              className={`btn ${lang === 'en' ? 'btn-accent' : 'btn-outline-light'}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
