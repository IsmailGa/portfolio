<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { soundManager } from '../utils/sound'
import { Volume2, VolumeX, Menu, X, FileText, Send, Download } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'open-resume'): void
}>()

const isMuted = ref(false)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navLinks = [
  { name: '01. About', href: '#about' },
  { name: '02. Systems', href: '#fintech' },
  { name: '03. Experience', href: '#experience' },
  { name: '04. Stack', href: '#skills' },
  { name: '05. Education', href: '#education' },
  { name: '06. Contact', href: '#contact' }
]

const toggleSound = () => {
  isMuted.value = soundManager.toggleMute()
}

const handleLinkClick = (_href?: string) => {
  soundManager.playClick()
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30

  const sections = ['contact', 'education', 'skills', 'experience', 'fintech', 'about', 'hero']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 250 && rect.bottom >= 120) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-3 sm:px-4 pt-3 sm:pt-5 pointer-events-none transition-all duration-300 w-full"
  >
    <nav 
      class="pointer-events-auto w-full max-w-6xl flex items-center justify-between gap-2 sm:gap-4 px-3 py-2 sm:px-5 sm:py-2.5 rounded-2xl sm:rounded-full border transition-all duration-300 shadow-2xl backdrop-blur-xl"
      :class="[
        isScrolled 
          ? 'bg-[#05080D]/95 border-[#39C5BB]/40 shadow-[0_0_30px_rgba(57,197,187,0.18)]' 
          : 'bg-[#0A1118]/90 border-[#162432] shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
      ]"
    >
      <!-- Brand Logo / Decal (No name repetition) -->
      <a 
        href="#hero" 
        class="flex items-center gap-2 group shrink-0"
        @click="handleLinkClick('#hero')"
        @mouseenter="soundManager.playHover()"
      >
        <div class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0E1722] border border-[#162432] group-hover:border-[#39C5BB] transition-colors relative overflow-hidden shrink-0">
          <span class="font-mono text-[11px] sm:text-xs font-bold text-[#39C5BB] group-hover:text-[#6FF7EC]">01</span>
          <div class="absolute bottom-0 inset-x-0 h-[2px] bg-[#39C5BB]/70" />
        </div>
        <div class="flex flex-col text-left">
          <span class="font-display font-bold text-xs sm:text-sm tracking-wider text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors leading-tight">
            MIKU_PULSE
          </span>
          <span class="font-mono text-[8px] sm:text-[9px] text-[#7C9399] tracking-widest leading-none hidden xs:inline-block">
            SYS // FRONTEND_DEV
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex items-center gap-0.5 lg:gap-1">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="relative px-2.5 lg:px-3 py-1 text-[11px] lg:text-xs font-mono tracking-wider transition-all duration-200 rounded-lg whitespace-nowrap"
          :class="[
            activeSection === link.href.replace('#', '')
              ? 'text-[#6FF7EC] bg-[#39C5BB]/10 font-semibold border border-[#39C5BB]/30'
              : 'text-[#7C9399] hover:text-[#EAF7F6] hover:bg-[#0E1722]'
          ]"
          @click="handleLinkClick(link.href)"
          @mouseenter="soundManager.playHover()"
        >
          <span>{{ link.name }}</span>
        </a>
      </div>

      <!-- Action items: Sound FX + CV PDF Download + Telegram + Mobile Toggle -->
      <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <!-- Sound FX Button -->
        <button
          type="button"
          class="p-1.5 sm:p-2 rounded-lg bg-[#0E1722] border border-[#162432] hover:border-[#39C5BB]/60 text-[#7C9399] hover:text-[#6FF7EC] transition-colors cursor-pointer"
          :title="isMuted ? 'Unmute synthesized audio UI' : 'Mute audio UI'"
          @click="toggleSound"
          @mouseenter="soundManager.playHover()"
        >
          <Volume2 v-if="!isMuted" class="w-3.5 h-3.5 text-[#39C5BB]" />
          <VolumeX v-else class="w-3.5 h-3.5" />
        </button>

        <!-- Direct PDF Download Link / Modal Trigger -->
        <a
          href="/Ismail_Gayratov_Resume.pdf"
          download="Ismail_Gayratov_Resume.pdf"
          class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[#EAF7F6] bg-[#0E1722] border border-[#162432] hover:border-[#39C5BB] hover:bg-[#39C5BB]/10 hover:text-[#6FF7EC] transition-all cursor-pointer"
          @click="soundManager.playClick()"
          @mouseenter="soundManager.playHover()"
        >
          <Download class="w-3.5 h-3.5 text-[#39C5BB]" />
          <span>RESUME.PDF</span>
        </a>

        <!-- Direct Telegram CTA -->
        <a
          href="https://t.me/theiiisssaaa"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold text-[#05080D] bg-[#39C5BB] hover:bg-[#6FF7EC] transition-all cursor-pointer shadow-[0_0_15px_rgba(57,197,187,0.35)]"
          @click="soundManager.playClick()"
          @mouseenter="soundManager.playHover()"
        >
          <Send class="w-3 h-3" />
          <span>TELEGRAM</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          type="button"
          class="md:hidden p-1.5 sm:p-2 rounded-lg bg-[#0E1722] border border-[#162432] text-[#EAF7F6] hover:text-[#39C5BB] transition-colors"
          aria-label="Toggle navigation menu"
          @click="mobileMenuOpen = !mobileMenuOpen; soundManager.playClick()"
        >
          <Menu v-if="!mobileMenuOpen" class="w-4 h-4" />
          <X v-else class="w-4 h-4" />
        </button>
      </div>
    </nav>

    <!-- Mobile Dropdown Navigation -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div
        v-if="mobileMenuOpen"
        class="pointer-events-auto absolute top-16 sm:top-20 left-3 right-3 bg-[#0A1118]/98 backdrop-blur-2xl border border-[#162432] rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.9)] md:hidden flex flex-col gap-1.5 z-50"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="px-4 py-3 rounded-xl font-mono text-xs tracking-wider flex items-center justify-between text-[#EAF7F6] hover:bg-[#0E1722] hover:text-[#6FF7EC] active:bg-[#0E1722] transition-colors"
          @click="handleLinkClick(link.href)"
        >
          <span>{{ link.name }}</span>
          <span class="text-[#39C5BB]">→</span>
        </a>

        <div class="pt-3 mt-1 border-t border-[#162432] flex flex-col gap-2">
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono text-[#39C5BB] bg-[#0E1722] border border-[#162432] w-full justify-center active:bg-[#162432]"
            @click="soundManager.playClick()"
          >
            <Download class="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>
          <button
            type="button"
            class="flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono text-[#EAF7F6] bg-[#05080D] border border-[#162432] w-full justify-center active:bg-[#162432]"
            @click="emit('open-resume'); mobileMenuOpen = false; soundManager.playClick()"
          >
            <FileText class="w-4 h-4 text-[#39C5BB]" />
            <span>View Resume Dossier</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>
