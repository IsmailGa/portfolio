<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
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

// Lock body scrolling when mobile menu is open
watch(mobileMenuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }
})

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
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
  }
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-[#05080D]/90 backdrop-blur-xl py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.7)]' 
        : 'bg-transparent py-3 sm:py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
      
      <!-- Zone 1: Brand Logo / Emblem -->
      <a 
        href="#hero" 
        class="flex items-center gap-2 group focus:outline-none shrink-0"
        @click="handleLinkClick('#hero')"
        @mouseenter="soundManager.playHover()"
      >
        <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0E1724] border border-[#162436] group-hover:border-[#39C5BB] flex items-center justify-center transition-colors relative overflow-hidden">
          <span class="font-display font-bold text-xs text-[#39C5BB] group-hover:text-[#6FF7EC]">01</span>
          <span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#39C5BB] animate-pulse" />
        </div>
        <div class="flex items-center gap-1.5 sm:gap-2">
          <span class="font-display font-bold text-xs sm:text-base tracking-wider text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors whitespace-nowrap">
            MIKU PULSE
          </span>
          <span class="font-mono text-[9px] sm:text-[10px] text-[#39C5BB] px-1.5 py-0.5 rounded bg-[#0E1724] border border-[#162436] hidden xs:inline-block">
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

      <!-- Zone 3: Actions -->
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        
        <!-- Desktop Language Switcher -->
        <div class="hidden sm:inline-flex items-center p-1 rounded-xl bg-[#0E1724] border border-[#162436] select-none">
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
          class="p-2 rounded-xl bg-[#0E1724] border border-[#162436] hover:border-[#39C5BB]/50 text-[#7C9399] hover:text-[#6FF7EC] transition-colors cursor-pointer focus:outline-none"
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
          class="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#05080D] bg-[#39C5BB] hover:bg-[#6FF7EC] transition-all cursor-pointer shadow-[0_0_18px_rgba(57,197,187,0.35)] focus:outline-none"
          @click="soundManager.playChime()"
          @mouseenter="soundManager.playHover()"
        >
          <FileDown class="w-3.5 h-3.5" />
          <span>{{ t.nav.resume }}.PDF</span>
        </a>

        <!-- Mobile Menu Trigger -->
        <button
          type="button"
          class="md:hidden p-2 rounded-xl bg-[#0E1724] border border-[#162436] text-[#39C5BB] hover:text-[#6FF7EC] transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
          @click="mobileMenuOpen = true; soundManager.playClick()"
        >
          <Menu class="w-5 h-5" />
        </button>

      </div>

    </div>
  </header>

  <!-- Teleported Fullscreen Mobile Drawer (Completely isolated, full height, no clipping) -->
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-[999] bg-[#05080D] flex flex-col justify-between overflow-hidden md:hidden"
      >
        <!-- Top Bar inside Modal -->
        <div class="px-4 py-3.5 border-b border-[#162436] bg-[#0A1118] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-[#0E1724] border border-[#39C5BB]/40 flex items-center justify-center">
              <span class="font-display font-bold text-xs text-[#39C5BB]">01</span>
            </div>
            <span class="font-display font-bold text-sm tracking-wider text-[#EAF7F6]">
              MIKU PULSE
            </span>
          </div>

          <div class="flex items-center gap-2">
            <!-- Language Switcher in Mobile Header -->
            <div class="inline-flex items-center p-0.5 rounded-lg bg-[#0E1724] border border-[#162436]">
              <button
                v-for="lang in languages"
                :key="lang.code"
                type="button"
                class="px-2 py-1 rounded font-mono text-[11px] font-bold transition-all"
                :class="[
                  currentLang === lang.code
                    ? 'bg-[#39C5BB] text-[#05080D]'
                    : 'text-[#7C9399]'
                ]"
                @click="switchLang(lang.code)"
              >
                {{ lang.label }}
              </button>
            </div>

            <!-- Close Button -->
            <button
              type="button"
              class="p-2 rounded-lg bg-[#0E1724] border border-[#162436] text-[#FF6FA5] hover:bg-[#FF6FA5]/10 transition-colors"
              @click="mobileMenuOpen = false; soundManager.playClick()"
            >
              <X class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Scrollable Navigation Links -->
        <div class="flex-1 overflow-y-auto px-5 py-6 space-y-3">
          <div class="font-mono text-[10px] text-[#39C5BB] uppercase tracking-wider mb-3">
            Navigation Menu
          </div>

          <a
            v-for="(link, idx) in navLinks"
            :key="link.id"
            :href="link.href"
            class="flex items-center justify-between p-4 rounded-2xl border transition-all duration-150 active:scale-[0.98]"
            :class="[
              activeSection === link.id
                ? 'bg-[#0E1724] border-[#39C5BB] text-[#6FF7EC] shadow-[0_0_15px_rgba(57,197,187,0.2)]'
                : 'bg-[#0A1118] border-[#162436] text-[#EAF7F6] hover:border-[#39C5BB]/40'
            ]"
            @click="handleLinkClick(link.href)"
          >
            <div class="flex items-center gap-3.5">
              <span class="font-mono text-xs text-[#39C5BB]">0{{ idx + 1 }}</span>
              <span class="font-display font-bold text-lg tracking-wide">{{ link.name }}</span>
            </div>
            <span class="text-[#39C5BB] font-mono">→</span>
          </a>
        </div>

        <!-- Bottom Action Buttons in Modal -->
        <div class="p-5 border-t border-[#162436] bg-[#0A1118] space-y-2.5 shrink-0">
          <!-- Download Resume PDF -->
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#39C5BB] text-[#05080D] font-mono font-bold text-xs tracking-wider shadow-[0_0_16px_rgba(57,197,187,0.4)] active:scale-[0.98] transition-transform"
            @click="soundManager.playChime(); mobileMenuOpen = false"
          >
            <FileDown class="w-4 h-4" />
            <span>{{ t.nav.downloadPdf }}</span>
          </a>

          <!-- View Resume Dossier -->
          <button
            type="button"
            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0E1724] border border-[#162436] text-[#EAF7F6] font-mono text-xs tracking-wider"
            @click="emit('open-resume'); mobileMenuOpen = false; soundManager.playClick()"
          >
            <span>{{ t.nav.viewDossier }}</span>
          </button>

          <!-- Telegram -->
          <a
            href="https://t.me/theiiisssaaa"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#05080D] border border-[#162436] text-[#6FF7EC] font-mono text-xs tracking-wider"
            @click="mobileMenuOpen = false"
          >
            <Send class="w-3.5 h-3.5" />
            <span>Telegram: @theiiisssaaa</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </transition>
  </Teleport>
</template>
