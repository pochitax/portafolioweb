import { Project, TeachingItem, Experiment } from '../types/index'

/* ─── Proyectos ──────────────────────────────────────────── */

export const projects: Project[] = [
  {
    slug:        'portafolio-personal',
    title:       'Portafolio web personal',
    description: 'Vitrina para la muestra de proyectos personales',
    tags:        ['Typescript', 'CSS', 'React', 'Vercel', 'Next.js', 'Claude', 'IA generativa'],
    year:        2026,
    url:         'https://paolaveliz.cl',
    github:      'https://github.com/pochitax/portafolioweb',
    featured:    true,
    coverImage:  '/projects/yo-flor.png',
    contenido:  `
    <h3>El problema</h3>
    <p>Necesitaba reunir en un solo espacio mi experiencia, conocimientos y distintas áreas de trabajo, construyendo un sitio que no solo presentara mi trayectoria, sino que también demostrara mis capacidades aplicadas al diseño y desarrollo web.</p>
    <p>El desarrollo del sitio partió desde mi propia trayectoria profesional, la experimentación y de la necesidad de integrar en una misma experiencia mis áreas de especialización:<em> UX, diseño, desarrollo frontend y docencia.</em></p>

    <h3>Integrando nuevas tecnologías</h3>
    <p>Para iniciar el proyecto, trabajé junto a <a href="https://claude.ai/" target="_blank">Claude</a>, incorporando mi trayectoria, conocimientos y la estructura que quería desarrollar para el sitio. A partir de esta conversación, exploré el uso de <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> y <a href="https://nextjs.org/" target="_blank">Next.js</a>, generando una primera base de código que me permitió levantar el proyecto de manera local.</p>


    <h3>Proceso e Identidad</h3>
    <p>Desde la base que me generó Claude, continué desarrollando y ajustando el sitio de forma iterativa, modificando estilos y contenidos e incorporando nuevas funcionalidades según las necesidades del proyecto. Esta experiencia me permitió integrar la IA generativa como parte de mi proceso de desarrollo, poniendo en práctica y profundizando mis conocimientos técnicos en generación y revisión de código.</p>

    <p>La identidad visual incorpora elementos que forman parte de mi manera de expresarme y trabajar, como el color fucsia y la tipografía Inter, presentes también en mis presentaciones. El unicornio rosa representa una dimensión más personal de mi identidad y mi faceta de madre, mientras que la diversidad de contenidos y secciones refleja la multiplicidad de áreas que he desarrollado y aprendido a lo largo de mi carrera.</p>

    <h3>Resultado</h3>
    <p>El resultado conecta mi identidad profesional y personal en una experiencia digital coherente conmigo. Como parte de la implementación, conecté el repositorio del proyecto en <a href="https://github.com/pochitax/portafolioweb" target="_blank">GitHub</a> con <a href="https://vercel.com/" target="_blank">Vercel</a>, vinculé el dominio y llevé el sitio a producción en <a href="https://paolaveliz.cl/" target="_blank">paolaveliz.cl</a>. Finalmente, este trabajo se tradujo en un sitio limpio y personal que reúne mi trayectoria, proyectos, experiencia docente y conocimientos, y que al mismo tiempo funciona como una demostración concreta de mis capacidades de diseño y desarrollo web.</p>
  `,
  },
  {
    slug:        'fundacion-gantz',
    title:       'Fundación Gantz',
    description: 'De la docencia al desarrollo: Front para el sitio web de la Fundación Gantz.',
    tags:        ['HTML', 'CSS', 'Sass', 'Bootstrap', 'Accesibilidad', 'Docencia'],
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
    slug:        'rutas-formativas',
    title:       'Rutas Formativas Escuela Diseño Duoc UC',
    description: 'Ajustes de contenidos y rediseño de carrusel de especializaciones y salidas técnicas.',
    tags:        ['HTML', 'CSS', 'Javascript', 'Vue.js', 'IA generativa'],
    year:        2026,
    url:         'https://diseno.duoc.cl/rutasformativas/',
    github:      'https://github.com/ddwduocvina/rutas-formativas',
    featured:    true,
    coverImage:  '/projects/rutas.jpg',
    contenido:  `
    <h3>El problema</h3>
    <p>El sitio Rutas Formativas de la Escuela de Diseño Duoc UC permite visualizar las especialidades, menciones y salidas técnicas a las que pueden optar los estudiantes a lo largo de su carrera, considerando las distintas versiones de la malla curricular según el CAPE correspondiente. Debido a la evolución de los planes de estudio, desde un modelo basado en menciones hacia uno de especializaciones, surgió la necesidad de actualizar el carrusel principal del sitio para representar de manera adecuada las nuevas rutas formativas.</p>

    <h3>Proceso</h3>
    <p>El diseño inicial del carrusel fue desarrollado por la Agencia Bloom UX. Mi participación se centra actualmente en la implementación y adaptación de esta propuesta para incorporar las nuevas salidas técnicas y actualizar la experiencia de navegación.</p>

    <p>El carrusel está desarrollado en Vue.js y, durante el proceso de implementación, incorporé IA generativa como herramienta de apoyo para resolver y desarrollar nuevas funcionalidades. Actualmente, el sitio se encuentra en proceso de actualización y poblamiento de las nuevas salidas técnicas en formato HTML, previo a su liberación en producción.</p>

    <h3>Resultado</h3>
    <p>Una actualización del sistema de navegación de Rutas Formativas que permite representar la evolución de los planes de estudio de la Escuela de Diseño y ampliar el carrusel para incorporar las nuevas salidas técnicas. El proyecto integra diseño, desarrollo frontend con Vue.js y uso aplicado de IA generativa, y actualmente se encuentra en proceso de implementación para su posterior publicación en producción.</p>
    `,
  },
  {
    slug:        'diseno-ddhub',
    title:       'Diseño Sitio DDHub',
    description: 'Diseño para el Sitio DDHub de la Escuela de Diseño Duoc UC',
    tags:        ['UX', 'UI', 'Mapa de navegación', 'Figma', 'Design System'],
    year:        2026,
    url:         'https://diseno.duoc.cl/ddhub/',
    featured:    true,
    coverImage:  '/projects/ddhub.png',
    contenido:  `
    <h3>El problema</h3>
    <p>El sitio DDHub de la Escuela de Diseño Duoc UC funcionaba sobre WordPress utilizando Elementor, por lo que surgió la necesidad de avanzar hacia una implementación más nativa y flexible, que permitiera mejorar el control sobre la estructura, los estilos y la evolución del sitio.</p>

    <h3>Proceso</h3>
    <p>Participé en el proyecto desde la etapa de arquitectura de información, definiendo una nueva estructura y mapa de navegación. A partir de esta base, desarrollé wireframes y posteriormente una guía de estilos basada en las normas gráficas de Duoc UC, estableciendo los criterios visuales para el nuevo sistema de interfaz.</p>

    <p>Con el sistema de diseño definido, desarrollé las pantallas en Figma y realicé el prototipado de la propuesta. Una vez finalizada esta etapa, el proyecto pasó a desarrollo, donde Tomás Contreras estuvo a cargo del front y de la implementación en WordPress, bajo mi monitoreo y dirección.</p>

    <h3>Resultado</h3>
    <p>Entre fines de 2025 y comienzos de 2026 se desarrolló una nueva propuesta para el sitio DDHub, articulando arquitectura de información, sistema visual, diseño de interfaz y desarrollo en WordPress. El proyecto permitió avanzar hacia una implementación más nativa del sitio y, al mismo tiempo, incorporar una experiencia formativa mediante la participación y acompañamiento de un estudiante en práctica.</p>
  `,
  },
  {
    slug:        'mantencion-sitios-escuela',
    title:       'Sitios de Escuela de Diseño',
    description: 'Mantención y actualización de sitios de Escuela de Diseño Duoc UC',
    tags:        ['HTML', 'CSS', 'Javascript', 'Wordpress'],
    year:        2026,
    url:         '',
    featured:    true,
    coverImage:  '/projects/mantencion.png',
    contenido:  `
    <h3>El problema</h3>
    <p>Los sitios web de la Escuela de Diseño Duoc UC requieren una actualización y mantención constante para asegurar su correcto funcionamiento, mantener sus contenidos vigentes y responder a nuevas necesidades de diseño y comunicación digital.</p>

    <h3>Proceso</h3>
    <p>A partir de 2025 asumí la mantención y actualización de distintos sitios de la Escuela de Diseño: <a href="https://diseno.duoc.cl/ddhub/" target="_blank">DDHub</a>, <a href="https://diseno.duoc.cl/premiosdd/" target="_blank">Premios DD</a>, <a href="https://diseno.duoc.cl/" target="_blank">Diseño Duoc</a> y <a href="https://diseno.duoc.cl/rutasformativas/" target="_blank">Rutas Formativas</a>. Este trabajo contempla ajustes de código HTML y CSS, implementación de solicitudes de diseño y UX, creación y organización de repositorios, actualización de contenidos y otras tareas asociadas al desarrollo y evolución de los sitios.</p>

    <p>Durante 2025 también trabajé junto a Tomás Contreras, estudiante en práctica, a quien guié en la ejecución de tareas y proyectos, acompañando su proceso de aprendizaje y supervisando la implementación de las soluciones.</p>

    <h3>Resultado</h3>
    <p>La mantención continua de estos sitios permite mantener actualizadas y operativas distintas plataformas digitales de la Escuela de Diseño. El proyecto también incorporó una dimensión formativa, vinculando la mantención y desarrollo web con la experiencia práctica de un estudiante en proceso de formación profesional.</p>
    `,
  },
  {
    slug:        'unidos-por-una-sonrisa',
    title:       'Unidos por una sonrisa',
    description: 'Construcción de landing page para la Fundación Gantz para la Colecta Nacional.',
    tags:        ['HTML', 'CSS', 'Responsive', 'Bootstrap'],
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
    tags:        ['Accesibilidad', 'UX', 'Docencia'],
    year:        2025,
    url:         'https://iavm.cl/',
    featured:    false,
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
    slug:        'behance-docencia-escuela',
    title:       'Del aula al portafolio',
    description: 'Evidencias de aprendizaje y proyectos de estudiantes en Behance · 2024–2026',
    tags:        ['UI', 'UX', 'Figma', 'SEO', 'Accesibilidad','Docencia'],
    year:        2024,
    url:         'https://www.behance.net/paolavelizu/moodboards',
    urlLabel:     'Ver proyectos en Behance',
    featured:    false,
    coverImage:  '/projects/behance.png',
    contenido:  `
    <h3>Behance de proyectos académicos</h3>
    <p>Este repositorio permite visualizar cómo el trabajo desarrollado en el aula se transforma en evidencia profesional, acompañando a los estudiantes en la documentación y presentación de sus procesos de diseño para enfrentar posteriormente contextos académicos y laborales.</p>
    <h3>La construcción de un portafolio profesional</h3>
    <p>Los estudiantes necesitan contar con evidencias concretas que permitan demostrar los conocimientos, procesos y competencias desarrolladas durante su formación. A partir de esta necesidad la Escuela plantea que debe existir un registro de evidencias en Behance, surge la recopilación de trabajos realizados en distintas asignaturas, con el propósito de documentar no solo las soluciones finales, sino también el proceso que existe detrás de cada proyecto.</p>

    <h3>La solución</h3>
    <p>El repositorio de evidencias en Behance reúne trabajos realizados por estudiantes entre 2024 y 2026 en las asignaturas <em>Prototipo Interactivo, Arquitectura y Diseño de Interfaces, Accesibilidad Web, SEO y Posicionamiento Web, Portafolio de Título y Producción de Sistemas Gráficos</em>.</p>

    <p>Cada proyecto permite visualizar el proceso de aprendizaje desarrollado durante la asignatura, incorporando conceptualización, investigación, análisis de usuarios y referentes, definición de problemáticas y desarrollo de soluciones gráficas, análogas o digitales. Los estudiantes materializan este proceso en un lienzo de Behance que posteriormente pueden utilizar como evidencia de sus habilidades y competencias profesionales.</p>
  `,
  },
  {
    slug:        'glosario-front',
    title:       'Glosario de términos web',
    description: 'Glosario de términos para las carreras de Diseño Gráfico Mención Interfaces y Desarrollo y Diseño Web de Duoc UC.',
    tags:        ['Responsive', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
    year:        2024,
    url:         'https://ddwduocvina.github.io/glosario-front/',
    urlLabel:     'Ver front del sitio',
    github:      'https://github.com/ddwduocvina/glosario-front',
    featured:    false,
    coverImage:  '/projects/glosario.png',
    contenido:  `
    <h3>El problema</h3> <p>Los estudiantes que comienzan su formación en Diseño Gráfico Mención Interfaces y Desarrollo y Diseño Web se enfrentan a una serie de conceptos y términos propios del mundo digital, UX y desarrollo web. A partir de esta necesidad, se creó un glosario como recurso de apoyo para facilitar su acercamiento y familiarización con este nuevo lenguaje.</p>

    <h3>Proceso</h3> <p>El glosario fue desarrollado utilizando un archivo JSON para organizar y clasificar los términos por letra y entrada. Mediante JavaScript se implementó una solicitud de tipo GET para obtener dinámicamente la información desde el archivo y mostrarla en la interfaz.</p>

    <p>Como parte de la experiencia, se incorporaron funcionalidades como el cambio entre modo claro y oscuro, además de una estructura responsiva que permite adaptar el contenido a distintos tamaños de pantalla.</p>

    <h3>Resultado</h3> <p>Un recurso digital que facilita la consulta y familiarización con conceptos de UX, diseño y desarrollo web, especialmente para estudiantes que están iniciando su formación. El proyecto también permitió aplicar conceptos de manejo de datos en JSON, solicitudes GET, JavaScript y diseño responsivo en una solución web funcional.</p>
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
    tags:        ['HTML', 'CSS', 'Sass', 'Javascript', 'Bootstrap'],
    year:        2021,
    url:         'https://pochitax.github.io/front-cursos-sede-vina-duoc/front/',
    urlLabel:     'Ver front del sitio',
    github:       'https://github.com/pochitax/front-cursos-sede-vina-duoc',
    featured:    false,
    coverImage:  '/projects/miramas.png',
    contenido:  `
    <h3>El problema</h3>
    <p>Los estudiantes necesitan contar con herramientas que les permitan visualizar y planificar su avance curricular, especialmente al momento de decidir qué asignaturas cursar en los siguientes periodos académicos. A partir de esta necesidad surge Mira+, una plataforma de simulación académica de Duoc UC orientada a apoyar la planificación de la trayectoria curricular y favorecer una titulación oportuna.</p>

    <h3>Proceso</h3>
    <p>El proyecto fue desarrollado en conjunto con Nicolás Espinoza, a cargo de la experiencia UX y la organización de los pasos del proceso, y Carlos Aparicio, responsable del diseño de la interfaz. Mi rol estuvo centrado en el desarrollo del front, llevando la propuesta de experiencia e interfaz a una solución web funcional.</p>

    <p>La plataforma permite visualizar el estado de las asignaturas, simular distintos escenarios académicos y generar propuestas de inscripción para los siguientes periodos. También incorpora opciones para considerar asignaturas que podrían reprobarse, definir preferencias horarias y guardar los resultados de la simulación, incluyendo la generación de un resumen descargable en PDF y el envío de una propuesta por correo electrónico.</p>

    <h3>Resultado</h3>
    <p>En 2021 se desarrolló Mira+, una herramienta de simulación que permite a los estudiantes explorar diferentes escenarios de avance curricular y visualizar alternativas para planificar sus próximos periodos académicos. El proyecto permitió transformar una necesidad de planificación académica en una experiencia digital interactiva, integrando UX, diseño de interfaz y desarrollo front.</p>
    `,
  },
  {
    slug:        'front-cursos-cortos',
    title:       'Front para Cursos Cortos',
    description: 'Proyecto Sede Viña del Mar Duoc UC',
    tags:        ['HTML', 'CSS', 'Sass', 'Javascript'],
    year:        2020,
    url:         'https://pochitax.github.io/front-cursos-sede-vina-duoc/front/',
    urlLabel:     'Ver front del sitio',
    github:       'https://github.com/pochitax/front-cursos-sede-vina-duoc',
    featured:    false,
    coverImage:  '/projects/cursos-cortos.png',
    contenido:  `
    <h3>El problema</h3>
    <p>Duoc UC busca generar nuevos prospectos para sus distintas carreras, ofreciendo a la comunidad una amplia oferta de cursos cortos y gratuitos en línea, orientados a áreas de alta demanda laboral. Esta oferta necesitaba una vitrina digital que permitiera a las personas conocer los cursos disponibles e inscribirse en ellos, generando un primer acercamiento con Duoc UC y una posible vinculación futura con sus carreras. A partir de esta necesidad surge una propuesta de sitio para presentar cursos de distintas escuelas, entre ellas Administración y Negocios, Comunicación, Diseño, Informática y Telecomunicaciones y Salud.</p>

    <h3>Proceso</h3>
    <p>El proyecto fue desarrollado en conjunto con Nicolás Espinoza, a cargo de la experiencia UX y la organización de los pasos del proceso, y Carlos Aparicio, responsable del diseño de la interfaz. Mi rol estuvo centrado en el desarrollo del front, llevando la propuesta de experiencia e interfaz a una solución web funcional.</p>

    <p>La propuesta buscó generar una experiencia similar a la de una clase real de Duoc UC, facilitando la exploración de los cursos y acercando la oferta de formación a los estudiantes a través de una interfaz digital.</p>

    <h3>Resultado</h3>
    <p>En 2020 se desarrolló una propuesta web para presentar y explorar cursos cortos y gratuitos de distintas escuelas de Duoc UC. El proyecto permitió transformar una oferta de formación en una experiencia digital orientada a los estudiantes, integrando UX, diseño de interfaz y desarrollo front.</p>
  `,
  },
  {
    slug:        'vivachile',
    title:       'VivaChile.org',
    description: 'Mantención y actualización de contenidos, mailing masivos y análisis de métricas',
    tags:        ['HTML', 'CSS', 'Newsletter', 'Wordpress'],
    year:        2008,
    url:         'https://viva-chile.cl/',
    featured:    false,
    coverImage:  '/projects/viva.jpg',
    contenido:  `
    <h3>El problema</h3>
    <p>Vivachile.org necesitaba una plataforma web que permitiera publicar y mantener actualizados sus contenidos, además de contar con canales propios para comunicar periódicamente sus novedades a su comunidad. A partir de esta necesidad, se desarrolló un sitio web en WordPress y un sistema de comunicación mediante newsletters.</p>

    <h3>Proceso</h3>
    <p>En 2008 desarrollé el sitio web Vivachile.org en conjunto con Jonathan Won, utilizando WordPress como CMS. Desde entonces, he estado a cargo de su mantención y actualización de contenidos, gestionando de manera continua la plataforma y sus elementos visuales.</p>

    <p>Como parte de esta gestión, realizo semanalmente newsletters en HTML y su envío mediante la plataforma de mailing masivo Mailrelay. Además, monitoreo métricas y realizo ajustes de banners, imágenes y otros elementos del sitio según las necesidades de comunicación.</p>

    <h3>Resultado</h3>
    <p>Un sitio web que se mantiene activo y en evolución desde 2008, acompañado de un canal de comunicación digital de actualización semanal. El proyecto reúne experiencia en desarrollo y gestión de WordPress, generación de contenido HTML para mailing, administración de campañas y monitoreo de métricas.</p>

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
    title:       'Asesoría en Wordpress y Elementor', 
    institution: 'Artequín Viña',
    period:      '2026',
    description: (
      <>
       Asesoría técnica en Wordpress, manejo de plugins (Elementor), entradas y páginas para el equipo de Diseño del Museo Artequín Viña del Mar.
      </>
    ),
    tags:        ['Wordpress', 'Elementor'],
  },
    {
    title:       'Categorización Docente Duoc UC – Perfil Asociado', 
    institution: 'Duoc UC',
    period:      '2025 a la fecha',
    description: (
      <>
        Resultado de una <strong><a href='https://drive.google.com/file/d/1jvOzswpzRrQrDQUTKIqkm0ynfe7I478w/view' target='_blank'>trayectoria</a></strong> que integra docencia, desarrollo disciplinar, proyectos de Vinculación con el Medio y participación en iniciativas de la Escuela de Diseño. Este logro reconoce mi experiencia y aporte como docente, manteniendo una conexión activa entre la práctica profesional y la formación de estudiantes. 
      </>
    ),
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
    title:       'Coordinación de Rutas Formativas', 
    institution: 'Escuela de Diseño Duoc UC',
    period:      '2024 - 2026',
    description: (
      <>
       Participación en la coordinación y mantención del sitio de Rutas Formativas de la Escuela de Diseño, orientado a descubrir las distintas rutas de formación de la Escuela de Diseño que incluyen las distintas salidas según carrera y sus asignaturas disciplinares y optativas.
      </>
    ),
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
  {
    title:       'Relatora Programa SIGO', 
    institution: 'SIGO Turismo Tecnología',
    period:      '2020 - 2021',
    description: (
      <>
       Asistencia técnica en herramientas digitales para emprendedores de turismo del Programa SIGO Turismo Tecnología de Tu Clase, tu País.
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
    coverImage:  '/projects/LYwyLKB-1280.webp',
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
    coverImage:  '/projects/poqRvpd-1280.webp',
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
    slug:        'sass-bootstrap',
    coverImage:  '/projects/landing.png',
    title:       'Landing page Sass y Bootstrap',
    description: 'Ejercicio académico de ejemplo de uso de Sass y Bootstrap.',
    tags:        ['HTML', 'CSS', 'Sass', 'Bootstrap'],
    year:        2023,
    featured:    true,
    embeds: [
      {
        url:   'https://ddwduocvina.github.io/ejemplo-sass-bs/',
        label: 'Ver experimento en GH pages',
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
    coverImage:  '/projects/vYroGWE-1280.webp',
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
    coverImage:  '/projects/jOwewEZ-1280.webp',
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
  {
    slug:        'javascript-desde-cero',
    coverImage:  '/projects/youtube.jpg',
    title:       'Javascript desde cero',
    description: 'Playlist de Youtube con videos explicativos de Javascript.',
    tags:        ['Javascript'],
    year:        2021,
    featured:    true,
    embeds: [
      {
        url:   'https://www.youtube.com/embed/videoseries?si=OoVuzwTVY3n-fpHz&amp;list=PLJFagg9GTPmRt4wuCFb3TaVR8cTZrCyzM',
        label: 'Ver playlist en Youtube',
      },
    ],
  },
]