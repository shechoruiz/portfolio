import { render, screen } from '@testing-library/react'
import Projects from '../components/Projects'

describe('Projects', () => {
  it('renders section title', () => {
    render(<Projects />)
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
  })

  it('renders all three project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Gestor de Tareas')).toBeInTheDocument()
    expect(screen.getByText('API de Comercio Electrónico')).toBeInTheDocument()
    expect(screen.getByText('Dashboard Analytics')).toBeInTheDocument()
  })

  it('renders project section with id for anchor scrolling', () => {
    render(<Projects />)
    const section = document.querySelector('#projects-section')
    expect(section).toBeInTheDocument()
  })
})
