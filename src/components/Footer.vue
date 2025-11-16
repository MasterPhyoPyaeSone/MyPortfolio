<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-text">
          <p>Designed & Built with ❤️ by Your Name</p>
        </div>
        <div class="footer-links">
          <a 
            v-for="link in socialLinks" 
            :key="link.name"
            :href="link.url" 
            target="_blank"
            :aria-label="link.name"
            class="social-link"
          >
            <span class="social-icon">{{ link.icon }}</span>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com', icon: '💻' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
        { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
        { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧' }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(-45deg, #1a1a1a, #2a2a2a, #1f1f1f, #3a3a3a);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: white;
  padding: 40px 20px 20px;
  position: relative;
  overflow: hidden;
}

.footer::before {
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

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(102, 126, 234, 0.3);
  transform: translateY(-3px);
}

.social-icon {
  font-size: 1.2rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>

