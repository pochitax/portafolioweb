import Link from 'next/link'
import { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, description, tags, year } = project


  return (
    <Link href={`/proyectos/${slug}`} className="card-link">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '0.75rem',
        }}
      >
        <h3 style={{ fontSize: '1rem', fontWeight: 500 }}>{title}</h3>
        <span style={{ color: 'var(--color-muted)', fontSize: '0.8125rem' }}>{year}</span>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-muted)',
          marginBottom: '1.25rem',
          maxWidth: '100%',
        }}
      >
        {description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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
    </Link>
  )
}
