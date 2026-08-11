export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        paddingBlock: '2rem',
        fontSize: '0.8125rem',
        color: 'var(--color-muted)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span>© {year} Paola Véliz</span>
        <span>
          Sitio diseñado y construido por mí, con la ayuda de{' '}
          <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="footer-link">
            Claude.ai
          </a>{' '}
          y{' '}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="footer-link">
            Next.js
          </a>
        </span>
      </div>
    </footer>
  )
}
