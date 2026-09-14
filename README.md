# 🌌 DigiTools — Premium Digital Tools Marketplace

<div align="center">

**A modern, fully-responsive, dark-mode-enabled SaaS marketplace where creators discover, compare and purchase premium digital tools.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?style=for-the-badge)](https://daisyui.com)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![React Toastify](https://img.shields.io/badge/React_Toastify-v10-FF6B6B?style=for-the-badge)](https://fkhadra.github.io/react-toastify)

</div>

---

## 📖 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Demo](#-live-demo)
3. [Key Features](#-key-features)
4. [Tech Stack](#-tech-stack)
5. [Project Structure](#-project-structure)
6. [Getting Started](#-getting-started)
7. [Available Scripts](#-available-scripts)
8. [Section Breakdown](#-section-breakdown)
9. [Design System](#-design-system)
10. [Animation Library](#-animation-library)
11. [Cart & Theme System](#-cart--theme-system)
12. [Accessibility](#-accessibility)
13. [Performance](#-performance)
14. [Deployment](#-deployment)
15. [Git Workflow](#-git-workflow)
16. [What I Learned](#-what-i-learned)
17. [Future Roadmap](#-future-roadmap)
18. [Author](#-author)
19. [License](#-license)

---

## 🎯 Project Overview

**DigiTools** is a premium, production-grade SaaS marketplace built as a complete, real-world application. It delivers a **buttery-smooth, animation-rich, dark-mode-enabled** experience across **18+ unique sections** on the home page and **4 additional fully-themed pages**.

The project demonstrates mastery of:

- Modern **React 18** patterns (hooks, context, composition)
- **Tailwind CSS v4** CSS-first configuration with `@theme` and `@utility`
- **Custom animation system** with 40+ hand-crafted keyframes
- **Global state management** via React Context + LocalStorage persistence
- **IntersectionObserver**-driven scroll animations
- **Canvas-based particle system**
- **Custom cursor** with magnetic interactions

---

## 🚀 Live Demo

| Environment | URL |
|-------------|-----|
| 🌐 **Live Site** | _[Add your Netlify / Vercel URL here]_ |
| 📦 **Repository** | _[Add your GitHub repository URL here]_ |
| 🎨 **Figma Design** | [View Original Figma](https://figma.com/design/5f40sAgt6QgdaWgMCrbIVM/DigiTools) |

---

## ✨ Key Features

### 🎨 1. Ultra-Premium SaaS Design System
- **Dark / Light theme toggle** with system preference detection + localStorage persistence + FOUC-free loading
- **Aurora mesh gradients**, animated blobs, film grain noise, mesh grids
- **Glassmorphic surfaces**, gradient borders, glow rings
- **Custom design tokens** via Tailwind v4 `@theme` directive

### 🛒 2. Complete Cart System
- Add / remove / view count in navbar
- **Products ↔ Cart toggle** in main section
- Empty state with beautiful illustration
- Cart persists via **LocalStorage**
- **Toast notifications** for every action (add / remove / checkout)
- **Bump animation** on navbar icon when count changes

### 🎬 3. Animation-Rich Interactions
- **Custom cursor** with magnetic trail (desktop only)
- **Canvas particle field** in hero
- **3D tilt cards** with glare
- **Cursor-following glow** cards
- **Magnetic buttons**
- **Word-by-word text reveals**
- **Animated counters** (count-up on scroll)
- **Scroll progress bar** + **Back-to-top with progress ring**
- **Command palette** (`⌘K` / `Ctrl+K`)
- **Loading screen** with animated logo
- **Marquee ticker** for trusted-by brands
- **Parallax scrolling** in hero

### 📱 4. 100% Responsive
- Mobile-first design across all 55 files
- Fluid typography scaling
- Mobile drawer navigation
- Optimized touch targets
- Tested at 320px → 4K

### 🗂️ 5. Multi-Page Routing
- `/` — Home (18+ sections)
- `/about` — Company story + team
- `/blog` — Article grid
- `/support` — Help center with search
- `/contact` — Contact form + FAQ
- 404 fallback to Home

### ♿ 6. Accessibility & Performance
- Semantic HTML throughout
- ARIA labels on interactive elements
- `prefers-reduced-motion` support
- Keyboard navigation + `⌘K` palette
- `will-change` hints on animated elements
- DPR-aware canvas rendering
- Lazy IntersectionObserver reveals

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 18.3.1 |
| **Build Tool** | Vite | 6.0 |
| **Styling** | Tailwind CSS | v4.0 |
| **UI Components** | DaisyUI | v5.0 |
| **Routing** | React Router DOM | 6.26 |
| **Notifications** | React Toastify | 10.0 |
| **Language** | JavaScript (ES6+) | Latest |
| **Data Format** | JSON | — |
| **Icons** | Inline SVG | — |
| **Fonts** | Google Fonts (Inter, Plus Jakarta Sans, JetBrains Mono) | — |
| **Images** | Unsplash + Pravatar | — |
| **State** | React Context + LocalStorage | — |

---

## 📁 Project Structure

```
digitools/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # 38 reusable UI components
│   │   ├── AnnouncementBar.jsx
│   │   ├── AnimatedCounter.jsx
│   │   ├── AuroraBackground.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Banner.jsx
│   │   ├── BlogSection.jsx
│   │   ├── CTA.jsx
│   │   ├── CartSection.jsx
│   │   ├── Categories.jsx
│   │   ├── CommandPalette.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FAQ.jsx
│   │   ├── Featured.jsx
│   │   ├── Footer.jsx
│   │   ├── GlowCard.jsx
│   │   ├── ImpactNumbers.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── Marquee.jsx
│   │   ├── MeetAdmin.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleField.jsx
│   │   ├── PremiumCursor.jsx
│   │   ├── Pricing.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductsSection.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Stats.jsx
│   │   ├── Steps.jsx
│   │   ├── Testimonials.jsx
│   │   ├── TextReveal.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── TiltCard.jsx
│   │   ├── TopExperts.jsx
│   │   └── WhyTrustUs.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Support.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/digitools.git
cd digitools

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app opens at **`http://localhost:5173`**.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |

---

## 🧩 Section Breakdown

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Announcement Bar** | Marquee ticker with promotions |
| 2 | **Navbar** | Glass + cart badge + theme toggle |
| 3 | **Banner (Hero)** | Particles + parallax + floating cards |
| 4 | **Stats** | Animated counters with gradient background |
| 5 | **Featured** | 4-up feature grid with icons |
| 6 | **Categories** | 8-category quick browse |
| 7 | **Products** | 3-column grid + Products/Cart toggle |
| 8 | **Steps** | 3-step onboarding |
| 9 | **Top Experts** | Team showcase with hover zoom |
| 10 | **Why Trust Us** | 6 trust signals |
| 11 | **Impact Numbers** | Dark stats band with counters |
| 12 | **Testimonials** | Masonry review layout |
| 13 | **Pricing** | 3-tier with highlighted Pro |
| 14 | **Blog** | Latest articles preview |
| 15 | **Meet Admin** | Founder story |
| 16 | **FAQ** | Accordion |
| 17 | **CTA** | Aurora gradient call-to-action |
| 18 | **Contact** | Form + info |
| 19 | **Footer** | Newsletter + links + socials |

---

## 🎨 Design System

### Color Tokens

```css
--color-brand-500: #8b5cf6;   /* Primary */
--color-brand-700: #6d28d9;   /* Dark */
--color-ink-950:   #050510;   /* Dark BG */
```

### Typography

- **Display**: Plus Jakarta Sans (700–800)
- **Body**: Inter (400–600)
- **Mono**: JetBrains Mono

### Key Utilities

| Utility | Purpose |
|---------|---------|
| `container-x` | Responsive max-width container |
| `text-gradient` | Animated gradient text |
| `btn-brand` | Gradient button with shine sweep |
| `glass` / `glass-dark` | Glassmorphic surfaces |
| `grad-border` | Animated gradient border |
| `noise` | Film grain overlay |
| `mesh-grid` | Subtle background grid |

---

## 🎬 Animation Library

**40+ keyframe animations** including:

- `floaty`, `blob`, `tilt`, `shimmerText`, `gradientShift`
- `fadeUp`, `fadeIn`, `scaleIn`, `slide-in-*`
- `marquee`, `pulse-glow`, `pulse-ring`, `jelly`, `neon`
- `spin-slow`, `bounce-slow`, `orbit`, `wiggle`, `heartbeat`

Plus **behavioral animations**:
- Scroll-triggered reveals (IntersectionObserver)
- Magnetic button pull (mouse tracking)
- 3D tilt cards (transform math)
- Cursor glow (CSS vars)
- Particle physics (Canvas RAF)

---

## 🛒 Cart & Theme System

### Cart Context

```jsx
const { cartItems, addToCart, removeFromCart, clearCart, isInCart, total, count } = useCart();
```

- Persists to `localStorage` under `digitools-cart-v1`
- Toast on every mutation
- Bump animation in navbar

### Theme Context

```jsx
const { theme, toggle, isDark } = useTheme();
```

- Persists to `localStorage` under `digitools-theme`
- Respects `prefers-color-scheme`
- FOUC-free (inline script in `index.html`)

---

## ♿ Accessibility

- ✅ Semantic HTML (`<nav>`, `<main>`, `<footer>`, `<article>`)
- ✅ `aria-label` on icon-only buttons
- ✅ Focus-visible styles throughout
- ✅ `prefers-reduced-motion` respected
- ✅ Keyboard: `⌘K` opens command palette, `↑↓` navigates, `↵` selects, `Esc` closes
- ✅ Color contrast tested for AA compliance

---

## ⚡ Performance

| Metric | Approach |
|--------|----------|
| **Bundle size** | Vite tree-shaking + ES modules |
| **Images** | Unsplash CDN, width-optimized |
| **Animations** | GPU-accelerated (transform/opacity only) |
| **Canvas** | DPR-aware, RAF-throttled |
| **Fonts** | Google Fonts with `display=swap` |
| **Reveals** | IntersectionObserver, disconnect-after-use |

---

## 🌍 Deployment

### Netlify (Recommended)

```bash
npm run build
```

1. Push to GitHub
2. Netlify → **Import from Git**
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add `public/_redirects` with:
   ```
   /*  /index.html  200
   ```

### Vercel

```bash
npm i -g vercel
vercel --prod
```

---

## 🌿 Git Workflow

Suggested 12+ commit history:

```bash
git init
git commit -m "chore: initialize vite + tailwind v4 project"
git commit -m "style: configure design system with theme tokens"
git commit -m "feat: add products json data"
git commit -m "feat: implement cart context with toastify"
git commit -m "feat: add theme context with system detection"
git commit -m "feat: build responsive navbar with theme toggle"
git commit -m "feat: add footer with newsletter"
git commit -m "feat: build animated hero banner with particles"
git commit -m "feat: add 6 feature sections"
git commit -m "feat: products grid with cart toggle"
git commit -m "feat: add about, blog, support, contact pages"
git commit -m "docs: add detailed readme"
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 🧠 What I Learned

- Building a **scalable design system** with Tailwind v4's CSS-first config
- Managing **global state** with React Context + LocalStorage
- Creating **reusable animation primitives** (ScrollReveal, TextReveal, Marquee)
- Canvas APIs + `requestAnimationFrame` for 60fps particle systems
- Custom cursor and magnetic interactions using transform math
- Accessibility-first thinking — `prefers-reduced-motion`, ARIA, keyboard nav
- Multi-page routing with React Router v6

---

## 🛣️ Future Roadmap

- [ ] Stripe checkout integration
- [ ] User authentication (Supabase / Firebase)
- [ ] Product filtering by category
- [ ] Wishlist system
- [ ] i18n support
- [ ] Admin dashboard
- [ ] Real blog CMS (Sanity)
- [ ] PWA + offline mode

---

## 👩‍💻 Author

**Your Name** — Frontend Developer

- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com)
- Portfolio: [your-portfolio.com](https://your-portfolio.com)

**Assignment:** Programming Hero — A-6 Digital Tools Buying Website

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ using React, Tailwind v4 & lots of coffee**

⭐ Star this repo if you found it helpful!

</div>