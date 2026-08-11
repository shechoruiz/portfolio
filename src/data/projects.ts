import type { Project } from '../types'
import cmpImage from '../assets/images/ColombiaMatchPredictor.webp'
import shelfImage from '../assets/images/TiendaShelf.webp'

export const projects: Project[] = [
  {
    id: 'colombia-match-predictor',
    title: {
      es: 'Colombia Match Predictor',
      en: 'Colombia Match Predictor',
    },
    description: {
      es: 'App web de predicción de resultados 1X2 de la Liga BetPlay de Colombia, con modelo estadístico propio, historial de predicciones y validación de aciertos.',
      en: 'Web app for 1X2 match prediction of Colombia\'s Liga BetPlay, with a custom statistical model, prediction history, and hit validation.',
    },
    techStack: ['React', 'TypeScript', 'Tailwind', 'TanStack Query', 'Zustand'],
    imageUrl: cmpImage,
    projectUrl: 'https://github.com/shechoruiz/colombia-match-predictor',
  },
  {
    id: 'shelf',
    title: {
      es: 'Shelf — E-commerce Multi-tenant',
      en: 'Shelf — Multi-tenant E-commerce',
    },
    description: {
      es: 'Plataforma multi-tenant de e-commerce tipo Shopify donde cada tienda tiene su propia marca, productos, colores y datos aislados.',
      en: 'Shopify-style multi-tenant e-commerce platform where each store has its own brand, products, colors, and isolated data.',
    },
    techStack: [
      'React',
      'Fastify',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Tailwind',
    ],
    imageUrl: shelfImage,
    projectUrl: 'https://github.com/shechoruiz/multi-tenant-web',
  },
  {
    id: 'gestor-tareas',
    title: {
      es: 'Gestor de Tareas',
      en: 'Task Manager',
    },
    description: {
      es: 'Aplicación móvil de gestión de tareas con soporte offline y sincronización en segundo plano.',
      en: 'Mobile task management app with offline support and background synchronization.',
    },
    techStack: ['React Native', 'TypeScript', 'SQLite'],
    projectUrl: 'https://gestor-tareas.netlify.app',
  },
  {
    id: 'api-comercio-electronico',
    title: {
      es: 'API de Comercio Electrónico',
      en: 'E-commerce API',
    },
    description: {
      es: 'API RESTful para comercio electrónico con autenticación JWT, catálogo de productos y procesamiento de pedidos.',
      en: 'RESTful e-commerce API with JWT authentication, product catalog, and order processing.',
    },
    techStack: ['Node.js', 'TypeScript', 'MySQL', 'AWS'],
    projectUrl: 'https://api-comercio-electronico.netlify.app',
  },
  {
    id: 'dashboard-analytics',
    title: {
      es: 'Dashboard Analytics',
      en: 'Analytics Dashboard',
    },
    description: {
      es: 'Dashboard de visualización de datos en tiempo real con gráficos interactivos y filtros dinámicos.',
      en: 'Real-time data visualization dashboard with interactive charts and dynamic filters.',
    },
    techStack: ['React', 'Node.js', 'TypeScript', 'SASS'],
    projectUrl: 'https://dashboard-analytics.netlify.app',
  },
]
