<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

import MikuBackground from './components/MikuBackground.vue'
import CursorGlow from './components/CursorGlow.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import EqualizerDivider from './components/EqualizerDivider.vue'
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
  }, 3500)
}

onMounted(() => {
  try {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    })

    function raf(time: number) {
      lenis?.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)
  } catch {
    // Graceful fallback
  }
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  lenis?.destroy()
})
</script>

<template>
  <div class="relative min-h-screen bg-[#05080D] text-[#EAF7F6] selection:bg-[#39C5BB]/30 selection:text-[#6FF7EC] overflow-x-hidden">
    
    <!-- Background Canvas & Studio Lighting -->
    <MikuBackground />

    <!-- Dynamic Cursor Spotlight Glow -->
    <CursorGlow />

    <!-- Floating Top Navigation -->
    <Navbar />

    <!-- Main Content Flow -->
    <main class="relative z-10">
      
      <!-- Hero Section with Sculptural Type & Interactive IDE Code Terminal -->
      <HeroSection @toast="triggerToast" />

      <!-- Infinite Marquee Ticker -->
      <MarqueeStrip />

      <!-- Consolidated Interactive Work Experience & Flagship Systems -->
      <WorkExperienceSection />

      <EqualizerDivider />

      <!-- 3-Column Structured Skills & Tech Stack -->
      <SkillsSection />

      <EqualizerDivider />

      <!-- Engineering Philosophy -->
      <AboutSection />

      <EqualizerDivider />

      <!-- Academic Background & Languages -->
      <EducationLanguages />

      <!-- Contact & Direct Inquiries -->
      <ContactSection @toast="triggerToast" />

    </main>

    <!-- Toast Notification -->
    <ToastNotification
      :show="toastShow"
      :message="toastMessage"
    />

  </div>
</template>
