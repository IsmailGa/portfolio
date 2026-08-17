<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(-200)
const cursorY = ref(-200)
const targetX = ref(-200)
const targetY = ref(-200)
const isVisible = ref(false)

let animationFrameId: number | null = null

const handleMouseMove = (e: MouseEvent) => {
  targetX.value = e.clientX
  targetY.value = e.clientY
  if (!isVisible.value) isVisible.value = true
}

const handleMouseLeave = () => {
  isVisible.value = false
}

const render = () => {
  // Smooth lerp (linear interpolation) for organic trailing effect
  cursorX.value += (targetX.value - cursorX.value) * 0.12
  cursorY.value += (targetY.value - cursorY.value) * 0.12
  animationFrameId = requestAnimationFrame(render)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.addEventListener('mouseleave', handleMouseLeave)
  animationFrameId = requestAnimationFrame(render)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseleave', handleMouseLeave)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden hidden md:block"
    :class="isVisible ? 'opacity-100' : 'opacity-0'"
  >
    <!-- Primary Vocaloid Teal Glow Spotlight -->
    <div
      class="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-screen"
      :style="{
        left: `${cursorX}px`,
        top: `${cursorY}px`,
        background: 'radial-gradient(circle, rgba(57, 197, 187, 0.14) 0%, rgba(111, 247, 236, 0.05) 40%, rgba(5, 8, 13, 0) 70%)',
        filter: 'blur(30px)'
      }"
    />
    
    <!-- Micro Sharp Core Glow -->
    <div
      class="absolute w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      :style="{
        left: `${cursorX}px`,
        top: `${cursorY}px`,
        background: 'radial-gradient(circle, rgba(111, 247, 236, 0.12) 0%, rgba(57, 197, 187, 0) 65%)',
        filter: 'blur(15px)'
      }"
    />
  </div>
</template>
