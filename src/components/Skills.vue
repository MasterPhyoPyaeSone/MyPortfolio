<template>
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="section-title">
        <span class="title-number">02.</span>
        Skills & Expertise
      </h2>
      <div class="skills-grid">
        <div 
          v-for="skill in skills" 
          :key="skill.name" 
          class="skill-card"
          @mouseenter="hoveredSkill = skill.name"
          @mouseleave="hoveredSkill = null"
        >
          <div class="skill-icon">
            <div class="icon-wrapper" :style="{ background: skill.color }">
              <span class="icon-emoji">{{ skill.icon }}</span>
            </div>
          </div>
          <h3 class="skill-name">{{ skill.name }}</h3>
          <div class="skill-level">
            <div class="level-bar">
              <div 
                class="level-fill" 
                :style="{ width: skill.level + '%', background: skill.color }"
              ></div>
            </div>
            <span class="level-percentage">{{ skill.level }}%</span>
          </div>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      hoveredSkill: null,
      skills: [
        {
          name: 'Frontend Development',
          icon: '⚡',
          level: 90,
          color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          description: 'Building responsive and interactive user interfaces'
        },
        {
          name: 'Vue.js / React',
          icon: '🎨',
          level: 85,
          color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          description: 'Modern JavaScript frameworks for dynamic applications'
        },
        {
          name: 'UI/UX Design',
          icon: '✨',
          level: 80,
          color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          description: 'Creating beautiful and intuitive user experiences'
        },
        {
          name: 'Backend Development',
          icon: '🚀',
          level: 75,
          color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          description: 'Server-side logic and API development'
        },
        {
          name: 'Database Management',
          icon: '💾',
          level: 70,
          color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          description: 'Designing and managing efficient databases'
        },
        {
          name: 'DevOps & Deployment',
          icon: '🔧',
          level: 65,
          color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
          description: 'CI/CD pipelines and cloud deployment'
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 100px 20px;
  background: linear-gradient(-45deg, #1f1f1f, #2a2a2a, #1a1a1a, #3a3a3a);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  position: relative;
  overflow: hidden;
}

.skills::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 70%);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s ease-out;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

.skill-icon {
  margin-bottom: 20px;
}

.icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.skill-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.icon-emoji {
  font-size: 2rem;
}

.skill-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.level-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.level-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease-out;
  position: relative;
  overflow: hidden;
}

.level-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.level-percentage {
  font-weight: 600;
  color: #667eea;
  font-size: 0.9rem;
  min-width: 45px;
}

.skill-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  line-height: 1.6;
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

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
