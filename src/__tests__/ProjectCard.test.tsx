import { render, screen } from '@testing-library/react'
import ProjectCard from '../components/ProjectCard'
import { LanguageProvider } from '../i18n'
import type { Project } from '../types'

const mockProject: Project = {
  id: 'test-proj',
  title: { es: 'Test Project', en: 'Test Project' },
  description: {
    es: 'A test project description',
    en: 'A test project description',
  },
  techStack: ['React', 'TypeScript'],
  projectUrl: 'https://test-project.netlify.app',
}

const mockProjectNoUrl: Project = {
  id: 'test-no-url',
  title: { es: 'No URL Project', en: 'No URL Project' },
  description: {
    es: 'Project without URL',
    en: 'Project without URL',
  },
  techStack: ['Node.js'],
}

function renderCard(project: Project, index = 0) {
  return render(
    <LanguageProvider>
      <ProjectCard project={project} index={index} />
    </LanguageProvider>,
  )
}

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    renderCard(mockProject)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('renders tech stack badges', () => {
    renderCard(mockProject)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders project link when projectUrl exists', () => {
    renderCard(mockProject)
    const link = screen.getByText('Ver proyecto')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute(
      'href',
      'https://test-project.netlify.app',
    )
  })

  it('does not render link when projectUrl is missing', () => {
    renderCard(mockProjectNoUrl)
    expect(screen.queryByText('Ver proyecto')).not.toBeInTheDocument()
  })

  it('applies card-dark class', () => {
    renderCard(mockProject)
    const card = document.querySelector('.card')
    expect(card).toHaveClass('card-dark')
  })

  it('renders initials placeholder', () => {
    renderCard(mockProject)
    expect(screen.getByText('TP')).toBeInTheDocument()
  })
})
