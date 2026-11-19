<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../i18n'

const items = computed(() => t.value.ticker)
</script>

<template>
  <div
    class="marquee-pause relative z-10 w-full select-none overflow-hidden border-y border-line bg-alt py-4"
    aria-hidden="true"
  >
    <div class="animate-marquee items-center whitespace-nowrap">
      <div v-for="loop in 2" :key="loop" class="flex items-center">
        <div v-for="(item, idx) in items" :key="idx" class="flex items-center">
          <span class="px-6 font-mono text-xs font-medium tracking-[0.14em] text-muted sm:text-[13px]">{{ item }}</span>
          <span class="h-1 w-1 rounded-full bg-accent-solid" />
        </div>
      </div>
    </div>
  </div>
</template>
