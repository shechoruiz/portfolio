import { renderHook, act } from '@testing-library/react'
import { useContactForm } from '../hooks/useContactForm'
import { LanguageProvider } from '../i18n'

const mockConfig = {
  serviceId: 'test_service',
  templateId: 'test_template',
  publicKey: 'test_key',
}

function renderForm(config = mockConfig) {
  return renderHook(() => useContactForm(config), {
    wrapper: LanguageProvider,
  })
}

describe('useContactForm', () => {
  it('starts with idle status and empty fields', () => {
    const { result } = renderForm()

    expect(result.current.status).toBe('idle')
    expect(result.current.fields).toEqual({
      name: '',
      email: '',
      message: '',
    })
    expect(result.current.errors).toEqual({})
  })

  it('validates empty fields on submit', async () => {
    const { result } = renderForm()

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent)
    })

    expect(result.current.errors.name).toBeTruthy()
    expect(result.current.errors.email).toBeTruthy()
    expect(result.current.errors.message).toBeTruthy()
    expect(result.current.status).toBe('idle')
  })

  it('validates invalid email format', async () => {
    const { result } = renderForm()

    await act(async () => {
      result.current.handleChange({
        target: { name: 'email', value: 'not-an-email' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent)
    })

    expect(result.current.errors.email).toBeTruthy()
  })

  it('updates fields on handleChange', () => {
    const { result } = renderForm()

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'Sergio' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.fields.name).toBe('Sergio')
  })

  it('clears field errors after successful change', async () => {
    const { result } = renderForm()

    // Submit empty to trigger errors
    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent)
    })

    expect(result.current.errors.name).toBeTruthy()

    // Fix the field
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'Sergio' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.errors.name).toBeFalsy()
  })
})
