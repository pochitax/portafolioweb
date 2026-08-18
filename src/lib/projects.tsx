import { Project, TeachingItem, Experiment } from '../types/index'

/* ─── Proyectos ──────────────────────────────────────────── */

export const projects: Project[] = [
  {
    slug:        'portafolio-personal',
    title:       'Portafolio web personal',
    description: 'Vitrina para la muestra de proyectos personales',
    tags:        ['Typescript', 'CSS', 'React', 'Vercel'],
    year:        2026,
    url:         'https://paolaveliz.cl',
    github:      'https://github.com/pochitax/portafolioweb',
    featured:    false,
    coverImage:  '/projects/yo-flor.png',
    contenido:  `
    <h3>El problema</h3>
    <p>Necesitaba reunir en un solo espacio mi experiencia, conocimientos y distintas áreas de trabajo, construyendo un sitio que no solo presentara mi trayectoria, sino que también demostrara mis capacidades aplicadas al diseño y desarrollo web.</p>

    <h3>Proceso</h3>
    <p>El desarrollo del sitio partió desde mi propia trayectoria profesional y de la necesidad de integrar en una misma experiencia mis áreas de especialización: UX, diseño, desarrollo frontend y docencia. Utilicé TypeScript como parte del desarrollo para poner en práctica y profundizar mis conocimientos técnicos.</p>

    <p>La identidad visual incorpora elementos que forman parte de mi manera de expresarme y trabajar, como el color fucsia y la tipografía Inter, presentes también en mis presentaciones. El unicornio rosa representa una dimensión más personal de mi identidad y mi faceta de madre, mientras que la diversidad de contenidos y secciones refleja la multiplicidad de áreas que he desarrollado y aprendido a lo largo de mi carrera.</p>

    <h3>Resultado</h3>
    <p>Un sitio limpio y personal que reúne mi trayectoria, proyectos, experiencia docente y conocimientos, y que al mismo tiempo funciona como una demostración concreta de mis capacidades de diseño y desarrollo web. El resultado busca conectar mi identidad profesional y personal en una experiencia digital coherente conmigo.</p>
  `,
  },
  {
    slug:        'fundacion-gantz',
    title:       'Fundación Gantz',
    description: 'De la docencia al desarrollo: Front para el sitio web de la Fundación Gantz.',
    tags:        ['HTML', 'CSS', 'Bootstrap', 'Accesibilidad'],
    year:        2026,
    url:         'https://gantz.cl',
    github:      'https://github.com/pochitax/web-gantz',
    featured:    true,
    coverImage:  '/projects/mac-gantz.png',
    contenido:  `
    <h3>El problema</h3>
    <p>Fundación Gantz necesitaba actualizar su sitio web institucional para mejorar la experiencia de sus usuarios y facilitar el acceso a información relevante sobre sus tratamientos y servicios. El desafío consistía en responder a las necesidades de distintos públicos, entre ellos pacientes, familias, profesionales y empresas que colaboran con la Fundación.</p>

    <h3>Proceso</h3>
    <p>El proyecto comenzó en 2024 como una iniciativa de Vinculación con el Medio, desarrollada junto a estudiantes de 5.º semestre de Diseño Gráfico de Duoc UC, sede Viña del Mar, en la asignatura <strong>“Arquitectura y Diseño de Interfaces”</strong>. Posteriormente, Felipe Villegas Sánchez, estudiante de Diseño Gráfico, mención Interfaces, continuó el proyecto durante su práctica profesional, investigando las necesidades de los usuarios y desarrollando una propuesta de diseño responsivo centrada en sus necesidades.</p>
    <p>Una vez finalizada la etapa de diseño y definidas sus especificaciones, iniciamos el desarrollo del sitio. Primero implementamos el front-end utilizando HTML, CSS y JavaScript, para posteriormente integrarlo en WordPress. Este trabajo fue desarrollado en conjunto con Kamilo Reyes Vera y Natalia González Escobar, egresados de Diseño y Desarrollo Web de Duoc UC, sede Viña del Mar.</p>

    <h3>Resultado</h3>
    <p>El proyecto culminó con el desarrollo de un nuevo sitio web institucional para Fundación Gantz, transformando un proyecto académico en una solución digital concreta para una organización con impacto social. El proceso permitió conectar la formación académica con necesidades reales y demostrar cómo el diseño puede contribuir a mejorar el acceso a información y visibilizar el trabajo de una organización.</p>

    <h3>Colaboradores</h3>
    <p>Proyecto desarrollado en colaboración con estudiantes, titulados, docentes y el equipo de Marketing de la Fundación Gantz.</p>

    <h3>Evidencias</h3>
    <ul>
      <li><a href="https://app.notion.com/p/paolaveliz/Brief-Proyecto-VcM-a9f03bcd28a446d3a46a6a9cf2ae0bc2?source=copy_link" target="_blank">Brief de Vinculación con el Medio</a></li>
      <li><a href="https://diseno.duoc.cl/ddhub/proyectos/rediseno-sitio-web-fundacion-gantz/" target="_blank">Publicación en Aplica Diseño: Rediseño sitio web como proyecto colaborativo</a></li>
      <li><a href="https://www.behance.net/gallery/239158417/Rediseno-de-sitio-para-Fundacion-Gantz-(En-desarrollo)" target="_blank">Behance del proyecto de Felipe Villegas</a></li>
      <li><a href="https://diseno.duoc.cl/ddhub/proyectos/rediseno-sitio-web-fundacion-gantz-2/" target="_blank">Publicación en Aplica Diseño: Rediseño sitio web como práctica profesional</a></li>
    </ul>
  `,
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
    coverImage:  '/projects/unidos.png',
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
    slug:        'iavm',
    title:       'Instituto Antonio Vicente Mosquete',
    description: 'Docencia y accesibilidad aplicadas en un proyecto digital.',
    tags:        ['Accesibilidad', 'UX'],
    year:        2025,
    url:         'https://iavm.cl/',
    featured:    true,
    coverImage:  '/projects/iavm.jpg',
    contenido:  `
    <h3>El problema</h3>
    <p>El Instituto Antonio Vicente Mosquete es el único establecimiento de la Región de Valparaíso que ofrece educación y rehabilitación gratuita para personas con discapacidad visual. Su sitio web presentaba importantes barreras de accesibilidad que dificultaban el acceso a información clave y limitaban la autonomía de sus usuarios y familias. El desafío fue desarrollar una propuesta de rediseño centrada en la inclusión, accesibilidad y facilidad de uso.</p>

    <h3>Proceso</h3>
    <p>El proyecto se desarrolló junto a seis equipos de estudiantes de la asignatura <em>“Arquitectura y Diseño de Interfaces”</em>, quienes trabajaron desde un enfoque centrado en los usuarios. El proceso contempló investigación mediante entrevistas, encuestas y análisis de métricas, además de arquitectura de información, estrategias de posicionamiento digital y criterios de accesibilidad compatibles con tecnologías de asistencia, como lectores de pantalla.</p>

    <p>Las propuestas fueron presentadas mediante storytelling y prototipos interactivos en versión mobile, permitiendo evaluar y demostrar las soluciones planteadas. La contraparte institucional participó en la evaluación y entregó retroalimentación a cada equipo, considerando el contexto y las necesidades reales del Instituto.</p>

    <p>La accesibilidad web fue el eje central del proyecto. Junto a Carlos Aparicio, guiamos a los estudiantes en la incorporación de criterios de accesibilidad durante todo el proceso de diseño, buscando que las propuestas respondieran a las necesidades de la comunidad del Instituto. Actualmente, el proyecto se encuentra en ejecución como parte de una iniciativa de Innovación Social de Duoc UC, reconocida como proyecto ganador de la sede Viña del Mar.</p>

    <h3>Resultado</h3>
    <p>De las seis propuestas desarrolladas, cuatro fueron preseleccionadas para continuar el proceso y dar paso al desarrollo de la propuesta definitiva. El proyecto permitió llevar el aprendizaje del aula a un desafío real, promoviendo el diseño inclusivo y la aplicación de metodologías de UX, accesibilidad y arquitectura de información.</p>
    <p>Finalmente, el desarrollo del proyecto estuvo a cargo de Kamilo Reyes Vera y Natalia González Escobar, egresados de Diseño y Desarrollo Web de Duoc UC, sede Viña del Mar. Durante esta etapa, se realizó un monitoreo constante de los criterios de accesibilidad, con el objetivo de garantizar una experiencia útil e inclusiva para la comunidad del Instituto y posicionar el sitio como un referente de accesibilidad digital.</p>

    <h3>Evidencias</h3>
    <ul>
      <li><a href="https://diseno.duoc.cl/ddhub/proyectos/diseno-web-accesible-instituto-antonio-vicente-mosquete/" target="_blank">Publicación en Aplica Diseño: Diseño Web Accesible Instituto Antonio Vicente Mosquete</a></li>
      <li><a href="https://www.behance.net/gallery/230789047/Diseno-de-plataforma-web-accesible-Agencia-KIPIT" target="_blank">Behance del proyecto: Equipo Kipit</a></li>
      <li><a href="https://www.duoc.cl/?noticia_post_type=estudiantes-de-diseno-grafico-realizan-pagina-web-accesible-para-el-instituto-antonio-vicente-mosquete" target="_blank">Publicación en Duoc UC: Estudiantes de Diseño Gráfico realizan página web accesible para el Instituto Antonio Vicente Mosquete</a></li>
    </ul>
  `,
  },
  {
    slug:        'diseno-ddhub',
    title:       'Diseño para el Sitio DDHub de la Escuela de Diseño Duoc UC',
    description: '',
    tags:        ['UX', 'UI', 'Mapa de navegación', 'Figma', 'Design System'],
    year:        2026,
    url:         'https://diseno.duoc.cl/ddhub/',
    featured:    true,
    coverImage:  '/projects/ddhub.png',
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
    slug:        'mantencion-sitios-escuela',
    title:       'Mantención de sitios de Escuela de Diseño Duoc UC',
    description: '',
    tags:        ['HTML', 'CSS', 'Javascript', 'Wordpress'],
    year:        2026,
    url:         '',
    featured:    true,
    coverImage:  '/projects/mantencion.png',
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
    slug:        'evaluacion-accesibilidad-rutas-formativas',
    title:       'Evaluación de accesibilidad web',
    description: 'Proyecto académico de análisis de accesibilidad en el sitio de Rutas Formativas, Escuela de Diseño Duoc UC',
    tags:        ['Accesibilidad', 'Easy check', 'Investigación'],
    year:        2023,
    url:         'https://paolaveliz.notion.site/Evaluaci-n-de-accesibilidad-para-el-Sitio-de-Rutas-Formativas-de-la-Escuela-de-Dise-o-Duoc-UC-84246c8dca69466bb95cc687306ff38c?source=copy_link',
    urlLabel:     'Ver auditoría completa',
    featured:    false,
    coverImage:  '/projects/accesibilidad.png',
    contenido:  `
    <div class="card-link">
    <strong>Análisis del Sitio Rutas Formativas de la Escuela de Diseño Duoc UC</strong>
    <p>Evaluación de accesibilidad web como trabajo académico para el <em>Curso Práctico de Accesibilidad Web y Diseño Inclusivo</em> de la Universidad del Desarrollo, dictado entre el 26 de Julio de 2023 y el 6 de Septiembre de 2023, con una duración de 25 horas cronológicas.</p>
    <br>
    <strong>Rol:</strong> Evaluación y análisis de accesibilidad
    <br>
    <strong>Metodología:</strong> WCAG 2.1 · Evaluación automatizada · Revisión manual
    <br>
    <strong>Herramientas:</strong> WAVE · Heading Maps · Taba11y · Landmarks Navigation
    </div>
    <h3>El problema</h3>
    <p>El sitio web de Rutas Formativas de la Escuela de Diseño Duoc UC requería una evaluación de accesibilidad para identificar barreras de navegación y acceso a sus contenidos, considerando los criterios de las WCAG 2.1.</p>

    <h3>Proceso</h3>
    <p>Realicé una evaluación combinando herramientas automatizadas y revisión manual del código. Se analizaron aspectos como navegación mediante teclado, estructura semántica, encabezados, contraste, textos alternativos, foco de los enlaces y landmarks. Para ello utilicé herramientas como WAVE, Heading Maps, Taba11y y Landmarks Navigation.</p>

    <p>La revisión permitió identificar fortalezas y oportunidades de mejora, generando recomendaciones específicas para optimizar la estructura de contenidos, navegación, contraste y elementos accesibles como acordeones y regiones semánticas.</p>

    <h3>Resultado</h3>
    <p>La evaluación permitió establecer el nivel de conformidad del sitio respecto de las WCAG 2.1 y definir acciones prioritarias para mejorar su accesibilidad. Además, se establecieron criterios y herramientas para realizar un monitoreo continuo y mantener buenas prácticas de accesibilidad durante la evolución del sitio.</p>
  `,
  },
  {
    slug:        'front-miramas',
    title:       'Front para Mira+',
    description: 'Proyecto Sede Viña del Mar Duoc UC',
    tags:        ['HTML', 'CSS', 'Javascript'],
    year:        2021,
    url:         'https://pochitax.github.io/front-cursos-sede-vina-duoc/front/',
    urlLabel:     'Ver front del sitio',
    github:       'https://github.com/pochitax/front-cursos-sede-vina-duoc',
    featured:    false,
    coverImage:  '/projects/miramas.png',
    contenido:  `
    <h3>El problema</h3>
    <p>El sitio web de Rutas Formativas de la Escuela de Diseño Duoc UC requería una evaluación de accesibilidad para identificar barreras de navegación y acceso a sus contenidos, considerando los criterios de las WCAG 2.1.</p>

    <h3>Proceso</h3>
    <p>Realicé una evaluación combinando herramientas automatizadas y revisión manual del código. Se analizaron aspectos como navegación mediante teclado, estructura semántica, encabezados, contraste, textos alternativos, foco de los enlaces y landmarks. Para ello utilicé herramientas como WAVE, Heading Maps, Taba11y y Landmarks Navigation.</p>

    <p>La revisión permitió identificar fortalezas y oportunidades de mejora, generando recomendaciones específicas para optimizar la estructura de contenidos, navegación, contraste y elementos accesibles como acordeones y regiones semánticas.</p>

    <h3>Resultado</h3>
    <p>La evaluación permitió establecer el nivel de conformidad del sitio respecto de las WCAG 2.1 y definir acciones prioritarias para mejorar su accesibilidad. Además, se establecieron criterios y herramientas para realizar un monitoreo continuo y mantener buenas prácticas de accesibilidad durante la evolución del sitio.</p>
  `,
  },
  {
    slug:        'front-cursos-cortos',
    title:       'Front para Cursos Cortos',
    description: 'Proyecto Sede Viña del Mar Duoc UC',
    tags:        ['HTML', 'CSS', 'Javascript'],
    year:        2020,
    url:         'https://pochitax.github.io/front-cursos-sede-vina-duoc/front/',
    urlLabel:     'Ver front del sitio',
    github:       'https://github.com/pochitax/front-cursos-sede-vina-duoc',
    featured:    true,
    coverImage:  '/projects/cursos-cortos.png',
    contenido:  `
    <h3>El problema</h3>
    <p>El sitio web de Rutas Formativas de la Escuela de Diseño Duoc UC requería una evaluación de accesibilidad para identificar barreras de navegación y acceso a sus contenidos, considerando los criterios de las WCAG 2.1.</p>

    <h3>Proceso</h3>
    <p>Realicé una evaluación combinando herramientas automatizadas y revisión manual del código. Se analizaron aspectos como navegación mediante teclado, estructura semántica, encabezados, contraste, textos alternativos, foco de los enlaces y landmarks. Para ello utilicé herramientas como WAVE, Heading Maps, Taba11y y Landmarks Navigation.</p>

    <p>La revisión permitió identificar fortalezas y oportunidades de mejora, generando recomendaciones específicas para optimizar la estructura de contenidos, navegación, contraste y elementos accesibles como acordeones y regiones semánticas.</p>

    <h3>Resultado</h3>
    <p>La evaluación permitió establecer el nivel de conformidad del sitio respecto de las WCAG 2.1 y definir acciones prioritarias para mejorar su accesibilidad. Además, se establecieron criterios y herramientas para realizar un monitoreo continuo y mantener buenas prácticas de accesibilidad durante la evolución del sitio.</p>
  `,
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
  /*
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
  },*/
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

/* ─── Experimentos ───────────────────────────────────────────── */

export const experiments: Experiment[] = [
  {
    slug:        'figma-css',
    coverImage:  '/projects/specs.png',
    title:       'De specs de Figma a código',
    description: 'Ejemplo básico de cómo un diseño con especificaciones se traduce a HTML y CSS.',
    tags:        ['Figma', 'Specs', 'HTML', 'CSS'],
    year:        2025,
    featured:    true,
    embeds: [
      {
        url:   'https://embed.figma.com/design/BCp2b8TWqyWpPLlRTusgRP/Variantes-specs?node-id=1-380&embed-host=share',
        label: 'Ver en Figma',
      },
      {
        url:   'https://codepen.io/pochitax/embed/bNpVGGB?default-tab=result',
        label: 'Ver código en Codepen',
      },
    ],
  },
  {
    slug:        'hola-3d',
    coverImage:  '/projects/spline.png',
    title:       '3D con Spline',
    description: 'Prueba de elementos 3D con Spline.',
    tags:        ['Spline', '3D', 'SVG'],
    year:        2025,
    featured:    true,
    embeds: [
      {
        url:   'https://my.spline.design/testcopy-DVxPpwBNoSbecUW20TrrHOkI/',
        label: 'Ver en Spline - Modo claro',
      },
      {
        url:   'https://my.spline.design/starterscenecopy-UA9oIQYc82bQ5AIpF86YSo4o/',
        label: 'Ver en Spline - Modo oscuro',
      },
    ],
  },
  {
    slug:        'cartas-animadas',
    coverImage:  'https://shots.codepen.io/username/pen/LYwyLKB-1280.jpg',
    title:       'Cartas animadas con CSS',
    description: 'Animaciones y transiciones sólo con estilos. Se toma una imagen de referencia de la web para codificar.',
    tags:        ['HTML', 'CSS'],
    year:        2024,
    featured:    true,
    embeds: [
      {
        url:   'https://codepen.io/pochitax/embed/LYwyLKB?default-tab=html%2Cresult',
        label: 'Ver en CodePen',
      },
    ],
  },
  {
    slug:        'listado-dinamico',
    coverImage:  'https://shots.codepen.io/username/pen/poqRvpd-1280.jpg',
    title:       'Listado dinámicos de objetos JS',
    description: 'Objetos de Javascript con Tailwind.',
    tags:        ['HTML', 'CSS', 'Javascript', 'Tailwind'],
    year:        2023,
    featured:    true,
    embeds: [
      {
        url:   'https://codepen.io/pochitax/embed/poqRvpd?default-tab=html%2Cresult',
        label: 'Ver en CodePen',
      },
    ],
  },
  {
    slug:        'semaforo',
    coverImage:  '/projects/semaforo.png',
    title:       'Semáforo en React',
    description: 'Experimento con React y CSS.',
    tags:        ['React', 'CSS'],
    year:        2022,
    featured:    true,
    embeds: [
      {
        url:   'https://codesandbox.io/embed/5rkg3?view=preview&module=%2Fpublic%2Findex.html&hidenavigation=1',
        label: 'Ver en Sandbox',
      },
    ],
  },
  {
    slug:        'procesador-ordenes',
    coverImage:  '/projects/procesador.png',
    title:       'Procesador de órdenes en React',
    description: 'Experimento con React y CSS.',
    tags:        ['React', 'CSS'],
    year:        2022,
    featured:    true,
    embeds: [
      {
        url:   'https://codesandbox.io/embed/tud0l?view=preview&module=%2Fsrc%2FApp.js&hidenavigation=1',
        label: 'Ver en Sandbox',
      },
    ],
  },
  {
    slug:        'titulo-dinamico',
    coverImage:  'https://shots.codepen.io/username/pen/vYroGWE-1280.jpg',
    title:       'Efecto máquina de escribir con Scene.js y CSS',
    description: 'Experimento con Javascript y CSS.',
    tags:        ['HTML', 'CSS', 'Javascript'],
    year:        2022,
    featured:    true,
    embeds: [
      {
        url:   'https://codepen.io/pochitax/embed/vYroGWE?default-tab=html%2Cresult',
        label: 'Ver en CodePen',
      },
    ],
  },
  {
    slug:        'tarjeta-credito',
    coverImage:  'https://shots.codepen.io/username/pen/jOwewEZ-1280.jpg',
    title:       'Tarjeta de crédito con CSS',
    description: 'Experimento con CSS.',
    tags:        ['HTML', 'CSS'],
    year:        2021,
    featured:    true,
    embeds: [
      {
        url:   'https://codepen.io/pochitax/embed/jOwewEZ?default-tab=result',
        label: 'Ver en CodePen',
      },
    ],
  },
]