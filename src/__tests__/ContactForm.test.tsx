import { render, screen } from '@testing-library/react'
import ContactForm from '../components/ContactForm'
import { LanguageProvider } from '../i18n'

function renderContactForm() {
  return render(
    <LanguageProvider>
      <ContactForm />
    </LanguageProvider>,
  )
}

describe('ContactForm', () => {
  it('renders section title', () => {
    renderContactForm()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    renderContactForm()
    expect(
      screen.getByText(/¿Tienes un proyecto en mente/i),
    ).toBeInTheDocument()
  })

  it('renders name, email, and message fields', () => {
    renderContactForm()
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    renderContactForm()
    const btn = screen.getByText('Enviar mensaje')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('button')).toHaveClass('btn-accent')
  })

  it('has id="contact" for anchor scrolling', () => {
    renderContactForm()
    const section = document.querySelector('#contact')
    expect(section).toBeInTheDocument()
  })
})
