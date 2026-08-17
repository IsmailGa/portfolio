<script setup lang="ts">
import { ref } from 'vue'
import { soundManager } from '../utils/sound'
import { Landmark, CheckCircle2 } from 'lucide-vue-next'

const activeTab = ref<'trustbank' | 'multicard'>('trustbank')

const handleTab = (tab: 'trustbank' | 'multicard') => {
  activeTab.value = tab
  soundManager.playClick()
}
</script>

<template>
  <section id="fintech" class="py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
    
    <!-- Section Eyebrow & Title -->
    <div class="mb-10 sm:mb-14">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A1118] border border-[#162432] text-[#39C5BB] font-mono text-xs tracking-wider uppercase mb-3 select-none">
        <Landmark class="w-3.5 h-3.5" />
        <span>02 // FLAGSHIP FINTECH & DBO PLATFORMS</span>
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        Mission-critical <span class="text-[#39C5BB]">digital banking</span> architecture.
      </h2>
      <p class="mt-2 text-[#7C9399] font-body text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
        Architecting robust client interfaces and internal operations portals for licensed banking platforms with strict uptime, zero-regression Vitest pipelines, and Docker containerization.
      </p>
    </div>

    <!-- Platform Toggle Switcher -->
    <div class="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 mb-6 sm:mb-8 select-none w-full sm:w-auto">
      <button
        type="button"
        class="px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between xs:justify-start gap-2"
        :class="[
          activeTab === 'trustbank'
            ? 'bg-[#39C5BB] text-[#05080D] shadow-[0_0_18px_rgba(57,197,187,0.4)]'
            : 'bg-[#0A1118] text-[#7C9399] border border-[#162432] hover:text-[#EAF7F6]'
        ]"
        @click="handleTab('trustbank')"
        @mouseenter="soundManager.playHover()"
      >
        <span>TRUSTBANK DBO PLATFORM</span>
        <span class="text-[10px] opacity-75">[2025–2026]</span>
      </button>

      <button
        type="button"
        class="px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between xs:justify-start gap-2"
        :class="[
          activeTab === 'multicard'
            ? 'bg-[#39C5BB] text-[#05080D] shadow-[0_0_18px_rgba(57,197,187,0.4)]'
            : 'bg-[#0A1118] text-[#7C9399] border border-[#162432] hover:text-[#EAF7F6]'
        ]"
        @click="handleTab('multicard')"
        @mouseenter="soundManager.playHover()"
      >
        <span>MULTICARD PAYMENT SYSTEM</span>
        <span class="text-[10px] opacity-75">[2025]</span>
      </button>
    </div>

    <!-- Showcase Container (Glass & HUD) -->
    <div class="glass-panel p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#162432] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center corner-crosshair">
      
      <!-- Left: Visual HUD Telemetry Graphic (6 cols) -->
      <div class="lg:col-span-6 space-y-3 sm:space-y-4">
        <div class="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#162432] bg-[#05080D] group">
          <img 
            src="/assets/fintech_hud.jpg" 
            alt="Fintech Digital Banking HUD Interface" 
            class="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
          />
          <div class="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#0A1118]/90 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-md border border-[#162432] font-mono text-[9px] sm:text-[10px] text-[#39C5BB]">
            SYS_TELEMETRY // {{ activeTab.toUpperCase() }}
          </div>
          <div class="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-[#0A1118]/90 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-md border border-[#162432] font-mono text-[9px] sm:text-[10px] text-[#6FF7EC]">
            VUE 3 · VUETIFY · VITEST
          </div>
        </div>

        <!-- Telemetry Stats Grid -->
        <div class="grid grid-cols-3 gap-2 sm:gap-3 font-mono text-center">
          <div class="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#05080D] border border-[#162432]">
            <div class="text-[#7C9399] text-[8px] xs:text-[9px] sm:text-[10px]">RELIABILITY</div>
            <div class="text-[#39C5BB] font-bold text-[11px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">99.9% UPTIME</div>
          </div>
          <div class="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#05080D] border border-[#162432]">
            <div class="text-[#7C9399] text-[8px] xs:text-[9px] sm:text-[10px]">TEST COVERAGE</div>
            <div class="text-[#6FF7EC] font-bold text-[11px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">VITEST SUITES</div>
          </div>
          <div class="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#05080D] border border-[#162432]">
            <div class="text-[#7C9399] text-[8px] xs:text-[9px] sm:text-[10px]">CONTAINER</div>
            <div class="text-[#EAF7F6] font-bold text-[11px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">DOCKER PROD</div>
          </div>
        </div>
      </div>

      <!-- Right: Technical Breakdown & Metrics (6 cols) -->
      <div class="lg:col-span-6 space-y-4 sm:space-y-6">
        
        <div v-if="activeTab === 'trustbank'" class="space-y-3 sm:space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-mono text-xs text-[#39C5BB] bg-[#05080D] px-2.5 py-1 rounded-md border border-[#162432]">
              PRODUCTION FINTECH
            </span>
            <span class="text-xs font-mono text-[#7C9399]">Oct 2025 – Jun 2026</span>
          </div>

          <h3 class="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#EAF7F6] leading-tight">
            Trustbank Digital Banking & Admin Engine
          </h3>

          <p class="text-[#7C9399] font-body text-xs sm:text-sm md:text-base leading-relaxed">
            Engineered core business logic for digital banking (DBO) operations and built high-density internal back-office administration portals using Vue 3 and Vuetify.
          </p>

          <div class="space-y-2 pt-1">
            <div class="flex items-start gap-2 text-xs sm:text-sm text-[#EAF7F6]/90">
              <CheckCircle2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <span>Architected complex customer transactions and multi-level role-based authorization interfaces.</span>
            </div>
            <div class="flex items-start gap-2 text-xs sm:text-sm text-[#EAF7F6]/90">
              <CheckCircle2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <span>Introduced Vitest unit & integration test suites, preventing regressions in production financial logic.</span>
            </div>
            <div class="flex items-start gap-2 text-xs sm:text-sm text-[#EAF7F6]/90">
              <CheckCircle2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <span>Refactored legacy codebases to streamline developer onboarding and elevate runtime FPS.</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-[#162432]">
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">Vue 3</span>
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">Vuetify</span>
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">TypeScript</span>
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">Vitest</span>
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">Docker</span>
          </div>
        </div>

        <div v-else class="space-y-3 sm:space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-mono text-xs text-[#39C5BB] bg-[#05080D] px-2.5 py-1 rounded-md border border-[#162432]">
              PAYMENTS & GATEWAYS
            </span>
            <span class="text-xs font-mono text-[#7C9399]">Jul 2025 – Sep 2025</span>
          </div>

          <h3 class="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#EAF7F6] leading-tight">
            Multicard Payment Processing Ecosystem
          </h3>

          <p class="text-[#7C9399] font-body text-xs sm:text-sm md:text-base leading-relaxed">
            Delivered client-facing DBO features and designed administrative interfaces for Multibank and Trustbank payment processing networks.
          </p>

          <div class="space-y-2 pt-1">
            <div class="flex items-start gap-2 text-xs sm:text-sm text-[#EAF7F6]/90">
              <CheckCircle2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <span>Developed high-performance client transaction views and payment gateway validation flows.</span>
            </div>
            <div class="flex items-start gap-2 text-xs sm:text-sm text-[#EAF7F6]/90">
              <CheckCircle2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <span>Maintained Dockerized development and production pipelines for seamless deployment.</span>
            </div>
            <div class="flex items-start gap-2 text-xs sm:text-sm text-[#EAF7F6]/90">
              <CheckCircle2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <span>Conducted rapid root-cause incident troubleshooting and client technical support.</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-[#162432]">
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">Vue.js</span>
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">Docker</span>
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">Fintech DBO</span>
            <span class="px-2.5 py-1 rounded-md bg-[#05080D] border border-[#162432] font-mono text-[11px] sm:text-xs text-[#39C5BB]">Agile / Scrum</span>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>
