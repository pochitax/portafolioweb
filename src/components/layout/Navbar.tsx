'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/docencia',  label: 'Docencia'  },
  { href: '/contacto',  label: 'Contacto'  },
]

export default function Navbar() {
  const pathname            = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = theme === 'dark'

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: 'var(--spacing-nav)' }}>

        <Link href="/" className='color-top' style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9375rem' }}>
          <Image src="/flor.svg" alt="Paola Véliz" width={60} height={60} style={ { marginRight: '1rem' } } className='image-top' />
          <span className='responsive'>¡Hola!... soy Paola</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '0.875rem' }}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ color: pathname === href ? 'var(--color-fg)' : 'var(--color-muted)', transition: 'color var(--transition)' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Switch modo oscuro */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Cambiar tema"
              style={{
                position:        'relative',
                width:           '44px',
                height:          '24px',
                borderRadius:    '999px',
                border:          '1px solid var(--color-border)',
                backgroundColor: isDark ? 'var(--color-accent)' : 'var(--color-border)',
                cursor:          'pointer',
                transition:      'background-color 300ms ease',
                flexShrink:      0,
              }}
            >
              <span style={{
                position:        'absolute',
                top:             '2px',
                left:            isDark ? '22px' : '2px',
                width:           '18px',
                height:          '18px',
                borderRadius:    '50%',
                backgroundColor: 'var(--color-bg)',
                transition:      'left 300ms ease',
              }} />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}