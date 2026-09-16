# Merx Trading - Vite Web Project

A modern, fast Vite-powered multi-page web application for Merx Trading, optimized for deployment on Vercel, Netlify, Cloudflare Pages, GitHub Pages, and other platforms.

## 🚀 Quick Start

### 1. Install Dependencies
Make sure [Node.js](https://nodejs.org/) (version 18+) is installed.
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
The optimized production files will be output to the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to Hosting Platforms

### Deploying to Vercel (Recommended)
1. Push your repository to **GitHub / GitLab / Bitbucket**.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import this repository.
4. Vercel automatically detects the `vercel.json` configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**!

Alternatively, using the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Deploying to Netlify
1. Push your repository to GitHub.
2. Go to [Netlify](https://app.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Netlify will automatically read `netlify.toml` (`npm run build` and `dist`).
4. Click **Deploy Site**.

### Deploying to Cloudflare Pages
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`

---

## 📁 Project Structure

```
├── public/                 # Static assets (wp-content, wp-includes, images, fonts)
│   ├── wp-content/
│   └── wp-includes/
├── src/                    # JavaScript module source
│   └── main.js             # Vite main entry point
├── index.html              # Home page
├── about.html              # About Us page
├── canton-fair.html        # Canton Fair page
├── canton-fair-query.html  # Canton Fair Query form
├── contact-us.html         # Contact Us page
├── product-static.html     # Product Catalog page
├── sourcing.html           # Sourcing services page
├── sourcing-query.html     # Sourcing Quote form
├── merx-layout-fixes.css   # Layout & UI style fixes
├── merx-layout-fixes.js    # Interactive logic & popup handler
├── vite.config.js          # Multi-page Rollup & Vite config
├── vercel.json             # Vercel deployment configuration
├── netlify.toml            # Netlify deployment configuration
├── package.json            # Node.js project & script definitions
└── README.md
```
