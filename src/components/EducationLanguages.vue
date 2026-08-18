<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../i18n'
import { soundManager } from '../utils/sound'
import { GraduationCap, Languages, Award } from 'lucide-vue-next'

const education = computed(() => t.value.education.items)
const languages = computed(() => t.value.education.languagesList)
</script>

<template>
  <section id="education" class="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto relative">
    
    <!-- Section Header -->
    <div class="mb-12 sm:mb-16">
      <div class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase mb-2">
        {{ t.education.eyebrow }}
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        {{ t.education.titleMain }} <span class="text-[#39C5BB]">{{ t.education.titleAccent }}</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Education Column (7 cols) -->
      <div class="lg:col-span-7 space-y-5">
        <div class="flex items-center gap-2 mb-1">
          <GraduationCap class="w-4 h-4 text-[#39C5BB]" />
          <h3 class="font-display font-bold text-xl text-[#EAF7F6]">{{ t.education.degreesTitle }}</h3>
        </div>

        <div 
          v-for="(edu, idx) in education" 
          :key="idx"
          class="glass-surface p-6 sm:p-7 rounded-2xl border border-[#162436] hover:border-[#39C5BB]/40 transition-all duration-200 relative group overflow-hidden"
          @mouseenter="soundManager.playHover()"
        >
          <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h4 class="font-display font-bold text-lg sm:text-xl text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors">
              {{ edu.degree }}
            </h4>
            <span class="font-mono text-xs text-[#39C5BB] bg-[#05080D] px-2.5 py-1 rounded-md border border-[#162436] shrink-0">
              {{ edu.status }}
            </span>
          </div>

          <div class="text-[#39C5BB] font-mono text-xs sm:text-sm font-medium mb-1">
            {{ edu.institution }}
          </div>

          <div class="text-[#7C9399] font-body text-xs sm:text-sm mb-4">
            {{ edu.department }}
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#162436] font-mono text-xs">
            <span class="text-[#7C9399]">{{ edu.period }}</span>
            <span v-if="edu.score" class="text-[#6FF7EC] font-semibold bg-[#39C5BB]/10 px-2.5 py-0.5 rounded border border-[#39C5BB]/20">
              {{ edu.score }}
            </span>
          </div>
        </div>
      </div>

      <!-- Languages Column (5 cols) -->
      <div class="lg:col-span-5 space-y-5">
        <div class="flex items-center gap-2 mb-1">
          <Languages class="w-4 h-4 text-[#39C5BB]" />
          <h3 class="font-display font-bold text-xl text-[#EAF7F6]">{{ t.education.languagesTitle }}</h3>
        </div>

        <div class="glass-surface p-6 sm:p-7 rounded-2xl border border-[#162436] space-y-6">
          
          <div 
            v-for="lang in languages" 
            :key="lang.name"
            class="group"
            @mouseenter="soundManager.playHover()"
          >
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="font-display font-semibold text-base text-[#EAF7F6] group-hover:text-[#6FF7EC] transition-colors">
                {{ lang.name }}
              </span>
              <span class="font-mono text-xs font-semibold text-[#39C5BB] bg-[#05080D] px-2.5 py-0.5 rounded border border-[#162436]">
                {{ lang.level }}
              </span>
            </div>

            <!-- Progress Meter Track -->
            <div class="w-full h-2 bg-[#05080D] rounded-full overflow-hidden p-0.5 border border-[#162436]">
              <div 
                class="h-full rounded-full bg-gradient-to-r from-[#39C5BB] to-[#6FF7EC] transition-all duration-1000"
                :style="{ width: `${lang.percentage}%` }"
              />
            </div>

            <div class="text-[11px] font-mono text-[#7C9399] mt-1.5 flex justify-between">
              <span>{{ lang.description }}</span>
              <span>{{ lang.percentage }}%</span>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-center gap-3">
            <Award class="w-5 h-5 text-[#39C5BB] shrink-0" />
            <div class="text-xs text-[#7C9399] leading-snug">
              <strong class="text-[#EAF7F6]">{{ t.education.internationalBadge }}</strong> {{ t.education.internationalDesc }}
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>
