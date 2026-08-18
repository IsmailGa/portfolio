<script setup lang="ts">
import { ref } from 'vue'
import { t } from '../i18n'
import { soundManager } from '../utils/sound'
import { CheckCircle2 } from 'lucide-vue-next'

const activeTab = ref<'trustbank' | 'multicard'>('trustbank')

const handleTab = (tab: 'trustbank' | 'multicard') => {
  activeTab.value = tab
  soundManager.playClick()
}
</script>

<template>
  <section id="systems" class="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto relative">
    
    <!-- Section Header -->
    <div class="mb-10 sm:mb-14">
      <div class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase mb-2">
        {{ t.systems.eyebrow }}
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        {{ t.systems.titleMain }} <span class="text-[#39C5BB]">{{ t.systems.titleAccent }}</span>
      </h2>
      <p class="mt-3 text-[#7C9399] font-body text-sm sm:text-base max-w-2xl leading-relaxed">
        {{ t.systems.desc }}
      </p>
    </div>

    <!-- Platform Selector Tabs -->
    <div class="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 select-none">
      <button
        type="button"
        class="px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39C5BB]"
        :class="[
          activeTab === 'trustbank'
            ? 'bg-[#39C5BB] text-[#05080D] shadow-[0_0_20px_rgba(57,197,187,0.35)]'
            : 'bg-[#0E1724] text-[#7C9399] border border-[#162436] hover:text-[#EAF7F6]'
        ]"
        @click="handleTab('trustbank')"
        @mouseenter="soundManager.playHover()"
      >
        {{ t.systems.tabTrustbank }}
      </button>

      <button
        type="button"
        class="px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39C5BB]"
        :class="[
          activeTab === 'multicard'
            ? 'bg-[#39C5BB] text-[#05080D] shadow-[0_0_20px_rgba(57,197,187,0.35)]'
            : 'bg-[#0E1724] text-[#7C9399] border border-[#162436] hover:text-[#EAF7F6]'
        ]"
        @click="handleTab('multicard')"
        @mouseenter="soundManager.playHover()"
      >
        {{ t.systems.tabMulticard }}
      </button>
    </div>

    <!-- Case Study Card -->
    <div class="glass-surface p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#162436] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left: System Highlights & Metrics (5 cols) -->
      <div class="lg:col-span-5 space-y-6">
        <div>
          <div class="text-xs font-mono text-[#39C5BB] uppercase">
            {{ activeTab === 'trustbank' ? t.systems.trustbankSubtitle : t.systems.multicardSubtitle }}
          </div>
          <h3 class="font-display font-bold text-2xl sm:text-3xl text-[#EAF7F6] mt-1">
            {{ activeTab === 'trustbank' ? t.systems.trustbankTitle : t.systems.multicardTitle }}
          </h3>
          <div class="text-xs font-mono text-[#7C9399] mt-2">
            {{ activeTab === 'trustbank' ? t.systems.trustbankPeriod : t.systems.multicardPeriod }}
          </div>
        </div>

        <p class="text-[#7C9399] text-sm leading-relaxed">
          {{ activeTab === 'trustbank' ? t.systems.trustbankSummary : t.systems.multicardSummary }}
        </p>

        <!-- Key Metrics Grid -->
        <div class="grid grid-cols-2 gap-3 pt-2 font-mono">
          <div class="p-3 rounded-xl bg-[#05080D] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">Testing Suite</div>
            <div class="text-xs sm:text-sm font-bold text-[#6FF7EC] mt-1">{{ t.systems.metricTest }}</div>
          </div>
          <div class="p-3 rounded-xl bg-[#05080D] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">Architecture</div>
            <div class="text-xs sm:text-sm font-bold text-[#39C5BB] mt-1">{{ t.systems.metricArch }}</div>
          </div>
          <div class="p-3 rounded-xl bg-[#05080D] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">Environment</div>
            <div class="text-xs sm:text-sm font-bold text-[#EAF7F6] mt-1">{{ t.systems.metricEnv }}</div>
          </div>
          <div class="p-3 rounded-xl bg-[#05080D] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">Methodology</div>
            <div class="text-xs sm:text-sm font-bold text-[#EAF7F6] mt-1">{{ t.systems.metricMethod }}</div>
          </div>
        </div>
      </div>

      <!-- Right: Engineering Deliverables (7 cols) -->
      <div class="lg:col-span-7 space-y-6">
        
        <div class="space-y-3">
          <div class="text-xs font-mono text-[#EAF7F6] uppercase font-bold tracking-wider">
            {{ t.systems.scopeHeader }}
          </div>

          <div v-if="activeTab === 'trustbank'" class="space-y-3">
            <div 
              v-for="(bullet, bIdx) in t.systems.trustbankBullets" 
              :key="bIdx"
              class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3"
            >
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                {{ bullet }}
              </div>
            </div>
          </div>

          <div v-else class="space-y-3">
            <div 
              v-for="(bullet, bIdx) in t.systems.multicardBullets" 
              :key="bIdx"
              class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3"
            >
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                {{ bullet }}
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#162436]">
          <span 
            v-for="tag in (activeTab === 'trustbank' ? ['Vue 3', 'Vuetify', 'TypeScript', 'Vitest', 'Pinia', 'Docker', 'REST API'] : ['Vue.js', 'Vuetify', 'Docker', 'JavaScript', 'Fintech DBO', 'Agile / Scrum'])" 
            :key="tag"
            class="px-3 py-1 rounded-md bg-[#05080D] border border-[#162436] font-mono text-xs text-[#39C5BB]"
          >
            {{ tag }}
          </span>
        </div>

      </div>

    </div>

  </section>
</template>
