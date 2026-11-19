<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { t, currentLang, setLanguage, type Language } from '../i18n'
import { soundManager } from '../utils/sound'
import { theme, toggleTheme } from '../utils/theme'
import { Volume2, VolumeX, Menu, X, FileDown, Send, ArrowUpRight, Sun, Moon } from 'lucide-vue-next'

const isMuted = ref(false)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navLinks = computed(() => [
  { name: t.value.nav.work, href: '#work', id: 'work' },
  { name: t.value.nav.capabilities, href: '#capabilities', id: 'capabilities' },
  { name: t.value.nav.about, href: '#about', id: 'about' },
  { name: t.value.nav.education, href: '#education', id: 'education' },
  { name: t.value.nav.contact, href: '#contact', id: 'contact' }
])

const languages: Language[] = ['RU', 'EN', 'UZ']

const switchLang = (code: Language) => {
  if (currentLang.value === code) return
  setLanguage(code)
}

const toggleSound = () => {
  isMuted.value = soundManager.toggleMute()
}

const onToggleTheme = () => {
  toggleTheme()
  soundManager.playClick()
}

const handleLinkClick = (href?: string) => {
  soundManager.playClick()
  mobileMenuOpen.value = false
  if (href) activeSection.value = href.replace('#', '')
}

watch(mobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

const sectionIds = ['hero', 'work', 'capabilities', 'about', 'education', 'contact']
let observer: IntersectionObserver | null = null
let ticking = false

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const scrolled = window.scrollY > 20
    if (scrolled !== isScrolled.value) isScrolled.value = scrolled
    ticking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // Active section = the one crossing the upper third of the viewport
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) activeSection.value = e.target.id
    },
    { rootMargin: '-30% 0px -60% 0px' }
  )
  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-40 transition-all duration-300"
    :class="isScrolled ? 'py-2.5' : 'py-4 sm:py-5'"
  >
    <div
      class="mx-auto max-w-7xl flex items-center justify-between gap-3 px-3 sm:px-4 lg:px-6 transition-all duration-300"
    >
      <div
        class="flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 sm:px-4 transition-all duration-300"
        :class="isScrolled ? 'bg-surface/92 backdrop-blur-xl border border-line shadow-card' : 'border border-transparent'"
      >
        <!-- Brand -->
        <a href="#hero" class="flex items-center gap-2.5 shrink-0" @click="handleLinkClick('#hero')">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-accent-solid text-on-accent font-display font-bold text-sm">
            IG
          </span>
          <span class="font-display font-semibold text-[15px] tracking-tight hidden xs:inline">Ismail Gayratov</span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-1" aria-label="Primary">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="link.href"
            class="relative whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="activeSection === link.id ? 'text-fg' : 'text-muted hover:text-fg'"
            @click="handleLinkClick(link.href)"
          >
            {{ link.name }}
            <span
              class="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent-solid transition-transform duration-300 origin-left"
              :class="activeSection === link.id ? 'scale-x-100' : 'scale-x-0'"
            />
          </a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 shrink-0">
          <div class="hidden sm:inline-flex items-center rounded-lg border border-line bg-surface p-0.5" role="group" aria-label="Language">
            <button
              v-for="lang in languages"
              :key="lang"
              type="button"
              class="px-2.5 py-1 rounded-md font-mono text-xs font-semibold transition-colors cursor-pointer"
              :class="currentLang === lang ? 'bg-accent-solid text-on-accent' : 'text-muted hover:text-fg'"
              :aria-pressed="currentLang === lang"
              @click="switchLang(lang)"
            >
              {{ lang }}
            </button>
          </div>

          <button
            type="button"
            class="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted hover:text-fg hover:border-line-strong transition-colors cursor-pointer"
            :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="onToggleTheme"
          >
            <Sun v-if="theme === 'dark'" class="h-4 w-4" />
            <Moon v-else class="h-4 w-4" />
          </button>

          <button
            type="button"
            class="hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted hover:text-fg hover:border-line-strong transition-colors cursor-pointer"
            :aria-label="isMuted ? 'Unmute interface sounds' : 'Mute interface sounds'"
            @click="toggleSound"
          >
            <VolumeX v-if="isMuted" class="h-4 w-4" />
            <Volume2 v-else class="h-4 w-4" />
          </button>

          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="btn-primary hidden lg:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold"
            @click="soundManager.playChime()"
          >
            <FileDown class="h-4 w-4" />
            <span>{{ t.nav.resume }}</span>
          </a>

          <button
            type="button"
            class="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-fg cursor-pointer"
            aria-label="Open navigation menu"
            @click="mobileMenuOpen = true; soundManager.playClick()"
          >
            <Menu class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile drawer -->
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-250 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-[999] flex flex-col bg-bg text-fg md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-center justify-between px-4 py-4 border-b border-line">
          <div class="flex items-center gap-2.5">
            <span class="grid h-9 w-9 place-items-center rounded-xl bg-accent-solid text-on-accent font-display font-bold text-sm">IG</span>
            <span class="font-display font-semibold">Ismail Gayratov</span>
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted"
              :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
              @click="onToggleTheme"
            >
              <Sun v-if="theme === 'dark'" class="h-4 w-4" />
              <Moon v-else class="h-4 w-4" />
            </button>
            <button
              type="button"
              class="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface"
              aria-label="Close navigation menu"
              @click="mobileMenuOpen = false; soundManager.playClick()"
            >
              <X class="h-5 w-5" />
            </button>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto px-5 py-6">
          <div class="mb-5 inline-flex items-center rounded-lg border border-line bg-surface p-0.5" role="group" aria-label="Language">
            <button
              v-for="lang in languages"
              :key="lang"
              type="button"
              class="px-3.5 py-1.5 rounded-md font-mono text-xs font-semibold"
              :class="currentLang === lang ? 'bg-accent-solid text-on-accent' : 'text-muted'"
              @click="switchLang(lang)"
            >
              {{ lang }}
            </button>
          </div>

          <a
            v-for="(link, idx) in navLinks"
            :key="link.id"
            :href="link.href"
            class="flex items-center justify-between border-b border-line py-4 active:opacity-70"
            @click="handleLinkClick(link.href)"
          >
            <div class="flex items-baseline gap-4">
              <span class="font-mono text-xs text-accent">0{{ idx + 1 }}</span>
              <span class="font-display text-2xl font-semibold" :class="activeSection === link.id ? 'text-accent' : ''">
                {{ link.name }}
              </span>
            </div>
            <ArrowUpRight class="h-5 w-5 text-faint" />
          </a>
        </div>

        <div class="space-y-2.5 border-t border-line p-5">
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="btn-primary flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold"
            @click="soundManager.playChime(); mobileMenuOpen = false"
          >
            <FileDown class="h-4 w-4" />
            <span>{{ t.nav.downloadPdf }}</span>
          </a>
          <a
            href="https://t.me/theiiisssaaa"
            target="_blank"
            rel="noopener"
            class="btn-ghost flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-medium"
            @click="mobileMenuOpen = false"
          >
            <Send class="h-4 w-4 text-accent" />
            <span>@theiiisssaaa</span>
            <ArrowUpRight class="h-4 w-4 text-faint" />
          </a>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
