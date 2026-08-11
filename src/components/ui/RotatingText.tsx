'use client'

import { useState, useEffect } from 'react'

const phrases = [
  'y las construyo',
  'y las desarrollo',
  'y las hago realidad',
  'y las enseño',
  'y las traduzco en código',
  'con propósito',
]

export default function RotatingText() {
  const [index, setIndex]     = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        // Fade in
        setVisible(true)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      style={{
        color: 'var(--color-accent)',
        transition: 'opacity 400ms ease',
        opacity: visible ? 1 : 0,
        display: 'inline-block',
      }}
    >
      {phrases[index]}
    </span>
  )
}