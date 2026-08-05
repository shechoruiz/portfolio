import { useContactForm } from "../hooks/useContactForm";
import { useLanguage } from "../i18n";
import type { EmailJSConfig } from "../types";

const EMAILJS_CONFIG: EmailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

function ContactForm() {
  const { fields, errors, status, handleChange, handleSubmit } =
    useContactForm(EMAILJS_CONFIG);
  const { t } = useLanguage();

  const isLoading = status === "loading";
  const labels = t.contactForm.labels;
  const placeholders = t.contactForm.placeholders;

  return (
    <section id="contact" className="bg-dark text-light py-5">
      <div className="container" style={{ maxWidth: 600 }}>
        <h2 className="display-4 text-center mb-2">{t.contactForm.title}</h2>
        <p className="lead text-center mb-5 text-white-50">
          {t.contactForm.subtitle}
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white-50">
              {labels.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-control form-control-dark${errors.name ? " is-invalid" : ""}`}
              value={fields.name}
              onChange={handleChange}
              placeholder={placeholders.name}
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
              {labels.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-control form-control-dark${errors.email ? " is-invalid" : ""}`}
              value={fields.email}
              onChange={handleChange}
              placeholder={placeholders.email}
              disabled={isLoading}
              required
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label text-white-50">
              {labels.message}
            </label>
            <textarea
              id="message"
              name="message"
              className={`form-control form-control-dark${errors.message ? " is-invalid" : ""}`}
              rows={5}
              value={fields.message}
              onChange={handleChange}
              placeholder={placeholders.message}
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
                  {t.contactForm.sending}
                </>
              ) : (
                t.contactForm.submit
              )}
            </button>
          </div>

          {status === "success" && (
            <div className="alert alert-success mt-3 mb-0" role="alert">
              {t.contactForm.success}
            </div>
          )}

          {status === "error" && (
            <div className="alert alert-danger mt-3 mb-0" role="alert">
              {t.contactForm.error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
