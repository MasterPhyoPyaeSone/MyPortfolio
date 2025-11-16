import { onMounted, onUnmounted, ref } from 'vue'

export default function useScrollAnimation() {
  const elementRef = ref(null)
  const isVisible = ref(false)

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  }

  onMounted(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }

    return () => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value)
      }
    }
  })

  return { elementRef, isVisible }
}

