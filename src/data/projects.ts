import type { Project } from '../types'

export const projects: Project[] = [
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
