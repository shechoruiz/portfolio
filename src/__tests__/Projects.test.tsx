import { render, screen } from '@testing-library/react'
import Projects from '../components/Projects'
import { LanguageProvider } from '../i18n'

function renderProjects() {
  return render(
    <LanguageProvider>
      <Projects />
    </LanguageProvider>,
  )
}

describe('Projects', () => {
  it('renders section title', () => {
    renderProjects()
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
  })

  it('renders all project cards', () => {
    renderProjects()
    expect(screen.getByText('Colombia Match Predictor')).toBeInTheDocument()
    expect(screen.getByText('Shelf — E-commerce Multi-tenant')).toBeInTheDocument()
    expect(screen.getByText('Gestor de Tareas')).toBeInTheDocument()
    expect(screen.getByText('API de Comercio Electrónico')).toBeInTheDocument()
    expect(screen.getByText('Dashboard Analytics')).toBeInTheDocument()
  })

  it('renders project section with id for anchor scrolling', () => {
    renderProjects()
    const section = document.querySelector('#projects-section')
    expect(section).toBeInTheDocument()
  })
})
