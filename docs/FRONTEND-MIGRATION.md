# Frontend Migration Guide - Vanilla JS to Astro

## Why Astro?

- **Static Site Generation** - Perfect untuk GitHub Pages
- **Component-based** - Reusable `.astro` components
- **Zero JavaScript by default** - Better performance
- **Built-in routing** - File-based routes
- **SEO Optimized** - Automatic sitemap, robots.txt
- **Flexible** - Use HTML, CSS, or any JS framework

## Project Structure

```
frontend-astro/
├── src/
│   ├── components/         # Reusable components
│   ├── layouts/           # Shared layouts
│   ├── pages/             # Routes (auto-generated)
│   ├── styles/            # Global stylesheets
│   └── lib/               # Utility functions
├── public/                # Static assets (images, etc)
├── astro.config.mjs       # Astro configuration
└── package.json
```

## Created Components

### Layout Components
- `src/layouts/Layout.astro` - Main layout dengan Navbar dan Footer

### Page Components
- `src/pages/index.astro` - Home page
- `src/pages/katalog.astro` - Project catalog
- `src/pages/direktori.astro` - Developer directory
- `src/pages/proyek/[slug].astro` - Dynamic project detail pages
- `src/pages/404.astro` - Error page

### Reusable Components
- `src/components/Navbar.astro` - Navigation bar
- `src/components/Footer.astro` - Footer
- `src/components/ProjectCard.astro` - Project card component
- `src/components/DeveloperCard.astro` - Developer card component

## Features Implemented

✅ **Landing Page**
- Hero section dengan search
- Live statistics
- Featured project
- Trending projects
- Tags cloud
- Developer preview
- Community links

✅ **Katalog Page**
- Project listing dengan search
- Filter berdasarkan tag
- Responsive grid
- Empty state handling

✅ **Detail Project Page**
- Full project information
- Statistics (downloads, stars)
- Gotong Royong actions
- Similar projects
- Download section

✅ **Developer Directory**
- Developer listing
- Filter by city
- Filter by skill
- Developer cards

✅ **SEO**
- Sitemap generation
- Robots.txt
- Meta tags
- Semantic HTML

## Styling

- Global CSS di `src/styles/`
- Component scoped styles
- CSS variables untuk colors
- Responsive design dengan media queries

## API Integration

- API config di `src/lib/api.js`
- Sample data untuk development
- Fallback to sample data jika API down

## Development Workflow

### Start Development
```bash
cd frontend-astro
npm install
npm run dev
```

### Create New Page
1. Create `.astro` file di `src/pages/`
2. Import Layout
3. Write content

### Create New Component
1. Create `.astro` file di `src/components/`
2. Define Props interface
3. Use in pages/layouts

### Build for Production
```bash
npm run build
# Output: dist/ folder
```

## Deployment

### GitHub Pages
- Build: `npm run build`
- Output: `dist/` folder
- Auto-deploy via GitHub Actions

### Environment Variables
```env
PUBLIC_API_BASE=https://api.karyogit.id/api
PUBLIC_SITE_URL=https://karyogit.id
```

## Migration Checklist

- [x] Setup Astro project structure
- [x] Create Layout components
- [x] Create Page components
- [x] Create Reusable components
- [x] Create global styles
- [x] Setup API integration
- [x] Create sample data
- [x] SEO optimization
- [x] Responsive design
- [x] Documentation

## Next Steps

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Visit `http://localhost:3000`
4. Customize colors and content as needed
5. Deploy to GitHub Pages

---

For more info, see:
- [Astro Documentation](https://docs.astro.build)
- [frontend-astro/README.md](../frontend-astro/README.md)
