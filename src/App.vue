<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { initSmoothScroll } from './utils/smoothScroll'
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

const triggerToast = (msg: string) => {
  toastMessage.value = msg
  toastShow.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => {
    toastShow.value = false
  }, 3000)
}

let stopSmooth: (() => void) | null = null
onMounted(() => { stopSmooth = initSmoothScroll() })
onBeforeUnmount(() => stopSmooth?.())
</script>

<template>
  <div class="relative min-h-screen bg-bg text-fg overflow-x-hidden">
    <!-- Ambient background (theme-aware, static, cheap) -->
    <div class="pointer-events-none fixed inset-0 z-0 bg-ambient" data-parallax="-0.04" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[48rem] bg-dots" data-parallax="0.35" aria-hidden="true" />

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
