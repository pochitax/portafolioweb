import { Project, TeachingItem } from '../types/index'

/* ─── Proyectos ──────────────────────────────────────────── */
/* Reemplazá estos datos con los tuyos.                       */

export const projects: Project[] = [
  {
    slug:        'rediseno-app-salud',
    title:       'Rediseño de app de salud',
    description: 'Investigación, arquitectura de información y prototipado de una app para gestión de turnos médicos. Implementado en Next.js.',
    tags:        ['UX Research', 'Figma', 'Next.js', 'TypeScript'],
    year:        2024,
    url:         'https://mi-proyecto.vercel.app',
    github:      'https://github.com/tu-usuario/proyecto',
    featured:    true,
    coverImage:  '/projects/salud.jpg',
  },
  {
    slug:        'unidos-por-una-sonrisa',
    title:       'Unidos por una sonrisa',
    description: 'Construcción de landing page para la Fundación Gantz para la Colecta Nacional.',
    tags:        ['HTML', 'CSS', 'Responsive'],
    year:        2025,
    url:         'https://unidosporunasonrisa.cl',
    github:      'https://github.com/pochitax/unidosporunasonrisa',
    featured:    true,
    coverImage:  '/projects/fintech.jpg',
    contenido:  `
    <h3>El problema</h3>
    <p>Durante 2025, el sitio web de la Fundación Gantz presentaba intermitencias en el servicio de hosting, generando caídas recurrentes, especialmente durante períodos de mayor flujo de visitas. Esta situación era crítica para la Fundación, ya que durante el año existen períodos de alta demanda asociados a campañas de donaciones y colectas. Como solución, se decidió externalizar la campaña de colecta mediante un nuevo dominio y una landing page, con el objetivo de distribuir el flujo y reducir las interrupciones del servicio.</p>

    <h3>Proceso</h3>
    <p>El diseño de la landing page fue desarrollado por la <a target="_blank" href="https://redon.cl/index.php">Agencia Redon</a>. Me encargué de adaptar la propuesta visual a HTML y CSS, implementando su versión responsive y resolviendo los distintos puntos de quiebre para asegurar una correcta visualización en diferentes dispositivos. Actualmente, estoy a cargo de la actualización y monitoreo del sitio.</p>

    <h3>Resultado</h3>
    <p>La landing page se mantiene estable y operativa, sin presentar nuevas interrupciones del servicio durante los períodos de mayor flujo de visitas.</p>
  `,
  },
  {
    slug:        'plataforma-educativa',
    title:       'Plataforma educativa',
    description: 'UX y desarrollo de una plataforma de cursos online con dashboard de progreso y sistema de evaluaciones.',
    tags:        ['UX', 'Next.js', 'Prisma', 'PostgreSQL'],
    year:        2023,
    url:         undefined,
    github:      undefined,
    featured:    false,
    coverImage:  '/projects/edu.jpg',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null
}

/* ─── Docencia ───────────────────────────────────────────── */

export const teaching: TeachingItem[] = [
  {
    title:       'Docencia e impartición de asignaturas disciplinares', 
    institution: 'Escuela de Diseño Duoc UC',
    period:      '2020 a la fecha',
    description: (
      <>
       Enseño <strong>UX, diseño de interfaces y desarrollo web, integrando prototipado en Figma, programación en Javascript, WordPress, SEO y accesibilidad</strong>. También acompaño procesos de portafolio de título y práctica profesional, además de impartir cursos de especialización en tecnologías aplicadas al diseño digital.
      </>
    ),
    subjects: [
      'Producción de Sistemas Gráficos',
      'Prototipo Interactivo',
      'Arquitectura y Diseño de Interfaces',
      'Lenguaje Semántico y Hojas de Estilos',
      'Lenguajes de Programación (Javascript)',
      'Optativo: Wordpress',
      'Proceso de Portafolio 6 y 7',
      'Portafolio de Título',
      'Práctica Profesional',
    ],
  },
    {
    title:       'Proyectos de Vinculación con el Medio (VcM)', 
    institution: 'Escuela de Diseño Duoc UC',
    period:      '2024 a la fecha',
    description: (
      <>
       Hemos desarrollado <strong>proyectos de Vinculación con el Medio junto a estudiantes de 5.º semestre de Diseño Gráfico, en la asignatura “Arquitectura y Diseño de Interfaces”</strong>, creando propuestas de rediseño web desde una perspectiva centrada en los usuarios. Estos proyectos conectaron el aprendizaje del aula con desafíos reales, siendo reconocidos por su impacto y aporte.
      </>
    ),
    subjects: [
      'Fundación Gantz',
      'Instituto Antonio Vicente Mosquete',
      'Escuela de Skate Sausalito',
    ],
    tags:        ['Accesibilidad Web', 'Arquitectura y Diseño de Interfaces', 'Figma'],
  },
  {
    title:       'Docencia e impartición de asignaturas en Educación Continua', 
    institution: 'Educación Continua Duoc UC',
    period:      '2020 - 2024',
    description: (
      <>
       Enseño UX, diseño de interfaces y desarrollo web, integrando prototipado, programación, WordPress, SEO y accesibilidad. También acompaño procesos de portafolio, título y práctica profesional, además de impartir cursos de especialización en tecnologías aplicadas al diseño digital.
      </>
    ),
    subjects: [
      'Seo y Posicionamiento Web (FOL)',
      'Accesibilidad Web (FOL)',
      'Javascript Avanzado (FOL)',
    ],
  },
  {
    title:       'Evidencias de proyectos de estudiantes', 
    institution: 'Escuela de Diseño Duoc UC',
    period:      '2024 a la fecha',
    description: (
      <>
       <strong>Registros de trabajos de estudiantes en Behance</strong> de asignaturas de las carreras de Diseño Gráfico mención Interefaces e Interacciones y Desarrollo y Diseño Web a partir de los años 2024 hasta la actualidad.
      </>
    ),
    tags:        ['SEO', 'Accesibilidad Web', 'Arquitectura y Diseño de Interfaces', 'Prototipo Interactivo', 'Producción de Sistemas Gráficos'],
    externalUrl: 'https://behance.net/paolavelizu', 
  },
  {
    title:       'Coordinación Piloto de Optativos Remotos', 
    institution: 'Escuela de Diseño Duoc UC',
    period:      '2023 - 2024 - 2025',
    description: (
      <>
       Participación en el Piloto de Optativos Remotos de la Escuela de Diseño, orientado a ampliar y flexibilizar la oferta de formación complementaria para estudiantes de distintas sedes. La iniciativa permitió explorar asignaturas en modalidad remota y fortalecer la colaboración interdisciplinaria entre docentes y carreras. El proyecto fue utilizado como referente para la implementación de la oferta remota de Duoc UC.
      </>
    ),
  },
  {
    title:       'Coordinación Proceso de Autoevaluación Carrera Desarrollo Web', 
    institution: 'Escuela de Diseño Duoc UC',
    period:      '2022 - 2024 - 2025',
    description: (
      <>
       Participación en el proceso de autoevaluación y monitoreo del plan de mejora de la carrera de Desarrollo y Diseño Web, realizado durante 2022. Se analizaron evidencias, procesos formativos y oportunidades de mejora para fortalecer la carrera y su perfil de egreso.
      </>
    ),
  },
  {
    title:       'Construcción de Maletas Didácticas', 
    institution: 'Escuela de Diseño Duoc UC',
    period:      '2021 - 2024',
    description: (
      <>
       Apoyo docente en el <strong>desarrollo, construción y evaluación de maletas didácticas</strong> para asignaturas de las carreras de Diseño Gráfico y Desarrollo Web.
      </>
    ),
  },
  {
    title:       'Generación de Contenidos Digitales', 
    institution: 'Escuela de Diseño Duoc UC',
    period:      '2021 - 2024',
    description: (
      <>
       Apoyo docente en la generación de contenidos y guía en procesos académicos para estudiantes de las carreras de Diseño Gráfico y Desarrollo Web en plataformas como <strong><a href='https://craed.cl/custom-login/?redirect_to=https%3A%2F%2Fcraed.cl%2F'>Craed</a></strong>, <strong><a href='https://www.youtube.com/watch?v=jsXrT6Bep80'>Youtube</a></strong> y <strong><a href='https://github.com/ddwduocvina?tab=repositories'>Github</a></strong>.
      </>
    ),
  },
]
