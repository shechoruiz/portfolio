import type { LocalizedText } from '../types'
import type { Language } from './LanguageContext'

const es = {
  nav: {
    home: 'Inicio',
    about: 'Sobre Mí',
    contact: 'Contacto',
    toggleAriaLabel: 'Toggle navigation',
    languageSelectorAriaLabel: 'Cambiar idioma',
  },
  hero: {
    greeting: 'Hola, soy Sergio Ruiz',
    subtitle:
      'Ingeniero de Sistemas con más de 6 años de experiencia creando productos digitales escalables.',
    contactCta: 'Contacto',
  },
  about: {
    title: 'Sobre Mí',
    bio: 'Soy un desarrollador de software apasionado por crear aplicaciones web y móviles de alta calidad. Me especializo en React, React Native y Node.js, combinando buenas prácticas de desarrollo, pruebas automatizadas y diseño responsive para construir productos que marcan la diferencia. Creo firmemente en el aprendizaje continuo y en compartir conocimiento con la comunidad.',
  },
  skills: {
    categories: {
      Frontend: 'Frontend',
      'Backend & Cloud': 'Backend y Cloud',
      Tools: 'Herramientas',
    },
  },
  experience: {
    title: 'Experiencia',
  },
  projects: {
    title: 'Proyectos',
    comingSoon: 'Próximamente...',
  },
  projectCard: {
    viewProject: 'Ver proyecto',
  },
  contactForm: {
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente? Trabajemos juntos',
    labels: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
    },
    placeholders: {
      name: 'Tu nombre',
      email: 'tu@email.com',
      message: 'Cuéntame sobre tu proyecto',
    },
    submit: 'Enviar mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado!',
    error: 'Error al enviar. Intenta de nuevo.',
  },
  validation: {
    nameTooShort: 'El nombre debe tener al menos 2 caracteres',
    invalidEmail: 'Ingresa un email válido',
    messageTooShort: 'El mensaje debe tener al menos 10 caracteres',
  },
  scrollToTop: {
    ariaLabel: 'Volver arriba',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
}

const en: typeof es = {
  nav: {
    home: 'Home',
    about: 'About Me',
    contact: 'Contact',
    toggleAriaLabel: 'Toggle navigation',
    languageSelectorAriaLabel: 'Change language',
  },
  hero: {
    greeting: "Hi, I'm Sergio Ruiz",
    subtitle:
      'Systems engineer with 6+ years of experience building scalable digital products.',
    contactCta: 'Contact',
  },
  about: {
    title: 'About Me',
    bio: "I'm a software developer passionate about building high-quality web and mobile applications. I specialize in React, React Native, and Node.js, combining solid development practices, automated testing, and responsive design to build products that make a difference. I strongly believe in continuous learning and sharing knowledge with the community.",
  },
  skills: {
    categories: {
      Frontend: 'Frontend',
      'Backend & Cloud': 'Backend & Cloud',
      Tools: 'Tools',
    },
  },
  experience: {
    title: 'Experience',
  },
  projects: {
    title: 'Projects',
    comingSoon: 'Coming soon...',
  },
  projectCard: {
    viewProject: 'View project',
  },
  contactForm: {
    title: 'Contact',
    subtitle: "Have a project in mind? Let's work together.",
    labels: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
    },
    placeholders: {
      name: 'Your name',
      email: 'you@email.com',
      message: 'Tell me about your project',
    },
    submit: 'Send message',
    sending: 'Sending...',
    success: 'Message sent!',
    error: 'Something went wrong. Please try again.',
  },
  validation: {
    nameTooShort: 'Name must be at least 2 characters long',
    invalidEmail: 'Enter a valid email address',
    messageTooShort: 'Message must be at least 10 characters long',
  },
  scrollToTop: {
    ariaLabel: 'Back to top',
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

export type Translations = typeof es

export const translations: Record<Language, Translations> = { es, en }

export function pick(text: LocalizedText, lang: Language): string {
  return text[lang]
}
