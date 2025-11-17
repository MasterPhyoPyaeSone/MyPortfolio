<template>
    <div class="project-detail">
        <div class="detail-header">
            <button @click="goBack" class="back-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Projects</span>
            </button>
        </div>

        <div class="detail-container" v-if="project">
            <div class="detail-hero">
                <div class="hero-content">
                    <p class="project-category">{{ project.category }}</p>
                    <h1 class="project-title">{{ project.title }}</h1>
                    <p class="project-subtitle">{{ project.description }}</p>
                    <div class="project-actions">
                        <a :href="project.live" target="_blank" class="action-btn primary">
                            <span>View Live</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                        <a :href="project.github" target="_blank" class="action-btn secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>View Code</span>
                        </a>
                    </div>
                </div>
                <div class="hero-image" :style="{ background: project.gradient }">
                    <img :src="project.image" alt="" class="project-image-placeholder">

                    <div class="image-glow"></div>
                </div>
            </div>

            <div class="detail-content">
                <div class="content-section">
                    <h2 class="section-heading">Overview</h2>
                    <div class="section-content">
                        <p>{{ project.overview || project.description }}</p>
                    </div>
                </div>

                <div class="content-section">
                    <h2 class="section-heading">Technologies Used</h2>
                    <div class="tech-grid">
                        <div v-for="tech in project.technologies" :key="tech" class="tech-card">
                            <span class="tech-name">{{ tech }}</span>
                        </div>
                    </div>
                </div>

                <div class="content-section" v-if="project.features">
                    <h2 class="section-heading">Key Features</h2>
                    <ul class="features-list">
                        <li v-for="(feature, index) in project.features" :key="index">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>{{ feature }}</span>
                        </li>
                    </ul>
                </div>

                <div class="content-section" v-if="project.challenges">
                    <h2 class="section-heading">Contact Me</h2>
                    <div class="challenges-content"
                        style="display: flex; flex-direction: row; gap: 80px; align-items: center; justify-content: space-evenly;">
                        <!-- <p>{{ project.challenges }}</p> -->
                        <p><span style="color: #667eea;">Github : </span> MasterPhyoPyaeSone </p>
                        <p><span style="color: #667eea;">Email : </span> phyo097800@gmail.com </p>
                        <p><span style="color: #667eea;">Phone : </span> 09950336142</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="loading-state">
            <p>Loading project details...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: null
        }
    },
    mounted() {
        this.loadProject()
    },
    methods: {
        loadProject() {
            const projectId = this.$route.params.id
            // In a real app, you'd fetch from API or store
            // For now, we'll use a simple projects array
            const projects = [
                {
                    id: 1,
                    title: 'GatePass QRSystem QR Scanner for Security',
                    category: 'Featured Project',
                    image: require('@/assets/scan.jpeg'),
                    description: 'A real-time QR scanner built to quickly validate QR codes presented by employees or visitors at gate entry points. It uses a camera to scan the QR codes and immediately determines whether the pass is valid.',
                    overview: 'This project is a real-time QR scanner built to quickly validate QR codes presented by employees or visitors at gate entry points. It uses a camera to scan the QR codes and immediately determines whether the pass is valid.',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL'],

                    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    live: '#',
                    github: 'https://github.com/MasterPhyoPyaeSone/Gate_Scanner',
                    features: [
                        'Real-Time QR Scanning',
                        'Uses device camera (webcam or mobile camera) for scanning',
                        'Instantly detects and decodes QR codes.',
                        'Can be integrated with a backend to verify QR validity',
                        'Prevents unauthorized or expired QR passes from entry',
                        // 'Admin dashboard with analytics'
                    ],
                    challenges: 'GitHub: MasterPhyoPyaeSone   :   Email: (phyo097800@gmail.com)   :   Phone: (09950336142)'

                },
                {
                    id: 2,
                    title: 'GatePass QRSystem Dashboard',
                    category: 'Featured Project',
                    image: require('@/assets/scanner.png'),
                    description: 'A dashboard for managing gate passes and QR codes. It allows you to generate QR codes, view pass history, and manage pass settings.',
                    overview: 'GatePass QRSystem Dashboard is designed to streamline the management of entry and exit using QR codes. It allows administrators to generate QR passes, scan them at gates, and monitor all activity from a real-time dashboard. The system is secure, fast, and user-friendly, making gate management efficient for offices, events, or restricted areas.',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL'],
                    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    live: '#',
                    github: 'https://github.com/MasterPhyoPyaeSone/Gate_QR_SYS-',
                    features: [
                        'Generate unique QR codes for each pass',
                        'Scan & validate QR codes instantly',
                        'Prevent duplicate or expired QR entries',
                        'Real-time scanning logs',
                        'View GatePass history',
                        'Search & filter by date, name, status'
                    ],
                    challenges: 'GitHub: MasterPhyoPyaeSone  :   Email: (phyo097800@gmail.com)   :   Phone: (09950336142)'

                },
                {
                    id: 3,
                    title: 'Traveler Packages Management System',
                    category: 'Featured Project',
                    image: require('@/assets/travel.png'),
                    description: 'A system for managing traveler packages and bookings. It allows you to create, edit, and delete packages, and view bookings and payments.',
                    overview: 'Traveler Packages Management System is designed to streamline the management of traveler packages and bookings. It allows administrators to create, edit, and delete packages, and view bookings and payments from a real-time dashboard. The system is secure, fast, and user-friendly, making travel management efficient for travel agencies, tour operators, or any organization that offers travel packages.',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL'],
                    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    live: '#',
                    github: 'https://github.com/MasterPhyoPyaeSone/travel_system',
                    features: [
                        'Create, edit, and delete traveler packages',
                        'View bookings and payments',
                        'Search & filter by date, name, status',
                        'Real-time scanning logs',
                        'Search & filter by price, name, date',
                        'Track booking status: pending, confirmed, or canceled',

                        'View detailed customer information'
                    ],
                    challenges: 'GitHub: MasterPhyoPyaeSone  :   Email: (phyo097800@gmail.com)   :   Phone: (09950336142)'
                },
                {
                    id: 4,
                    title: 'Portfolio Website',
                    category: 'Featured Project',
                    image: require('@/assets/port.png'),
                    description: 'A curated collection of my best work in UI/UX design, branding, and digital product development. This portfolio showcases a commitment to clean aesthetics and impactful problem-solving, structured for easy viewing and deep dives.',
                    overview: 'A portfolio website is your professional online showcase. Its primary goal is to present your best work, skills, and professional narrative in a visually compelling and easily accessible format. It acts as a centralized hub for potential employers, clients, or collaborators to quickly understand who you are, what you do, and the quality of your output.',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vue.js'],
                    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    live: '#',
                    github: 'https://github.com/MasterPhyoPyaeSone/MyPortfolio',
                    features: [
                        'Responsive Design:',
                        'Fast Loading Speed',
                        'Clear Navigation',
                        
                    ],
                    challenges: 'GitHub: MasterPhyoPyaeSone  :   Email: (phyo097800@gmail.com)   :   Phone: (09950336142)'
                }

            ]

            this.project = projects.find(p => p.id === parseInt(projectId)) || null
        },
        goBack() {
            this.$router.push('/#projects')
        }
    }
}
</script>

