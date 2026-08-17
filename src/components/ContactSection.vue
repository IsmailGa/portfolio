<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import confetti from 'canvas-confetti'
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
    
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.85 },
      colors: ['#39C5BB', '#6FF7EC', '#FF6FA5', '#EAF7F6']
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
  <footer id="contact" class="pt-20 sm:pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 border-t border-[#162436] bg-[#0A1118]/90 relative overflow-hidden">
    
    <div class="max-w-4xl mx-auto text-center flex flex-col items-center">
      
      <!-- Eyebrow -->
      <div class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase mb-4">
        Direct Inquiries & Collaboration
      </div>

      <!-- Main Headline -->
      <h2 class="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#EAF7F6] tracking-tight max-w-3xl leading-[1.08]">
        Have a fintech product that needs a 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#39C5BB] via-[#6FF7EC] to-[#39C5BB]">
          high-craft frontend
        </span>?
      </h2>

      <p class="mt-4 text-[#7C9399] font-body text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
        Currently open to full-time engineering positions, contract development, and technical consulting.
      </p>

      <!-- Primary Action Buttons -->
      <div class="mt-8 flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
        
        <!-- Copyable Email CTA -->
        <button
          type="button"
          class="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:py-4 rounded-xl bg-[#39C5BB] hover:bg-[#6FF7EC] text-[#05080D] font-mono font-bold text-xs sm:text-sm tracking-wider glow-teal hover:glow-teal-lg transition-all duration-200 cursor-pointer shadow-lg"
          @click="copyEmail"
          @mouseenter="soundManager.playHover()"
        >
          <Mail class="w-4 h-4 text-[#05080D] shrink-0" />
          <span class="truncate">{{ portfolioData.email }}</span>
          <component :is="copiedEmail ? Check : Copy" class="w-4 h-4 text-[#05080D] shrink-0" />
        </button>

        <!-- Direct Telegram Button -->
        <a
          :href="portfolioData.telegram"
          target="_blank"
          rel="noopener"
          class="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-[#0E1724] border border-[#162436] hover:border-[#39C5BB] text-[#EAF7F6] hover:text-[#6FF7EC] font-mono font-medium text-xs sm:text-sm tracking-wider transition-all duration-200 cursor-pointer"
          @click="soundManager.playClick()"
          @mouseenter="soundManager.playHover()"
        >
          <Send class="w-4 h-4 text-[#39C5BB] group-hover:text-[#6FF7EC]" />
          <span>TELEGRAM</span>
          <ArrowUpRight class="w-4 h-4 text-[#7C9399] group-hover:text-[#6FF7EC]" />
        </a>

      </div>

      <!-- Quick Contact Badges Strip -->
      <div class="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl w-full">
        
        <!-- Phone button -->
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#05080D] border border-[#162436] hover:border-[#39C5BB]/50 text-xs font-mono text-[#EAF7F6] hover:text-[#6FF7EC] transition-all cursor-pointer"
          @click="copyPhone"
          @mouseenter="soundManager.playHover()"
        >
          <Phone class="w-3.5 h-3.5 text-[#39C5BB]" />
          <span>{{ portfolioData.phone }}</span>
          <component :is="copiedPhone ? Check : Copy" class="w-3 h-3 text-[#7C9399]" />
        </button>

        <!-- GitHub -->
        <a
          :href="portfolioData.github"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#05080D] border border-[#162436] hover:border-[#39C5BB]/50 text-xs font-mono text-[#EAF7F6] hover:text-[#6FF7EC] transition-all"
          @mouseenter="soundManager.playHover()"
        >
          <Github class="w-3.5 h-3.5 text-[#39C5BB]" />
          <span>GitHub / IsmailGa</span>
          <ArrowUpRight class="w-3 h-3 text-[#7C9399]" />
        </a>

        <!-- LinkedIn -->
        <a
          :href="portfolioData.linkedin"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#05080D] border border-[#162436] hover:border-[#39C5BB]/50 text-xs font-mono text-[#EAF7F6] hover:text-[#6FF7EC] transition-all"
          @mouseenter="soundManager.playHover()"
        >
          <Linkedin class="w-3.5 h-3.5 text-[#39C5BB]" />
          <span>LinkedIn</span>
          <ArrowUpRight class="w-3 h-3 text-[#7C9399]" />
        </a>

      </div>

      <!-- Live Tashkent Clock -->
      <div class="mt-8 flex items-center justify-center gap-3 font-mono text-xs text-[#7C9399]">
        <div class="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#05080D] border border-[#162436]">
          <Clock class="w-3.5 h-3.5 text-[#39C5BB]" />
          <span>Tashkent Time:</span>
          <span class="text-[#EAF7F6] font-semibold">{{ tashkentTime || '17:20:00' }}</span>
          <span class="text-[#39C5BB]">UTC+5</span>
        </div>
      </div>

      <!-- Footer Signature -->
      <div class="mt-12 pt-6 border-t border-[#162436] w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#7C9399]">
        <div>
          © 2026 · Frontend & Full-Stack Engineer · Built in Tashkent.
        </div>
        <div class="flex items-center gap-2">
          <span>Design Motif:</span>
          <span class="text-[#39C5BB] font-semibold">Miku Pulse</span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#FF6FA5]" />
        </div>
      </div>

    </div>
  </footer>
</template>
