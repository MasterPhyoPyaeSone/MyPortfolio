<template>
  <div class="portfolio">
    <Navigation />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomeView',
  components: {
    Navigation,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style scoped>
.portfolio {
  scroll-behavior: smooth;
}
</style>
