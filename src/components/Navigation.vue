<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/">Portfolio</router-link>
      </div>
      <ul class="nav-menu" :class="{ 'active': menuOpen }">
        <li><a href="#home" @click="(e) => handleAnchorClick(e, '#home')" style="border: none;">Home</a></li>
        <li><a href="#about" @click="(e) => handleAnchorClick(e, '#about')">About</a></li>
        <li><a href="#skills" @click="(e) => handleAnchorClick(e, '#skills')">Skills</a></li>
        <li><a href="#projects" @click="(e) => handleAnchorClick(e, '#projects')">Projects</a></li>
        <li><router-link to="/graphic-design" @click="closeMenu">Graphic Design</router-link></li>
        <li><a href="#contact" @click="(e) => handleAnchorClick(e, '#contact')">Contact</a></li>
      </ul>
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isScrolled: false,
      menuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    handleAnchorClick(e, href) {
      e.preventDefault()
      this.closeMenu()
      
      // If we're not on the home page, navigate there first
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          // Wait for the page to fully render, then scroll to the section
          this.$nextTick(() => {
            setTimeout(() => {
              this.scrollToSection(href)
            }, 300)
          })
        })
      } else {
        // Already on home page, just scroll
        this.scrollToSection(href)
      }
    },
    scrollToSection(href) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo a {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-menu li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-menu li a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav-menu li a:hover {
  color: #667eea;
}

.nav-menu li a:hover::after {
  width: 100%;
}

.nav-menu li a.router-link-active {
  color: #667eea;
}

.nav-menu li a.router-link-active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    gap: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-menu.active {
    transform: translateX(0);
  }
  
  .nav-menu li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-menu li:last-child {
    border-bottom: none;
  }
}
</style>

