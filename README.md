# Abhijeet Aayush - Portfolio Website

A modern, responsive portfolio website with parallax effects and smooth animations.

## Features

- 🎨 Modern, minimalist design inspired by professional portfolios
- ✨ Parallax scrolling effects throughout
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Optimized performance and SEO

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About/Biography section
│   ├── Skills.tsx       # Technical skills
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Featured projects
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## Customization

Update the following files to customize your portfolio:

- **Personal Information:** Edit component files in `/components`
- **Projects:** Update the `projects` array in `components/Projects.tsx`
- **Experience:** Update the `experiences` array in `components/Experience.tsx`
- **Skills:** Update the `skillCategories` array in `components/Skills.tsx`
- **Colors:** Modify `tailwind.config.ts` for theme colors

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click

Or build and deploy manually:

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.