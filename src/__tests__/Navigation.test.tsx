import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navigation from '../components/Navigation'

function renderNav() {
  return render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  )
}

describe('Navigation', () => {
  it('renders brand initials', () => {
    renderNav()
    expect(screen.getByText('SR')).toBeInTheDocument()
  })

  it('renders Inicio and Sobre Mí links', () => {
    renderNav()
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Sobre Mí')).toBeInTheDocument()
  })

  it('renders Contacto anchor', () => {
    renderNav()
    const contacto = screen.getByText('Contacto')
    expect(contacto).toBeInTheDocument()
    expect(contacto.closest('a')).toHaveAttribute('href', '#contact')
  })

  it('renders navbar with dark theme classes', () => {
    renderNav()
    const nav = document.querySelector('.navbar')
    expect(nav).toHaveClass('navbar-dark', 'bg-dark')
  })
})
