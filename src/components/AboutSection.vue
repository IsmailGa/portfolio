<script setup lang="ts">
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { ShieldCheck, Cpu, Layers, GitBranch, Terminal } from 'lucide-vue-next'

const highlights = [
  {
    icon: ShieldCheck,
    tag: 'FINTECH // DBO',
    title: 'Digital Banking Architecture',
    desc: 'Deep domain experience in banking business logic, multi-role admin panels (Trustbank & Multibank), payment flow integrations, and compliance-grade interfaces.'
  },
  {
    icon: Cpu,
    tag: 'RUNTIME // FPS',
    title: 'Modern Vue 3 & React Stack',
    desc: 'Expertise with Composition API, TypeScript, Pinia/Zustand, Next.js, and Vuetify, focused on clean architecture and high-FPS runtime performance.'
  },
  {
    icon: Layers,
    tag: 'QA // RELIABILITY',
    title: 'Test-Driven Stability',
    desc: 'Proactive test-driven approach with unit & integration tests in Vitest, cutting down regressions and accelerating release cycles in Agile sprints.'
  },
  {
    icon: GitBranch,
    tag: 'DEVOPS // CI_CD',
    title: 'Containerization & CI/CD',
    desc: 'Hands-on delivery with Docker, GitLab CI/CD, Nginx, and cloud virtualized environments (VMware), ensuring smooth staging-to-production pipelines.'
  }
]
</script>

<template>
  <section id="about" class="py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
    
    <!-- Section Eyebrow & Title -->
    <div class="mb-10 sm:mb-14">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A1118] border border-[#162432] text-[#39C5BB] font-mono text-xs tracking-wider uppercase mb-3 select-none">
        <Terminal class="w-3.5 h-3.5" />
        <span>01 // PROFILE & CORE VALUES</span>
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        Architecting resilient <span class="text-[#39C5BB]">fintech systems</span> with high-craft UI.
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
      
      <!-- Left Narrative Card (5 cols) -->
      <div class="lg:col-span-5 glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-[#162432] relative overflow-hidden corner-crosshair">
        
        <div class="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#162432] font-mono text-[11px] sm:text-xs text-[#7C9399]">
          <span>ENGINEERING_STATEMENT</span>
          <span class="text-[#39C5BB]">[SYS:2026 // DOSSIER]</span>
        </div>

        <p class="text-[#7C9399] font-body text-sm sm:text-base leading-relaxed mb-6">
          {{ portfolioData.summary }}
        </p>

        <div class="pt-4 border-t border-[#162432] space-y-2 font-mono text-xs">
          <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#05080D] border border-[#162432]">
            <span class="text-[#7C9399]">ACADEMIC DEGREE:</span>
            <span class="text-[#EAF7F6] font-semibold">KIUT ISE (GPA 3.61)</span>
          </div>
          <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#05080D] border border-[#162432]">
            <span class="text-[#7C9399]">ENGLISH LEVEL:</span>
            <span class="text-[#6FF7EC] font-semibold">C1 Advanced</span>
          </div>
          <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#05080D] border border-[#162432]">
            <span class="text-[#7C9399]">PRIMARY STACK:</span>
            <span class="text-[#39C5BB] font-semibold">Vue 3 / TS / Vitest</span>
          </div>
        </div>
      </div>

      <!-- Right Feature Cards Grid (7 cols) -->
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <div 
          v-for="(item, idx) in highlights" 
          :key="idx"
          class="glass-panel p-5 sm:p-6 rounded-2xl border border-[#162432] hover:border-[#39C5BB]/50 hover:bg-[#0E1722] transition-all duration-200 group"
          @mouseenter="soundManager.playHover()"
        >
          <div class="flex items-center justify-between mb-3.5">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#05080D] border border-[#162432] group-hover:border-[#39C5BB] flex items-center justify-center text-[#39C5BB] group-hover:text-[#6FF7EC] transition-colors shadow-sm">
              <component :is="item.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span class="font-mono text-[9px] sm:text-[10px] text-[#7C9399] bg-[#05080D] px-2 py-0.5 rounded border border-[#162432]">
              {{ item.tag }}
            </span>
          </div>

          <h4 class="font-display font-semibold text-base sm:text-lg text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors mb-1.5 sm:mb-2">
            {{ item.title }}
          </h4>

          <p class="text-xs sm:text-sm text-[#7C9399] leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>

    </div>

  </section>
</template>
