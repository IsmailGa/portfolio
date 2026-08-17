<script setup lang="ts">
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-vue-next'

const experiences = portfolioData.experiences
</script>

<template>
  <section id="experience" class="py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
    
    <!-- Section Eyebrow & Title -->
    <div class="mb-10 sm:mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A1118] border border-[#162432] text-[#39C5BB] font-mono text-xs tracking-wider uppercase mb-3 select-none">
        <Briefcase class="w-3.5 h-3.5" />
        <span>03 // TRACK RECORD & ROLES</span>
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        Work history & <span class="text-[#39C5BB]">production impact</span>.
      </h2>
      <p class="mt-2 text-[#7C9399] font-body text-xs sm:text-sm md:text-base max-w-2xl">
        High-load banking systems, merchant payment networks, and performant web products shipped across 2+ years.
      </p>
    </div>

    <!-- Timeline Container -->
    <div class="relative pl-5 sm:pl-8 lg:pl-10 space-y-8 sm:space-y-10">
      
      <!-- Clean Static Left Accent Line -->
      <div class="absolute left-[6px] sm:left-[10px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#39C5BB] via-[#162432] to-[#162432]/30" />

      <!-- Experience Cards -->
      <div 
        v-for="exp in experiences" 
        :key="exp.id"
        class="relative group"
      >
        <!-- Static Precision Node on Timeline Line -->
        <div 
          class="absolute -left-[24px] sm:-left-[33px] top-5 sm:top-6 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-[#05080D] border-2 border-[#39C5BB] group-hover:border-[#6FF7EC] transition-all duration-200"
        />

        <!-- Glass Panel Experience Card -->
        <div 
          class="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl border border-[#162432] hover:border-[#39C5BB]/50 hover:bg-[#0E1722] transition-all duration-200 shadow-md group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] corner-crosshair"
          @mouseenter="soundManager.playHover()"
        >
          <!-- Top Row: Date & Domain Badge -->
          <div class="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-3">
            <div class="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-[#39C5BB] bg-[#05080D] px-2.5 sm:px-3 py-1 rounded-md border border-[#162432]">
              <Calendar class="w-3.5 h-3.5" />
              <span>{{ exp.period }}</span>
            </div>

            <div class="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#7C9399]">
              <MapPin class="w-3.5 h-3.5 text-[#39C5BB] shrink-0" />
              <span>{{ exp.location }}</span>
              <span class="text-[#162432]">|</span>
              <span class="text-[#EAF7F6]/80">{{ exp.category }}</span>
            </div>
          </div>

          <!-- Company & Role -->
          <div class="mb-3 sm:mb-4">
            <h3 class="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors flex flex-wrap items-center gap-2 sm:gap-3">
              <span>{{ exp.company }}</span>
              <span class="text-[11px] sm:text-xs font-mono font-normal px-2 sm:px-2.5 py-0.5 rounded bg-[#39C5BB]/10 text-[#39C5BB] border border-[#39C5BB]/20">
                {{ exp.role }}
              </span>
            </h3>
          </div>

          <!-- Bullet Points -->
          <ul class="space-y-2 mb-4 sm:mb-6">
            <li 
              v-for="(bullet, bIdx) in exp.description" 
              :key="bIdx"
              class="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base text-[#7C9399] leading-relaxed group/bullet hover:text-[#EAF7F6] transition-colors"
            >
              <ChevronRight class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB] shrink-0 mt-0.5 opacity-70 group-hover/bullet:opacity-100 transition-opacity" />
              <span>{{ bullet }}</span>
            </li>
          </ul>

          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-[#162432]">
            <span class="text-[11px] sm:text-xs font-mono text-[#7C9399] mr-1">Stack:</span>
            <span 
              v-for="tag in exp.tags" 
              :key="tag"
              class="font-mono text-[10px] sm:text-xs text-[#EAF7F6] bg-[#05080D] border border-[#162432] hover:border-[#39C5BB]/60 hover:text-[#6FF7EC] px-2 sm:px-3 py-0.5 sm:py-1 rounded-md transition-all duration-200"
            >
              #{{ tag }}
            </span>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>
