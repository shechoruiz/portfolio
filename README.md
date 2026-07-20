# Portfolio — Sergio Ruiz

Portfolio personal desarrollado con **Vite + React + TypeScript + Bootstrap 5**.

## Stack

| Herramienta | Versión | Uso |
|---|---|---|
| Vite | 5.x | Build tool y dev server |
| React | 18.x | UI library |
| TypeScript | 5.x | Tipado estático |
| Bootstrap 5 | 5.3.x | Layout y componentes UI |
| React Router | 7.x | Navegación entre páginas |
| EmailJS | 3.x | Envío de emails desde el formulario de contacto |
| Vitest | 2.x | Tests unitarios |
| React Testing Library | 16.x | Testing de componentes |

## Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Navigation    # Barra de navegación con NavLink
│   ├── Hero          # Sección de presentación principal
│   ├── About         # Biografía y habilidades
│   ├── Experience    # Timeline de experiencia laboral
│   ├── Projects      # Grilla de proyectos
│   ├── ProjectCard   # Card individual de proyecto
│   ├── SkillBadge    # Badge de habilidad
│   ├── ContactForm   # Formulario de contacto con EmailJS
│   ├── SocialLinks   # Enlaces a GitHub y LinkedIn
│   ├── Footer        # Pie de página
│   └── ScrollToTop   # Botón flotante para volver arriba
├── pages/
│   ├── Home          # Hero + Proyectos + Contacto
│   └── About         # Skills + Experiencia + Contacto
├── hooks/
│   ├── useContactForm   # State machine del formulario + EmailJS
├── data/
│   ├── skills.ts     # Lista de habilidades técnicas
│   ├── projects.ts   # Proyectos del portafolio
│   ├── experience.ts # Experiencia laboral
│   └── social.ts     # URLs de redes sociales
├── types/            # Interfaces compartidas
├── styles/           # Estilos personalizados y tema oscuro
└── __tests__/        # Tests unitarios (Vitest + RTL)
```

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Hero + Proyectos + Formulario de contacto |
| `/about` | Habilidades + Experiencia laboral + Formulario de contacto |

El menú incluye "Contacto" que hace scroll suave al formulario desde cualquier página.

## Cómo ejecutar localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar tests
npm test

# Tests en modo watch
npm run test:watch

# Verificar tipos
npx tsc --noEmit
```

## Configuración de EmailJS

1. Crea una cuenta en [emailjs.com](https://www.emailjs.com/)
2. Ve a **Email Services** → crea un servicio → copia el `service_id`
3. Ve a **Email Templates** → crea una plantilla con las variables `{{name}}`, `{{email}}`, `{{message}}` → copia el `template_id`
4. Ve a **Account** → **API Keys** → copia tu `public_key`
5. Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxx
```

## Deploy a Netlify

```bash
# Build del proyecto
npm run build

# La carpeta dist/ queda lista para subir
# O conectá el repo a Netlify y configurá:
#   Build command: npm run build
#   Publish directory: dist
```

## Tema

- Fondo oscuro (`#0a0a0a`)
- Color de acento: `#d3e97a` (verde lima)
- Tipografías: Bebas Neue (títulos) + Source Sans Pro (cuerpo)
