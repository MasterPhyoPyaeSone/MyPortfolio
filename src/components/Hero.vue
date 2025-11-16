<template>
  <section class="hero" id="home">
    <div class="hero-background">
      <div class="gradient-overlay"></div>
      <div class="animated-grid"></div>
      <div class="floating-particles">
        <div class="particle" v-for="n in 20" :key="n" :style="getParticleStyle(n)"></div>
      </div>
    </div>
    
    <div class="hero-content">
      <div class="hero-left">
        <div class="hero-text">
          <div class="greeting-wrapper">
            <span class="greeting">Hi, my name is</span>
            <div class="greeting-line"></div>
          </div>
          
          <h1 class="hero-title">
            <span class="name-line">
              <span class="name">{{ name }}.</span>
            </span>
            <span class="title-line">
              <span class="title">{{ title }}</span>
            </span>
          </h1>
          
          <p class="hero-description">{{ description }}</p>
          
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
            <a href="#contact" class="btn btn-secondary">
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="hero-right">
        <div class="profile-container">
          <div class="profile-image-wrapper">
            <div class="profile-border"></div>
            <div class="profile-image">
              <img 
                :src="profileImage" 
                :alt="name"
                @error="handleImageError"
              />
              <div class="profile-overlay"></div>
            </div>
            <div class="profile-glow"></div>
          </div>
          
          <div class="profile-badge">
            <div class="badge-icon">💻</div>
            <div class="badge-text">
              <span class="badge-label">Available for</span>
              <span class="badge-value">New Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <div class="scroll-text">Scroll Down</div>
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      name: 'Your Name',
      title: 'Web Developer',
      description: 'I create beautiful, functional, and user-friendly web experiences that bring ideas to life.',
      profileImage: require('@/assets/logo.png') // Replace with your profile image path
    }
  },
  methods: {
    getParticleStyle(index) {
      const size = Math.random() * 4 + 2
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 5
      const left = Math.random() * 100
      
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      }
    },
    handleImageError(event) {
      // Fallback if image doesn't load - you can set a default image or placeholder
      event.target.style.display = 'none'
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 80px 20px 40px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(-45deg, #1a1a1a, #2a2a2a, #1f1f1f, #3a3a3a);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
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

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  opacity: 0.6;
}

.animated-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  opacity: 0.5;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: floatParticle linear infinite;
  backdrop-filter: blur(1px);
}

@keyframes floatParticle {
  0% {
    transform: translateY(100vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(100px) rotate(360deg);
    opacity: 0;
  }
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
  z-index: 1;
  position: relative;
}

.hero-left {
  animation: slideInLeft 1s ease-out;
}

.hero-right {
  animation: slideInRight 1s ease-out;
}

.greeting-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  animation: fadeInUp 0.8s ease-out;
}

.greeting {
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 500;
  font-family: 'Courier New', monospace;
}

.greeting-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, #667eea, transparent);
  max-width: 200px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 25px;
  color: #ffffff;
}

.name-line {
  display: block;
  animation: slideInUp 1s ease-out 0.2s both;
}

.name {
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.title-line {
  display: block;
  animation: slideInUp 1s ease-out 0.4s both;
}

.title {
  color: rgba(255, 255, 255, 0.7);
  font-size: 3.5rem;
  display: inline-block;
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 550px;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.8s both;
}

.btn {
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn span,
.btn svg {
  position: relative;
  z-index: 1;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

.btn-primary svg {
  transition: transform 0.3s ease;
}

.btn-primary:hover svg {
  transform: translateX(5px);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
}

.profile-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.profile-image-wrapper {
  position: relative;
  width: 350px;
  height: 350px;
}

.profile-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #667eea);
  animation: rotateBorder 8s linear infinite;
  z-index: 1;
  padding: 3px;
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px));
}

@keyframes rotateBorder {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.profile-image {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: floatImage 6s ease-in-out infinite;
}

@keyframes floatImage {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.profile-image:hover img {
  transform: scale(1.1);
}

.profile-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-image:hover .profile-overlay {
  opacity: 1;
}

.profile-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  animation: pulseGlow 3s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.profile-badge {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 25px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 1s ease-out 1s both;
}

.badge-icon {
  font-size: 1.5rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.badge-text {
  display: flex;
  flex-direction: column;
}

.badge-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.badge-value {
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 10;
  animation: fadeIn 1s ease-out 1.2s both;
}

.scroll-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 10px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInUp {
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
  .hero-content {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    max-width: 100%;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .profile-image-wrapper {
    width: 280px;
    height: 280px;
  }
  
  .greeting-line {
    max-width: 100px;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .profile-image-wrapper {
    width: 250px;
    height: 250px;
  }
}
</style>
