# Menards Construction

> **Building Dreams, Brick At A Time.**

A full-stack, SSR-rendered marketing website for **Menards Construction** — a premier construction and architecture firm based in Nairobi, Kenya. The site showcases the company's portfolio of commercial, residential, renovation, and infrastructure projects with a premium editorial design aesthetic and rich motion interactions.

🌐 **Live:** [menardsconstruction.com](https://www.menardsconstruction.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion), custom hooks |
| Email | [EmailJS](https://www.emailjs.com/) |
| Analytics | Google Analytics 4 |
| Deployment | Vercel |
| Build Tool | Vite |

---

## Features

- **SSR with TanStack Start** — server-side rendered for performance and SEO
- **Premium motion design** — scroll-linked animations, staggered entrances, split text, blur reveals, magnetic buttons, spotlight cards, aurora backgrounds, and floating particles
- **Before & After slider** — interactive drag-to-compare project transformation showcase
- **Project lightbox gallery** — full-screen media viewer with photo and video support, thumbnail strip, and keyboard navigation
- **Infinite testimonials marquee** — smooth horizontally scrolling testimonial cards with gradient edge fades
- **EmailJS contact form** — quote requests delivered directly to the client inbox with no backend required
- **Full SEO implementation** — meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml, robots.txt, and Google Analytics 4
- **Custom cursor** — gold dot cursor with magnetic hover scaling
- **Responsive** — fully mobile-optimized across all pages

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, stats, about snippet, services grid, featured projects, testimonials, CTA |
| About | `/about` | Company story, values, vision/mission, milestones, leadership team |
| Services | `/services` | 7 service categories, process timeline, why choose us |
| Projects | `/projects` | Filterable portfolio grid with lightbox gallery (photos + videos) |
| Contact | `/contact` | Quote request form, contact details |

---

## Project Structure

```
src/
├── assets/          # Static assets (logo, team photos)
├── components/
│   ├── anim.tsx     # All animation components (SplitText, BlurText, SpotlightCard, etc.)
│   └── site-layout.tsx  # Navbar, Footer, SiteLayout wrapper
├── routes/
│   ├── __root.tsx   # Root layout, head tags, GA4, fonts, favicon
│   ├── index.tsx    # Home page
│   ├── about.tsx    # About page
│   ├── services.tsx # Services page
│   ├── projects.tsx # Projects page with lightbox
│   ├── contact.tsx  # Contact page with EmailJS
│   ├── privacy.tsx  # Privacy policy
│   └── terms.tsx    # Terms of service
├── styles.css       # Global styles, Tailwind config, CSS variables
public/
├── media/           # All project photos and videos
├── favicon.ico      # Favicon assets
├── sitemap.xml      # XML sitemap for Google Search Console
└── robots.txt       # Search engine crawl rules
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/NguyoVictor/Menards-Construction.git
cd Menards-Construction
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:8081`

### Production Build

```bash
npm run build
```

---

## Environment & Configuration

No environment variables required for local development. EmailJS keys are embedded client-side (public keys by design).

For production deployment on Vercel, the `vite.config.ts` uses the Vercel Nitro preset:

```ts
nitro: {
  preset: "vercel",
}
```

---

## SEO

- Unique `<title>` and `<meta description>` per page
- Open Graph and Twitter Card tags on all pages
- JSON-LD `LocalBusiness` + `ConstructionContractor` schema on homepage
- `sitemap.xml` submitted to Google Search Console
- Google Analytics 4 — Measurement ID: `G-CEQRZLR7ZK`

---

## Deployment

Deployed on **Vercel** with automatic deployments from the `main` branch on GitHub. Custom domain `menardsconstruction.com` is configured via Vercel DNS.

---

## Client

**Menards Construction**
- 📍 Nairobi, Kenya
- 📞 +254 710 792 208
- 📧 menardscontractorsltd@gmail.com
- 🌐 [menardsconstruction.com](https://www.menardsconstruction.com)
- 📸 [@menardsconstruction](https://www.instagram.com/menardsconstruction/)

---

## Developer

Built by **Victor Nguyo**
