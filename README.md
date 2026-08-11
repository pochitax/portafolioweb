# Mi Portafolio

Portfolio personal construido con Next.js 14 (App Router), TypeScript y Tailwind CSS.

## Stack
- **Next.js 14** — App Router, SSG
- **TypeScript**
- **Tailwind CSS** — solo para utilidades de layout
- **CSS Variables** — para todos los tokens de diseño

---

## Inicio rápido

```bash
# 1. Crear el proyecto base
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Copiar los archivos de este repo sobre el proyecto creado

# 3. Correr en desarrollo
npm run dev
```

---

## Personalización

### Tokens de diseño
Todo el sistema visual vive en `src/app/globals.css`:

```css
:root {
  --color-bg:      #FAFAFA;   /* fondo */
  --color-fg:      #111111;   /* texto principal */
  --color-muted:   #888888;   /* texto secundario */
  --color-border:  #E5E5E5;   /* bordes */
  --color-accent:  #2A2AE8;   /* acento único */
}
```

### Contenido
Todos los datos de proyectos y docencia están en `src/lib/projects.ts`.
No hay base de datos ni CMS — todo en un solo archivo TypeScript.

### Case studies
Cada proyecto tiene su página en `src/app/proyectos/[slug]/page.tsx`.
El contenido de cada case study va directo en esa página por ahora.
Cuando tengas varios, podés migrar a MDX.

---

## Estructura de carpetas

```
src/
├── app/
│   ├── layout.tsx              # Fuentes, metadata global
│   ├── page.tsx                # Inicio (Hero + proyectos destacados)
│   ├── globals.css             # Tokens + estilos base
│   ├── proyectos/
│   │   ├── page.tsx            # Listado de proyectos
│   │   └── [slug]/page.tsx     # Case study individual
│   ├── docencia/page.tsx
│   └── contacto/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── ProjectCard.tsx
├── lib/
│   └── projects.ts             # Datos de proyectos y docencia
└── types/
    └── index.ts
```

---

## To-do sugerido

- [ ] Reemplazar datos de ejemplo en `src/lib/projects.ts`
- [ ] Agregar imágenes reales en `/public/projects/`
- [ ] Completar los case studies en cada `[slug]/page.tsx`
- [ ] Ajustar colores en `globals.css`
- [ ] Configurar dominio y deploy en Vercel
- [ ] Agregar `og:image` por proyecto
