import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, projects } from '@/lib/projects.tsx'

/* Genera rutas estáticas para cada proyecto */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return { title: `${project.title} — Tu Nombre` }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const { title, description, tags, year, url, github } = project

  return (
    <article className="container section" style={{ maxWidth: '720px' }}>
      {/* Back */}
      <Link
        href="/proyectos"
        style={{
          display: 'inline-block',
          fontSize: '0.875rem',
          color: 'var(--color-muted)',
          marginBottom: '2.5rem',
        }}
      >
        ← Proyectos
      </Link>

      {/* Header del proyecto */}
      <header style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>
          {year}
        </p>
        <h1 style={{ marginBottom: '1rem' }}>{title}</h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
          {description}
        </p>

        {/* Links externos */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Ver sitio ↗
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              GitHub ↗
            </a>
          )}
        </div>
      </header>

      <hr style={{ marginBottom: '3rem' }} />

      {/* ─── Contenido del case study ────────────────────── */}
      {/* Reemplazá estas secciones con el contenido real.   */}
      {/* En el futuro podés migrar esto a MDX.              */}

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-muted)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          El problema
        </h2>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
          Describí el contexto, el usuario y el desafío que este proyecto buscaba resolver.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-muted)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Proceso
        </h2>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
          Research, decisiones de diseño, iteraciones. Podés incluir imágenes de wireframes,
          pruebas de usabilidad y exploración visual.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-muted)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Implementación
        </h2>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
          Cómo llevaste el diseño a código. Stack, decisiones técnicas, desafíos.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-muted)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Resultado
        </h2>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
          Qué logró el proyecto. Métricas, aprendizajes, lo que harías distinto.
        </p>
      </section>

      {/* Tags al pie */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '0.75rem',
              padding: '0.2rem 0.6rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              color: 'var(--color-muted)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
