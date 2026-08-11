import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'
import { LanguageProvider } from '../i18n'

function renderHero() {
  return render(
    <LanguageProvider>
      <Hero />
    </LanguageProvider>,
  )
}

describe('Hero', () => {
  it('renders name greeting and subtitle', () => {
    renderHero()
    expect(screen.getByText('Hola, soy Sergio Ruiz')).toBeInTheDocument()
    expect(
      screen.getByText(/Ingeniero de Sistemas/i),
    ).toBeInTheDocument()
  })

  it('renders Contacto button', () => {
    renderHero()
    const btn = screen.getByText('Contacto')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('button')).toHaveClass('btn-accent')
  })

  it('renders GitHub link', () => {
    renderHero()
    const github = screen.getByLabelText('GitHub')
    expect(github).toBeInTheDocument()
    expect(github).toHaveAttribute('target', '_blank')
  })

  it('renders LinkedIn link', () => {
    renderHero()
    const linkedin = screen.getByLabelText('LinkedIn')
    expect(linkedin).toBeInTheDocument()
    expect(linkedin).toHaveAttribute('target', '_blank')
  })

  it('renders CV download link in Spanish by default', () => {
    renderHero()
    const cv = screen.getByLabelText('Descargar CV (PDF)')
    expect(cv).toBeInTheDocument()
    expect(cv).toHaveAttribute('href', '/cv/Sergio-Ruiz-CV-es.pdf')
    expect(cv).toHaveAttribute('download')
  })

  it('renders profile image with fallback on error', () => {
    renderHero()
    const img = screen.getByAltText('Sergio Ruiz')
    expect(img).toBeInTheDocument()
    expect(img).toHaveClass('img-fluid')
  })
})
