# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production (static export to ./out)
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Deployment

This site deploys to **Cloudflare Workers** as a static export:
- Build output: `./out` directory
- Config: `wrangler.jsonc`
- Auto-deploys on push to `main` branch

## Architecture

### Tech Stack
- **Next.js 16** with App Router (static export mode)
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Shadcn UI** (Radix primitives) for components
- **Framer Motion** for animations
- **Lucide React** for icons

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (assembles sections)
│   ├── layout.tsx         # Root layout with metadata/SEO
│   ├── services/[slug]/   # Dynamic service detail pages
│   └── about|contact|privacy|terms/
├── components/            # React components
│   ├── ui/               # Shadcn UI primitives (Button, Card, etc.)
│   ├── navbar.tsx        # Site navigation
│   ├── hero.tsx          # Hero section
│   ├── services.tsx      # Services grid
│   └── footer.tsx        # Site footer
├── lib/
│   ├── services-data.ts  # Service definitions (source of truth)
│   └── utils.ts          # Tailwind cn() helper
public/                    # Static assets (logo, favicons, robots.txt)
```

### Key Patterns

**Services Data**: All service information lives in `src/lib/services-data.ts`. Add/modify services there—the services page, footer, and detail pages all read from this single source.

**Static Generation**: Dynamic routes use `generateStaticParams()` for static export compatibility. The site has no server-side rendering.

**Component Pattern**: Page sections are standalone components (`<Hero />`, `<Services />`, etc.) composed in `page.tsx`.

## Brand Guidelines

This is a **premium enterprise consulting brand**, not a playful dinosaur theme:
- Dark theme: Slate/charcoal backgrounds (#0a0a0a to #171717)
- Accent: Teal (#0d9488) for CTAs and highlights
- Typography: Inter font, tight tracking
- No cartoon imagery or bright colors
- Target audience: C-suite executives, enterprise decision-makers

## SEO & Meta

Global metadata configured in `src/app/layout.tsx`. Includes:
- Open Graph tags
- Twitter cards
- Favicon variants for all platforms
- Web manifest for PWA

## External Integrations

- **Calendly**: Booking link at `https://calendly.com/amazingdino`
- **LinkedIn**: Company page linked in footer
- **Email**: contact@amazingdino.au
