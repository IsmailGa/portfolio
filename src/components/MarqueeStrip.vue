<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../i18n'
import { soundManager } from '../utils/sound'

const items = computed(() => t.value.ticker)
</script>

<template>
  <div 
    class="w-full bg-[#0A1118] border-y border-[#162436] py-2.5 sm:py-3.5 overflow-hidden select-none relative z-10 group"
    @mouseenter="soundManager.playHover()"
  >
    <div class="animate-marquee flex items-center whitespace-nowrap">
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
