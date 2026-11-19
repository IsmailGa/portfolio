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
    enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-95"
  >
    <div
      v-if="show"
      role="status"
      aria-live="polite"
      class="pointer-events-none fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 select-none items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm shadow-pop sm:left-auto sm:right-6 sm:translate-x-0"
    >
      <CheckCircle2 class="h-5 w-5 shrink-0 text-accent" />
      <span class="font-medium">{{ message }}</span>
    </div>
  </transition>
</template>
