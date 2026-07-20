import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'gestor-tareas',
    title: 'Gestor de Tareas',
    description:
      'Aplicación móvil de gestión de tareas con soporte offline y sincronización en segundo plano.',
    techStack: ['React Native', 'TypeScript', 'SQLite'],
    projectUrl: 'https://gestor-tareas.netlify.app',
  },
  {
    id: 'api-comercio-electronico',
    title: 'API de Comercio Electrónico',
    description:
      'API RESTful para comercio electrónico con autenticación JWT, catálogo de productos y procesamiento de pedidos.',
    techStack: ['Node.js', 'TypeScript', 'MySQL', 'AWS'],
    projectUrl: 'https://api-comercio-electronico.netlify.app',
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description:
      'Dashboard de visualización de datos en tiempo real con gráficos interactivos y filtros dinámicos.',
    techStack: ['React', 'Node.js', 'TypeScript', 'SASS'],
    projectUrl: 'https://dashboard-analytics.netlify.app',
  },
]
