'use client'

import { useEffect, useRef } from 'react'

type Circle = {
  x: number
  y: number
  radius: number
  alpha: number
  growing: boolean
}

// Agrega este tipo junto al de Circle
type Ripple = {
  x:      number
  y:      number
  radius: number
  alpha:  number
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse     = useRef({ x: 0, y: 0 })
  const circles   = useRef<Circle[]>([])
  const rafRef    = useRef<number>(0)
  const ripples = useRef<Ripple[]>([])
  let   frameCount = 0

  useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let frameCount = 0

  const resize = () => {
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const onMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect()
    mouse.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  // Click: onda más intensa
  const onClick = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect()
    for (let i = 0; i < 3; i++) {
      circles.current.push({
        x:       e.clientX - rect.left,
        y:       e.clientY - rect.top,
        radius:  i * 12,
        alpha:   0.7 - i * 0.15,
        growing: true,
      })
    }
  }

  canvas.addEventListener('mousemove', onMove)
  canvas.addEventListener('click', onClick)

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Ondas continuas desde el puntero cada 18 frames
    frameCount++
    if (frameCount % 30 === 0) {
      ripples.current.push({
        x:      mouse.current.x,
        y:      mouse.current.y,
        radius: 0,
        alpha:  0.35,
      })
    }

    // Dibujar ondas del puntero
    ripples.current = ripples.current.filter((r) => r.alpha > 0)
    ripples.current.forEach((r) => {
      ctx.beginPath()
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(0, 0, 0, ${r.alpha})`
      ctx.lineWidth   = 1
      ctx.stroke()

      r.radius += 1.8
      r.alpha  -= 0.008
    })

    // Círculos del click — más grandes y pronunciados
    circles.current = circles.current.filter((c) => c.alpha > 0)
    circles.current.forEach((c) => {
      ctx.beginPath()
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(243, 22, 176, ${c.alpha})`
      ctx.lineWidth   = 1.5
      ctx.stroke()

      c.radius += 3
      c.alpha  -= 0.01
    })

    rafRef.current = requestAnimationFrame(draw)
  }

  draw()

  return () => {
    cancelAnimationFrame(rafRef.current)
    window.removeEventListener('resize', resize)
    canvas.removeEventListener('mousemove', onMove)
    canvas.removeEventListener('click', onClick)
  }
}, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'absolute',
        inset:         0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'all',
        borderRadius:  'inherit',
      }}
    />
  )
}