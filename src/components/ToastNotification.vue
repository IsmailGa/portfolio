<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

defineProps<{
  show: boolean
  message: string
}>()
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-6 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-6 scale-95"
  >
    <div
      v-if="show"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0E1620]/95 backdrop-blur-xl border border-[#39C5BB] text-[#EAF7F6] font-mono text-xs shadow-[0_0_25px_rgba(57,197,187,0.4)] pointer-events-none select-none"
    >
      <div class="w-6 h-6 rounded-full bg-[#39C5BB]/20 flex items-center justify-center text-[#39C5BB]">
        <CheckCircle2 class="w-4 h-4 text-[#39C5BB]" />
      </div>
      <span class="font-medium text-[#EAF7F6]">{{ message }}</span>
    </div>
  </transition>
</template>
