<template>
  <div class="graphic-design-page">
    <Navigation />
    <section class="graphic-hero">
      <div class="hero-content">
        <h1 class="page-title">
          <span class="title-number">05.</span>
          Graphic Design
        </h1>
        <p class="page-subtitle">Showcasing my creative visual work and design projects</p>
      </div>
    </section>

    <section class="design-gallery">
      <div class="container">
        <div class="filter-tabs">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="activeCategory = category"
            :class="['filter-btn', { active: activeCategory === category }]"
          >
            {{ category }}
          </button>
        </div>

        <div class="gallery-grid">
          <div 
            v-for="(design, index) in filteredDesigns" 
            :key="design.id"
            class="design-card"
            @click="openModal(design, index)"
          >
            <div class="design-image-wrapper">
              <div class="design-image" :style="{ background: design.gradient }">
                <div class="image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>
              <div class="design-overlay">
                <div class="overlay-content">
                  <h3 class="design-title">{{ design.title }}</h3>
                  <p class="design-category">{{ design.category }}</p>
                  <div class="view-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="design-info">
              <h4 class="design-name">{{ design.title }}</h4>
              <p class="design-type">{{ design.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for viewing design details -->
    <div v-if="selectedDesign" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-image">
          <div class="modal-image-placeholder" :style="{ background: selectedDesign.gradient }">
            <div class="placeholder-content">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div class="modal-info">
          <h2 class="modal-title">{{ selectedDesign.title }}</h2>
          <p class="modal-category">{{ selectedDesign.category }}</p>
          <p class="modal-description">{{ selectedDesign.description }}</p>
          <div class="modal-tags">
            <span v-for="tag in selectedDesign.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="modal-actions">
            <a :href="selectedDesign.link" target="_blank" class="action-btn" v-if="selectedDesign.link">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'GraphicDesign',
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      activeCategory: 'All',
      categories: ['All', 'Branding', 'Web Design', 'Print', 'Illustration', 'UI/UX'],
      selectedDesign: null,
      designs: [
        {
          id: 1,
          title: 'Brand Identity Design',
          category: 'Branding',
          type: 'Logo & Branding',
          description: 'A complete brand identity system including logo design, color palette, typography, and brand guidelines. Created for a modern tech startup.',
          tags: ['Logo Design', 'Brand Identity', 'Typography'],
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          link: '#'
        },
        {
          id: 2,
          title: 'E-Commerce Website Design',
          category: 'Web Design',
          type: 'Website Design',
          description: 'Modern and user-friendly e-commerce website design with focus on conversion optimization and user experience.',
          tags: ['Web Design', 'UI/UX', 'E-Commerce'],
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          link: '#'
        },
        {
          id: 3,
          title: 'Product Packaging',
          category: 'Print',
          type: 'Packaging Design',
          description: 'Eco-friendly product packaging design that stands out on shelves while maintaining sustainability values.',
          tags: ['Packaging', 'Print Design', 'Sustainability'],
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          link: '#'
        },
        {
          id: 4,
          title: 'Digital Illustration',
          category: 'Illustration',
          type: 'Digital Art',
          description: 'Custom digital illustrations created for marketing campaigns and social media content.',
          tags: ['Illustration', 'Digital Art', 'Marketing'],
          gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          link: '#'
        },
        {
          id: 5,
          title: 'Mobile App Interface',
          category: 'UI/UX',
          type: 'App Design',
          description: 'Intuitive mobile app interface design with focus on user experience and modern aesthetics.',
          tags: ['Mobile App', 'UI Design', 'UX'],
          gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          link: '#'
        },
        {
          id: 6,
          title: 'Marketing Campaign',
          category: 'Branding',
          type: 'Campaign Design',
          description: 'Complete marketing campaign design including social media graphics, banners, and promotional materials.',
          tags: ['Marketing', 'Social Media', 'Campaign'],
          gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
          link: '#'
        },
        {
          id: 7,
          title: 'Editorial Design',
          category: 'Print',
          type: 'Magazine Layout',
          description: 'Creative magazine layout design with attention to typography, imagery, and visual hierarchy.',
          tags: ['Editorial', 'Typography', 'Layout'],
          gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          link: '#'
        },
        {
          id: 8,
          title: 'Icon Set Design',
          category: 'UI/UX',
          type: 'Icon Design',
          description: 'Custom icon set designed for mobile and web applications with consistent style and visual language.',
          tags: ['Icons', 'UI Design', 'Vector'],
          gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
          link: '#'
        },
        {
          id: 9,
          title: 'Infographic Design',
          category: 'Illustration',
          type: 'Data Visualization',
          description: 'Complex data visualization through engaging infographic design that makes information easy to understand.',
          tags: ['Infographic', 'Data Viz', 'Illustration'],
          gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
          link: '#'
        }
      ]
    }
  },
  computed: {
    filteredDesigns() {
      if (this.activeCategory === 'All') {
        return this.designs
      }
      return this.designs.filter(design => design.category === this.activeCategory)
    }
  },
  methods: {
    openModal(design, index) {
      this.selectedDesign = design
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedDesign = null
      document.body.style.overflow = 'auto'
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.graphic-design-page {
  min-height: 100vh;
}

.graphic-hero {
  padding: 120px 20px 60px;
  background: linear-gradient(-45deg, #1a1a1a, #2a2a2a, #1f1f1f, #3a3a3a);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.graphic-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
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

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 4rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  animation: fadeInUp 0.8s ease-out;
}

.title-number {
  color: #667eea;
  font-family: 'Courier New', monospace;
  font-size: 2rem;
}

.page-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  animation: fadeInUp 1s ease-out;
}

.design-gallery {
  padding: 80px 20px;
  background: linear-gradient(-45deg, #1f1f1f, #2a2a2a, #1a1a1a, #3a3a3a);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  position: relative;
  min-height: 100vh;
}

.design-gallery::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(102, 126, 234, 0.5);
  color: #ffffff;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.design-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  animation: fadeInUp 0.6s ease-out;
}

.design-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.5);
}

.design-image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 70%;
  overflow: hidden;
}

.design-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.design-card:hover .design-image {
  transform: scale(1.1);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
}

.design-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.design-card:hover .design-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.design-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.design-category {
  color: #667eea;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.view-icon {
  width: 50px;
  height: 50px;
  background: rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.design-card:hover .view-icon {
  background: #667eea;
  transform: scale(1.1);
}

.design-info {
  padding: 20px;
}

.design-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 5px;
}

.design-type {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  animation: slideUp 0.4s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: #667eea;
  transform: rotate(90deg);
}

.modal-image {
  width: 100%;
  padding-bottom: 60%;
  position: relative;
  overflow: hidden;
}

.modal-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  color: rgba(255, 255, 255, 0.3);
}

.modal-info {
  padding: 40px;
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
}

.modal-category {
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.modal-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.tag {
  padding: 8px 16px;
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.modal-actions {
  display: flex;
  gap: 15px;
}

.action-btn {
  padding: 14px 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
    flex-direction: column;
    gap: 10px;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-tabs {
    gap: 10px;
  }
  
  .filter-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .modal-info {
    padding: 30px 20px;
  }
  
  .modal-title {
    font-size: 2rem;
  }
}
</style>

