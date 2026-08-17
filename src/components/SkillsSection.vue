<script setup lang="ts">
import { ref, computed } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'

const selectedCategory = ref<string>('ALL')
const categories = portfolioData.skillCategories

const categoryTabs = [
  { code: 'ALL', label: 'All Modules' },
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
  <section id="capabilities" class="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto relative">
    
    <!-- Section Header -->
    <div class="mb-10 sm:mb-12">
      <div class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase mb-2">
        Technical Capabilities
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        Core stack & <span class="text-[#39C5BB]">engineering tools</span>.
      </h2>
      <p class="mt-2 text-[#7C9399] font-body text-sm sm:text-base max-w-2xl">
        A hands-on production toolkit spanning reactive UI frameworks, unit & integration test suites, containerization, and relational databases.
      </p>
    </div>

    <!-- Category Filter Tabs -->
    <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 pb-4 border-b border-[#162436]">
      <button
        v-for="tab in categoryTabs"
        :key="tab.code"
        type="button"
        class="px-3.5 sm:px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39C5BB]"
        :class="[
          selectedCategory === tab.code
            ? 'bg-[#39C5BB] text-[#05080D] font-bold shadow-[0_0_15px_rgba(57,197,187,0.35)]'
            : 'bg-[#0E1724] text-[#7C9399] border border-[#162436] hover:text-[#EAF7F6] hover:border-[#39C5BB]/40'
        ]"
        @click="handleCategoryChange(tab.code)"
        @mouseenter="soundManager.playHover()"
      >
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- Capabilities Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      
      <div 
        v-for="category in filteredCategories" 
        :key="category.code"
        class="glass-surface p-6 rounded-2xl border border-[#162436] hover:border-[#39C5BB]/40 transition-all duration-200 flex flex-col justify-between"
      >
        <div>
          <!-- Category Title -->
          <div class="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#162436]">
            <h3 class="font-display font-semibold text-base sm:text-lg text-[#EAF7F6]">
              {{ category.title }}
            </h3>
            <span class="font-mono text-[11px] text-[#39C5BB]">
              {{ category.skills.length }} items
            </span>
          </div>

          <!-- Skill Chips -->
          <div class="flex flex-wrap gap-2">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs bg-[#05080D] border border-[#162436] text-[#EAF7F6] hover:border-[#39C5BB] hover:text-[#6FF7EC] transition-all duration-150 cursor-default select-none"
              @mouseenter="soundManager.playHover()"
            >
              <span class="text-[#39C5BB] font-mono text-[10px]">&gt;</span>
              <span>{{ skill.name }}</span>
              <span v-if="skill.featured" class="text-[9px] text-[#FF6FA5] font-semibold">★</span>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-[#162436]/60 flex items-center justify-between text-[11px] font-mono text-[#7C9399]">
          <span>Production Ready</span>
          <span class="text-[#39C5BB]">Verified</span>
        </div>

      </div>

    </div>

  </section>
</template>
