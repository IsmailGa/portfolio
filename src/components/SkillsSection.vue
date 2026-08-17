<script setup lang="ts">
import { ref, computed } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { Cpu } from 'lucide-vue-next'

const selectedCategory = ref<string>('ALL')
const categories = portfolioData.skillCategories

const categoryTabs = [
  { code: 'ALL', label: 'All Technologies' },
  ...categories.map(c => ({ code: c.code, label: c.title }))
]

const filteredCategories = computed(() => {
  if (selectedCategory.value === 'ALL') {
    return categories
  }
  return categories.filter(c => c.code === selectedCategory.value)
})

const handleCategoryChange = (code: string) => {
  selectedCategory.value = code
  soundManager.playClick()
}
</script>

<template>
  <section id="skills" class="py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
    
    <!-- Section Eyebrow & Title -->
    <div class="mb-8 sm:mb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A1118] border border-[#162432] text-[#39C5BB] font-mono text-xs tracking-wider uppercase mb-3 select-none">
        <Cpu class="w-3.5 h-3.5" />
        <span>04 // TECHNICAL ARSENAL</span>
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        Engineered with <span class="text-[#39C5BB]">modern tools</span> & precision.
      </h2>
      <p class="mt-2 text-[#7C9399] font-body text-xs sm:text-sm md:text-base max-w-2xl">
        Every chip reflects hands-on production code, from high-load Vue 3 banking UIs to Docker containers and test suites.
      </p>
    </div>

    <!-- Category Filter Pills (Horizontal scroll on mobile with clean wrap) -->
    <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 pb-3 sm:pb-4 border-b border-[#162432]">
      <button
        v-for="tab in categoryTabs"
        :key="tab.code"
        type="button"
        class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-mono text-[11px] sm:text-xs tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5"
        :class="[
          selectedCategory === tab.code
            ? 'bg-[#39C5BB] text-[#05080D] font-bold shadow-[0_0_15px_rgba(57,197,187,0.35)]'
            : 'bg-[#0A1118] text-[#7C9399] border border-[#162432] hover:text-[#EAF7F6] hover:border-[#39C5BB]/40'
        ]"
        @click="handleCategoryChange(tab.code)"
        @mouseenter="soundManager.playHover()"
      >
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- Categories Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      
      <div 
        v-for="category in filteredCategories" 
        :key="category.code"
        class="glass-panel p-4 sm:p-6 rounded-2xl border border-[#162432] hover:border-[#39C5BB]/40 transition-all duration-200 flex flex-col justify-between corner-crosshair"
      >
        <div>
          <!-- Category Header with Technical Marker -->
          <div class="flex items-center justify-between gap-2 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-[#162432]">
            <h3 class="font-display font-semibold text-base sm:text-lg text-[#EAF7F6]">
              {{ category.title }}
            </h3>
            <span class="font-mono text-[10px] text-[#39C5BB] bg-[#05080D] px-2 py-0.5 rounded border border-[#162432]">
              SYS:{{ category.code }}
            </span>
          </div>

          <!-- Skill Chips Grid -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="group relative inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-mono text-[11px] sm:text-xs bg-[#05080D] border border-[#162432] text-[#EAF7F6] hover:border-[#39C5BB] hover:text-[#6FF7EC] hover:bg-[#0E1722] transition-all duration-150 cursor-default select-none shadow-sm"
              @mouseenter="soundManager.playHover()"
            >
              <span class="text-[#39C5BB]/70 font-mono">&gt;</span>
              <span>{{ skill.name }}</span>
              <span v-if="skill.featured" class="text-[9px] text-[#FF6FA5] font-semibold ml-0.5">★</span>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-[#162432] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#7C9399]">
          <span>{{ category.skills.length }} modules</span>
          <span class="text-[#39C5BB]">VERIFIED</span>
        </div>

      </div>

    </div>

  </section>
</template>
