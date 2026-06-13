# Menards Construction

A modern, full-stack web application built for construction project management and visualization. This project demonstrates professional-grade architecture, performance optimization, and modern web development practices.

**Live Demo:** https://menards-construction.vercel.app

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Performance & Optimization](#performance--optimization)
- [Code Quality](#code-quality)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Menards Construction** is a sophisticated web application designed to streamline construction project management workflows. Built with cutting-edge technologies including React 19, TanStack Router, and TypeScript, it provides a robust foundation for managing complex construction data with a modern, responsive user interface.

The application leverages server-side rendering capabilities through TanStack Start, ensuring optimal performance and SEO. It demonstrates enterprise-level practices including strict type safety, component composition, form validation, and state management.

---

## ✨ Key Features

### Core Functionality
- **Project Management Dashboard** - Centralized hub for construction project oversight
- **Real-time Data Visualization** - Interactive charts and graphs using Recharts
- **Form Management** - Robust form handling with React Hook Form and Zod validation
- **Responsive UI** - Mobile-first design that adapts seamlessly across all devices
- **Data Persistence** - Persistent state management with React Query

### User Experience
- **Modern Component Library** - Complete Radix UI component suite for accessibility
- **Smooth Animations** - Delightful interactions using Motion and Embla Carousel
- **Toast Notifications** - Real-time user feedback with Sonner
- **Dark Mode Support** - Tailwind CSS for responsive, theme-ready styling
- **Command Palette** - cmdk integration for enhanced navigation

### Developer Experience
- **Type Safety** - 100% TypeScript codebase with strict compiler settings
- **Component-Driven** - Shadcn/ui components for consistency and maintainability
- **Hot Module Replacement** - Fast refresh during development
- **ESLint & Prettier** - Automated code quality and formatting enforcement
- **Production Optimization** - Vite bundling with tree-shaking and code splitting

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI framework |
| **TypeScript** | 5.8.3 | Type-safe language |
| **Vite** | 7.3.1 | Build tool & dev server |
| **TanStack Router** | 1.168.25 | File-based routing |
| **TanStack React Start** | 1.167.50 | Full-stack framework |
| **React Query** | 5.83.0 | Server state management |
| **React Hook Form** | 7.71.2 | Performant form handling |
| **Zod** | 3.24.2 | Schema validation |

### UI & Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.2.1 | Utility-first CSS framework |
| **Radix UI** | Latest | Unstyled accessible components |
| **Shadcn/ui** | Latest | Pre-built component library |
| **Lucide React** | 0.575.0 | Icon library |
| **Motion** | 12.40.0 | Animation library |
| **Embla Carousel** | 8.6.0 | Carousel component |

### Services & Utilities
| Technology | Version | Purpose |
|------------|---------|---------|
| **EmailJS** | 4.4.1 | Email service integration |
| **Date-fns** | 4.1.0 | Date manipulation |
| **Class Variance Authority** | 0.7.1 | Component class variants |
| **CLSX** | 2.1.1 | Dynamic class management |

### Backend & Deployment
| Technology | Version | Purpose |
|------------|---------|---------|
| **Nitro** | 3.0.260603-beta | Server runtime |
| **Vercel** | - | Deployment platform |

### Development Tools
| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | 9.32.0 | Code linting |
| **Prettier** | 3.7.3 | Code formatting |
| **Bun** | Latest | Package manager & runtime |

---

## 🏗 Architecture

### High-Level Design

```
┌─────────────────────────────────────────┐
│     Client (React 19 + TypeScript)      │
│  ┌──────────────────────────────────┐   │
│  │  Pages & Components (src/routes) │   │
│  │  - Layout management             │   │
│  │  - Page composition              │   │
│  └──────────────────────────────────┘   │
│                   ↓                      │
│  ┌──────────────────────────────────┐   │
│  │  TanStack Router (File-based)    │   │
│  │  - Route definitions             │   │
│  │  - Navigation handling           │   │
│  └──────────────────────────────────┘   │
│                   ↓                      │
│  ┌──────────────────────────────────┐   │
│  │  Component Layer (src/components)│   │
│  │  - UI Components (Radix UI)      │   │
│  │  - Business Components           │   │
│  │  - Form Components               │   │
│  └──────────────────────────────────┘   │
│                   ↓                      │
│  ┌──────────────────────────────────┐   │
│  │  State Management                │   │
│  │  - React Query (Server state)    │   │
│  │  - React Context (UI state)      │   │
│  │  - React Hook Form (Form state)  │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
              ↓          ↓
    ┌─────────────┐  ┌──────────────┐
    │   API       │  │  EmailJS     │
    │  Endpoints  │  │  Service     │
    └─────────────┘  └──────────────┘
              ↓
┌─────────────────────────────────────────┐
│   Server (Nitro + TanStack Start)       │
│  - Request handling                     │
│  - Data processing                      │
│  - Server-side rendering                │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│   Deployment (Vercel)                   │
│  - Global edge network                  │
│  - Serverless functions                 │
│  - Automatic scaling                    │
└─────────────────────────────────────────┘
```

### Directory Structure

```
menards-construction/
├── src/
│   ├── routes/                 # TanStack Router file-based routes
│   │   ├── index.tsx          # Home page
│   │   └── ...                # Additional pages
│   ├── components/            # Reusable React components
│   │   ├── ui/               # Shadcn/ui components
│   │   └── ...               # Feature components
│   ├── lib/                  # Utility functions & helpers
│   │   ├── utils.ts          # Common utilities
│   │   └── ...               # Specialized utilities
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   ├── styles/               # Global styles
│   └── entry-client.tsx      # Client entry point
│
├── public/                    # Static assets
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── eslint.config.js          # ESLint rules
├── .prettierrc                # Prettier configuration
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** 1.0+
- **Git**
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NguyoVictor/Menards-Construction.git
   cd Menards-Construction
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using bun (recommended for this project)
   bun install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory with required environment variables:
   ```env
   VITE_API_URL=http://localhost:5173
   # Add other required environment variables here
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

   The application will be available at `http://localhost:5173`

---

## 💻 Development

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

### Development Workflow

1. **Code Structure** - Follow the existing directory organization
2. **Component Creation** - Use TypeScript for all components
3. **Styling** - Use Tailwind CSS utility classes
4. **Linting** - Run `npm run lint` before commits
5. **Formatting** - Run `npm run format` to ensure consistency

### Hot Module Replacement (HMR)

The development server supports HMR, allowing you to see changes instantly without page reload. This is configured by default in `vite.config.ts`.

---

## 📦 Building for Production

### Build Process

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Build Optimizations

- **Code Splitting** - Automatic route-based code splitting
- **Tree Shaking** - Unused code removal
- **Minification** - CSS and JS minification
- **Asset Optimization** - Image and font optimization
- **Source Maps** - Optional source maps for debugging

### Build Output

The production build is generated in the `dist/` directory and is ready for deployment to Vercel or any Node.js hosting platform.

---

## 📂 Project Structure

### Key Directories Explained

#### `/src/routes`
File-based routing using TanStack Router. Each `.tsx` file becomes a route.
- Creates a file-to-route mapping automatically
- Supports nested layouts and dynamic routes
- Enables code splitting per route

#### `/src/components`
Reusable React components organized by feature or function.
- `ui/` - Shadcn/ui pre-built components
- Feature-specific components in separate folders
- Keep components focused and single-responsibility

#### `/src/lib`
Utility functions, helpers, and shared logic.
- `utils.ts` - Common helper functions
- API client setup
- Type utilities

#### `/src/hooks`
Custom React hooks for shared logic.
- Data fetching hooks
- State management hooks
- UI interaction hooks

#### `/src/types`
TypeScript type definitions and interfaces.
- API response types
- Component prop types
- Domain entity types

---

## ⚙️ Configuration

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "strict": true,
    "moduleResolution": "Bundler",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Key Settings:**
- `strict: true` - Enables all strict type-checking options
- `module: "ESNext"` - Modern ES module support
- Path aliases - Import from `@/` instead of relative paths

### Vite Configuration (`vite.config.ts`)

Built on `@lovable.dev/vite-tanstack-config`, which includes:
- TanStack Start integration
- React plugin with refresh
- Tailwind CSS plugin
- TypeScript path resolution
- Nitro for server runtime (Vercel preset)

### ESLint Configuration

Configured with:
- TypeScript support via `typescript-eslint`
- React hooks linting
- React refresh rules
- Prettier integration

Run `npm run lint` to check for issues.

### Prettier Configuration

Automatically formats code on save (when integrated with your editor). Configuration in `.prettierrc` ensures consistent code style across the team.

---

## ⚡ Performance & Optimization

### Performance Best Practices Implemented

1. **Code Splitting**
   - Automatic route-based splitting via Vite
   - Reduces initial bundle size
   - Lazy loads non-critical routes

2. **Tree Shaking**
   - Removes unused code at build time
   - Configured via `sideEffects: false` in package.json

3. **Image & Asset Optimization**
   - Vite automatically optimizes images
   - Modern format support (WebP)

4. **Type Safety**
   - Catches errors at compile time
   - Reduces runtime errors and bugs

5. **React Query**
   - Efficient server state synchronization
   - Built-in caching and background refetching
   - Reduces unnecessary API calls

6. **Component Optimization**
   - Use React.memo for expensive components
   - Proper dependency arrays in hooks
   - Avoid inline function definitions

### Metrics to Monitor

- **Bundle Size** - Monitor with `npm run build`
- **Load Time** - Test with Lighthouse or WebPageTest
- **Time to Interactive** - Measure with performance tools
- **Core Web Vitals** - LCP, FID, CLS

---

## 🎯 Code Quality

### Quality Assurance

1. **Type Safety**
   - 100% TypeScript coverage
   - Strict compiler options enabled
   - No `any` types without justification

2. **Linting**
   - ESLint enforces code standards
   - React hooks rules checked
   - React refresh compatibility verified

3. **Code Formatting**
   - Prettier ensures consistent style
   - Line length, indentation, quotes standardized
   - Runs on save with editor integration

4. **Best Practices**
   - Components follow React conventions
   - Props drilling minimized with Context API
   - Custom hooks extract reusable logic
   - Forms use React Hook Form with Zod validation

### Pre-commit Checks (Recommended)

Install husky and lint-staged for automated checks:

```bash
npm install --save-dev husky lint-staged
npx husky install
```

Add to `package.json`:
```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

---

## 🌐 Deployment

### Vercel Deployment (Recommended)

This project is configured for Vercel deployment with Nitro preset.

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Connect your GitHub repository
   - Vercel auto-detects TanStack Start configuration

3. **Deployment**
   - Every push to `main` triggers automatic deployment
   - Preview deployments for pull requests
   - Automatic rollback on failure

4. **Environment Variables**
   - Set in Vercel dashboard under Project Settings
   - Automatically available to build and runtime

### Alternative Hosting Options

- **Node.js Hosting** (Railway, Render, Fly.io)
  - Use `npm run build && npm start`
  - Set `NODE_ENV=production`

- **Docker Deployment**
  - Create `Dockerfile` for containerization
  - Deploy to AWS ECS, Kubernetes, etc.

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Write meaningful commit messages

4. **Format and lint**
   ```bash
   npm run format
   npm run lint
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Include before/after screenshots if UI changes

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Support & Contact

For questions, issues, or suggestions:
- **GitHub Issues** - Report bugs or request features
- **Email** - Contact the maintainer
- **Documentation** - Check the wiki for additional guides

---

## 🙏 Acknowledgments

- **TanStack** - Router and React Query ecosystem
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful component library
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment and hosting infrastructure

---

## 📈 Future Roadmap

Planned features and improvements:

- [ ] Enhanced analytics dashboard
- [ ] Real-time collaboration features
- [ ] Mobile app (React Native)
- [ ] Advanced reporting system
- [ ] Integration with popular tools
- [ ] Internationalization (i18n)
- [ ] Accessibility improvements (WCAG 2.1 AAA)
- [ ] Performance monitoring integration

---

**Last Updated:** June 2026  
**Maintained By:** NguyoVictor  
**Repository:** https://github.com/NguyoVictor/Menards-Construction
