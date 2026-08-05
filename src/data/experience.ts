import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'carroya',
    role: {
      es: 'DESARROLLADOR FRONTEND SR',
      en: 'SENIOR FRONTEND DEVELOPER',
    },
    company: 'CARROYA S.A.S.',
    period: { es: 'Abr 2022 - Jun 2026', en: 'Apr 2022 - Jun 2026' },
    highlights: [
      {
        es: 'Desarrollé funcionalidades clave para la aplicación móvil del ecosistema de movilidad, mejorando la experiencia de usuario final.',
        en: "Developed key features for the mobility ecosystem's mobile app, improving the end-user experience.",
      },
      {
        es: 'Reduje el tiempo de respuesta a incidencias de QA mediante la optimización y refactorización de componentes críticos en React Native.',
        en: 'Reduced response time to QA issues by optimizing and refactoring critical React Native components.',
      },
      {
        es: 'Colideré el despliegue de versiones en entornos de desarrollo, stage y producción, asegurando la integridad del ciclo de vida del software.',
        en: 'Co-led version deployments across development, staging, and production environments, ensuring software lifecycle integrity.',
      },
    ],
  },
  {
    id: 'bavaria',
    role: {
      es: 'DESARROLLADOR UX I',
      en: 'UX DEVELOPER I',
    },
    company: 'BAVARIA S.C.A.',
    period: { es: 'Jul 2021 - Abr 2022', en: 'Jul 2021 - Apr 2022' },
    highlights: [
      {
        es: 'Desarrollé plataformas web escalables utilizadas por empresas aliadas en cuatro países de la región (Ecuador, Perú, México y Colombia).',
        en: 'Developed scalable web platforms used by partner companies in four countries across the region (Ecuador, Peru, Mexico, and Colombia).',
      },
      {
        es: 'Garanticé la estabilidad del producto mediante la implementación de pruebas funcionales exhaustivas en ciclos de desarrollo ágil.',
        en: 'Ensured product stability by implementing comprehensive functional testing within agile development cycles.',
      },
      {
        es: 'Gestioné exitosamente el despliegue de lanzamientos en entornos de desarrollo, stage y producción, minimizando el tiempo de inactividad.',
        en: 'Successfully managed release deployments across development, staging, and production environments, minimizing downtime.',
      },
    ],
  },
  {
    id: 'edemco',
    role: {
      es: 'COORDINADOR DE TECNOLOGÍA',
      en: 'TECHNOLOGY COORDINATOR',
    },
    company: 'EDEMCO S.A.S.',
    period: { es: 'Feb 2020 - Jul 2021', en: 'Feb 2020 - Jul 2021' },
    highlights: [
      {
        es: 'Lideré la modernización del sitio web corporativo y la optimización de la plataforma e-Commerce, mejorando la presencia digital de la compañía.',
        en: "Led the modernization of the corporate website and optimized the e-commerce platform, improving the company's digital presence.",
      },
      {
        es: 'Supervisé el ciclo de desarrollo de aplicaciones especializadas para la gestión de obras civiles, asegurando el cumplimiento de los requerimientos técnicos.',
        en: 'Oversaw the development lifecycle of specialized applications for civil works management, ensuring technical requirements were met.',
      },
      {
        es: 'Administré el control de accesos y permisos dentro de los sistemas internos, garantizando la seguridad y gobernanza de la información.',
        en: 'Administered access control and permissions within internal systems, ensuring information security and governance.',
      },
    ],
  },
]
