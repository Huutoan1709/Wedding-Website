# Thiệp đôi ta

Next.js app for selling online wedding invitation templates under the Thiệp đôi ta brand.

Production domain: https://thiepdoita.com

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Reusable domain components for templates, packages, customer submissions, and invitation preview sections

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Structure

```text
src/app                 App routes and global layout
src/components/common   Shared UI primitives
src/components/layout   Header, footer, page shell
src/components/sections Home page sections
src/components/templates Reusable wedding invitation components
src/data                Seed data for templates and packages
src/lib                 Shared utilities
src/types               Domain types
```
