'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const links = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/docencia',  label: 'Docencia'  },
  { href: '/contacto',  label: 'Contacto'  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBlock: 'var(--spacing-nav)',
        }}
      >
        {/* Logo / nombre */}
        <Link
          href="/"
          style={{
            fontWeight: 500,
            letterSpacing: '-0.02em',
            fontSize: '0.9375rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Image src="/flor.svg" alt="Paola Véliz" width={60} height={60} style={{ marginRight: '20px' }} />
          ¡Hola... soy Paola
        </Link>

        {/* Links */}
        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            fontSize: '0.875rem',
          }}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  color: pathname === href ? 'var(--color-fg)' : 'var(--color-muted)',
                  transition: 'color var(--transition)',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
