# 🚀 Panduan Setup KARYOGIT

Terima kasih telah tertarik untuk mengembangkan KARYOGIT! Panduan ini akan membantu Anda setup lingkungan development.

## 📋 Prerequisites

- Node.js >= 18
- Git
- npm atau yarn
- Akun Supabase (gratis di supabase.com)
- Akun GitHub

## 🔧 Installation

### 1. Clone & Setup
```bash
git clone https://github.com/karyogit/karyogit.git
cd karyogit
npm install
```

### 2. Environment Configuration
```bash
cp .env.example .env
```

Edit `.env` dengan informasi Anda:

```env
# Supabase
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# GitHub
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
GITHUB_TOKEN=your_github_token

# App
NODE_ENV=development
PORT=3000
```

### 3. Database Setup

#### Option A: Manual Setup (Recommended)
1. Buka [Supabase Dashboard](https://app.supabase.com)
2. Create new project
3. Go to SQL Editor
4. Copy content dari `supabase/migrations/001_create_schema.sql`
5. Run SQL

#### Option B: Otomatis
```bash
npm run db:migrate
npm run db:seed
```

### 4. Start Development

```bash
# Run API server
npm run dev

# Frontend akan diakses di http://localhost:3000
# API akan diakses di http://localhost:3000/api
```

## 📁 Struktur Folder

```
karyogit/
├── frontend/                 # GitHub Pages (Vanilla JS)
│   ├── index.html           # Landing page
│   ├── katalog.html         # Catalog page
│   └── assets/              # CSS, JS
├── api/                     # Express API (Render)
│   ├── server.js           # Main server
│   ├── routes/             # API endpoints
│   ├── middleware/         # Auth, error handling
│   └── services/           # Supabase, S3, GitHub
├── supabase/               # Database
│   ├── migrations/         # SQL migrations
│   └── seed.sql           # Sample data
├── scripts/                # Helper scripts
│   ├── migrate.js         # Run migrations
│   ├── seed.js            # Seed database
│   ├── sync-github.js     # Sync GitHub data
│   └── check-stale.js     # Check stale projects
├── .github/workflows/      # GitHub Actions
│   ├── deploy-frontend.yml
│   ├── deploy-api.yml
│   ├── sync-github.yml
│   └── notify-stale.yml
└── docs/                   # Documentation
    ├── API.md
    ├── STACK.md
    └── SETUP.md
```

## 🎨 Frontend Development

Frontend dibangun dengan **Astro** - static site generator yang optimal untuk GitHub Pages.

```bash
# Development
cd frontend-astro
npm install
npm run dev

# Akses di http://localhost:3000
# Hot reload otomatis saat edit files

# Build untuk production
npm run build

# Output akan tersimpan di dist/
```

### Frontend Structure
```
frontend-astro/
├── src/
│   ├── components/    # Reusable components (.astro)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Routes (auto-generated)
│   ├── styles/        # Global CSS
│   └── lib/           # Utility functions
├── public/            # Static assets
└── astro.config.mjs   # Astro config
```

### Add New Page
1. Buat file `.astro` di `src/pages/`
2. Routing auto-generated dari path file
3. Contoh: `src/pages/about.astro` → `/about`

### Add New Component
1. Buat file `.astro` di `src/components/`
2. Export interface Props untuk type-safety
3. Import dan gunakan di pages/layouts

Lihat [frontend-astro/README.md](frontend-astro/README.md) untuk dokumentasi lengkap.

## 🔌 Backend Development

API server di Express.js dengan Supabase.

```bash
# Development (dengan auto-reload)
npm run dev

# Build
npm run build

# Test
npm test
```

## 🗄️ Database

### Migrations
```bash
# Run migrations
npm run db:migrate

# Seed sample data
npm run db:seed
```

### Raw SQL Access
```bash
# Supabase Dashboard > SQL Editor
# Jalankan query langsung
```

## 🔄 GitHub Sync

```bash
# Sync proyek dari GitHub
npm run sync:github
```

## 📝 Development Workflow

1. Create branch: `git checkout -b feat/nama-fitur`
2. Make changes
3. Commit: `git commit -m 'feat: deskripsi'`
4. Push: `git push origin feat/nama-fitur`
5. Create Pull Request

## 🚀 Deployment

### Frontend (GitHub Pages)
Otomatis deploy saat push ke `main` di folder `frontend/`

### API (Render)
1. Connect repository ke Render
2. Set build command: `npm install`
3. Set start command: `node api/server.js`
4. Add environment variables
5. Deploy

### Database (Supabase)
Sudah hosted — tinggal setup di dashboard.

## 🐛 Troubleshooting

### Port sudah dipakai
```bash
# Gunakan port lain
PORT=3001 npm run dev
```

### Database connection error
- Periksa `.env` configuration
- Pastikan Supabase project aktif
- Cek SUPABASE_URL dan keys

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Express.js Docs](https://expressjs.com/)
- [GitHub Docs](https://docs.github.com)
- [Render Docs](https://render.com/docs)

## 💬 Help

- GitHub Issues: [Report bugs](https://github.com/karyogit/karyogit/issues)
- Discussions: [Ask questions](https://github.com/karyogit/karyogit/discussions)
- Discord: [Join community](https://discord.gg/karyogit)

---

**Happy coding! 🇮🇩❤️**
