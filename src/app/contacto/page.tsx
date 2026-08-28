import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — Tu Nombre',
}

const channels = [
  {
    label: 'Email',
    value: 'paola.veliz@gmail.com',
    href: 'mailto:paola.veliz@gmail.com',
    description: 'Proyectos, colaboraciones o consultas generales.',
  },
  {
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/paola-veliz-ugarte/',
    href: 'https://www.linkedin.com/in/paola-veliz-ugarte/',
    description: 'Historial profesional y recomendaciones.',
  },
  {
    label: 'GitHub',
    value: 'github.com/pochitax',
    href: 'https://github.com/pochitax',
    description: 'Código, repositorios y contribuciones.',
  },
  {
    label: 'Curriculum',
    value: 'drive.google.com',
    href: 'https://drive.google.com/file/d/1XCz5KGewMNSFWTUoX_zq9e4NufBK1UqC/view?usp=sharing',
    description: 'Curriculum profesional y proyectos',
  },
  {
    label: 'Docencia',
    value: 'drive.google.com',
    href: 'https://drive.google.com/file/d/1jvOzswpzRrQrDQUTKIqkm0ynfe7I478w/view?usp=sharing',
    description: 'Postulación a categorización docente',
  },
]

export default function ContactoPage() {
  return (
    <section className="container section">
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h1 style={{ marginBottom: '0.75rem' }}>Contacto</h1>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
          También puedes conocer mi trayectoria en {' '}
          <a href="https://www.linkedin.com/in/paola-veliz-ugarte/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>{' '}
          o descargar mi {' '}
          <a href="https://drive.google.com/file/d/1XCz5KGewMNSFWTUoX_zq9e4NufBK1UqC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="footer-link">
            Curriculum Vitae
          </a>.
        </p>
      </div>

      {/* Canales */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {channels.map((ch, i) => (
          <a
            key={i}
            href={ch.href}
            target={ch.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="channel-link"
          >
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', paddingTop: '2px' }}>
              {ch.label}
            </span>
            <div>
              <p style={{ fontWeight: 500, marginBottom: '0.25rem', fontSize: '0.9375rem' }}>
                {ch.value} ↗
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                {ch.description}
              </p>
            </div>
          </a>
        ))}
        <div style={{ borderTop: '1px solid var(--color-border)' }} />
      </div>
    </section>
  )
}
