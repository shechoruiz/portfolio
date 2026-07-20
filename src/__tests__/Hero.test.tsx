import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('renders name greeting and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Hola, soy Sergio Ruiz')).toBeInTheDocument()
    expect(
      screen.getByText(/Desarrollador Sr/i),
    ).toBeInTheDocument()
  })

  it('renders Contacto button', () => {
    render(<Hero />)
    const btn = screen.getByText('Contacto')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('button')).toHaveClass('btn-accent')
  })

  it('renders GitHub link', () => {
    render(<Hero />)
    const github = screen.getByLabelText('GitHub')
    expect(github).toBeInTheDocument()
    expect(github).toHaveAttribute('target', '_blank')
  })

  it('renders LinkedIn link', () => {
    render(<Hero />)
    const linkedin = screen.getByLabelText('LinkedIn')
    expect(linkedin).toBeInTheDocument()
    expect(linkedin).toHaveAttribute('target', '_blank')
  })

  it('renders profile image with fallback on error', () => {
    render(<Hero />)
    const img = screen.getByAltText('Sergio Ruiz')
    expect(img).toBeInTheDocument()
    expect(img).toHaveClass('img-fluid')
  })
})
