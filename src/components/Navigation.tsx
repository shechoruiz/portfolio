import { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre Mí', to: '/about' },
] as const

function Navigation() {
  const [expanded, setExpanded] = useState(false)

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
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse${expanded ? ' show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {NAV_ITEMS.map(({ label, to }) => (
              <li className="nav-item" key={`${label}-${to}`}>
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
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
