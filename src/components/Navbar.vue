<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { t, currentLang, setLanguage, type Language } from '../i18n'
import { soundManager } from '../utils/sound'
import { Volume2, VolumeX, Menu, X, FileDown, Send, ArrowUpRight } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'open-resume'): void
}>()

const isMuted = ref(false)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navLinks = computed(() => [
  { name: t.value.nav.systems, href: '#systems', id: 'systems' },
  { name: t.value.nav.experience, href: '#experience', id: 'experience' },
  { name: t.value.nav.capabilities, href: '#capabilities', id: 'capabilities' },
  { name: t.value.nav.about, href: '#about', id: 'about' },
  { name: t.value.nav.contact, href: '#contact', id: 'contact' }
])

const languages: { code: Language; label: string }[] = [
  { code: 'EN', label: 'EN' },
  { code: 'RU', label: 'RU' },
  { code: 'UZ', label: 'UZ' }
]

const switchLang = (code: Language) => {
  if (currentLang.value === code) return
  setLanguage(code)
  soundManager.playSynthNote(code === 'EN' ? 523.25 : code === 'RU' ? 659.25 : 783.99, 'sine', 0.18)
}

const toggleSound = () => {
  isMuted.value = soundManager.toggleMute()
}

const handleLinkClick = (href?: string) => {
  soundManager.playClick()
  mobileMenuOpen.value = false
  if (href) {
    activeSection.value = href.replace('#', '')
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  const sections = ['contact', 'about', 'capabilities', 'experience', 'systems', 'hero']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 300 && rect.bottom >= 100) {
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
    class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-[#05080D]/85 backdrop-blur-xl py-3 shadow-[0_8px_32px_rgba(0,0,0,0.7)]' 
        : 'bg-transparent py-4 sm:py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
      
      <!-- Zone 1: Brand Logo / Emblem -->
      <a 
        href="#hero" 
        class="flex items-center gap-2.5 group focus:outline-none shrink-0"
        @click="handleLinkClick('#hero')"
        @mouseenter="soundManager.playHover()"
      >
        <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0E1724] border border-[#162436] group-hover:border-[#39C5BB] flex items-center justify-center transition-colors relative overflow-hidden">
          <span class="font-display font-bold text-xs text-[#39C5BB] group-hover:text-[#6FF7EC]">01</span>
          <span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#39C5BB] animate-pulse" />
        </div>
        <div class="flex items-center gap-2">
          <span class="font-display font-bold text-sm sm:text-base tracking-wider text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors">
            MIKU PULSE
          </span>
          <span class="font-mono text-[10px] text-[#39C5BB] px-1.5 py-0.5 rounded bg-[#0E1724] border border-[#162436] hidden xs:inline-block">
            SYS:01
          </span>
        </div>
      </a>

      <!-- Zone 2: Desktop Navigation Center Links (Spacious & Clean) -->
      <nav class="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0A1118]/80 border border-[#162436] backdrop-blur-md shadow-inner">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="link.href"
          class="px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 focus:outline-none"
          :class="[
            activeSection === link.id
              ? 'bg-[#39C5BB] text-[#05080D] font-bold shadow-[0_0_16px_rgba(57,197,187,0.4)]'
              : 'text-[#7C9399] hover:text-[#EAF7F6] hover:bg-[#0E1724]'
          ]"
          @click="handleLinkClick(link.href)"
          @mouseenter="soundManager.playHover()"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Zone 3: Actions (Language Switcher + Sound Toggle + Resume CTA + Mobile Hamburger) -->
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        
        <!-- Language Switcher -->
        <div class="inline-flex items-center p-1 rounded-xl bg-[#0E1724] border border-[#162436] select-none">
          <button
            v-for="lang in languages"
            :key="lang.code"
            type="button"
            class="px-2 py-1 rounded-lg font-mono text-xs font-semibold transition-all duration-150 cursor-pointer focus:outline-none"
            :class="[
              currentLang === lang.code
                ? 'bg-[#39C5BB] text-[#05080D] font-bold shadow-[0_0_10px_rgba(57,197,187,0.4)]'
                : 'text-[#7C9399] hover:text-[#EAF7F6] hover:bg-[#162436]/40'
            ]"
            @click="switchLang(lang.code)"
          >
            {{ lang.label }}
          </button>
        </div>

        <!-- Audio Synthesizer Toggle -->
        <button
          type="button"
          class="p-2 sm:p-2.5 rounded-xl bg-[#0E1724] border border-[#162436] hover:border-[#39C5BB]/50 text-[#7C9399] hover:text-[#6FF7EC] transition-colors cursor-pointer focus:outline-none"
          :title="isMuted ? 'Unmute Audio UI' : 'Mute Audio UI'"
          @click="toggleSound"
          @mouseenter="soundManager.playHover()"
        >
          <Volume2 v-if="!isMuted" class="w-4 h-4 text-[#39C5BB]" />
          <VolumeX v-else class="w-4 h-4 text-[#7C9399]" />
        </button>

        <!-- Direct PDF Download CTA (Desktop) -->
        <a
          href="/Ismail_Gayratov_Resume.pdf"
          download="Ismail_Gayratov_Resume.pdf"
          class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#05080D] bg-[#39C5BB] hover:bg-[#6FF7EC] transition-all cursor-pointer shadow-[0_0_18px_rgba(57,197,187,0.35)] focus:outline-none"
          @click="soundManager.playChime()"
          @mouseenter="soundManager.playHover()"
        >
          <FileDown class="w-3.5 h-3.5" />
          <span>{{ t.nav.resume }}.PDF</span>
        </a>

        <!-- Mobile Menu Trigger -->
        <button
          type="button"
          class="md:hidden p-2 sm:p-2.5 rounded-xl bg-[#0E1724] border border-[#162436] text-[#EAF7F6] hover:text-[#39C5BB] transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
          @click="mobileMenuOpen = !mobileMenuOpen; soundManager.playClick()"
        >
          <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5 text-[#FF6FA5]" />
        </button>

      </div>

    </div>

    <!-- Mobile Fullscreen Drawer (Large, Convenient, Ultra-clean) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-6"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-6"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-x-0 top-[65px] sm:top-[75px] bottom-0 bg-[#05080D]/98 backdrop-blur-3xl border-t border-[#162436] p-6 flex flex-col justify-between overflow-y-auto z-40 md:hidden"
      >
        <!-- Nav Links List with Large Touch Targets -->
        <div class="space-y-2 pt-2">
          <div class="font-mono text-[11px] text-[#39C5BB] uppercase tracking-wider mb-3">
            Navigation Menu
          </div>
          
          <a
            v-for="(link, idx) in navLinks"
            :key="link.id"
            :href="link.href"
            class="flex items-center justify-between p-4 rounded-2xl border transition-all duration-150"
            :class="[
              activeSection === link.id
                ? 'bg-[#0E1724] border-[#39C5BB] text-[#6FF7EC]'
                : 'bg-[#0A1118] border-[#162436] text-[#EAF7F6] hover:border-[#39C5BB]/50'
            ]"
            @click="handleLinkClick(link.href)"
          >
            <div class="flex items-center gap-3">
              <span class="font-mono text-xs text-[#39C5BB]">0{{ idx + 1 }}</span>
              <span class="font-display font-bold text-lg tracking-wide">{{ link.name }}</span>
            </div>
            <span class="text-[#39C5BB] font-mono">→</span>
          </a>
        </div>

        <!-- Bottom Action Drawer for Mobile -->
        <div class="pt-6 border-t border-[#162436] space-y-3">
          
          <!-- Mobile Language Switcher (Prominent & Easy to tap) -->
          <div class="flex items-center justify-between p-3 rounded-2xl bg-[#0A1118] border border-[#162436]">
            <span class="font-mono text-xs text-[#7C9399]">Language / Язык / Til:</span>
            <div class="inline-flex gap-1">
              <button
                v-for="lang in languages"
                :key="lang.code"
                type="button"
                class="px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all"
                :class="[
                  currentLang === lang.code
                    ? 'bg-[#39C5BB] text-[#05080D]'
                    : 'bg-[#0E1724] text-[#7C9399]'
                ]"
                @click="switchLang(lang.code)"
              >
                {{ lang.label }}
              </button>
            </div>
          </div>

          <!-- Direct Download PDF Button -->
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="flex items-center justify-center gap-2.5 w-full p-4 rounded-2xl bg-[#39C5BB] text-[#05080D] font-mono font-bold text-sm tracking-wider shadow-[0_0_20px_rgba(57,197,187,0.4)]"
            @click="soundManager.playChime(); mobileMenuOpen = false"
          >
            <FileDown class="w-4 h-4" />
            <span>{{ t.nav.downloadPdf }}</span>
          </a>

          <!-- View Resume Dossier -->
          <button
            type="button"
            class="flex items-center justify-center gap-2 w-full p-3.5 rounded-2xl bg-[#0E1724] border border-[#162436] text-[#EAF7F6] font-mono text-xs tracking-wider"
            @click="emit('open-resume'); mobileMenuOpen = false; soundManager.playClick()"
          >
            <span>{{ t.nav.viewDossier }}</span>
          </button>

          <!-- Telegram Contact -->
          <a
            href="https://t.me/theiiisssaaa"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center gap-2 w-full p-3.5 rounded-2xl bg-[#0A1118] border border-[#162436] text-[#6FF7EC] font-mono text-xs tracking-wider"
            @click="mobileMenuOpen = false"
          >
            <Send class="w-3.5 h-3.5" />
            <span>Telegram: @theiiisssaaa</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </a>

        </div>

      </div>
    </transition>
  </header>
</template>
