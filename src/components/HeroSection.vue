<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { t } from '../i18n'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { FileDown, Send, ArrowUpRight } from 'lucide-vue-next'

defineEmits<{
  (e: 'toast', msg: string): void
}>()

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 80)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-28 sm:pt-36 pb-16 overflow-hidden max-w-7xl mx-auto w-full"
  >
    <!-- Main Full-Width Editorial Content -->
    <div class="w-full flex flex-col items-start my-auto">
      
      <!-- Top Status Pill -->
      <div 
        class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1724]/90 border border-[#162436] mb-6 sm:mb-8 transition-all duration-700 select-none backdrop-blur-md"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <span class="w-2 h-2 rounded-full bg-[#39C5BB] animate-pulse" />
        <span class="font-mono text-xs text-[#EAF7F6] tracking-wider uppercase font-semibold">
          {{ t.hero.statusAvailable }}
        </span>
        <span class="text-[#162436]">·</span>
        <span class="font-mono text-xs text-[#7C9399]">
          {{ t.hero.location }}
        </span>
      </div>

      <!-- Monumental Headline across full width -->
      <div 
        class="transition-all duration-700 delay-100 w-full"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <h1 
          class="font-display font-extrabold tracking-[-0.04em] uppercase text-[#EAF7F6] leading-[0.88] select-none text-[48px] xs:text-[62px] sm:text-[80px] md:text-[96px] lg:text-[112px] xl:text-[124px] break-words"
        >
          ISMAIL<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#EAF7F6] via-[#6FF7EC] to-[#39C5BB]">
            GAYRATOV
          </span>
        </h1>
      </div>

      <!-- Role & Tag Subhead -->
      <div 
        class="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 delay-200"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div class="font-mono text-xs sm:text-sm font-bold text-[#39C5BB] px-3.5 py-1.5 rounded-xl bg-[#0E1724] border border-[#162436] tracking-wide">
          {{ t.hero.role }}
        </div>
        <span class="text-[#7C9399] font-mono text-xs sm:text-sm">
          // {{ t.hero.subRole }}
        </span>
      </div>

      <!-- High-Impact Lead Narrative with Generous Breathing Room -->
      <p 
        class="mt-6 sm:mt-8 max-w-3xl text-[#7C9399] text-base sm:text-lg md:text-xl leading-relaxed font-body font-normal transition-all duration-700 delay-300"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        {{ t.hero.pitch }}
      </p>

      <!-- Action Buttons -->
      <div 
        class="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 transition-all duration-700 delay-400 w-full"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <!-- Primary Download PDF Button -->
        <a
          href="/Ismail_Gayratov_Resume.pdf"
          download="Ismail_Gayratov_Resume.pdf"
          class="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-2xl bg-[#39C5BB] hover:bg-[#6FF7EC] text-[#05080D] font-mono font-bold text-xs sm:text-sm tracking-wider glow-teal hover:glow-teal-lg transition-all duration-200 cursor-pointer shadow-lg focus:outline-none"
          @click="soundManager.playChime()"
          @mouseenter="soundManager.playHover()"
        >
          <FileDown class="w-4 h-4 text-[#05080D] group-hover:translate-y-0.5 transition-transform" />
          <span>{{ t.hero.downloadResume }}</span>
        </a>

        <!-- Telegram Link Button -->
        <a
          :href="portfolioData.telegram"
          target="_blank"
          rel="noopener"
          class="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-2xl bg-[#0E1724] border border-[#162436] hover:border-[#39C5BB] text-[#EAF7F6] hover:text-[#6FF7EC] font-mono font-semibold text-xs sm:text-sm tracking-wider transition-all duration-200 cursor-pointer focus:outline-none"
          @click="soundManager.playClick()"
          @mouseenter="soundManager.playHover()"
        >
          <Send class="w-4 h-4 text-[#39C5BB] group-hover:text-[#6FF7EC]" />
          <span>{{ t.hero.telegram }}</span>
          <ArrowUpRight class="w-4 h-4 text-[#7C9399] group-hover:text-[#6FF7EC] transition-transform" />
        </a>
      </div>

      <!-- Sleek Horizontal Credential Matrix (4 Columns) -->
      <div 
        class="mt-12 sm:mt-16 pt-8 border-t border-[#162436] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full font-mono transition-all duration-700 delay-500"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div class="p-4 rounded-2xl bg-[#0A1118]/80 border border-[#162436] hover:border-[#39C5BB]/40 transition-colors">
          <div class="text-[10px] text-[#7C9399] uppercase tracking-wider">01 · {{ t.hero.fintechExp }}</div>
          <div class="font-bold text-base sm:text-lg text-[#EAF7F6] mt-1">{{ t.hero.years }}</div>
          <div class="text-[11px] text-[#7C9399] mt-0.5">Trustbank & Multicard</div>
        </div>

        <div class="p-4 rounded-2xl bg-[#0A1118]/80 border border-[#162436] hover:border-[#39C5BB]/40 transition-colors">
          <div class="text-[10px] text-[#7C9399] uppercase tracking-wider">02 · CORE STACK</div>
          <div class="font-bold text-base sm:text-lg text-[#39C5BB] mt-1">Vue 3 / React</div>
          <div class="text-[11px] text-[#7C9399] mt-0.5">TypeScript & Node.js</div>
        </div>

        <div class="p-4 rounded-2xl bg-[#0A1118]/80 border border-[#162436] hover:border-[#39C5BB]/40 transition-colors">
          <div class="text-[10px] text-[#7C9399] uppercase tracking-wider">03 · {{ t.hero.degreeGpa }}</div>
          <div class="font-bold text-base sm:text-lg text-[#6FF7EC] mt-1">3.61 / 5.0</div>
          <div class="text-[11px] text-[#7C9399] mt-0.5">KIUT Applied Informatics</div>
        </div>

        <div class="p-4 rounded-2xl bg-[#0A1118]/80 border border-[#162436] hover:border-[#39C5BB]/40 transition-colors">
          <div class="text-[10px] text-[#7C9399] uppercase tracking-wider">04 · {{ t.hero.englishLevel }}</div>
          <div class="font-bold text-base sm:text-lg text-[#EAF7F6] mt-1">{{ t.hero.c1Level }}</div>
          <div class="text-[11px] text-[#7C9399] mt-0.5">Fluent Tech & Spoken</div>
        </div>
      </div>

    </div>
  </section>
</template>
