<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { FileDown, Send, ArrowUpRight, Code2 } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'open-resume'): void
  (e: 'toast', msg: string): void
}>()

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-cyber-grid"
  >
    <!-- Background Ambient Glow Spotlights -->
    <div class="absolute top-1/4 right-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-[#39C5BB]/8 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />
    <div class="absolute bottom-10 left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#0E1722]/80 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none -z-10" />

    <div class="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center my-auto">
      
      <!-- Left Column: Typography & Action CTAs (7 cols) -->
      <div class="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
        
        <!-- Top Technical Decal & Status -->
        <div 
          class="flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#0A1118] border border-[#162432] w-fit mb-5 sm:mb-6 transition-all duration-700 transform select-none"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <span class="font-mono text-[10px] sm:text-[11px] text-[#39C5BB] font-semibold tracking-wider">
            [SYS:MIKU_01]
          </span>
          <span class="text-[#162432] hidden xs:inline">|</span>
          <span class="font-mono text-[10px] sm:text-xs text-[#EAF7F6] tracking-wider">
            AVAILABLE FOR CONTRACT & FULL-TIME
          </span>
          <span class="text-[#162432] hidden sm:inline">|</span>
          <span class="font-mono text-[10px] sm:text-xs text-[#7C9399] hidden sm:inline">
            TASHKENT (UTC+5)
          </span>
        </div>

        <!-- Sculptural Display Title (haoqi.design / zalak-patel) -->
        <div 
          class="transition-all duration-700 delay-100 transform"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <h1 
            class="font-display font-extrabold tracking-[-0.035em] uppercase text-[#EAF7F6] leading-[0.9] sm:leading-[0.88] select-none text-[42px] xs:text-[54px] sm:text-[76px] md:text-[96px] lg:text-[104px] xl:text-[124px] break-words"
          >
            ISMAIL
          </h1>
        </div>

        <!-- Japanese Aesthetic Sub-Decal & Role -->
        <div 
          class="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3 transition-all duration-700 delay-200 transform"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded bg-[#0E1722] border border-[#162432] text-[#39C5BB] font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider">
            <Code2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB] shrink-0" />
            <span>&lt;FRONTEND / FULL-STACK DEVELOPER /&gt;</span>
          </div>
          <span class="text-[#7C9399] font-mono text-[11px] sm:text-xs">
            初音ミク · FINTECH DBO SPECIALIST
          </span>
        </div>

        <!-- Summary Pitch -->
        <p 
          class="mt-4 sm:mt-6 max-w-xl text-[#7C9399] text-sm sm:text-base md:text-lg leading-relaxed font-body font-normal transition-all duration-700 delay-300 transform"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          2+ years building mission-critical client interfaces and multi-role admin panels for digital banking (DBO) platforms. Specializing in <span class="text-[#EAF7F6] font-medium">Vue 3</span>, <span class="text-[#EAF7F6] font-medium">TypeScript</span>, and <span class="text-[#EAF7F6] font-medium">React</span> with rigorous Vitest testing.
        </p>

        <!-- CTAs -->
        <div 
          class="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 transition-all duration-700 delay-400 transform w-full sm:w-auto"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <!-- Primary CTA: Direct Download PDF -->
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#39C5BB] hover:bg-[#6FF7EC] text-[#05080D] font-mono font-bold text-xs sm:text-sm tracking-wider glow-teal hover:glow-teal-lg transition-all duration-200 cursor-pointer"
            @click="soundManager.playChime()"
            @mouseenter="soundManager.playHover()"
          >
            <FileDown class="w-4 h-4 text-[#05080D] group-hover:translate-y-0.5 transition-transform" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>

          <!-- View Dossier Modal Trigger -->
          <button
            type="button"
            class="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#0A1118] border border-[#162432] hover:border-[#39C5BB] text-[#EAF7F6] hover:text-[#6FF7EC] font-mono font-medium text-xs sm:text-sm tracking-wider transition-all duration-200 cursor-pointer"
            @click="emit('open-resume'); soundManager.playClick()"
            @mouseenter="soundManager.playHover()"
          >
            <span>VIEW DOSSIER</span>
          </button>

          <!-- Ghost Outline Button: Telegram -->
          <a
            :href="portfolioData.telegram"
            target="_blank"
            rel="noopener"
            class="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#0A1118] border border-[#162432] hover:border-[#39C5BB] text-[#EAF7F6] hover:text-[#6FF7EC] font-mono font-medium text-xs sm:text-sm tracking-wider transition-all duration-200 cursor-pointer"
            @click="soundManager.playClick()"
            @mouseenter="soundManager.playHover()"
          >
            <Send class="w-4 h-4 text-[#39C5BB] group-hover:text-[#6FF7EC]" />
            <span>TELEGRAM</span>
            <ArrowUpRight class="w-4 h-4 text-[#7C9399] group-hover:text-[#6FF7EC] transition-transform" />
          </a>
        </div>

        <!-- Quick Spec Telemetry Bar -->
        <div 
          class="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#162432] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#7C9399] transition-all duration-700 delay-500 transform"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="flex items-center gap-1.5">
            <span class="text-[#39C5BB]">CORE:</span>
            <span class="text-[#EAF7F6]">Vue 3 (Composition API) / TS</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-[#39C5BB]">TESTS:</span>
            <span class="text-[#EAF7F6]">Vitest Unit & Integration</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-[#39C5BB]">ENGLISH:</span>
            <span class="text-[#6FF7EC]">C1 Advanced Verified</span>
          </div>
        </div>

      </div>

      <!-- Right Column: Bespoke Miku Cyber Figure & Telemetry Card (5 cols) -->
      <div 
        class="lg:col-span-5 flex justify-center transition-all duration-700 delay-300 transform order-1 lg:order-2"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md glass-panel p-3.5 sm:p-4 rounded-2xl border border-[#162432] hover:border-[#39C5BB]/60 transition-all duration-300 group shadow-2xl corner-crosshair">
          
          <!-- Card Top Bar Decal -->
          <div class="flex items-center justify-between px-2 pb-2.5 mb-2.5 border-b border-[#162432] font-mono text-[10px] sm:text-[11px]">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-[#FF6FA5]">01</span>
              <span class="text-[#7C9399]">VOCALOID_CANVAS // SYNTH</span>
            </div>
            <div class="text-[#39C5BB] font-semibold tracking-wider">
              ONLINE
            </div>
          </div>

          <!-- Miku Cyber Visual Image -->
          <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-[#05080D] border border-[#162432] group-hover:border-[#39C5BB]/40 transition-colors">
            <img 
              src="/assets/miku_hero.jpg" 
              alt="Hatsune Miku Cyber Visual Aesthetic" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            <!-- Gradient Overlay Vignette -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#05080D] via-transparent to-transparent opacity-80" />

            <!-- Bottom Audio Visualizer Decal on Image -->
            <div class="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between bg-[#0A1118]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-[#162432]">
              <div>
                <div class="font-mono text-[9px] sm:text-[10px] text-[#7C9399]">AUDIO SPECTRUM VISOR</div>
                <div class="font-display font-bold text-[11px] sm:text-xs text-[#EAF7F6]">MIKU PULSE ENGINE v2.6</div>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-1 h-3 bg-[#39C5BB] rounded-full" />
                <div class="w-1 h-5 bg-[#6FF7EC] rounded-full" />
                <div class="w-1 h-2 bg-[#FF6FA5] rounded-full" />
                <div class="w-1 h-4 bg-[#39C5BB] rounded-full" />
              </div>
            </div>
          </div>

          <!-- Card Bottom Stats Grid -->
          <div class="mt-3 grid grid-cols-3 gap-2 text-center font-mono">
            <div class="p-2 rounded-lg bg-[#05080D] border border-[#162432]">
              <div class="text-[9px] sm:text-[10px] text-[#7C9399]">EXPERIENCE</div>
              <div class="font-bold text-[11px] sm:text-xs text-[#EAF7F6] mt-0.5">2+ YEARS</div>
            </div>
            <div class="p-2 rounded-lg bg-[#05080D] border border-[#162432]">
              <div class="text-[9px] sm:text-[10px] text-[#7C9399]">ENGINEERING</div>
              <div class="font-bold text-[11px] sm:text-xs text-[#39C5BB] mt-0.5">3.61 GPA</div>
            </div>
            <div class="p-2 rounded-lg bg-[#05080D] border border-[#162432]">
              <div class="text-[9px] sm:text-[10px] text-[#7C9399]">LANGUAGES</div>
              <div class="font-bold text-[11px] sm:text-xs text-[#6FF7EC] mt-0.5">C1 / RU / KR</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
