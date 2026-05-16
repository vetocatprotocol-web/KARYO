// KARYOGIT Frontend JavaScript

const API_BASE = process.env.API_BASE || 'http://localhost:3000/api';

// Sample data for development/demo
const SAMPLE_PROJECTS = [
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
        author: 'Ahmad Rizki'
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
        author: 'Siti Nurhaliza'
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
        author: 'Budi Santoso'
    }
];

const SAMPLE_DEVELOPERS = [
    { id: '1', name: 'Ahmad Rizki', city: 'Jakarta', avatar: '👨‍💻', skills: ['JavaScript', 'Python', 'React'] },
    { id: '2', name: 'Siti Nurhaliza', city: 'Bandung', avatar: '👩‍💻', skills: ['Kotlin', 'Flutter', 'Android'] },
    { id: '3', name: 'Budi Santoso', city: 'Surabaya', avatar: '👨‍💻', skills: ['Docker', 'Kubernetes', 'Linux'] }
];

const TAGS = [
    { name: '#UMKM', count: 45 },
    { name: '#Edutech', count: 67 },
    { name: '#FinTech', count: 34 },
    { name: '#HealthTech', count: 28 },
    { name: '#GovTech', count: 19 },
    { name: '#Pertanian', count: 41 },
    { name: '#Maritim', count: 15 },
    { name: '#BahasaDaerah', count: 23 }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 KARYOGIT Frontend initialized');
    
    loadStatistics();
    renderTrendingProjects();
    renderFeaturedProject();
    renderDevelopers();
    renderTags();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchProjects(e.target.value);
        }
    });

    document.querySelector('.btn-search')?.addEventListener('click', () => {
        const query = document.getElementById('searchInput').value;
        searchProjects(query);
    });

    document.getElementById('exploreBtn')?.addEventListener('click', () => {
        document.location.hash = '#trending';
    });

    document.getElementById('submitBtn')?.addEventListener('click', () => {
        if (localStorage.getItem('user_token')) {
            window.location.href = 'submit-project.html';
        } else {
            loginUser();
        }
    });

    document.getElementById('loginBtn')?.addEventListener('click', loginUser);
    document.getElementById('startBtn')?.addEventListener('click', loginUser);
}

// Load Live Statistics
async function loadStatistics() {
    try {
        // Demo data
        document.getElementById('totalProjects').textContent = '156';
        document.getElementById('totalDevelopers').textContent = '342';
        document.getElementById('totalDownloads').textContent = '18.5K';
        document.getElementById('totalCities').textContent = '32';

        // Try to fetch from API if available
        const response = await fetch(`${API_BASE}/projects`);
        if (response.ok) {
            const data = await response.json();
            const totalProjects = data.total || data.data?.length || 156;
            document.getElementById('totalProjects').textContent = totalProjects;
        }
    } catch (error) {
        console.log('Using demo statistics');
    }
}

// Render Trending Projects
function renderTrendingProjects() {
    const container = document.getElementById('trendingProjects');
    const loading = document.getElementById('trendingLoading');

    if (!container) return;

    // Sort by downloads and stars
    const trending = SAMPLE_PROJECTS.sort((a, b) => {
        const scoreA = a.downloads + a.stars * 2;
        const scoreB = b.downloads + b.stars * 2;
        return scoreB - scoreA;
    });

    container.innerHTML = trending.map(project => createProjectCard(project)).join('');
    loading.style.display = 'none';
}

// Render Featured Project
function renderFeaturedProject() {
    const container = document.getElementById('featuredProject');
    if (!container) return;

    const featured = SAMPLE_PROJECTS[0];
    container.innerHTML = `
        <div class="featured-project-image">${featured.icon}</div>
        <div class="featured-project-content">
            <h3>${featured.name}</h3>
            <p>${featured.description}</p>
            <div class="featured-project-tags">
                ${featured.tags.map(tag => `<span class="tag primary">${tag}</span>`).join('')}
            </div>
            <p style="font-size: 0.9rem; color: #999;">
                👤 by <strong>${featured.author}</strong> | 
                ⬇️ ${featured.downloads} downloads | 
                ⭐ ${featured.stars} stars
            </p>
            <button class="btn btn-primary" onclick="viewProject('${featured.slug}')">
                Lihat Proyek →
            </button>
        </div>
    `;
}

