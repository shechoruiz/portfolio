import { render, screen } from '@testing-library/react'
import About from '../components/About'
import { LanguageProvider } from '../i18n'

function renderAbout() {
  return render(
    <LanguageProvider>
      <About />
    </LanguageProvider>,
  )
}

describe('About', () => {
  it('renders section title', () => {
    renderAbout()
    expect(screen.getByText('Sobre Mí')).toBeInTheDocument()
  })

  it('renders the bio paragraph', () => {
    renderAbout()
    expect(
      screen.getByText(/desarrollador de software apasionado/i),
    ).toBeInTheDocument()
  })

  it('renders category headings', () => {
    renderAbout()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend y Cloud')).toBeInTheDocument()
    expect(screen.getByText('Herramientas')).toBeInTheDocument()
  })

  it('renders skill badges', () => {
    renderAbout()
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Git')).toBeInTheDocument()
  })

  it('renders skills with outline class', () => {
    renderAbout()
    const badge = screen.getByText('React.js')
    expect(badge).toHaveClass('badge-outline')
  })
})
