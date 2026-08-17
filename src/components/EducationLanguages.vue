<script setup lang="ts">
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { GraduationCap, Languages, Award } from 'lucide-vue-next'

const education = portfolioData.education
const languages = portfolioData.languages
</script>

<template>
  <section id="education" class="py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
    
    <!-- Section Eyebrow & Title -->
    <div class="mb-10 sm:mb-14">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A1118] border border-[#162432] text-[#39C5BB] font-mono text-xs tracking-wider uppercase mb-3 select-none">
        <GraduationCap class="w-3.5 h-3.5" />
        <span>05 // ACADEMIC FOUNDATION & MOBILITY</span>
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        Academic pedigree & <span class="text-[#39C5BB]">languages</span>.
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
      
      <!-- Education Column (7 cols) -->
      <div class="lg:col-span-7 space-y-4 sm:space-y-5">
        <div class="flex items-center gap-2 mb-1">
          <GraduationCap class="w-4 h-4 text-[#39C5BB]" />
          <h3 class="font-display font-bold text-lg sm:text-xl text-[#EAF7F6]">Degrees & Education</h3>
        </div>

        <div 
          v-for="(edu, idx) in education" 
          :key="idx"
          class="glass-panel p-4 sm:p-6 md:p-7 rounded-2xl border border-[#162432] hover:border-[#39C5BB]/40 transition-all duration-200 relative group overflow-hidden corner-crosshair"
          @mouseenter="soundManager.playHover()"
        >
          <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h4 class="font-display font-bold text-base sm:text-lg md:text-xl text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors">
              {{ edu.degree }}
            </h4>
            <span class="font-mono text-[10px] sm:text-xs text-[#39C5BB] bg-[#05080D] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#162432] shrink-0">
              {{ edu.status }}
            </span>
          </div>

          <div class="text-[#39C5BB] font-mono text-xs sm:text-sm font-medium mb-1">
            {{ edu.institution }}
          </div>

          <div class="text-[#7C9399] font-body text-xs sm:text-sm mb-4">
            {{ edu.department }}
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#162432] font-mono text-[11px] sm:text-xs">
            <span class="text-[#7C9399]">{{ edu.period }}</span>
            <span v-if="edu.score" class="text-[#6FF7EC] font-semibold bg-[#39C5BB]/10 px-2 sm:px-2.5 py-0.5 rounded border border-[#39C5BB]/20">
              {{ edu.score }}
            </span>
          </div>
        </div>
      </div>

      <!-- Languages Column (5 cols) -->
      <div class="lg:col-span-5 space-y-4 sm:space-y-5">
        <div class="flex items-center gap-2 mb-1">
          <Languages class="w-4 h-4 text-[#39C5BB]" />
          <h3 class="font-display font-bold text-lg sm:text-xl text-[#EAF7F6]">Language Fluency</h3>
        </div>

        <div class="glass-panel p-4 sm:p-6 md:p-7 rounded-2xl border border-[#162432] space-y-5 sm:space-y-6 corner-crosshair">
          
          <div 
            v-for="lang in languages" 
            :key="lang.name"
            class="group"
            @mouseenter="soundManager.playHover()"
          >
            <div class="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
              <span class="font-display font-semibold text-sm sm:text-base text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors">
                {{ lang.name }}
              </span>
              <span class="font-mono text-[11px] sm:text-xs font-semibold text-[#39C5BB] bg-[#05080D] px-2 sm:px-2.5 py-0.5 rounded border border-[#162432]">
                {{ lang.level }}
              </span>
            </div>

            <!-- Progress Meter Track -->
            <div class="w-full h-2 bg-[#05080D] rounded-full overflow-hidden p-0.5 border border-[#162432]">
              <div 
                class="h-full rounded-full bg-gradient-to-r from-[#39C5BB] to-[#6FF7EC] transition-all duration-1000"
                :style="{ width: `${lang.percentage}%` }"
              />
            </div>

            <div class="text-[10px] sm:text-[11px] font-mono text-[#7C9399] mt-1.5 flex justify-between">
              <span>{{ lang.description }}</span>
              <span>{{ lang.percentage }}%</span>
            </div>
          </div>

          <div class="p-3.5 sm:p-4 rounded-xl bg-[#05080D] border border-[#162432] flex items-center gap-3">
            <Award class="w-4 h-4 sm:w-5 sm:h-5 text-[#39C5BB] shrink-0" />
            <div class="text-[11px] sm:text-xs text-[#7C9399] leading-snug">
              <strong class="text-[#EAF7F6]">International Collaboration:</strong> English C1 verified for technical docs, synchronous meetings, and cross-border Scrum.
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>
