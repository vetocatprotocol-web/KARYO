# Panduan Kontribusi KARYOGIT

Terima kasih telah tertarik untuk berkontribusi pada KARYOGIT! Kami sangat menghargai setiap kontribusi, baik itu code, dokumentasi, atau feedback.

## 📋 Cara Memulai

### 1. Fork Repository
```bash
git clone https://github.com/karyogit/karyogit.git
cd karyogit
```

### 2. Setup Development Environment
```bash
npm install
cp .env.example .env
# Edit .env dengan konfigurasi lokal Anda
```

### 3. Run Development Server
```bash
npm run dev
```

## 🔄 Git Workflow

### Branch Naming Convention
- `feat/nama-fitur` - Untuk fitur baru
- `fix/nama-bug` - Untuk perbaikan bug
- `docs/topik` - Untuk dokumentasi
- `refactor/topik` - Untuk refactoring
- `test/topik` - Untuk testing

### Commit Message Convention
```
feat: tambah fitur X
fix: perbaiki bug Y
docs: update dokumentasi
style: format kode
refactor: refactor module X
test: tambah test untuk fitur Y
chore: update dependencies
```

### Pull Request Process
1. Buat branch dari `main` dengan nama deskriptif
2. Commit dengan pesan yang jelas
3. Push ke branch Anda
4. Buat Pull Request dengan deskripsi lengkap
5. Tunggu review dari maintainer
6. Setelah approval, merge ke main

## 🏗️ Struktur Proyek

```
karyogit/
├── frontend/          # Static frontend (GitHub Pages)
├── api/              # Backend API (Render)
├── supabase/         # Database migrations
├── .github/workflows # CI/CD workflows
├── docs/             # Dokumentasi
└── README.md
```

## 🎯 Area Kontribusi

### Frontend
- **Skill**: HTML, CSS, JavaScript, Astro
- **Priority**: 🔴 Tinggi
- **Tugas**: Landing page, katalog, search

### Backend API
- **Skill**: Node.js, Express, REST API
- **Priority**: 🔴 Tinggi
- **Tugas**: Project routes, developer routes, auth

### Database
- **Skill**: PostgreSQL, Supabase
- **Priority**: 🔴 Tinggi
- **Tugas**: Migration, schema design

### Documentation
- **Skill**: Markdown, bahasa teknis
- **Priority**: 🟢 Terbuka
- **Tugas**: API docs, setup guide

### Testing
- **Skill**: Jest, Playwright
- **Priority**: 🟢 Terbuka
- **Tugas**: Unit test, integration test

## 🐛 Menemukan Issue

Lihat [Issues](https://github.com/karyogit/karyogit/issues) untuk tugas yang tersedia. Issue dengan label `good first issue` cocok untuk pemula.

## 📝 Dokumentasi

- API: [docs/API.md](docs/API.md)
- Stack: [docs/STACK.md](docs/STACK.md)
- Setup: Lihat README.md

## ✅ Sebelum Push

```bash
# Run linter
npm run lint

# Run tests (jika ada)
npm test

# Build
npm run build
```

## 💬 Diskusi & Pertanyaan

- Discord: [discord.gg/karyogit](https://discord.gg/karyogit)
- Discussions: [GitHub Discussions](https://github.com/karyogit/karyogit/discussions)
- Issues: [GitHub Issues](https://github.com/karyogit/karyogit/issues)

## 📜 Lisensi

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah MIT License.

---

**Terima kasih telah berkontribusi! 🇮🇩❤️**
