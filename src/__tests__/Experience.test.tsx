import { render, screen } from '@testing-library/react'
import Experience from '../components/Experience'
import { LanguageProvider } from '../i18n'

function renderExperience() {
  return render(
    <LanguageProvider>
      <Experience />
    </LanguageProvider>,
  )
}

describe('Experience', () => {
  it('renders section title', () => {
    renderExperience()
    expect(screen.getByText('Experiencia')).toBeInTheDocument()
  })

  it('renders all three companies', () => {
    renderExperience()
    expect(screen.getByText('CARROYA S.A.S.')).toBeInTheDocument()
    expect(screen.getByText('BAVARIA S.C.A.')).toBeInTheDocument()
    expect(screen.getByText('EDEMCO S.A.S.')).toBeInTheDocument()
  })

  it('renders all three roles', () => {
    renderExperience()
    expect(
      screen.getByText('DESARROLLADOR FRONTEND SR'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('DESARROLLADOR UX I'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('COORDINADOR DE TECNOLOGÍA'),
    ).toBeInTheDocument()
  })

  it('renders period dates', () => {
    renderExperience()
    expect(screen.getByText('Abr 2022 - Jun 2026')).toBeInTheDocument()
    expect(screen.getByText('Jul 2021 - Abr 2022')).toBeInTheDocument()
    expect(screen.getByText('Feb 2020 - Jul 2021')).toBeInTheDocument()
  })

  it('renders highlights for each experience', () => {
    renderExperience()
    expect(
      screen.getByText(/funcionalidades clave/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/plataformas web escalables/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/modernización del sitio web corporativo/i),
    ).toBeInTheDocument()
  })
})
