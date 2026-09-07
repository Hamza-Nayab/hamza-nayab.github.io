# Malik Mir Hamza Nayab — Research & Engineering Portfolio

A zero-build, responsive personal academic and engineering portfolio website for **Malik Mir Hamza Nayab**, CS researcher in Machine Learning, Low-Resource NLP, Adaptive Sorting Algorithms, and Full-Stack Engineering.

Designed with an academic, whitespace-heavy aesthetic inspired by modern scholarly portfolios, featuring a sticky desktop profile sidebar, clean top navigation with mobile drawer, card-based research and project presentations, and interactive timelines.

---

## Content Source of Truth

All site contents (education, research manuscripts, benchmarks, datasets, engineering systems, experience timeline, certifications, honors, and contact channels) are derived strictly from [`data.tex`](data.tex) (LaTeX CV).

---

## Directory Structure

```
.
├── index.html              # Home page: About, Highlights, Honors, Skills
├── research.html           # Research: LadderSort, Arabic PLMs, Roman Urdu Benchmark, Zenodo Dataset
├── projects.html           # Projects: MiddelMen, Mental Health Chatbot, GPU Object Detection, etc.
├── experience.html         # Experience: GDGoC Leadership, Monet Real Estate, Alyf, Certifications, Honors
├── cv.html                 # CV: PDF viewer, direct download, credentials breakdown
├── contact.html            # Contact: Direct contact cards (email, phone, GitHub, live site) + Formspree scaffold
├── data.tex                # LaTeX CV — Single Source of Truth
├── pfp.jpeg                # Original profile photo
├── favicon.svg             # Scalable SVG monogram source
├── favicon.ico             # True multi-resolution binary ICO (16x16, 32x32, 48x48)
├── apple-touch-icon.png    # 180x180 iOS home-screen icon
├── icon-192.png            # 192x192 Web App / Android icon
├── icon-512.png            # 512x512 High-res Web App / Splash icon
├── site.webmanifest        # PWA web manifest with theme color and icon metadata
├── robots.txt              # Search engine directives
├── sitemap.xml             # Search engine XML sitemap
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
└── assets/
    ├── css/
    │   └── style.css       # Unified CSS design system & custom properties
    ├── js/
    │   └── main.js         # Accessible navigation & IntersectionObserver scroll reveals
    ├── img/
    │   └── pfp.jpeg        # Profile avatar photo
    └── cv/
        ├── Hamza_Nayab_CV.pdf  # Compiled CV PDF (drop updated version here)
        └── README.md           # Instructions for CV PDF updates
```

---

## How to Enable GitHub Pages (Zero-Build)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Build academic portfolio static site"
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** &rarr; **Pages** (under "Code and automation").
3. In the **Build and deployment** section:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
   - Click **Save**.
4. GitHub Pages will deploy your site in ~1 minute at:
   `https://hamza-nayab.github.io/Hamzanayab/`

---

## Customization & Updates

- **CV PDF**: Place your compiled CV PDF file at `assets/cv/Hamza_Nayab_CV.pdf`. The download buttons on `index.html` and `cv.html` link directly to this path.
- **Profile Photo**: To update your avatar, replace `assets/img/pfp.jpeg`.
- **Formspree Contact Form**: In `contact.html`, sign up at [Formspree](https://formspree.io) to obtain a free form endpoint, replace the placeholder URL in the `<form action="...">`, and uncomment the block.
- **Theme Palette**: The color scheme is parameterized with CSS custom properties in `assets/css/style.css` under `:root` (`--color-accent`, `--color-bg`, `--color-text`, etc.).

---

## License & Copyright

&copy; 2026 Malik Mir Hamza Nayab. All rights reserved.
