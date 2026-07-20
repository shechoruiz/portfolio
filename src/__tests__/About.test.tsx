import { render, screen } from '@testing-library/react'
import About from '../components/About'

describe('About', () => {
  it('renders section title', () => {
    render(<About />)
    expect(screen.getByText('Sobre Mí')).toBeInTheDocument()
  })

  it('renders the bio paragraph', () => {
    render(<About />)
    expect(
      screen.getByText(/desarrollador fullstack/i),
    ).toBeInTheDocument()
  })

  it('renders category headings', () => {
    render(<About />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend & Cloud')).toBeInTheDocument()
    expect(screen.getByText('Tools')).toBeInTheDocument()
  })

  it('renders skill badges', () => {
    render(<About />)
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Git')).toBeInTheDocument()
  })

  it('renders skills with outline class', () => {
    render(<About />)
    const badge = screen.getByText('React.js')
    expect(badge).toHaveClass('badge-outline')
  })
})
