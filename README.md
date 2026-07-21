# Portfolio - Mitha Dwi Pranindya

Portfolio website showcasing projects, skills, and experience in Applied Data Science, Machine Learning, Computer Vision, and Data Visualization.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS v4** - Styling with custom design tokens
- **Formspree** - Contact form handling

## ✨ Features

- ✅ **Multi-page routing** - Separate routes for each section (App Router)
- ✅ **Responsive design** - Mobile-first, optimized for all devices
- ✅ **Dark mode** - Toggle between light and dark themes (persisted, no flash)
- ✅ **Multi-language** - Switch between Indonesian and English (persisted)
- ✅ **Interactive contact form** - Powered by Formspree
- ✅ **Project showcase** - Grid layout with conditional buttons (demo/code/private)

## 🗺️ Routes

| Route       | Page              |
|-------------|-------------------|
| `/`         | Beranda (Home)    |
| `/about`    | Tentang (About)   |
| `/projects` | Proyek (Projects) |
| `/contact`  | Kontak (Contact)  |

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🌐 Deploy to Vercel

This project is a standard Next.js app. Connect your repository to Vercel and it will detect the framework and deploy automatically — no extra configuration needed.

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
portfolio/
├── public/assets/            # Profile photo, CV, project images
├── src/
│   ├── app/                  # App Router
│   │   ├── layout.js         # Root layout (fonts, Navbar, Footer, providers)
│   │   ├── globals.css       # Global styles + Tailwind
│   │   ├── page.js           # / → Beranda
│   │   ├── about/page.js     # /about → Tentang
│   │   ├── projects/page.js  # /projects → Proyek
│   │   └── contact/page.js   # /contact → Kontak
│   ├── components/           # Navbar, Footer, Beranda, Tentang, Proyek, Kontak
│   ├── context/              # Theme & language state (AppContext)
│   └── data/content.js       # All content (ID/EN)
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

## 📝 Content Management

All content is centralized in `src/data/content.js` with both Indonesian and English translations: profile info, bio, skills, experience, projects, and contact details.

## 📧 Contact Form

The contact form uses [Formspree](https://formspree.io/) with endpoint: `https://formspree.io/f/mpqvrdaw`

## 🔗 Links

- **Email**: mithadwipranindya@gmail.com
- **LinkedIn**: [linkedin.com/in/mithadwipranindya](https://linkedin.com/in/mithadwipranindya)
- **GitHub**: [github.com/mithadp](https://github.com/mithadp)

---

Built with Next.js + Tailwind CSS
