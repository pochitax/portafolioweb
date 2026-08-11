import { Metadata } from 'next'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Proyectos — Tu Nombre',
}

export default function ProyectosPage() {
  return (
    <section className="container section">
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '0.75rem' }}>Proyectos</h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1rem' }}>
          Selección de trabajos en UX, desarrollo e integración de ambas disciplinas.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
