<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../i18n'
import { soundManager } from '../utils/sound'
import { ShieldCheck, Cpu, Layers, GitBranch } from 'lucide-vue-next'

const iconMap = [ShieldCheck, Cpu, Layers, GitBranch]

const highlights = computed(() => {
  return t.value.about.highlights.map((h, i) => ({
    ...h,
    icon: iconMap[i % iconMap.length]
  }))
})
</script>

<template>
  <section id="about" class="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative scroll-mt-24">
    
    <!-- Section Header -->
    <div class="mb-12 sm:mb-16">
      <div class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase mb-2">
        {{ t.about.eyebrow }}
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        {{ t.about.titleMain }} <span class="text-[#39C5BB]">{{ t.about.titleAccent }}</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left Narrative Card (5 cols) -->
      <div class="lg:col-span-5 glass-surface p-6 sm:p-8 rounded-2xl border border-[#162436] space-y-6">
        <h3 class="font-display font-bold text-xl text-[#EAF7F6]">
          {{ t.about.quote }}
        </h3>

        <p class="text-[#7C9399] font-body text-sm sm:text-base leading-relaxed">
          {{ t.about.summary }}
        </p>

        <div class="pt-4 border-t border-[#162436] space-y-2 font-mono text-xs">
          <div class="flex items-center justify-between p-3 rounded-lg bg-[#05080D] border border-[#162436]">
            <span class="text-[#7C9399]">{{ t.about.degreeLabel }}</span>
            <span class="text-[#EAF7F6] font-semibold">KIUT ISE (GPA 3.61)</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-[#05080D] border border-[#162436]">
            <span class="text-[#7C9399]">{{ t.about.englishLabel }}</span>
            <span class="text-[#6FF7EC] font-semibold">C1 Advanced</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-[#05080D] border border-[#162436]">
            <span class="text-[#7C9399]">{{ t.about.specializationLabel }}</span>
            <span class="text-[#39C5BB] font-semibold">{{ t.about.specializationValue }}</span>
          </div>
        </div>
      </div>

      <!-- Right Feature Cards Grid (7 cols) -->
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div 
          v-for="(item, idx) in highlights" 
          :key="idx"
          class="glass-surface p-6 rounded-2xl border border-[#162436] hover:border-[#39C5BB]/40 transition-all duration-200 group"
          @mouseenter="soundManager.playHover()"
        >
          <div class="w-10 h-10 rounded-xl bg-[#05080D] border border-[#162436] group-hover:border-[#39C5BB] flex items-center justify-center text-[#39C5BB] group-hover:text-[#6FF7EC] transition-colors mb-4">
            <component :is="item.icon" class="w-5 h-5" />
          </div>

          <h4 class="font-display font-semibold text-lg text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors mb-2">
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
