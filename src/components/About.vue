<template>
  <section class="about" id="about">
    <div class="container">
      <h2 class="section-title">
        <span class="title-number">01.</span>
        About Me
      </h2>
      <div class="about-content">
        <div class="about-text">
          <p class="about-intro">{{ intro }}</p>
          <p class="about-description">{{ description }}</p>
          <div class="tech-stack">
            <h3>Technologies I work with:</h3>
            <div class="tech-list">
              <span v-for="tech in technologies" :key="tech" class="tech-item">{{ tech }}</span>
            </div>
          </div>
        </div>
        <div class="about-image">
          <div class="image-wrapper">
            <div class="image-placeholder">
              <div class="placeholder-content">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="2"/>
                  <path d="M35 50 L45 60 L65 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div class="image-border"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      intro: "Hello! I'm a passionate web developer who loves creating digital experiences.",
      description: "I specialize in building responsive, performant web applications using modern technologies. With a keen eye for design and a passion for clean code, I transform ideas into beautiful, functional websites that users love.",
      technologies: [
        'Vue.js', 'React', 'JavaScript', 'TypeScript', 
        'HTML5', 'CSS3', 'Node.js', 'Git', 'Figma', 'SASS'
      ]
    }
  }
}
</script>

<style scoped>
.about {
  padding: 100px 20px;
  background: linear-gradient(-45deg, #1a1a1a, #2a2a2a, #1f1f1f, #3a3a3a);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
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

.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text {
  animation: fadeInUp 0.8s ease-out;
}

.about-intro {
  font-size: 1.3rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 20px;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
}

.tech-stack h3 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 15px;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #667eea;
  border: 2px solid rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;
  backdrop-filter: blur(10px);
}

.tech-item:hover {
  background: #667eea;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.5);
  border-color: #667eea;
}

.about-image {
  animation: fadeInRight 0.8s ease-out;
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.placeholder-content {
  color: white;
  opacity: 0.8;
}

.image-border {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(102, 126, 234, 0.5);
  border-radius: 10px;
  z-index: -1;
  transition: all 0.3s ease;
}

.image-wrapper:hover .image-border {
  top: 15px;
  left: 15px;
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

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>

