import { render, screen } from '@testing-library/react'
import ContactForm from '../components/ContactForm'

describe('ContactForm', () => {
  it('renders section title', () => {
    render(<ContactForm />)
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<ContactForm />)
    expect(
      screen.getByText(/¿Tenés un proyecto en mente/i),
    ).toBeInTheDocument()
  })

  it('renders name, email, and message fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)
    const btn = screen.getByText('Enviar mensaje')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('button')).toHaveClass('btn-accent')
  })

  it('has id="contact" for anchor scrolling', () => {
    render(<ContactForm />)
    const section = document.querySelector('#contact')
    expect(section).toBeInTheDocument()
  })
})
