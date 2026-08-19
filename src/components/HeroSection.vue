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
    class="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-32 pb-14 overflow-hidden max-w-7xl mx-auto w-full"
  >
    <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
      
      <!-- Left Column: Editorial Headline, Pitch & CTAs (7 cols) -->
      <div class="lg:col-span-7 flex flex-col justify-center">
        
        <!-- Status Tag -->
        <div 
          class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1724]/90 border border-[#162436] w-fit mb-5 transition-all duration-700 select-none backdrop-blur-md"
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

        <!-- Sculptural Display Headline -->
        <div 
          class="transition-all duration-700 delay-100"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <h1 
            class="font-display font-extrabold tracking-[-0.035em] uppercase text-[#EAF7F6] leading-[0.88] select-none text-[44px] xs:text-[56px] sm:text-[72px] md:text-[84px] lg:text-[92px] xl:text-[102px] break-words"
          >
            ISMAIL<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#EAF7F6] via-[#6FF7EC] to-[#39C5BB]">
              GAYRATOV
            </span>
          </h1>
        </div>

        <!-- Role Subhead -->
        <div 
          class="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 transition-all duration-700 delay-200"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="font-mono text-xs sm:text-sm font-bold text-[#39C5BB] px-3 py-1 rounded-lg bg-[#0E1724] border border-[#162436]">
            {{ t.hero.role }}
          </div>
          <span class="text-[#7C9399] font-mono text-xs sm:text-sm">
            // {{ t.hero.subRole }}
          </span>
        </div>

        <!-- Narrative Pitch -->
        <p 
          class="mt-5 sm:mt-6 max-w-xl text-[#7C9399] text-sm sm:text-base md:text-lg leading-relaxed font-body font-normal transition-all duration-700 delay-300"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          {{ t.hero.pitch }}
        </p>

        <!-- Compact Horizontal Action Buttons -->
        <div 
          class="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 transition-all duration-700 delay-400 w-full"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <!-- Primary CTA: Direct Download PDF -->
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-2xl bg-[#39C5BB] hover:bg-[#6FF7EC] text-[#05080D] font-mono font-bold text-xs sm:text-sm tracking-wider glow-teal hover:glow-teal-lg transition-all duration-200 cursor-pointer shadow-lg focus:outline-none"
            @click="soundManager.playChime()"
            @mouseenter="soundManager.playHover()"
          >
            <FileDown class="w-4 h-4 text-[#05080D] group-hover:translate-y-0.5 transition-transform" />
            <span>{{ t.hero.downloadResume }}</span>
          </a>

          <!-- Telegram Contact -->
          <a
            :href="portfolioData.telegram"
            target="_blank"
            rel="noopener"
            class="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#0E1724] border border-[#162436] hover:border-[#39C5BB] text-[#EAF7F6] hover:text-[#6FF7EC] font-mono font-medium text-xs sm:text-sm tracking-wider transition-all duration-200 cursor-pointer focus:outline-none"
            @click="soundManager.playClick()"
            @mouseenter="soundManager.playHover()"
          >
            <Send class="w-4 h-4 text-[#39C5BB] group-hover:text-[#6FF7EC]" />
            <span>{{ t.hero.telegram }}</span>
            <ArrowUpRight class="w-4 h-4 text-[#7C9399] group-hover:text-[#6FF7EC] transition-transform" />
          </a>
        </div>

        <!-- 3 Quick Career Badges -->
        <div class="mt-8 pt-6 border-t border-[#162436]/80 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg font-mono">
          <div class="p-2.5 rounded-xl bg-[#0A1118] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">{{ t.hero.fintechExp }}</div>
            <div class="font-bold text-xs sm:text-sm text-[#EAF7F6] mt-0.5">{{ t.hero.years }}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-[#0A1118] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">{{ t.hero.degreeGpa }}</div>
            <div class="font-bold text-xs sm:text-sm text-[#39C5BB] mt-0.5">3.61 / 5.0</div>
          </div>
          <div class="p-2.5 rounded-xl bg-[#0A1118] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">{{ t.hero.englishLevel }}</div>
            <div class="font-bold text-xs sm:text-sm text-[#6FF7EC] mt-0.5">{{ t.hero.c1Level }}</div>
          </div>
        </div>

      </div>

      <!-- Right Column: Developer Portrait Photo (5 cols) -->
      <div 
        class="lg:col-span-5 flex justify-center transition-all duration-700 delay-300"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#162436] via-[#0E1724] to-[#05080D] border border-[#162436] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group select-none">
          
          <!-- Ambient Glow behind Photo -->
          <div class="absolute -inset-1 bg-gradient-to-tr from-[#39C5BB]/20 via-transparent to-[#FF6FA5]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <!-- Photo Container -->
          <div class="relative w-full h-full rounded-2xl overflow-hidden bg-[#05080D]">
            <img
              src="/isa-photo.png"
              alt="Ismail Gayratov — Frontend & Full-Stack Developer"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />

            <!-- Subtle Gradient Overlay for depth -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#05080D] via-transparent to-transparent opacity-80" />

            <!-- Bottom Floating Tag inside Photo -->
            <div class="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#05080D]/85 backdrop-blur-md border border-[#162436]/80 flex items-center justify-between font-mono text-xs">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-[#39C5BB] animate-pulse" />
                <span class="font-bold text-[#EAF7F6] tracking-wider">ISMAIL G.</span>
              </div>
              <span class="text-[#39C5BB] text-[11px]">Tashkent · UTC+5</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