<style scoped>
.project-detail {
    min-height: 100vh;
    background: linear-gradient(-45deg, #1a1a1a, #2a2a2a, #1f1f1f, #3a3a3a);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    position: relative;
    padding: 40px 20px 100px;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.detail-header {
    max-width: 1200px;
    margin: 0 auto 40px;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.back-button:hover {
    background: rgba(102, 126, 234, 0.2);
    border-color: #667eea;
    transform: translateX(-5px);
}

.detail-container {
    max-width: 1200px;
    margin: 0 auto;
}

.project-image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.detail-hero {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: center;
    margin-bottom: 80px;
    animation: fadeInUp 0.6s ease-out;
}

.hero-content {
    z-index: 1;
}

.project-category {
    color: #667eea;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.project-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.1;
}

.project-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-bottom: 30px;
}

.project-actions {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.action-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.action-btn.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.action-btn.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

.action-btn.secondary {
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
}

.action-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
}

.hero-image {
    position: relative;
    width: 520px;
    height: 310px;
    /* padding: -10%; */
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    animation: floatImage 6s ease-in-out infinite;
}

@keyframes floatImage {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.image-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulseGlow 3s ease-in-out infinite;
    filter: blur(20px);
}

@keyframes pulseGlow {

    0%,
    100% {
        opacity: 0.3;
        transform: translate(-50%, -50%) scale(1);
    }

    50% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(1.1);
    }
}

.detail-content {
    display: grid;
    gap: 60px;
}

.content-section {
    animation: fadeInUp 0.6s ease-out;
}

.section-heading {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 15px;
}

.section-heading::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
}

.section-content {
    background: rgba(255, 255, 255, 0.05);
    padding: 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-content p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    font-size: 1.1rem;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
}

.tech-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
}

.tech-card:hover {
    background: rgba(102, 126, 234, 0.2);
    border-color: #667eea;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.tech-name {
    color: #667eea;
    font-weight: 600;
    font-size: 1rem;
}

.features-list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 15px;
}

.features-list li {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.features-list li:hover {
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateX(10px);
}

.features-list li svg {
    color: #667eea;
    flex-shrink: 0;
}

.features-list li span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
}

.challenges-content {
    background: rgba(255, 255, 255, 0.05);
    padding: 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.challenges-content p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    font-size: 1.1rem;
}

.loading-state {
    max-width: 1200px;
    margin: 100px auto;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 968px) {
    .detail-hero {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .project-title {
        font-size: 2.5rem;
    }

    .tech-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
}
</style>
