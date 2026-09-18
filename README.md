# Dilip Reddymalla — Portfolio

A personal developer portfolio built with pure HTML, CSS, and JavaScript. Dark-themed, animated, and fully responsive.

**Live Demo →** [dilip-reddymalla.github.io/Portfolio](https://dilip-reddymalla.github.io/Portfolio/)

---

## Preview

![Portfolio Hero](assets/Dilip.jpeg)

---

## Features

- **Hero Section** — Animated name reveal with staggered `translateY` keyframes, eyebrow label, availability badge, and social icon links
- **Scroll Animations** — `IntersectionObserver`-based `.reveal` system with CSS variable stagger (`--i`)
- **Reading Progress Bar** — Thin accent bar at the top of the viewport that fills as you scroll
- **Scroll-Spy Navigation** — Active nav link highlights as you scroll through sections
- **Sticky Navbar** — `backdrop-filter: blur(12px)` applied on scroll
- **Hamburger Menu** — Mobile slide-in drawer with outside-click dismiss and body scroll lock
- **Cursor Glow** — `requestAnimationFrame`-throttled radial gradient that follows your cursor
- **Global Atmosphere** — CSS grid overlay + SVG `feTurbulence` noise texture
- **Back to Top** — Fixed `↑` button with smooth scroll
- **Project Cards** — Accent top-bar on hover, `↗` arrow indicator, separate Code/Live links
- **Skills Section** — Icon + label pill chips (local SVGs + devicons CDN)
- **Experience Section** — Left-border cards with tags for hackathons and activities
- **Contact Section** — Prominent email display, copy-to-clipboard button with fallback

---

## Sections

| Section | Description |
|---------|-------------|
| Hero | Name animation, availability badge, CTA buttons |
| About | Bio, CGPA, projects count, year metrics |
| Education | Timeline from CBSE → Intermediate → CBIT |
| Skills | Language / Framework / Tool chips with icons |
| Projects | 5 project cards with live + code links |
| Experience | Hackathons, open source, independent work |
| Contact | Email copy, social links |

---

## Projects Showcased

| Project | Stack | Links |
|---------|-------|-------|
| PoultryOps — Enterprise Biometric Suite | React 19 · TypeScript · Express 5 · FastAPI · PostgreSQL · Prisma · Docker | [Live](https://poultryops.vercel.app/about) · [Code](https://github.com/Dilip-Reddymalla/poultry-management-system) |
| Full-Stack Blog Platform | React · Node.js · Express · MongoDB | [Code](https://github.com/Dilip-Reddymalla/Modern-Blog-Page-Backend) |
| Modern Blog Frontend | React · Vite · React Router · Axios | [Live](https://modern-blogs.vercel.app) · [Code](https://github.com/Dilip-Reddymalla/Modern-Blogs) |
| F1 Racing Dashboard | React · Vite · REST APIs | [Live](https://f1-react-hazel.vercel.app) · [Code](https://github.com/Dilip-Reddymalla/F1-React) |
| Developer Portfolio | HTML · CSS · JavaScript | [Live](https://dilip-reddymalla.github.io/Portfolio/) · [Code](https://github.com/Dilip-Reddymalla/Portfolio) |

---

## Tech Stack

- **HTML5** — Semantic structure, OG meta tags, favicon
- **CSS3** — Custom properties, keyframe animations, `backdrop-filter`, `IntersectionObserver`-driven reveals, CSS grid overlay, responsive breakpoints
- **JavaScript (Vanilla)** — No frameworks, no libraries. Pure DOM API.

---

## Structure

```
Portfolio/
├── index.html          # Main page
├── css/
│   └── style.v1.css    # All styles
├── js/
│   └── script.v1.js    # All interactivity
└── assets/
    ├── Dilip.jpeg                  # Profile photo
    ├── cv_Dilip-Reddymalla.pdf     # Resume download
    └── svg/                        # Skill icons
        ├── Java.svg
        ├── Python.svg
        ├── Cpp.svg
        ├── JS.svg
        ├── TypeScript.svg
        ├── Html5.svg
        ├── CSS3.svg
        ├── React.svg
        ├── PostgreSQL.svg
        ├── Prisma.svg
        ├── FastAPI.svg
        ├── Tailwind.svg
        ├── Docker.svg
        ├── git.svg
        ├── Github.svg
        ├── Vs Code.svg
        └── ...
```

---

## Running Locally

No build step needed — it's plain HTML.

```bash
git clone https://github.com/Dilip-Reddymalla/Portfolio.git
cd Portfolio
# Open index.html in your browser, or serve with:
npx serve .
```

---

## Performance Notes

- All animations use `transform` + `opacity` only (GPU-composited, no layout reflow)
- `will-change` applied only to actively animating elements
- `IntersectionObserver` instead of scroll event listeners for section reveals
- `requestAnimationFrame` throttling on cursor glow mousemove
- Font preloaded with `<link rel="preload">` and async loaded via `onload`
- No external JS libraries or animation frameworks

---

## Contact

**Dilip Reddymalla**  
📧 [reddymaladilip@gmail.com](mailto:reddymaladilip@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/dilip-reddymalla/)  
🐙 [GitHub](https://github.com/Dilip-Reddymalla)

---

© 2026 Dilip Reddymalla
