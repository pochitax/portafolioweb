import { notFound } from 'next/navigation'
import Link from 'next/link'
import { experiments } from '@/lib/projects'

export function generateStaticParams() {
  return experiments.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const exp = experiments.find((e) => e.slug === slug)
  if (!exp) return {}
  return { title: `${exp.title} — Paola Véliz` }
}

export default async function ExperimentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const exp = experiments.find((e) => e.slug === slug)
  if (!exp) notFound()

  return (
    <article className="container section" style={{ maxWidth: '860px' }}>
      {/* Back */}
      <Link href="/experimentos" style={{
        display:      'inline-block',
        fontSize:     '0.875rem',
        color:        'var(--color-muted)',
        marginBottom: '2.5rem',
      }}>
        ← Experimentos
      </Link>

      {/* Header */}
      <header style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>
          {exp.year}
        </p>
        <h1 style={{ marginBottom: '1rem' }}>{exp.title}</h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
          {exp.description}
        </p>
      </header>

      <hr style={{ marginBottom: '3rem' }} />

      {/* Iframes / Embeds */}
      {exp.embeds && exp.embeds.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
          {exp.embeds.map((embed, i) => (
            <div key={i}>
              {embed.label && (
                <p style={{
                  fontSize:      '0.75rem',
                  color:         'var(--color-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom:  '0.75rem',
                }}>
                  {embed.label}
                </p>
              )}
              <iframe
                src={embed.url}
                style={{
                  width:        '100%',
                  height:       '500px',
                  border:       '1px solid var(--color-border)',
                  borderRadius: 'var(--radius)',
                }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      )}

      {/* Contenido adicional */}
      {exp.contenido && (
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: exp.contenido }}
          style={{ color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '3rem' }}
        />
      )}

      {/* Tags */}
      {exp.tags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          {exp.tags.map((tag) => (
            <span key={tag} style={{
              fontSize:     '0.75rem',
              padding:      '0.2rem 0.6rem',
              border:       '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              color:        'var(--color-muted)',
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}