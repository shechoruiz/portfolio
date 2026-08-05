import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { LanguageProvider, useLanguage } from '../i18n'

const STORAGE_KEY = 'portfolio-lang'

function LanguageProbe() {
  const { lang, setLang } = useLanguage()
  return (
    <div>
      <span>Current language: {lang}</span>
      <button type="button" onClick={() => setLang('en')}>
        Set English
      </button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = 'es'
  })

  it('defaults to Spanish', () => {
    render(
      <LanguageProvider>
        <LanguageProbe />
      </LanguageProvider>,
    )
    expect(screen.getByText('Current language: es')).toBeInTheDocument()
  })

  it('throws when used outside the provider', () => {
    expect(() => render(<LanguageProbe />)).toThrow(
      'useLanguage must be used within a LanguageProvider',
    )
  })

  it('switches language and persists it to localStorage', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <LanguageProbe />
      </LanguageProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Set English' }))

    expect(screen.getByText('Current language: en')).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
    await waitFor(() => expect(localStorage.getItem(STORAGE_KEY)).toBe('en'))
  })

  it('restores the persisted language on mount', () => {
    localStorage.setItem(STORAGE_KEY, 'en')

    render(
      <LanguageProvider>
        <LanguageProbe />
      </LanguageProvider>,
    )

    expect(screen.getByText('Current language: en')).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })

  it('renders components using the active translation', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Navigation />
        </LanguageProvider>
      </MemoryRouter>,
    )

    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.queryByText('Home')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'EN' }))

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.queryByText('Inicio')).not.toBeInTheDocument()
  })
})
