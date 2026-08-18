import { Metadata } from 'next'
import { teaching } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Docencia — Tu Nombre',
}

export default function DocenciaPage() {
  return (
    <section className="container section">
      {/* Header */}
      <div style={{ marginBottom: '3.5rem'}}>
        <h1 style={{ marginBottom: '0.75rem' }}>Docencia</h1>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: '80%', marginBottom: '0.75rem' }}>
          <strong>Enseño UX y desarrollo web desde la práctica, conectando investigación, diseño y tecnología</strong>. Creo que entender el proceso completo cambia la forma de diseñar, construir y aprender. <strong>He impartido asignaturas en las áreas de Diseño Gráfico, UX e Interacción, Desarrollo Web y Accesibilidad</strong>, acompañando a estudiantes en distintas etapas de su formación, desde los fundamentos del diseño y la creación de sistemas gráficos hasta el desarrollo de proyectos digitales y la construcción de portafolios profesionales.
        </p>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: '80%' }}>Aquí comparto proyectos, <a href='https://drive.google.com/drive/folders/1PqXYl2JcU3XDW4-qsj-GjQSrGseIyu0Z?usp=drive_link' className="footer-link" target='_blank'>certificaciones</a> y experiencias que forman parte de este recorrido.</p>
      </div>

      {/* Lista de cursos */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}
      >
        {teaching.map((item, i) => {
          const Wrapper = item.externalUrl
            ? ({ children }: { children: React.ReactNode }) => (
                <a href={item.externalUrl} target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }} className="link-external">
                  {children}
                </a>
              )
            : ({ children }: { children: React.ReactNode }) => <>{children}</>

          return (
            <Wrapper key={i}>
              <div className='columna-responsive' style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gap: '2rem', paddingBlock: '2rem', borderTop: '1px solid var(--color-border)' }}>
                {/* columna izquierda */}
                <div className='columna-responsive'>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>{item.period}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '1rem', fontWeight: 'bold' }}>{item.institution}</p>
                </div>

                {/* columna derecha */}
                <div className='columna-responsive'>
                  <h3 style={{ marginBottom: '1rem' }}>
                    {item.title}
                    {item.externalUrl && <span style={{ color: 'var(--color-accent)', marginLeft: '0.4rem' }}>↗</span>}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{item.description}</p>
                  {item.subjects && (
                    <ul style={{ marginBottom: '1rem', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {item.subjects.map((subject) => (
                        <li
                          key={subject}
                          style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                          <span style={{ color: 'var(--color-accent)', fontSize: '0.5rem' }}>●</span>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.tags && item.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {item.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: '0.75rem', padding: '0.15rem 0.55rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', color: 'var(--color-muted)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Wrapper>
          )
        })}
        <div />
      </div>
    </section>
  )
}
