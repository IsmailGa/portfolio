<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import WorkExperienceSection from './components/WorkExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import AboutSection from './components/AboutSection.vue'
import EducationLanguages from './components/EducationLanguages.vue'
import ContactSection from './components/ContactSection.vue'
import ToastNotification from './components/ToastNotification.vue'

const toastShow = ref(false)
const toastMessage = ref('')
let toastTimer: number | null = null

let lenis: Lenis | null = null
let rafId: number | null = null

const triggerToast = (msg: string) => {
  toastMessage.value = msg
  toastShow.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => {
    toastShow.value = false
  }, 3000)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  try {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    })

    const raf = (time: number) => {
      lenis?.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
  } catch {
    // Graceful fallback to native scroll
  }
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  lenis?.destroy()
})
</script>

<template>
  <div class="relative min-h-screen bg-bg text-fg overflow-x-hidden">
    <!-- Ambient background (theme-aware, static, cheap) -->
    <div class="pointer-events-none fixed inset-0 z-0 bg-ambient" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[48rem] bg-dots" aria-hidden="true" />

    <Navbar />

    <main class="relative z-10">
      <HeroSection />
      <MarqueeStrip />
      <WorkExperienceSection />
      <SkillsSection />
      <AboutSection />
      <EducationLanguages />
      <ContactSection @toast="triggerToast" />
    </main>

    <ToastNotification :show="toastShow" :message="toastMessage" />
  </div>
</template>
