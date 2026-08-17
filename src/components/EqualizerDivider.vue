<script setup lang="ts">
// Minimalist sound frequency divider
</script>

<template>
  <div class="w-full flex items-center justify-center py-6 select-none overflow-hidden" aria-hidden="true">
    <div class="flex items-center gap-4 w-full max-w-4xl px-4">
      <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#162436] to-[#39C5BB]/30" />
      <div class="flex items-center gap-1 h-5 px-2.5 py-0.5 rounded-full bg-[#0E1724] border border-[#162436]">
        <div class="w-1 bg-[#39C5BB] rounded-full animate-eq-1" style="height: 40%" />
        <div class="w-1 bg-[#6FF7EC] rounded-full animate-eq-2" style="height: 70%" />
        <div class="w-1 bg-[#39C5BB] rounded-full animate-eq-3" style="height: 90%" />
        <div class="w-1 bg-[#FF6FA5] rounded-full animate-eq-4" style="height: 50%" />
        <div class="w-1 bg-[#6FF7EC] rounded-full animate-eq-5" style="height: 60%" />
      </div>
      <div class="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#162436] to-[#39C5BB]/30" />
    </div>
  </div>
</template>
