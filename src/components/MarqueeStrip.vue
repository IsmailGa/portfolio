<script setup lang="ts">
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'

const items = portfolioData.tickerItems
</script>

<template>
  <div 
    class="w-full bg-[#0A1118] border-y border-[#162432] py-2.5 sm:py-3.5 overflow-hidden select-none relative z-10 group"
    @mouseenter="soundManager.playHover()"
  >
    <!-- Background subtle cyan gradient accent -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#39C5BB]/5 to-transparent pointer-events-none" />

    <div class="animate-marquee flex items-center whitespace-nowrap">
      <!-- Repeated ticker list for seamless loop -->
      <div v-for="loop in 2" :key="loop" class="flex items-center gap-6 sm:gap-8 px-2 sm:px-4">
        <div 
          v-for="(item, idx) in items" 
          :key="idx"
          class="flex items-center gap-4 sm:gap-6"
        >
          <span class="font-mono text-[11px] sm:text-[13px] tracking-[0.14em] font-medium text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors duration-300">
            {{ item }}
          </span>
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#39C5BB]" />
        </div>
      </div>
    </div>
  </div>
</template>
