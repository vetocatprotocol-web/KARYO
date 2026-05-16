# 🇮🇩 KARYOGIT

<div align="center">

![KARYOGIT Banner](https://img.shields.io/badge/🇮🇩_KARYOGIT-Platform_Open--Source_Nasional-DC143C?style=for-the-badge&labelColor=000000)

**Agregator · Inkubator · Direktori · Komunitas**

> *"Dari Indonesia, untuk ekosistem open-source yang lebih terbuka, terstruktur, dan kolaboratif."*

[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen?style=flat-square)](https://karyogit.id)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Made in Indonesia](https://img.shields.io/badge/Made_in-🇮🇩_Indonesia-DC143C?style=flat-square)](https://karyogit.id)
[![Free to Operate](https://img.shields.io/badge/Operasional-100%25_Free-success?style=flat-square)](docs/STACK.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff69b4?style=flat-square)](CONTRIBUTING.md)

[🌐 Demo Live](https://karyogit.id) · [📖 Dokumentasi](docs/) · [🐛 Laporkan Bug](issues/new?template=bug_report.md) · [💡 Request Fitur](issues/new?template=feature_request.md) · [💬 Diskusi](discussions)

</div>

---

## 📋 Daftar Isi

- [Tentang KARYOGIT](#-tentang-karyogit)
- [Fitur Utama](#-fitur-utama)
- [Fitur Landing Page](#-fitur-landing-page)
- [Arsitektur & Stack](#️-arsitektur--stack-100-gratis)
- [Struktur Database](#-struktur-database)
- [Alur Pengguna](#-alur-pengguna)
- [Roadmap](#-roadmap)
- [Instalasi & Development](#️-instalasi--development)
- [Deployment](#-deployment)
- [Keamanan](#-keamanan)
- [Kontribusi](#-kontribusi)
- [Komunitas](#-komunitas)
- [Lisensi](#-lisensi)

---

## 🎯 Tentang KARYOGIT

**KARYOGIT** adalah platform agregator dan inkubator open-source nasional Indonesia — tempat di mana setiap developer, mulai dari mahasiswa semester pertama hingga engineer berpengalaman, dapat mempublikasikan, menemukan, dan mengembangkan karya secara terbuka.

Kami percaya bahwa ekosistem teknologi Indonesia yang kuat dibangun dari karya-karya lokal yang terstruktur, mudah ditemukan, dan didukung komunitas yang bergotong royong.

### Mengapa KARYOGIT?

| Masalah | Solusi KARYOGIT |
|---|---|
| Proyek lokal tenggelam di GitHub | Katalog terkurasi khusus Indonesia |
| Sulit menemukan proyek relevan | Tag lokal: #UMKM, #SistemDesa, #Edutech |
| Infrastruktur hosting mahal | Stack 100% gratis (Render + Supabase + Wasabi) |
| Kontribusi tidak terorganisir | Tombol "Gotong Royong" terintegrasi |
| Developer pemula tidak dikenal | Profil publik + Badge "Made in Indonesia" |
| Tidak ada direktori developer lokal | KaryoDir — direktori developer Indonesia |

---

## 🚀 Fitur Utama

### 🧾 1. Upload Proyek Instan
Developer cukup mengisi form sederhana, sistem akan otomatis:
- Menyimpan metadata ke **Supabase**
- Mengupload file rilis ke **Wasabi S3** (`.zip`, `.tar.gz`, `.apk`, `.exe`, `.deb`)
- Menampilkan proyek di katalog publik secara real-time
- Menggenerate **badge** dan **embed snippet** siap pakai

### 🔎 2. Pencarian & Filter Canggih
- **Full-text search** berbasis Supabase `pg_trgm`
- **Filter multi-tag lokal**: `#UMKM`, `#SistemDesa`, `#Edutech`, `#BahasaDaerah`, `#FinTech`, `#HealthTech`, `#GovTech`, `#Pertanian`, `#Maritim`
- **Filter berdasarkan**: kategori, bahasa pemrograman, lisensi, popularitas, tanggal
- **Autocomplete** pencarian berbasis Supabase RPC

### 🤝 3. Tombol "Gotong Royong"
Setiap proyek dilengkapi panel kontribusi:
- 🐛 **Laporkan Bug** → redirect ke GitHub Issues
- 💡 **Sumbang Ide** → redirect ke GitHub Discussions
- 🔀 **Pull Request** → redirect ke GitHub PR
- 📖 **Bantu Dokumentasi** → label `good first issue` otomatis
- 💰 **Dukung Developer** → integrasi Saweria / Trakteer

### 🪪 4. Badge "Made in Indonesia"
```markdown
![KARYOGIT Verified](https://karyogit.id/badge/PROJECT_ID)
```
- Badge SVG dinamis dengan status real-time
- Shield.io compatible
- Embed di README GitHub, website, atau media sosial
- Tiga tingkatan: **Terdaftar** → **Terverifikasi** → **Unggulan**

### 🔄 5. Otomatisasi GitHub Actions
- **Nightly sync**: sinkronisasi metadata dari GitHub API ke Supabase
- **Auto-deploy**: setiap push ke `main` otomatis deploy via Render
- **Stale check**: notifikasi proyek yang tidak aktif > 6 bulan
- **Release mirror**: rilis baru di GitHub otomatis disinkron ke Wasabi S3

### 📊 6. Dashboard Developer
- Statistik download, view, dan fork proyek
- Grafik pertumbuhan kontributor
- Ranking proyek dalam kategori
- Insight tag yang sedang tren di komunitas Indonesia

### 🏆 7. KaryoRank — Leaderboard Nasional
- Proyek paling banyak di-download bulan ini
- Developer paling aktif berkontribusi
- Kategori terpopuler minggu ini
- "Rising Star" — proyek baru yang pertumbuhannya cepat

### 🧑‍💻 8. KaryoDir — Direktori Developer Indonesia
- Profil publik developer (skill, kota, universitas)
- Portfolio proyek terintegrasi
- Status "Open to Collaborate" / "Open to Hire"
- Verifikasi identitas via GitHub OAuth

### 📰 9. KaryoBlog — Artikel Komunitas
- Developer dapat menulis tutorial, postmortem, atau opini
- Format Markdown dengan editor built-in
- Sistem upvote dan komentar
- Dikurasi oleh tim KARYOGIT untuk diterbitkan di halaman utama

### 🔔 10. KaryoAlert — Notifikasi Cerdas
- Email digest mingguan proyek baru sesuai tag favorit
- Notifikasi ketika proyek yang di-follow dapat update
- Alert ketika developer favorit merilis proyek baru
- RSS Feed per kategori/tag

---

## 🌟 Fitur Landing Page

Landing page utama KARYOGIT dirancang sebagai **etalase nasional** yang memukau:

### 🎨 Hero Section
- Animasi partikel interaktif dengan tema merah-putih
- Counter real-time: total proyek, developer, dan download
- CTA ganda: "Jelajahi Proyek" & "Daftarkan Karyamu"
- Search bar global langsung dari hero

### 🔥 Trending Proyek
- Kartu proyek dengan animasi hover
- Label trending berdasarkan aktivitas 7 hari terakhir
- Preview README inline tanpa meninggalkan halaman
- Tombol quick-download langsung dari kartu

### 🗺️ Peta Developer Indonesia
- Visualisasi interaktif peta Indonesia (SVG)
- Titik merah di setiap kota dengan developer terdaftar
- Klik kota → lihat developer & proyek dari kota tersebut
- Highlight provinsi dengan ekosistem open-source paling aktif

### 🏷️ Tag Cloud Nasional
- Visualisasi tag paling populer dalam bentuk word cloud
- Ukuran tag proporsional terhadap jumlah proyek
- Klik tag → langsung filter katalog
- Diperbarui setiap 24 jam

### 📣 Showcase "Karya Minggu Ini"
- Satu proyek unggulan pilihan tim KARYOGIT per minggu
- Tampilan full-width dengan screenshot/demo
- Wawancara singkat dengan developer (format Q&A)
- Share otomatis ke media sosial KARYOGIT

### 💬 Testimonial Komunitas
- Kutipan dari developer, mahasiswa, dan komunitas tech lokal
- Foto dan link profil GitHub
- Rotating carousel animasi

### 📈 Stats & Dampak Nasional
- Total proyek terdaftar
- Total developer bergabung
- Total download semua proyek
- Jumlah kota yang terwakili
- Diperbarui real-time via Supabase Realtime

### 🤝 Mitra & Pendukung
- Logo komunitas tech Indonesia (GDG, MLID, BukuOSS, dll.)
- Seksi sponsor dengan tier: Komunitas / Institusi / Korporat
- Semua slot sponsorship **gratis** untuk komunitas non-profit

---

## 🏗️ Arsitektur & Stack (100% Gratis)

```
┌─────────────────────────────────────────────────────────┐
│                    KARYOGIT SYSTEM                       │
│                                                         │
│  ┌──────────────┐    ┌──────────────┐                   │
│  │  GitHub Pages │    │    Render    │                   │
│  │  (Frontend   │◄───│  (API Server │                   │
│  │   Statis)    │    │   Node.js)   │                   │
│  └──────┬───────┘    └──────┬───────┘                   │
│         │                   │                           │
│         ▼                   ▼                           │
│  ┌──────────────┐    ┌──────────────┐                   │
│  │   Supabase   │    │  Wasabi S3   │                   │
│  │  (DB + Auth  │    │  (File Stor- │                   │
│  │   + REST API)│    │   age Rilis) │                   │
│  └──────────────┘    └──────────────┘                   │
│         │                                               │
│         ▼                                               │
│  ┌──────────────┐    ┌──────────────┐                   │
│  │GitHub Actions│    │  Cloudflare  │                   │
│  │  (CI/CD &    │    │  (CDN + DNS  │                   │
│  │  Automation) │    │   + WAF)     │                   │
│  └──────────────┘    └──────────────┘                   │
└─────────────────────────────────────────────────────────┘
```

### Stack Detail & Tier Gratis

| Komponen | Layanan | Tier Gratis | Batas |
|---|---|---|---|
| **Frontend Statis** | GitHub Pages | ✅ Unlimited | Repo public |
| **API Server** | Render (Web Service) | ✅ Free Tier | 750 jam/bulan, sleep after idle |
| **Database** | Supabase PostgreSQL | ✅ Free Tier | 500 MB, 2 juta row reads/hari |
| **Auth** | Supabase Auth | ✅ Included | 50.000 MAU |
| **File Storage** | Wasabi S3 | ✅ $0 egress | 1 TB storage ~$6/bulan* |
| **CDN + DNS** | Cloudflare | ✅ Free | Unlimited bandwidth |
| **CI/CD** | GitHub Actions | ✅ Free | 2.000 menit/bulan |
| **Email** | Resend | ✅ Free Tier | 3.000 email/bulan |
| **Monitoring** | UptimeRobot | ✅ Free | 50 monitor |
| **Analytics** | Umami (self-host) | ✅ Free | Unlimited |
| **Search** | Supabase `pg_trgm` | ✅ Included | — |
| **Realtime** | Supabase Realtime | ✅ Included | 200 koneksi bersamaan |

> *Wasabi S3: tidak ada biaya egress/download. Hanya bayar storage. Untuk proyek awal dengan storage < 1 TB, biaya minimal ~$6/bulan atau bisa diganti **Backblaze B2** (10 GB gratis).

### Alternatif Fully Free (0 Biaya Operasional)

Untuk fase awal / MVP:

| Komponen | Alternatif Gratis Penuh |
|---|---|
| File Storage | Backblaze B2 (10 GB gratis) |
| API Server | Railway (500 jam/bulan) atau Fly.io |
| Email | Brevo (300 email/hari gratis) |
| Analytics | Plausible Community Edition |

---

## 🧱 Struktur Database

### Tabel: `projects`
```sql
CREATE TABLE projects (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  description     TEXT,
  long_description TEXT,
  tags            TEXT[],
  category        TEXT,
  repo_url        TEXT,
  demo_url        TEXT,
  download_url    TEXT,                    -- Wasabi S3 URL
  thumbnail_url   TEXT,                    -- Wasabi S3 URL
  screenshots     TEXT[],                  -- Array Wasabi S3 URLs
  author_id       UUID REFERENCES developers(id),
  license         TEXT DEFAULT 'MIT',
  language        TEXT,
  version         TEXT,
  stars           INT DEFAULT 0,
  downloads       INT DEFAULT 0,
  forks           INT DEFAULT 0,
  status          TEXT DEFAULT 'pending',  -- pending|active|featured|archived
  is_verified     BOOLEAN DEFAULT false,
  badge_tier      TEXT DEFAULT 'registered', -- registered|verified|featured
  created_at      TIMESTAMP DEFAULT NOW(),
  updated_at      TIMESTAMP DEFAULT NOW(),
  last_synced_at  TIMESTAMP                -- Dari GitHub Actions sync
);
```

### Tabel: `developers`
```sql
CREATE TABLE developers (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  username        TEXT UNIQUE NOT NULL,    -- GitHub username
  email           TEXT,
  avatar_url      TEXT,
  bio             TEXT,
  city            TEXT,
  province        TEXT,
  github_url      TEXT,
  website_url     TEXT,
  skills          TEXT[],
  is_open_collab  BOOLEAN DEFAULT false,
  is_open_hire    BOOLEAN DEFAULT false,
  github_id       TEXT UNIQUE,             -- Untuk OAuth
  total_projects  INT DEFAULT 0,
  total_downloads INT DEFAULT 0,
  created_at      TIMESTAMP DEFAULT NOW()
);
```

### Tabel: `releases`
```sql
CREATE TABLE releases (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id      UUID REFERENCES projects(id) ON DELETE CASCADE,
  version         TEXT NOT NULL,
  release_notes   TEXT,
  file_url        TEXT NOT NULL,           -- Wasabi S3 URL
  file_size       BIGINT,
  file_type       TEXT,                    -- zip|tar.gz|apk|exe|deb
  downloads       INT DEFAULT 0,
  is_latest       BOOLEAN DEFAULT false,
  created_at      TIMESTAMP DEFAULT NOW()
);
```

### Tabel: `blog_posts`
```sql
CREATE TABLE blog_posts (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  content         TEXT,                    -- Markdown
  excerpt         TEXT,
  author_id       UUID REFERENCES developers(id),
  tags            TEXT[],
  upvotes         INT DEFAULT 0,
  is_published    BOOLEAN DEFAULT false,
  is_featured     BOOLEAN DEFAULT false,
  created_at      TIMESTAMP DEFAULT NOW()
);
```

### Tabel: `follows` & `notifications`
```sql
CREATE TABLE follows (
  follower_id     UUID REFERENCES developers(id),
  following_id    UUID REFERENCES developers(id),
  PRIMARY KEY (follower_id, following_id)
);

CREATE TABLE project_stars (
  developer_id    UUID REFERENCES developers(id),
  project_id      UUID REFERENCES projects(id),
  created_at      TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (developer_id, project_id)
);
```

### Row Level Security (RLS)
```sql
-- Developer hanya bisa edit proyek miliknya sendiri
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "developer_own_projects" ON projects
  FOR ALL USING (author_id = auth.uid());

CREATE POLICY "public_read_active" ON projects
  FOR SELECT USING (status = 'active' OR status = 'featured');
```

---

## 🧭 Alur Pengguna

### 👀 Pengunjung
```
Buka karyogit.id
    │
    ├─► Lihat hero dengan statistik real-time
    ├─► Eksplorasi trending proyek
    ├─► Cari berdasarkan tag atau keyword
    ├─► Klik proyek → halaman detail
    │       ├─► Baca README preview
    │       ├─► Download rilis dari Wasabi S3
    │       ├─► Klik "Gotong Royong" → GitHub
    │       └─► Share ke media sosial
    └─► Lihat direktori developer (KaryoDir)
```

### 🧑‍💻 Developer (Submit Proyek)
```
Klik "Pamerkan Karya"
    │
    ├─► Login via GitHub OAuth (Supabase Auth)
    ├─► Lengkapi profil KaryoDir (sekali)
    ├─► Isi form proyek:
    │       ├─► Nama, deskripsi, kategori
    │       ├─► Tag lokal (#UMKM, #Edutech, dll.)
    │       ├─► URL repository GitHub
    │       ├─► Upload file rilis (→ Wasabi S3)
    │       └─► Upload screenshot/thumbnail
    ├─► Submit → Review otomatis (bot check)
    ├─► Proyek aktif dalam < 24 jam
    └─► Dapatkan badge & embed snippet
```

### 🤝 Kontributor
```
Temukan proyek menarik
    │
    ├─► Klik "Gotong Royong"
    ├─► Pilih mode kontribusi:
    │       ├─► 🐛 Bug report
    │       ├─► 💡 Feature request
    │       ├─► 🔀 Pull request
    │       └─► 📖 Dokumentasi
    └─► Diarahkan ke GitHub dengan label pra-isi
```

---

## 🗺️ Roadmap

### ✅ Fase 0 — Fondasi (Saat Ini)
- [x] Arsitektur & stack design
- [x] Dokumentasi lengkap
- [x] Database schema
- [ ] Setup Supabase project
- [ ] Setup Render API server (Node.js)
- [ ] GitHub Actions workflow dasar

### 🔨 Fase 1 — MVP (Q3 2025)
- [ ] Landing page interaktif
- [ ] Katalog proyek + search + filter tag
- [ ] Form submit proyek
- [ ] GitHub OAuth via Supabase
- [ ] Upload file ke Wasabi S3
- [ ] Halaman detail proyek + README preview
- [ ] Badge sistem dasar
- [ ] Tombol "Gotong Royong"

### 🚀 Fase 2 — Komunitas (Q4 2025)
- [ ] KaryoDir — direktori developer
- [ ] Dashboard statistik developer
- [ ] KaryoRank — leaderboard nasional
- [ ] Sistem bintang/bookmark proyek
- [ ] Email digest mingguan (Resend)
- [ ] RSS Feed per kategori
- [ ] Peta developer Indonesia (SVG interaktif)

### 🌟 Fase 3 — Ekosistem (Q1 2026)
- [ ] KaryoBlog — artikel komunitas
- [ ] KaryoAlert — notifikasi cerdas
- [ ] Showcase "Karya Minggu Ini"
- [ ] API publik untuk third-party
- [ ] Embed widget untuk website eksternal
- [ ] Program "Developer Unggulan Indonesia"
- [ ] Integrasi Saweria/Trakteer untuk support developer

### 🔭 Fase 4 — Skala Nasional (Q2 2026+)
- [ ] Mobile app (PWA)
- [ ] Kemitraan institusi pendidikan
- [ ] Program inkubasi terstruktur
- [ ] Hackathon platform terintegrasi
- [ ] Integrasi dengan LKPP / PSE Kominfo

---

## 🛠️ Instalasi & Development

### Prerequisites
- Node.js >= 18
- Git
- Akun Supabase (gratis)
- Akun Render (gratis)
- Akun Wasabi atau Backblaze B2

### Clone & Setup
```bash
git clone https://github.com/karyogit/karyogit.git
cd karyogit
cp .env.example .env
```

### Environment Variables
```env
# Supabase
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Wasabi S3
WASABI_ACCESS_KEY=your_access_key
WASABI_SECRET_KEY=your_secret_key
WASABI_BUCKET=karyogit-releases
WASABI_REGION=ap-southeast-1
WASABI_ENDPOINT=https://s3.ap-southeast-1.wasabisys.com

# App
NODE_ENV=development
PORT=3000
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Email (Resend)
RESEND_API_KEY=your_resend_key
EMAIL_FROM=noreply@karyogit.id

# Cloudflare (opsional)
CLOUDFLARE_ZONE_ID=your_zone_id
CLOUDFLARE_API_TOKEN=your_token
```

### Install & Run
```bash
# Install dependencies
npm install

# Jalankan database migrations
npm run db:migrate

# Seed data contoh
npm run db:seed

# Development server
npm run dev

# Build production
npm run build
```

### Struktur Proyek
```
karyogit/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Auto-deploy ke Render
│       ├── sync-github.yml     # Sync metadata dari GitHub API
│       └── notify-stale.yml    # Notifikasi proyek tidak aktif
├── frontend/                   # Vanilla JS static (deprecated)
├── frontend-astro/             # ⭐ Astro Frontend (aktif)
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── layouts/            # Page layouts
│   │   ├── pages/              # Routes
│   │   ├── styles/             # Global styles
│   │   └── lib/                # Utilities
│   ├── public/                 # Static assets
│   ├── astro.config.mjs
│   ├── package.json
│   └── README.md
├── api/                        # Render — Node.js API
│   ├── routes/
│   │   ├── projects.js
│   │   ├── developers.js
│   │   ├── releases.js
│   │   └── badges.js
│   ├── middleware/
│   ├── services/
│   │   ├── supabase.js
│   │   ├── wasabi.js
│   │   └── github.js
│   └── server.js
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── scripts/
│   ├── migrate.js
│   ├── seed.js
│   ├── sync-github.js
│   └── check-stale.js
├── docs/
│   ├── STACK.md
│   ├── API.md
│   └── SETUP.md
├── package.json
└── README.md
```

---

## 🚀 Deployment

### Frontend (GitHub Pages)
```yaml
# .github/workflows/deploy.yml
name: Deploy Frontend
on:
  push:
    branches: [main]
    paths: ['frontend/**']
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend
```

### API Server (Render)
1. Connect repository ke Render
2. Set **Build Command**: `npm install`
3. Set **Start Command**: `node api/server.js`
4. Tambahkan environment variables dari `.env`
5. Deploy otomatis setiap push ke `main`

### GitHub Actions — Sync Nightly
```yaml
# .github/workflows/sync-github.yml
name: Nightly GitHub Sync
on:
  schedule:
    - cron: '0 0 * * *'   # Setiap tengah malam WIB
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run sync:github
        env:
          SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 🔐 Keamanan

- **Row Level Security (RLS)**: Developer hanya bisa modifikasi data miliknya di Supabase
- **GitHub OAuth**: Tidak ada password — autentikasi via GitHub
- **File Validation**: Whitelist ekstensi file yang diperbolehkan diupload
- **Rate Limiting**: Middleware rate limiter di Render API (express-rate-limit)
- **File Type Filtering**: Magic bytes check untuk validasi file sebelum ke Wasabi S3
- **Cloudflare WAF**: Proteksi DDoS dan bot di layer CDN
- **Environment Secrets**: Semua credential via GitHub Secrets & Render Env Vars
- **CORS Policy**: API hanya menerima request dari domain terdaftar
- **Content Moderation**: Review manual untuk proyek baru sebelum dipublikasikan

---

## 📊 Monitoring & Observability

| Tool | Fungsi | Tier |
|---|---|---|
| UptimeRobot | Uptime monitoring Render API | Gratis (50 monitor) |
| Supabase Dashboard | Query performance & DB health | Gratis (included) |
| Cloudflare Analytics | Traffic & bandwidth stats | Gratis (included) |
| Umami | Privacy-first web analytics | Gratis (self-host di Render) |
| GitHub Actions Log | CI/CD monitoring | Gratis (included) |

---

## 🤝 Kontribusi

KARYOGIT adalah proyek open-source penuh. Kami sangat terbuka untuk kontribusi!

### Area yang Membutuhkan Bantuan

| Area | Skill Dibutuhkan | Prioritas |
|---|---|---|
| Frontend Landing Page | HTML/CSS/JS, Astro | 🔴 Tinggi |
| API Backend | Node.js, Express | 🔴 Tinggi |
| Database Schema | PostgreSQL, Supabase | 🔴 Tinggi |
| GitHub Actions | YAML, Shell script | 🟡 Sedang |
| UI/UX Design | Figma, desain sistem | 🟡 Sedang |
| Dokumentasi | Markdown, bahasa teknis | 🟢 Terbuka |
| Testing | Jest, Playwright | 🟢 Terbuka |

### Cara Berkontribusi
1. Fork repository ini
2. Buat branch: `git checkout -b fitur/nama-fitur`
3. Commit perubahan: `git commit -m 'feat: tambah fitur X'`
4. Push branch: `git push origin fitur/nama-fitur`
5. Buka Pull Request

Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan lengkap.

### Konvensi Commit
```
feat:     Fitur baru
fix:      Perbaikan bug
docs:     Perubahan dokumentasi
style:    Format, tidak mengubah logic
refactor: Refactoring kode
test:     Menambah/memperbaiki test
chore:    Update dependencies, config
```

---

## 💬 Komunitas

| Platform | Link |
|---|---|
| 💬 Discord | [discord.gg/karyogit](https://discord.gg/karyogit) |
| 📣 Telegram | [@karyogit](https://t.me/karyogit) |
| 🐦 Twitter/X | [@karyogit_id](https://twitter.com/karyogit_id) |
| 📸 Instagram | [@karyogit.id](https://instagram.com/karyogit.id) |
| 💼 LinkedIn | [KARYOGIT](https://linkedin.com/company/karyogit) |

---

## 🙏 Penghargaan

Terima kasih kepada seluruh developer Indonesia yang menginspirasi platform ini, komunitas open-source lokal (BukuOSS, GDG Indonesia, MLID), dan tim di balik Supabase, Render, Wasabi, Cloudflare, dan GitHub yang menyediakan infrastruktur luar biasa secara gratis.

---

## 📜 Lisensi

Didistribusikan di bawah **MIT License**. Lihat [LICENSE](LICENSE) untuk informasi lebih lanjut.

---

<div align="center">

**🇮🇩 Dibangun dengan ❤️ untuk ekosistem open-source Indonesia**

[⬆ Kembali ke Atas](#-karyogit)

</div>
