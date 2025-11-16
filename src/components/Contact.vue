<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">
        <span class="title-number">04.</span>
        Get In Touch
      </h2>
      <div class="contact-content">
        <div class="contact-info">
          <p class="contact-intro">{{ intro }}</p>
          <div class="contact-methods">
            <a 
              v-for="method in contactMethods" 
              :key="method.name"
              :href="method.link" 
              target="_blank"
              class="contact-method"
            >
              <div class="method-icon" :style="{ background: method.color }">
                <!-- <span class="icon-emoji">{{ method.icon }}</span> -->
                <img :src="method.image" alt="" class="project-image-placeholder">
              </div>
              <div class="method-details">
                <h4>{{ method.name }}</h4>
                <p>{{ method.value }}</p>
              </div>
            </a>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              required
              placeholder="What's this about?"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">
            <span>Send Message</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      intro: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!",
      contactMethods: [
        {
          name: 'Email',
          value: 'phyo097800@gamil.com',
          image:require('@/assets/email.png'),
          color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          name: 'Viber',
          value: '09950336142',
          image: require('@/assets/viber.png'),
          color: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)'
        },
        {
          name: 'Telegram',
          value: '09950336142',
          image: require('@/assets/telegram.png'),
          color: 'linear-gradient(135deg, #1da1f2 0%, #0d95e8 100%)'
        },
        {
          name: 'GitHub',
          value: 'github.com/MasterPhyoPyaeSone',
          link: 'https://github.com/MasterPhyoPyaeSone',
          image: require('@/assets/git.png'),
          color: 'linear-gradient(135deg, #333 0%, #24292e 100%)'
        },
        
      ],
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      alert('Thank you for your message! I\'ll get back to you soon.');
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 100px 20px;
  background: linear-gradient(-45deg, #1f1f1f, #2a2a2a, #1a1a1a, #3a3a3a);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(118, 75, 162, 0.05) 0%, transparent 70%);
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
  text-align: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.title-number {
  color: #667eea;
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: start;
}

.contact-intro {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 40px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.project-image-placeholder {
    position: relative;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
}
.contact-method {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.contact-method:hover {
  transform: translateX(10px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.method-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.icon-emoji {
  font-size: 1.5rem;
}

.method-details h4 {
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 5px;
  font-weight: 600;
}

.method-details p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 14px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.submit-btn:active {
  transform: translateY(-1px);
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
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-form {
    padding: 30px 20px;
  }
}
</style>

