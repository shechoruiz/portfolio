import { useContactForm } from '../hooks/useContactForm'
import type { EmailJSConfig, FormFields } from '../types'

const EMAILJS_CONFIG: EmailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

const FIELD_LABELS: Record<keyof FormFields, string> = {
  name: 'Nombre',
  email: 'Email',
  message: 'Mensaje',
}

function ContactForm() {
  const { fields, errors, status, handleChange, handleSubmit } =
    useContactForm(EMAILJS_CONFIG)

  const isLoading = status === 'loading'

  return (
    <section id="contact" className="bg-dark text-light py-5">
      <div className="container" style={{ maxWidth: 600 }}>
        <h2 className="display-4 text-center mb-2">Contacto</h2>
        <p className="lead text-center mb-5 text-white-50">
          ¿Tenés un proyecto en mente? Trabajemos juntos
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white-50">
              {FIELD_LABELS.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-control form-control-dark${errors.name ? ' is-invalid' : ''}`}
              value={fields.name}
              onChange={handleChange}
              disabled={isLoading}
              required
              minLength={2}
            />
            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white-50">
              {FIELD_LABELS.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-control form-control-dark${errors.email ? ' is-invalid' : ''}`}
              value={fields.email}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label text-white-50">
              {FIELD_LABELS.message}
            </label>
            <textarea
              id="message"
              name="message"
              className={`form-control form-control-dark${errors.message ? ' is-invalid' : ''}`}
              rows={5}
              value={fields.message}
              onChange={handleChange}
              disabled={isLoading}
              required
              minLength={10}
            />
            {errors.message && (
              <small className="text-danger">{errors.message}</small>
            )}
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-accent btn-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  />
                  Enviando...
                </>
              ) : (
                'Enviar mensaje'
              )}
            </button>
          </div>

          {status === 'success' && (
            <div className="alert alert-success mt-3 mb-0" role="alert">
              ¡Mensaje enviado!
            </div>
          )}

          {status === 'error' && (
            <div className="alert alert-danger mt-3 mb-0" role="alert">
              Error al enviar. Intentá de nuevo.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
