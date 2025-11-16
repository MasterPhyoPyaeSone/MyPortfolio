<template>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  line-height: 1.6;
  overflow-x: hidden;
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

#app {
  min-height: 100vh;
}

/* Smooth scroll animations */
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

/* Scroll animations */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(26, 26, 26, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 6px;
  border: 2px solid rgba(26, 26, 26, 0.5);
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.5);
}

/* Firefox scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(26, 26, 26, 0.5);
}

/* Selection color */
::selection {
  background: rgba(102, 126, 234, 0.5);
  color: #ffffff;
}

::-moz-selection {
  background: rgba(102, 126, 234, 0.5);
  color: #ffffff;
}

/* Focus styles */
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}
</style>
