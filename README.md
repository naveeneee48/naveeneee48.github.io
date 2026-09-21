# Naveen Kumar &mdash; Portfolio ⚡️

> A neon, terminal-styled DevOps/SRE portfolio with a 3D "Cluster State" visualization.

> https://naveeneee48.github.io

## Stack

- **Next.js** (App Router, static export)
- **Tailwind CSS v4**
- **React Three Fiber** / **drei** / **postprocessing** for the particle background and the 3D cluster visualization
- **Framer Motion** for scroll/hover animations
- **Lenis** for smooth scrolling
- Deployed to **GitHub Pages** via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

This produces a static export in `out/` (via `output: "export"` in `next.config.mjs`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages using the Actions deployment method.

One-time setup: in the repo's **Settings &rarr; Pages**, set **Build and deployment &rarr; Source**
to **GitHub Actions**.

## Content

Edit the arrays/text at the top of each file in [components/sections/](components/sections/)
(`Hero.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Certifications.tsx`, `Education.tsx`,
`Contact.tsx`) to update copy. Static files (resume, images, favicons) live in [public/](public/).
Reusable UI pieces (`Terminal`, `Button`, `GlassCard`, `CustomCursor`, `BackgroundBeams`) are in
[components/ui/](components/ui/), and the 3D scenes are in [components/canvas/](components/canvas/)
and [components/sections/ClusterState.tsx](components/sections/ClusterState.tsx).

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.
