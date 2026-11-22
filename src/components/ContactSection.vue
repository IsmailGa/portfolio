<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { t } from '../i18n'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { Mail, Send, Phone, Github, Linkedin, Copy, Check, Clock, ArrowUpRight } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'toast', msg: string): void
}>()

const copiedEmail = ref(false)
const copiedPhone = ref(false)
const tashkentTime = ref('')

let timer: number | null = null

const updateTashkentTime = () => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Tashkent',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }
  tashkentTime.value = new Intl.DateTimeFormat('en-GB', options).format(new Date())
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(portfolioData.email)
    copiedEmail.value = true
    soundManager.playChime()
    emit('toast', 'Email address copied to clipboard!')
    
    const { default: confetti } = await import('canvas-confetti')
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.85 },
      colors: ['#0d9488', '#39c5bb', '#ff6fa5', '#fbbf24']
    })

    setTimeout(() => {
      copiedEmail.value = false
    }, 3000)
  } catch (err) {
    window.location.href = `mailto:${portfolioData.email}`
  }
}

const copyPhone = async () => {
  try {
    await navigator.clipboard.writeText(portfolioData.phone)
    copiedPhone.value = true
    soundManager.playClick()
    emit('toast', 'Phone number copied to clipboard!')
    setTimeout(() => {
      copiedPhone.value = false
    }, 3000)
  } catch {
    // ignore
  }
}

onMounted(() => {
  updateTashkentTime()
  timer = window.setInterval(updateTashkentTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <footer id="contact" class="relative z-10 scroll-mt-20 border-t border-line bg-alt px-4 pb-10 pt-20 sm:px-6 sm:pt-28 lg:px-12">
    <div class="mx-auto flex max-w-4xl flex-col items-center text-center">

      <h2 class="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        {{ t.contact.titleMain }}
        <span class="gradient-text">{{ t.contact.titleAccent }}</span>
      </h2>

      <p class="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{{ t.contact.desc }}</p>

      <div class="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
        <button
          type="button"
          class="btn-primary inline-flex cursor-pointer items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-semibold"
          @click="copyEmail"
        >
          <Mail class="h-4 w-4 shrink-0" />
          <span class="truncate">{{ portfolioData.email }}</span>
          <component :is="copiedEmail ? Check : Copy" class="h-4 w-4 shrink-0" />
        </button>

        <a
          :href="portfolioData.telegram"
          target="_blank"
          rel="noopener"
          class="btn-ghost group inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-sm font-semibold"
          @click="soundManager.playClick()"
        >
          <Send class="h-4 w-4 text-accent" />
          <span>Telegram</span>
          <ArrowUpRight class="h-4 w-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div class="mt-8 flex w-full max-w-2xl flex-wrap items-center justify-center gap-2.5">
        <button
          type="button"
          class="btn-ghost inline-flex cursor-pointer items-center gap-2 rounded-lg px-3.5 py-2 text-sm"
          @click="copyPhone"
        >
          <Phone class="h-4 w-4 text-accent" />
          <span>{{ portfolioData.phone }}</span>
          <component :is="copiedPhone ? Check : Copy" class="h-3.5 w-3.5 text-faint" />
        </button>

        <a :href="portfolioData.github" target="_blank" rel="noopener" class="btn-ghost inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm">
          <Github class="h-4 w-4 text-accent" />
          <span>GitHub</span>
          <ArrowUpRight class="h-3.5 w-3.5 text-faint" />
        </a>

        <a :href="portfolioData.linkedin" target="_blank" rel="noopener" class="btn-ghost inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm">
          <Linkedin class="h-4 w-4 text-accent" />
          <span>LinkedIn</span>
          <ArrowUpRight class="h-3.5 w-3.5 text-faint" />
        </a>
      </div>

      <div class="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-muted">
        <Clock class="h-3.5 w-3.5 text-accent" />
        <span>{{ t.contact.tashkentTime }}</span>
        <span class="font-mono font-semibold text-fg">{{ tashkentTime || '--:--:--' }}</span>
        <span class="font-mono text-accent">UTC+5</span>
      </div>

      <div class="mt-14 flex w-full flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row">
        <div>{{ t.contact.copyright }}</div>
        <div class="flex items-center gap-2">
          <span>{{ t.contact.designMotif }}</span>
          <span class="font-semibold text-muted">Miku Pulse</span>
          <span class="h-1.5 w-1.5 rounded-full bg-pink" />
        </div>
      </div>
    </div>
  </footer>
</template>
