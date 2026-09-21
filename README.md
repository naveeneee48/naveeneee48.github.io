# Naveen Kumar &mdash; Portfolio ⚡️

> A terminal-styled DevOps/SRE portfolio, built with Next.js, Tailwind CSS, and Three.js.

> https://naveeneee48.github.io

## Stack

- **Next.js** (App Router, static export)
- **Tailwind CSS**
- **Three.js** for the animated cluster-node background
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

Edit the arrays/text at the top of each file in [components/](components/) (`Hero.tsx`,
`Experience.tsx`, `Projects.tsx`, `TechStack.tsx`, `Certifications.tsx`, `Education.tsx`,
`Contact.tsx`) to update copy. Static files (resume, images, favicons) live in [public/](public/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.
