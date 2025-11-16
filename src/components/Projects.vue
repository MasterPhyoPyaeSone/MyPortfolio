<template>
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="section-title">
        <span class="title-number">03.</span>
        Featured Projects
      </h2>
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="project-card"
          :class="{ 'reverse': index % 2 === 1 }"
          @click="goToProjectDetail(project.id)"
        >
          <div class="project-image">
            <div class="image-placeholder" :style="{ background: project.gradient }">
              <img :src="project.image" alt="" class="project-image-placeholder">
              <div class="project-overlay" @click.stop>
                <router-link :to="`/project/${project.id}`" class="project-link" @click.stop>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </router-link>
                <a :href="project.github" target="_blank" class="project-link" @click.stop>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <p class="project-category">{{ project.category }}</p>
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-description">
              <p>{{ project.description }}</p>
            </div>
            <div class="project-tech">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  methods: {
    goToProjectDetail(projectId) {
      this.$router.push(`/project/${projectId}`)
    }
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'GatePass QRSystem - QR Scanner for Security',
          image: require('@/assets/scan.jpeg'),
          category: 'Featured Project',
          description: 'A real-time QR scanner built to quickly validate QR codes presented by employees or visitors at gate entry points. It uses a camera to scan the QR codes and immediately determines whether the pass is valid.',
          technologies: ['HTML', 'CSS', 'JavaScript','Tailwind CSS','PHP', 'Laravel', 'MySQL'],
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          live: '#',
          github: 'https://github.com/MasterPhyoPyaeSone/Gate_Scanner'
        },
        {
          id: 2,
          title: 'GatePass QRSystem Dashboard',
          category: 'Featured Project',
          image: require('@/assets/scanner.png'),
          description: 'A dashboard for managing gate passes and QR codes. It allows you to generate QR codes, view pass history, and manage pass settings.',
          technologies: ['HTML', 'CSS', 'JavaScript','Tailwind CSS','PHP', 'Laravel', 'MySQL'],
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          live: '#',
          github: 'https://github.com/MasterPhyoPyaeSone/Gate_QR_SYS-'
        },
        {
          id: 3,
          title: 'Traveler Packages Management System',
          category: 'Featured Project',
          image: require('@/assets/travel.png'),
          description: 'A system for managing traveler packages and bookings. It allows you to create, edit, and delete packages, and view bookings and payments.',

          technologies: ['HTML', 'CSS', 'JavaScript','Tailwind CSS','PHP', 'Laravel', 'MySQL'],
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          live: '#',
          github: 'https://github.com/MasterPhyoPyaeSone/travel_system'
        },
        {
          id: 4,
          title: 'Portfolio Website',
          category: 'Featured Project',
          image: require('@/assets/scan.jpeg'),

          description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
          technologies: ['Vue.js', 'CSS3', 'GSAP'],
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          live: '#',
          github: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 100px 20px;
  background: linear-gradient(-45deg, #1a1a1a, #2a2a2a, #1f1f1f, #3a3a3a);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  position: relative;
  overflow: hidden;
}

.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
  pointer-events: none;
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

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  z-index: 1;
}

.title-number {
  color: #667eea;
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  animation: fadeInUp 0.8s ease-out;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card.reverse {
  direction: rtl;
}

.project-card.reverse > * {
  direction: ltr;
}

.project-image {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.project-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.image-placeholder {
  width: 100%;
  padding-bottom: 60%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
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

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image:hover .project-overlay {
  opacity: 1;
}

.project-link {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  position: relative;
  cursor: pointer;
}

.project-link:hover {
  transform: scale(1.1);
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.project-content {
  z-index: 1;
}

.project-category {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.project-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
}

.project-description {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-description p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  padding: 5px 15px;
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
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
  .project-card {
    grid-template-columns: 1fr;
  }
  
  .project-card.reverse {
    direction: ltr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>

