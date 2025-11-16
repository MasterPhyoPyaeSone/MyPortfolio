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
              <span 
                v-for="(tech, index) in technologies" 
                :key="tech" 
                class="tech-item"
                :style="{ animationDelay: (index * 0.05) + 0.2 + 's' }"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
        <div class="about-image">
          <div class="image-wrapper">
            <div class="image-glow"></div>
            <div class="image-placeholder">
              <img :src="profileImage" :alt="name" class="profile-photo">
              <div class="image-overlay"></div>
            </div>
            <div class="image-border"></div>
            <div class="floating-shapes">
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
              <div class="shape shape-3"></div>
            </div>
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
      name: 'Your Name',
      profileImage: require('@/assets/myphoto.jpg'),
      intro: "Hello! I'm a passionate web developer who loves creating digital experiences.",
      description: "I specialize in building responsive, performant web applications using modern technologies. With a keen eye for design and a passion for clean code, I transform ideas into beautiful, functional websites that users love.",
      technologies: [
        'Php','Laravel','Vue.js', 'React', 'JavaScript',
        'HTML', 'CSS','Tailwind CSS', 'Git', 'MySQL','Firebase','Photoshop','Illustrator','Video Editing'
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
  animation: slideInLeft 0.5s ease-out;
}

.about-intro {
  font-size: 1.3rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 20px;
  animation: slideInLeft 0.5s ease-out 0.05s both;
  position: relative;
}

.about-intro::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  animation: expandLine 0.5s ease-out 0.2s forwards;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
  animation: slideInLeft 0.5s ease-out 0.1s both;
}

.tech-stack h3 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 15px;
  animation: slideInLeft 0.5s ease-out 0.15s both;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  color: #667eea;
  border: 2px solid rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  animation: fadeInScale 0.4s ease-out both;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.tech-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.4s, height 0.4s;
}

.tech-item:hover::before {
  width: 200px;
  height: 200px;
}

.tech-item:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  border-color: transparent;
}

.about-image {
  animation: slideInRight 0.6s ease-out 0.1s both;
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}

.image-glow {
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
  filter: blur(20px);
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  animation: floatImage 6s ease-in-out infinite;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
}

@keyframes floatImage {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.4s ease;
  position: relative;
  z-index: 1;
}

.image-wrapper:hover .profile-photo {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border-radius: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(1px);
}

.shape-1 {
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #667eea, transparent);
  top: 10%;
  left: 10%;
  animation: floatShape1 8s ease-in-out infinite;
}

.shape-2 {
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, #764ba2, transparent);
  bottom: 15%;
  right: 15%;
  animation: floatShape2 10s ease-in-out infinite;
}

.shape-3 {
  width: 55px;
  height: 55px;
  background: radial-gradient(circle, #f093fb, transparent);
  top: 50%;
  right: 10%;
  animation: floatShape3 12s ease-in-out infinite;
}

@keyframes floatShape1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(15px, -15px) scale(1.1);
    opacity: 0.3;
  }
}

@keyframes floatShape2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(-20px, -15px) scale(1.1);
    opacity: 0.3;
  }
}

@keyframes floatShape3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(-15px, 20px) scale(1.1);
    opacity: 0.3;
  }
}

.image-border {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(102, 126, 234, 0.5);
  border-radius: 15px;
  z-index: 0;
  transition: all 0.3s ease;
  animation: borderPulse 2s ease-in-out infinite;
}

@keyframes borderPulse {
  0%, 100% {
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.3);
  }
  50% {
    border-color: rgba(102, 126, 234, 0.7);
    box-shadow: 0 0 15px 5px rgba(102, 126, 234, 0.2);
  }
}

.image-wrapper:hover .image-border {
  top: 15px;
  left: 15px;
  border-color: rgba(102, 126, 234, 0.9);
  box-shadow: 0 0 25px 8px rgba(102, 126, 234, 0.4);
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

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes expandLine {
  from {
    width: 0;
  }
  to {
    width: 100px;
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