// Render Developers
function renderDevelopers() {
    const container = document.getElementById('developersGrid');
    if (!container) return;

    container.innerHTML = SAMPLE_DEVELOPERS.map(dev => `
        <div class="developer-card">
            <div class="developer-avatar">${dev.avatar}</div>
            <h3>${dev.name}</h3>
            <p class="developer-city">📍 ${dev.city}</p>
            <div class="developer-skills">
                ${dev.skills.slice(0, 3).map(skill => `<span class="tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render Tags
function renderTags() {
    const container = document.getElementById('tagsCloud');
    if (!container) return;

    container.innerHTML = TAGS.map(tag => `
        <span class="tag" onclick="filterByTag('${tag.name}')">
            ${tag.name} <small>(${tag.count})</small>
        </span>
    `).join('');
}

// Create Project Card
function createProjectCard(project) {
    return `
        <div class="project-card" onclick="viewProject('${project.slug}')">
            <div class="project-card-header">
                <span class="project-icon">${project.icon}</span>
                <h3 class="project-card-title">${project.name}</h3>
            </div>
            <div class="project-card-body">
                <p class="project-description">${project.description.substring(0, 80)}...</p>
                <div class="project-meta">
                    <span>📥 ${project.downloads}</span>
                    <span>⭐ ${project.stars}</span>
                    <span>👤 ${project.author}</span>
                </div>
            </div>
            <div class="project-card-footer">
                ${project.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// Search Projects
async function searchProjects(query) {
    if (!query.trim()) return;

    try {
        const response = await fetch(`${API_BASE}/projects?search=${encodeURIComponent(query)}`);
        if (response.ok) {
            const data = await response.json();
            displaySearchResults(data.data || []);
        }
    } catch (error) {
        console.error('Search error:', error);
        // Filter demo data
        const results = SAMPLE_PROJECTS.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        );
        displaySearchResults(results);
    }
}

// Display Search Results
function displaySearchResults(results) {
    const container = document.getElementById('trendingProjects');
    if (!container) return;

    if (results.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Tidak ada proyek ditemukan</p>';
        return;
    }

    container.innerHTML = results.map(project => createProjectCard(project)).join('');
    document.location.hash = '#trending';
}

// Filter by Tag
function filterByTag(tag) {
    const filtered = SAMPLE_PROJECTS.filter(p => p.tags.includes(tag));
    const container = document.getElementById('trendingProjects');
    if (container) {
        container.innerHTML = filtered.length > 0
            ? filtered.map(p => createProjectCard(p)).join('')
            : '<p style="grid-column: 1/-1; text-align: center;">Tidak ada proyek dengan tag ini</p>';
    }
    document.location.hash = '#trending';
}

// View Project
function viewProject(slug) {
    // In production, navigate to project detail page
    console.log('Viewing project:', slug);
    window.location.href = `project/${slug}/`;
}

// Login User
function loginUser() {
    console.log('Redirecting to GitHub OAuth login...');
    // In production, this would redirect to GitHub OAuth
    alert('🔗 Redirect ke GitHub OAuth akan diaktifkan saat deployment');
}

// Generate random particles for hero background
function generateParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = '#DC143C';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5;
        container.appendChild(particle);

        // Animate
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 100 - 50;
    const duration = Math.random() * 20 + 20;

    particle.animate(
        [
            { transform: 'translate(0, 0)', opacity: 0 },
            { opacity: Math.random() * 0.5, offset: 0.5 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ],
        { duration: duration * 1000, iterations: Infinity }
    );
}

// Initialize particles
window.addEventListener('load', () => {
    generateParticles();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .developer-card, .testimonial-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
});

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✓ Copied to clipboard!');
    });
}

console.log('🎨 KARYOGIT Frontend - All systems ready!');
