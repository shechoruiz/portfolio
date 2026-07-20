import { render, screen } from '@testing-library/react'
import ProjectCard from '../components/ProjectCard'
import type { Project } from '../types'

const mockProject: Project = {
  id: 'test-proj',
  title: 'Test Project',
  description: 'A test project description',
  techStack: ['React', 'TypeScript'],
  projectUrl: 'https://test-project.netlify.app',
}

const mockProjectNoUrl: Project = {
  id: 'test-no-url',
  title: 'No URL Project',
  description: 'Project without URL',
  techStack: ['Node.js'],
}

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('renders tech stack badges', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders project link when projectUrl exists', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    const link = screen.getByText('Ver proyecto')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute(
      'href',
      'https://test-project.netlify.app',
    )
  })

  it('does not render link when projectUrl is missing', () => {
    render(<ProjectCard project={mockProjectNoUrl} index={0} />)
    expect(screen.queryByText('Ver proyecto')).not.toBeInTheDocument()
  })

  it('applies card-dark class', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    const card = document.querySelector('.card')
    expect(card).toHaveClass('card-dark')
  })

  it('renders initials placeholder', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    expect(screen.getByText('TP')).toBeInTheDocument()
  })
})
