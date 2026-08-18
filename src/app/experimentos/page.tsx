import { Metadata } from 'next'
import Link from 'next/link'
import { experiments } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Experimentos — Paola Véliz',
}

export default function ExperimentosPage() {
  return (
    <section className="container section">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '0.75rem' }}>Experimentos</h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1rem' }}>
          Exploraciones técnicas, pruebas de concepto y prototipos interactivos.
        </p>
      </div>

      <div style={{
        display:               'grid',
        gridTemplateColumns:   'repeat(auto-fill, minmax(300px, 1fr))',
        gap:                   '1rem',
      }}>
        {experiments.map((exp) => (
          <Link
            key={exp.slug}
            href={`/experimentos/${exp.slug}`}
            className="card-link"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500 }}>{exp.title}</h3>
              <span style={{ color: 'var(--color-muted)', fontSize: '0.8125rem' }}>{exp.year}</span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginBottom: '1.25rem', maxWidth: '100%' }}>
              {exp.description}
            </p>

            {exp.tags && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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
          </Link>
        ))}
      </div>
    </section>
  )
}