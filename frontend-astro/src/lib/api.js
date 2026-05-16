// API Configuration
export const API_BASE = import.meta.env.PUBLIC_API_BASE || 'http://localhost:3000/api';

// Sample data for development
export const SAMPLE_PROJECTS = [
  {
    id: '1',
    name: 'Sistem Manajemen Koperasi',
    slug: 'sistem-manajemen-koperasi',
    description: 'Platform digital untuk mengelola koperasi Indonesia dengan fitur member, transaksi, dan laporan keuangan',
    category: 'UMKM',
    tags: ['#UMKM', '#SistemDesa', '#FinTech'],
    icon: '🏢',
    downloads: 1245,
    stars: 342,
    author: 'Ahmad Rizki',
    thumbnail: 'https://via.placeholder.com/400x250'
  },
  {
    id: '2',
    name: 'EduLearning Platform',
    slug: 'edulearning-platform',
    description: 'Platform pembelajaran online untuk sekolah Indonesia dengan fitur kelas virtual, tugas, dan penilaian',
    category: 'Edutech',
    tags: ['#Edutech', '#Pendidikan'],
    icon: '📚',
    downloads: 2341,
    stars: 567,
    author: 'Siti Nurhaliza',
    thumbnail: 'https://via.placeholder.com/400x250'
  },
  {
    id: '3',
    name: 'Monitoring Server Indonesia',
    slug: 'monitoring-server-id',
    description: 'Tools open-source untuk monitoring server dan infrastruktur di Indonesia dengan dashboard real-time',
    category: 'DevOps',
    tags: ['#DevOps', '#Infrastruktur'],
    icon: '📊',
    downloads: 856,
    stars: 234,
    author: 'Budi Santoso',
    thumbnail: 'https://via.placeholder.com/400x250'
  }
];

export const SAMPLE_DEVELOPERS = [
  { id: '1', name: 'Ahmad Rizki', city: 'Jakarta', avatar: '👨‍💻', skills: ['JavaScript', 'Python', 'React'] },
  { id: '2', name: 'Siti Nurhaliza', city: 'Bandung', avatar: '👩‍💻', skills: ['Kotlin', 'Flutter', 'Android'] },
  { id: '3', name: 'Budi Santoso', city: 'Surabaya', avatar: '👨‍💻', skills: ['Docker', 'Kubernetes', 'Linux'] }
];

export const TAGS = [
  { name: '#UMKM', count: 45 },
  { name: '#Edutech', count: 67 },
  { name: '#FinTech', count: 34 },
  { name: '#HealthTech', count: 28 },
  { name: '#GovTech', count: 19 },
  { name: '#Pertanian', count: 41 },
  { name: '#Maritim', count: 15 },
  { name: '#BahasaDaerah', count: 23 }
];

// Fetch projects from API
export async function fetchProjects(filters = {}) {
  try {
    const params = new URLSearchParams();
    if (filters.status) params.append('status', filters.status);
    if (filters.tags) params.append('tags', filters.tags);
    if (filters.search) params.append('search', filters.search);
    if (filters.limit) params.append('limit', filters.limit);
    
    const response = await fetch(`${API_BASE}/projects?${params}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('API not available, using sample data');
  }
  return { data: SAMPLE_PROJECTS };
}

// Search projects
export function searchProjects(query, projects = SAMPLE_PROJECTS) {
  return projects.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );
}

// Filter projects by tag
export function filterByTag(tag, projects = SAMPLE_PROJECTS) {
  return projects.filter(p => p.tags.includes(tag));
}
