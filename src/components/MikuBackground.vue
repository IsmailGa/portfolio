<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number | null = null

let mouseX = 0
let mouseY = 0
let targetMouseX = 0
let targetMouseY = 0

const handleMouseMove = (e: MouseEvent) => {
  targetMouseX = (e.clientX / window.innerWidth - 0.5) * 30
  targetMouseY = (e.clientY / window.innerHeight - 0.5) * 30
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  const handleResize = () => {
    if (!canvas) return
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }

  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })

  let step = 0

  const render = () => {
    step += 0.012
    mouseX += (targetMouseX - mouseX) * 0.04
    mouseY += (targetMouseY - mouseY) * 0.04

    ctx.clearRect(0, 0, width, height)

    // Draw 2 minimalist harmonic sound ribbons across the canvas
    const waves = [
      { amplitude: 35, frequency: 0.0028, speed: 0.7, color: 'rgba(57, 197, 187, 0.09)', lineWidth: 1.2 },
      { amplitude: 22, frequency: 0.0042, speed: -0.9, color: 'rgba(111, 247, 236, 0.06)', lineWidth: 1.0 }
    ]

    const centerY = height * 0.5 + mouseY

    waves.forEach((w) => {
      ctx.beginPath()
      ctx.lineWidth = w.lineWidth
      ctx.strokeStyle = w.color

      for (let x = 0; x <= width; x += 8) {
        const envelope = Math.sin((x / width) * Math.PI)
        const y = centerY + Math.sin(x * w.frequency + step * w.speed) * w.amplitude * envelope

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()
    })

    animationId = requestAnimationFrame(render)
  }

  animationId = requestAnimationFrame(render)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    if (animationId) cancelAnimationFrame(animationId)
  })
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#05080D]">
    
    <!-- 1. Ambient Volumetric Radial Spotlights -->
    <div 
      class="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[450px] sm:h-[650px] rounded-full pointer-events-none"
      style="background: radial-gradient(ellipse at center, rgba(57, 197, 187, 0.06) 0%, rgba(10, 17, 24, 0.5) 50%, rgba(5, 8, 13, 0) 75%); filter: blur(70px);"
    />

    <div 
      class="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle at center, rgba(57, 197, 187, 0.04) 0%, rgba(5, 8, 13, 0) 65%); filter: blur(90px);"
    />

    <div 
      class="absolute bottom-1/4 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle at center, rgba(14, 23, 36, 0.8) 0%, rgba(5, 8, 13, 0) 70%); filter: blur(90px);"
    />

    <!-- 2. Subtle Harmonic Sound Ribbon Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full opacity-60" />

    <!-- 3. Fine Film Grain Overlay -->
    <div class="absolute inset-0 bg-grain pointer-events-none opacity-40" />

  </div>
</template>
