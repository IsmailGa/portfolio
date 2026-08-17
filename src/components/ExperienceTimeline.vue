<script setup lang="ts">
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { MapPin } from 'lucide-vue-next'

const experiences = portfolioData.experiences
</script>

<template>
  <section id="experience" class="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto relative">
    
    <!-- Section Header -->
    <div class="mb-12 sm:mb-16">
      <div class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase mb-2">
        Career History
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        Experience & <span class="text-[#39C5BB]">production roles</span>.
      </h2>
      <p class="mt-2 text-[#7C9399] font-body text-sm sm:text-base max-w-2xl">
        A progressive track record delivering customer-facing financial platforms, internal management portals, and e-commerce applications.
      </p>
    </div>

    <!-- Timeline Entries -->
    <div class="space-y-6">
      <div 
        v-for="exp in experiences" 
        :key="exp.id"
        class="glass-surface p-6 sm:p-8 rounded-2xl border border-[#162436] hover:border-[#39C5BB]/45 transition-all duration-200 group relative"
        @mouseenter="soundManager.playHover()"
      >
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4 mb-4 pb-4 border-b border-[#162436]">
          <div>
            <div class="flex flex-wrap items-center gap-3">
              <h3 class="font-display font-bold text-xl sm:text-2xl text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors">
                {{ exp.company }}
              </h3>
              <span class="font-mono text-xs text-[#39C5BB] px-2.5 py-0.5 rounded bg-[#39C5BB]/10 border border-[#39C5BB]/20">
                {{ exp.role }}
              </span>
            </div>
            <div class="text-xs font-mono text-[#7C9399] mt-1 flex items-center gap-2">
              <MapPin class="w-3.5 h-3.5 text-[#39C5BB]" />
              <span>{{ exp.location }}</span>
              <span>·</span>
              <span>{{ exp.category }}</span>
            </div>
          </div>

          <div class="font-mono text-xs text-[#EAF7F6] bg-[#05080D] px-3 py-1.5 rounded-lg border border-[#162436] shrink-0 self-start md:self-auto">
            {{ exp.period }}
          </div>
        </div>

        <!-- Bullets -->
        <ul class="space-y-2 mb-5">
          <li 
            v-for="(bullet, bIdx) in exp.description" 
            :key="bIdx"
            class="text-xs sm:text-sm text-[#7C9399] leading-relaxed flex items-start gap-2.5 group-hover:text-[#EAF7F6]/90 transition-colors"
          >
            <span class="text-[#39C5BB] font-mono shrink-0 mt-0.5">―</span>
            <span>{{ bullet }}</span>
          </li>
        </ul>

        <!-- Tags -->
        <div class="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#162436]/60">
          <span 
            v-for="tag in exp.tags" 
            :key="tag"
            class="font-mono text-[11px] sm:text-xs text-[#7C9399] bg-[#05080D] px-2.5 py-0.5 rounded border border-[#162436] group-hover:text-[#39C5BB] transition-colors"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>

  </section>
</template>
