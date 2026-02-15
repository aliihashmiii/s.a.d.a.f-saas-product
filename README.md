# S.A.D.A.F - Solutions for DevOps Automated FinOps

A professional landing page showcasing AWS cloud cost optimization and FinOps solutions.

![S.A.D.A.F](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🚀 Live Demo

**Coming soon** - Deploy to Vercel to get your live URL!

## ✨ Features

- **Modern Design**: Dark gradient background with glass-morphism effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Next.js 15 for optimal speed
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Case Study Showcase**: Real AWS cost optimization results
- **Contact Integration**: Direct email contact form

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
sadaf-finops/
├── src/
│   └── app/
│       ├── globals.css      # Custom styling
│       ├── layout.tsx        # Root layout with metadata
│       └── page.tsx          # Landing page
├── package.json
├── tsconfig.json
├── next.config.mjs
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm

### Installation

1. Clone this repository:
```bash
git clone https://github.com/YOUR-USERNAME/sadaf-finops.git
cd sadaf-finops
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

The easiest way to deploy your S.A.D.A.F website is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/sadaf-finops)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live in ~2 minutes!

## 🎨 Customization

### Change Colors

Edit `src/app/globals.css` (lines 1-8):

```css
:root {
  --bg: #05070a;        /* Background color */
  --accent: #6aa0ff;    /* Primary accent color */
  --accent-2: #8df2c5;  /* Secondary accent color */
  --text: #eef2ff;      /* Text color */
  --muted: #97a0b5;     /* Muted text color */
}
```

### Change Content

Edit `src/app/page.tsx` to update:
- Text content
- Metrics and numbers
- Email address
- Company name

### Update Contact Email

Find this line in `src/app/page.tsx` (around line 109):

```tsx
<a className="button" href="mailto:hello@sadaf-finops.com?subject=FinOps%20Assessment">
```

Replace with your email:

```tsx
<a className="button" href="mailto:YOUR-EMAIL@example.com?subject=FinOps%20Assessment">
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For inquiries about S.A.D.A.F services:
- Email: hello@sadaf-finops.com
- Website: [Coming Soon]

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with custom CSS
- Deployed on [Vercel](https://vercel.com)

---

Made with ❤️ by S.A.D.A.F Team
