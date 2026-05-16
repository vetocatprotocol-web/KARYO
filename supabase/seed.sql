-- Seed data for KARYOGIT development

-- Insert sample developers
INSERT INTO developers (name, username, email, bio, city, province, skills, github_url, is_open_collab)
VALUES
  ('Ahmad Rizki', 'ahmadrizki', 'ahmad@example.com', 'Full-stack developer dari Jakarta', 'Jakarta', 'DKI Jakarta', ARRAY['JavaScript', 'Python', 'React'], 'https://github.com/ahmadrizki', true),
  ('Siti Nurhaliza', 'sitinur', 'siti@example.com', 'Mobile developer from Bandung', 'Bandung', 'Jawa Barat', ARRAY['Kotlin', 'Flutter', 'Android'], 'https://github.com/sitinur', true),
  ('Budi Santoso', 'budisantoso', 'budi@example.com', 'DevOps Engineer', 'Surabaya', 'Jawa Timur', ARRAY['Docker', 'Kubernetes', 'Linux'], 'https://github.com/budisantoso', false);

-- Insert sample projects
INSERT INTO projects (name, slug, description, category, tags, author_id, repo_url, status, is_verified, badge_tier, version)
SELECT 
  'Sistem Manajemen Koperasi',
  'sistem-manajemen-koperasi',
  'Platform digital untuk mengelola koperasi Indonesia dengan fitur member, transaksi, dan laporan keuangan',
  'UMKM',
  ARRAY['#UMKM', '#SistemDesa', '#FinTech'],
  id,
  'https://github.com/ahmadrizki/koperasi-app',
  'active',
  true,
  'verified',
  '1.0.0'
FROM developers WHERE username = 'ahmadrizki'
UNION ALL
SELECT
  'EduLearning Platform',
  'edulearning-platform',
  'Platform pembelajaran online untuk sekolah Indonesia dengan fitur kelas virtual, tugas, dan penilaian',
  'Edutech',
  ARRAY['#Edutech', '#Pendidikan'],
  id,
  'https://github.com/sitinur/edulearning',
  'active',
  true,
  'verified',
  '2.1.0'
FROM developers WHERE username = 'sitinur'
UNION ALL
SELECT
  'Monitoring Server Indonesia',
  'monitoring-server-id',
  'Tools open-source untuk monitoring server dan infrastruktur di Indonesia dengan dashboard real-time',
  'DevOps',
  ARRAY['#DevOps', '#Infrastruktur'],
  id,
  'https://github.com/budisantoso/monitoring-tools',
  'active',
  false,
  'registered',
  '0.5.0'
FROM developers WHERE username = 'budisantoso';

-- Insert sample releases
INSERT INTO releases (project_id, version, release_notes, file_url, file_type, is_latest)
SELECT 
  id,
  '1.0.0',
  'Initial release dengan fitur member management dan transaksi dasar',
  'https://releases.karyogit.id/koperasi-v1.0.0.zip',
  'zip',
  true
FROM projects WHERE slug = 'sistem-manajemen-koperasi'
UNION ALL
SELECT
  id,
  '2.1.0',
  'Update fitur penilaian otomatis dan dashboard siswa yang lebih baik',
  'https://releases.karyogit.id/edulearning-v2.1.0.tar.gz',
  'tar.gz',
  true
FROM projects WHERE slug = 'edulearning-platform';
