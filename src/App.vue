<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

import CursorGlow from './components/CursorGlow.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import EqualizerDivider from './components/EqualizerDivider.vue'
import AboutSection from './components/AboutSection.vue'
import FintechShowcase from './components/FintechShowcase.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationLanguages from './components/EducationLanguages.vue'
import ContactSection from './components/ContactSection.vue'
import ResumeModal from './components/ResumeModal.vue'
import ToastNotification from './components/ToastNotification.vue'

const isResumeModalOpen = ref(false)
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
  <div class="relative min-h-screen bg-[#05080D] text-[#EAF7F6] selection:bg-[#39C5BB]/30 selection:text-[#6FF7EC]">
    
    <!-- Dynamic Cursor Spotlight Glow -->
    <CursorGlow />

    <!-- Top Pill Navbar -->
    <Navbar @open-resume="isResumeModalOpen = true" />

    <!-- Main Content Flow -->
    <main class="relative z-10">
      
      <!-- 00 // Hero Section with Miku Cyber Card -->
      <HeroSection 
        @open-resume="isResumeModalOpen = true"
        @toast="triggerToast"
      />

      <!-- Infinite Marquee Ticker -->
      <MarqueeStrip />

      <!-- 01 // Summary & Values -->
      <AboutSection />

      <!-- Equalizer Visualizer Divider -->
      <EqualizerDivider label="02 // FINTECH_SYS_FREQ" />

      <!-- 02 // Flagship Fintech & DBO Showcase -->
      <FintechShowcase />

      <!-- Equalizer Visualizer Divider -->
      <EqualizerDivider label="03 // EXPERIENCE_FREQ" />

      <!-- 03 // Experience Timeline -->
      <ExperienceTimeline />

      <!-- Equalizer Visualizer Divider -->
      <EqualizerDivider label="04 // TECH_STACK_FREQ" />

      <!-- 04 // Skills Arsenal -->
      <SkillsSection />

      <!-- Equalizer Visualizer Divider -->
      <EqualizerDivider label="05 // ACADEMICS_FREQ" />

      <!-- 05 // Education & Languages -->
      <EducationLanguages />

      <!-- 06 // Contact & Footer -->
      <ContactSection @toast="triggerToast" />

    </main>

    <!-- Interactive Resume Modal -->
    <ResumeModal
      :is-open="isResumeModalOpen"
      @close="isResumeModalOpen = false"
      @toast="triggerToast"
    />

    <!-- Toast Notification Alerts -->
    <ToastNotification
      :show="toastShow"
      :message="toastMessage"
    />

  </div>
</template>
