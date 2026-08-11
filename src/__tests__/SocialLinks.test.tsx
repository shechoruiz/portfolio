import { render, screen } from '@testing-library/react'
import SocialLinks from '../components/SocialLinks'
import { LanguageProvider } from '../i18n'

function renderSocialLinks() {
  return render(
    <LanguageProvider>
      <SocialLinks />
    </LanguageProvider>,
  )
}

describe('SocialLinks', () => {
  it('renders GitHub link', () => {
    renderSocialLinks()
    const link = screen.getByLabelText('GitHub')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders LinkedIn link', () => {
    renderSocialLinks()
    const link = screen.getByLabelText('LinkedIn')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders CV download link in Spanish by default', () => {
    localStorage.setItem('portfolio-lang', 'es')
    renderSocialLinks()
    const link = screen.getByLabelText('Descargar CV (PDF)')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/cv/Sergio-Ruiz-CV-es.pdf')
    expect(link).toHaveAttribute('download')
  })

  it('uses the English CV when the language is English', () => {
    localStorage.setItem('portfolio-lang', 'en')
    renderSocialLinks()
    const link = screen.getByLabelText('Download CV (PDF)')
    expect(link).toHaveAttribute('href', '/cv/Sergio-Ruiz-CV-en.pdf')
  })
})
