import Link from 'next/link'
import ProjectCard from '@/components/ui/ProjectCard'
import { featuredProjects } from '@/lib/projects'
import RotatingText from '@/components/ui/RotatingText'
import HeroCanvas from '@/components/ui/HeroCanvas'
import FloralBackground from '@/components/ui/FloralBackground'

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="section hero"
        style={{ display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}

      >
        <FloralBackground />
        <HeroCanvas />

        <div className="container" 
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Rol / eyebrow */}
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-muted)',
              marginBottom: '1.5rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            UX · Desarrollo web · Docencia
          </p>

          {/* Headline principal */}
          <h1 style={{ marginBottom: '2rem', maxWidth: '15ch' }}>
            Diseño experiencias {' '}
          <RotatingText />
          </h1>

          {/* Bajada */}
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--color-muted)',
              maxWidth: '50ch',
              marginBottom: '3rem',
              lineHeight: 1.7,
            }}
          >
            Soy <strong>Paola Véliz, Diseñadora UX y Desarrolladora Web</strong>. Investigo, diseño y construyo experiencias digitales, conectando estrategia, creatividad y tecnología. También enseño ese camino a otros.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/proyectos" className="btn-primary">Ver proyectos</Link>
            <Link href="/docencia"  className="btn-secondary">Docencia</Link>
            <Link href="/contacto"  className="btn-secondary">Contacto</Link>
          </div>
        </div>
        
      </section>

      <hr />

      {/* ─── Proyectos destacados ──────────────────────────── */}
      <section className="container section">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '2.5rem',
          }}
        >
          <h2>Proyectos</h2>
          <Link
            href="/proyectos"
            style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}
          >
            Ver todos →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
          }}
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <hr />

      {/* ─── Sobre mí — bloque mínimo ─────────────────────── */}
      <section className="container section">
        <div style={{ maxWidth: '55ch' }}>
          <h2 style={{ marginBottom: '1.25rem' }}>Sobre mí</h2>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Desde 2007, mi pasión e interés están en el cruce entre diseño y código. Comencé desde el diseño, aprendí a construir lo que diseñaba y hoy enseño ese camino completo a otros en Duoc UC. También trabajo de manera freelance, conectando la práctica profesional con la docencia y la vinculación con el medio.
          </p>
          <Link
            href="/contacto"
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-accent)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            Trabajemos juntos →
          </Link>
        </div>
      </section>
    </>
  )
}
