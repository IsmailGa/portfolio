<script setup lang="ts">
interface Props {
  bars?: number
  label?: string
}

withDefaults(defineProps<Props>(), {
  bars: 7,
  label: 'MIKU_PULSE_FREQ'
})
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center py-8 sm:py-12 select-none overflow-hidden" aria-hidden="true">
    <div class="flex items-center gap-3 sm:gap-6 w-full max-w-4xl px-4 sm:px-6">
      <!-- Left fade line -->
      <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#162432] to-[#39C5BB]/40" />

      <!-- Equalizer Visualizer Bars -->
      <div class="flex items-center gap-1 sm:gap-1.5 h-7 sm:h-8 px-2.5 sm:px-3 py-1 rounded-full bg-[#0A1118]/80 border border-[#162432] shadow-[0_0_15px_rgba(57,197,187,0.15)]">
        <span class="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#7C9399] mr-1 hidden xs:inline-block">
          {{ label }}
        </span>
        <div class="w-0.5 sm:w-1 bg-[#39C5BB] rounded-full animate-eq-1 shadow-[0_0_6px_rgba(57,197,187,0.8)]" style="height: 40%" />
        <div class="w-0.5 sm:w-1 bg-[#6FF7EC] rounded-full animate-eq-2 shadow-[0_0_6px_rgba(111,247,236,0.8)]" style="height: 70%" />
        <div class="w-0.5 sm:w-1 bg-[#39C5BB] rounded-full animate-eq-3 shadow-[0_0_6px_rgba(57,197,187,0.8)]" style="height: 90%" />
        <div class="w-0.5 sm:w-1 bg-[#FF6FA5] rounded-full animate-eq-4 shadow-[0_0_6px_rgba(255,111,165,0.7)]" style="height: 50%" />
        <div class="w-0.5 sm:w-1 bg-[#6FF7EC] rounded-full animate-eq-5 shadow-[0_0_6px_rgba(111,247,236,0.8)]" style="height: 80%" />
        <div class="w-0.5 sm:w-1 bg-[#39C5BB] rounded-full animate-eq-2 shadow-[0_0_6px_rgba(57,197,187,0.8)]" style="height: 35%" />
        <div class="w-0.5 sm:w-1 bg-[#6FF7EC] rounded-full animate-eq-4 shadow-[0_0_6px_rgba(111,247,236,0.8)]" style="height: 60%" />
      </div>

      <!-- Right fade line -->
      <div class="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#162432] to-[#39C5BB]/40" />
    </div>
  </div>
</template>
