<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { t } from '../i18n'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { FileDown, Send, ArrowUpRight, Music } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'open-resume'): void
  (e: 'toast', msg: string): void
}>()

const isLoaded = ref(false)
const synthCanvas = ref<HTMLCanvasElement | null>(null)
const activePad = ref<number | null>(null)

// Musical pentatonic scale matching Miku's sonic character (A4, C5, D5, E5, G5)
const synthPads = [
  { note: 'A4', freq: 440, label: '440 Hz' },
  { note: 'C5', freq: 523.25, label: '523 Hz' },
  { note: 'D5', freq: 587.33, label: '587 Hz' },
  { note: 'E5', freq: 659.25, label: '659 Hz' },
  { note: 'G5', freq: 783.99, label: '784 Hz' }
]

let oscStep = 0
let animFrame: number | null = null
let energy = 0.2

const playPad = (idx: number) => {
  activePad.value = idx
  energy = 1.0
  soundManager.playSynthNote(synthPads[idx].freq, 'sine', 0.4)
  setTimeout(() => {
    if (activePad.value === idx) activePad.value = null
  }, 350)
}

const renderOscilloscope = () => {
  const canvas = synthCanvas.value
  if (canvas) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      oscStep += 0.04
      energy += (0.15 - energy) * 0.05

      ctx.beginPath()
      ctx.lineWidth = 1.5
      ctx.strokeStyle = energy > 0.4 ? '#6FF7EC' : 'rgba(57, 197, 187, 0.6)'

      for (let x = 0; x < w; x += 4) {
        const envelope = Math.sin((x / w) * Math.PI)
        const y = (h / 2) + Math.sin(x * 0.04 + oscStep) * (18 * energy) * envelope + Math.cos(x * 0.08 - oscStep) * (8 * energy) * envelope
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
  }
  animFrame = requestAnimationFrame(renderOscilloscope)
}

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
  animFrame = requestAnimationFrame(renderOscilloscope)
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-32 pb-16 overflow-hidden"
  >
    <div class="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
      
      <!-- Left Column: Typographic Thesis & CTAs (7 cols) -->
      <div class="lg:col-span-7 flex flex-col justify-center">
        
        <!-- Status Tag -->
        <div 
          class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#0E1724] border border-[#162436] w-fit mb-6 transition-all duration-700 select-none"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <span class="w-2 h-2 rounded-full bg-[#39C5BB]" />
          <span class="font-mono text-xs text-[#EAF7F6] tracking-wider uppercase">
            {{ t.hero.statusAvailable }}
          </span>
          <span class="text-[#162436]">·</span>
          <span class="font-mono text-xs text-[#7C9399]">
            {{ t.hero.location }}
          </span>
        </div>

        <!-- Sculptural Display Headline -->
        <div 
          class="transition-all duration-700 delay-100"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <h1 
            class="font-display font-extrabold tracking-[-0.035em] uppercase text-[#EAF7F6] leading-[0.88] select-none text-[44px] xs:text-[56px] sm:text-[76px] md:text-[96px] lg:text-[108px] xl:text-[120px] break-words"
          >
            ISMAIL
          </h1>
        </div>

        <!-- Role Subhead -->
        <div 
          class="mt-5 flex items-center gap-2.5 transition-all duration-700 delay-200"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="font-mono text-xs sm:text-sm font-semibold text-[#39C5BB] px-2.5 py-1 rounded bg-[#0E1724] border border-[#162436]">
            {{ t.hero.role }}
          </div>
          <span class="text-[#7C9399] font-mono text-xs hidden sm:inline">
            {{ t.hero.subRole }}
          </span>
        </div>

        <!-- Narrative Pitch -->
        <p 
          class="mt-6 max-w-xl text-[#7C9399] text-sm sm:text-base md:text-lg leading-relaxed font-body font-normal transition-all duration-700 delay-300"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          {{ t.hero.pitch }}
        </p>

        <!-- CTAs -->
        <div 
          class="mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 transition-all duration-700 delay-400 w-full sm:w-auto"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <!-- Primary CTA: Direct Download PDF -->
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#39C5BB] hover:bg-[#6FF7EC] text-[#05080D] font-mono font-bold text-xs sm:text-sm tracking-wider glow-teal hover:glow-teal-lg transition-all duration-200 cursor-pointer shadow-lg focus:outline-none"
            @click="soundManager.playChime()"
            @mouseenter="soundManager.playHover()"
          >
            <FileDown class="w-4 h-4 text-[#05080D] group-hover:translate-y-0.5 transition-transform" />
            <span>{{ t.hero.downloadResume }}</span>
          </a>

          <!-- View Dossier Modal Trigger -->
          <button
            type="button"
            class="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#0E1724] border border-[#162436] hover:border-[#39C5BB] text-[#EAF7F6] hover:text-[#6FF7EC] font-mono font-medium text-xs sm:text-sm tracking-wider transition-all duration-200 cursor-pointer focus:outline-none"
            @click="emit('open-resume'); soundManager.playClick()"
            @mouseenter="soundManager.playHover()"
          >
            <span>{{ t.hero.viewDossier }}</span>
          </button>

          <!-- Telegram Contact -->
          <a
            :href="portfolioData.telegram"
            target="_blank"
            rel="noopener"
            class="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#0E1724] border border-[#162436] hover:border-[#39C5BB] text-[#EAF7F6] hover:text-[#6FF7EC] font-mono font-medium text-xs sm:text-sm tracking-wider transition-all duration-200 cursor-pointer focus:outline-none"
            @click="soundManager.playClick()"
            @mouseenter="soundManager.playHover()"
          >
            <Send class="w-4 h-4 text-[#39C5BB] group-hover:text-[#6FF7EC]" />
            <span>{{ t.hero.telegram }}</span>
            <ArrowUpRight class="w-4 h-4 text-[#7C9399] group-hover:text-[#6FF7EC] transition-transform" />
          </a>
        </div>

      </div>

      <!-- Right Column: Interactive Synthesizer Console (5 cols) -->
      <div 
        class="lg:col-span-5 flex justify-center transition-all duration-700 delay-300"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="w-full max-w-md glass-surface p-5 sm:p-6 rounded-2xl border border-[#162436] relative space-y-4">
          
          <!-- Header Bar -->
          <div class="flex items-center justify-between pb-3 border-b border-[#162436]">
            <div class="flex items-center gap-2 font-mono text-xs text-[#EAF7F6]">
              <Music class="w-4 h-4 text-[#39C5BB]" />
              <span class="font-bold">{{ t.hero.synthTitle }}</span>
            </div>
            <span class="font-mono text-[10px] text-[#39C5BB] bg-[#05080D] px-2 py-0.5 rounded border border-[#162436]">
              WEB AUDIO API
            </span>
          </div>

          <!-- Live Oscilloscope Screen -->
          <div class="h-20 w-full bg-[#05080D] rounded-xl border border-[#162436] overflow-hidden relative flex items-center justify-center">
            <canvas ref="synthCanvas" width="360" height="80" class="w-full h-full" />
            <div class="absolute top-2 left-2 text-[9px] font-mono text-[#7C9399]/60">
              OSCILLOSCOPE // PENTATONIC
            </div>
          </div>

          <!-- Interactive Synth Tone Pads -->
          <div>
            <div class="text-[11px] font-mono text-[#7C9399] mb-2 flex justify-between">
              <span>{{ t.hero.synthPadsNote }}</span>
              <span class="text-[#39C5BB]">A MINOR</span>
            </div>
            <div class="grid grid-cols-5 gap-1.5">
              <button
                v-for="(pad, idx) in synthPads"
                :key="pad.note"
                type="button"
                class="p-2.5 rounded-lg border font-mono text-center transition-all duration-150 cursor-pointer select-none active:scale-95 focus:outline-none"
                :class="[
                  activePad === idx
                    ? 'bg-[#39C5BB] text-[#05080D] border-[#6FF7EC] shadow-[0_0_15px_#39C5BB]'
                    : 'bg-[#05080D] text-[#EAF7F6] border-[#162436] hover:border-[#39C5BB] hover:text-[#6FF7EC]'
                ]"
                @click="playPad(idx)"
              >
                <div class="font-bold text-xs">{{ pad.note }}</div>
                <div class="text-[9px] text-[#7C9399] mt-0.5">{{ pad.label }}</div>
              </button>
            </div>
          </div>

          <!-- Production Baseline Summary -->
          <div class="pt-3 border-t border-[#162436] grid grid-cols-3 gap-2 text-center font-mono">
            <div class="p-2 rounded-lg bg-[#05080D] border border-[#162436]">
              <div class="text-[10px] text-[#7C9399]">{{ t.hero.fintechExp }}</div>
              <div class="font-bold text-xs text-[#EAF7F6] mt-0.5">{{ t.hero.years }}</div>
            </div>
            <div class="p-2 rounded-lg bg-[#05080D] border border-[#162436]">
              <div class="text-[10px] text-[#7C9399]">{{ t.hero.degreeGpa }}</div>
              <div class="font-bold text-xs text-[#39C5BB] mt-0.5">3.61 / 5.0</div>
            </div>
            <div class="p-2 rounded-lg bg-[#05080D] border border-[#162436]">
              <div class="text-[10px] text-[#7C9399]">{{ t.hero.englishLevel }}</div>
              <div class="font-bold text-xs text-[#6FF7EC] mt-0.5">{{ t.hero.c1Level }}</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
