<script setup lang="ts">
import { ref } from 'vue'
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
        Selected Production Systems
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        Digital banking & <span class="text-[#39C5BB]">fintech architecture</span>.
      </h2>
      <p class="mt-3 text-[#7C9399] font-body text-sm sm:text-base max-w-2xl leading-relaxed">
        Engineered client interfaces and internal operations portals for licensed digital banking platforms, with focus on zero-regression test coverage and high runtime performance.
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
        Trustbank Digital Banking (DBO)
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
        Multicard Payment Processing
      </button>
    </div>

    <!-- Case Study Card -->
    <div class="glass-surface p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#162436] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left: System Highlights & Metrics (5 cols) -->
      <div class="lg:col-span-5 space-y-6">
        <div>
          <div class="text-xs font-mono text-[#39C5BB] uppercase">
            {{ activeTab === 'trustbank' ? 'Fintech / Digital Banking Platform' : 'Payment Gateways & Networks' }}
          </div>
          <h3 class="font-display font-bold text-2xl sm:text-3xl text-[#EAF7F6] mt-1">
            {{ activeTab === 'trustbank' ? 'Trustbank DBO & Admin' : 'Multicard Payment System' }}
          </h3>
          <div class="text-xs font-mono text-[#7C9399] mt-2">
            Tashkent, Uzbekistan · {{ activeTab === 'trustbank' ? 'Oct 2025 – Jun 2026' : 'Jul 2025 – Sep 2025' }}
          </div>
        </div>

        <p class="text-[#7C9399] text-sm leading-relaxed">
          {{ activeTab === 'trustbank' 
            ? 'Built customer-facing business logic for digital banking and maintained internal admin portals using Vue 3 and Vuetify in an Agile Scrum workflow.' 
            : 'Delivered client-facing payment transaction logic for Multibank and Trustbank DBO networks and maintained containerized admin tools.' 
          }}
        </p>

        <!-- Key Metrics Grid -->
        <div class="grid grid-cols-2 gap-3 pt-2 font-mono">
          <div class="p-3 rounded-xl bg-[#05080D] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">Testing Suite</div>
            <div class="text-xs sm:text-sm font-bold text-[#6FF7EC] mt-1">Vitest Coverage</div>
          </div>
          <div class="p-3 rounded-xl bg-[#05080D] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">Architecture</div>
            <div class="text-xs sm:text-sm font-bold text-[#39C5BB] mt-1">Vue 3 + Pinia</div>
          </div>
          <div class="p-3 rounded-xl bg-[#05080D] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">Environment</div>
            <div class="text-xs sm:text-sm font-bold text-[#EAF7F6] mt-1">Docker Containers</div>
          </div>
          <div class="p-3 rounded-xl bg-[#05080D] border border-[#162436]">
            <div class="text-[10px] text-[#7C9399] uppercase">Methodology</div>
            <div class="text-xs sm:text-sm font-bold text-[#EAF7F6] mt-1">Agile / Scrum</div>
          </div>
        </div>
      </div>

      <!-- Right: Engineering Deliverables (7 cols) -->
      <div class="lg:col-span-7 space-y-6">
        
        <div class="space-y-3">
          <div class="text-xs font-mono text-[#EAF7F6] uppercase font-bold tracking-wider">
            Engineering Scope & Achievements
          </div>

          <div v-if="activeTab === 'trustbank'" class="space-y-3">
            <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3">
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                Built customer-facing business logic for digital banking and developed the internal back-office administration panel using <strong>Vue 3</strong> and <strong>Vuetify</strong>.
              </div>
            </div>
            <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3">
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                Refactored existing codebase to enhance system performance, scalability, and maintainability, significantly speeding up onboarding for new developers.
              </div>
            </div>
            <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3">
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                Introduced unit and integration testing with <strong>Vitest</strong>, raising release stability and reducing regressions across high-load financial modules.
              </div>
            </div>
            <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3">
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                Collaborated with backend, QA, and UI design teams in Scrum sprints to ship regulatory-compliant features on schedule.
              </div>
            </div>
          </div>

          <div v-else class="space-y-3">
            <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3">
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                Developed client-facing transaction and payment logic for the digital banking systems (DBO) of Multibank and Trustbank.
              </div>
            </div>
            <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3">
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                Designed and maintained internal administrative interfaces using Vue.js, Vuetify, and containerized Docker environments.
              </div>
            </div>
            <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3">
              <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
              <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed">
                Delivered direct technical support with rapid root-cause diagnosis and resolution of production anomalies.
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
