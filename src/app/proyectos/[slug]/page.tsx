import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, projects } from '@/lib/projects'
import Image from 'next/image'

/* Genera rutas estáticas para cada proyecto */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return { title: `${project.title} — Paola Véliz` }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
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

      {project.coverImage && project.coverImage.trim() !== '' && (
        <div style={{ marginBottom: '3rem', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            width={1600}
            height={900}
            style={{
              width:  '100%',
              height: 'auto',
            }}
          />
        </div>
      )}

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
              {project.urlLabel ?? 'Ver sitio'} ↗
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

      {project.contenido && (
        <>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: project.contenido }}
            style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}
          />
        </>
      )}

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
