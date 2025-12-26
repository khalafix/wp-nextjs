# Headless WordPress Blog with Next.js

This project is a **headless blog platform** built using **WordPress as a backend (API provider)** and **Next.js (App Router)** as the frontend framework.

The main goal of this project is to **progressively build a modern frontend application** on top of WordPress REST APIs, following best practices for performance, scalability, and SEO.

---

## 🚀 Tech Stack

- **Frontend**
  - Next.js (App Router)
  - React Server Components
  - TypeScript
  - pnpm (package manager)

- **Backend (Headless CMS)**
  - WordPress
  - WordPress REST API

---

## 🧠 Architecture Overview

This project follows a **Headless CMS architecture**:

- WordPress is responsible for:
  - Content management (posts, media, slugs)
  - Providing data via REST APIs
- Next.js is responsible for:
  - Rendering pages
  - Routing and layouts
  - SEO and performance optimizations

No WordPress themes are used.  
All UI and rendering logic live entirely inside the Next.js application.

---

## 📁 Project Structure
khalafi-app/
├── app/
│ └── blog/
│ ├── layout.tsx # Blog layout (header, footer)
│ ├── page.tsx # Blog index page (/blog/)
│ └── [slug]/
│ └── page.tsx # Dynamic post page (/blog/:slug/)
├── next.config.js
├── package.json
└── README.md


---

## 🌐 Routing Strategy

- `/blog/` → Blog posts list
- `/blog/:slug/` → Individual blog post

All URLs are configured to **always end with a trailing slash (`/`)** using Next.js configuration.

---

## 🔌 WordPress API Integration

Posts are fetched from WordPress using the REST API:


The `_embed` parameter is used to retrieve featured images and related metadata.

---

## ⚡ Rendering Strategy

- Server Components are used by default
- Pages can be statically generated using:
  - `generateStaticParams`
- Dynamic data fetching can be configured using:
  - `cache: 'no-store'`
  - or ISR (`revalidate`)

---

## 🔍 SEO

SEO is handled using:
- `generateMetadata`
- Clean, canonical URLs
- Trailing slash consistency

---

## 🛠 Development Workflow

```bash
pnpm install
pnpm dev

The project is being developed incrementally, with features added step by step.

📌 Future Improvements

Categories & Tags

Pagination

ISR (Incremental Static Regeneration)

MDX support

Authentication

Admin preview mode

📄 License

This project is for learning and educational purposes.