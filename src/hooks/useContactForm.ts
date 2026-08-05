import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../i18n'
import type { Translations } from '../i18n'
import type { EmailJSConfig, FormFields, FormStatus } from '../types'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_FIELDS: FormFields = { name: '', email: '', message: '' }

function validate(
  fields: FormFields,
  messages: Translations['validation'],
): Partial<Record<keyof FormFields, string>> {
  const errors: Partial<Record<keyof FormFields, string>> = {}

  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = messages.nameTooShort
  }

  if (!fields.email || !EMAIL_REGEX.test(fields.email)) {
    errors.email = messages.invalidEmail
  }

  if (!fields.message || fields.message.trim().length < 10) {
    errors.message = messages.messageTooShort
  }

  return errors
}

export function useContactForm(emailJsConfig: EmailJSConfig) {
  const { t } = useLanguage()
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS)
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormFields, string>>
  >({})
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[name as keyof FormFields]
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (status === 'loading') return

    const validationErrors = validate(fields, t.validation)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    setErrors({})

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        { name: fields.name, email: fields.email, message: fields.message },
        emailJsConfig.publicKey,
      )
      setStatus('success')
      setFields(INITIAL_FIELDS)
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
    }
  }

  function resetForm() {
    setFields(INITIAL_FIELDS)
    setErrors({})
    setStatus('idle')
  }

  return {
    fields,
    errors,
    status,
    handleChange,
    handleSubmit,
    resetForm,
  }
}

export type UseContactFormReturn = ReturnType<typeof useContactForm>
