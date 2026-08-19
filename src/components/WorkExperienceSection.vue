<script setup lang="ts">
import { ref, computed } from 'vue'
import { t } from '../i18n'
import { soundManager } from '../utils/sound'
import { CheckCircle2 } from 'lucide-vue-next'

const selectedId = ref('trustbank')

const items = computed(() => t.value.work.items)
const currentItem = computed(() => {
  return items.value.find(i => i.id === selectedId.value) || items.value[0]
})

const selectCompany = (id: string) => {
  selectedId.value = id
  soundManager.playClick()
}
</script>

<template>
  <section id="work" class="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative scroll-mt-24">
    
    <!-- Section Header -->
    <div class="mb-10 sm:mb-14">
      <div class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase mb-2">
        {{ t.work.eyebrow }}
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        {{ t.work.titleMain }} <span class="text-[#39C5BB]">{{ t.work.titleAccent }}</span>
      </h2>
      <p class="mt-3 text-[#7C9399] font-body text-sm sm:text-base max-w-2xl leading-relaxed">
        {{ t.work.desc }}
      </p>
    </div>

    <!-- Main Interactive Grid (4 cols companies list + 8 cols active case study) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      
      <!-- Left Column: Company Selector Cards (4 cols) -->
      <div class="lg:col-span-4 space-y-2.5">
        <div class="font-mono text-[11px] text-[#7C9399] uppercase mb-1">
          {{ t.work.selectCompany }}
        </div>

        <button
          v-for="item in items"
          :key="item.id"
          type="button"
          class="w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 focus:outline-none"
          :class="[
            selectedId === item.id
              ? 'bg-[#0E1724] border-[#39C5BB] shadow-[0_0_20px_rgba(57,197,187,0.25)]'
              : 'bg-[#0A1118]/80 border-[#162436] hover:border-[#39C5BB]/40 hover:bg-[#0E1724]/60 text-[#7C9399]'
          ]"
          @click="selectCompany(item.id)"
          @mouseenter="soundManager.playHover()"
        >
          <div class="flex items-center justify-between gap-2">
            <h3 
              class="font-display font-bold text-base sm:text-lg transition-colors"
              :class="selectedId === item.id ? 'text-[#6FF7EC]' : 'text-[#EAF7F6]'"
            >
              {{ item.company }}
            </h3>
            <span 
              class="font-mono text-[10px] px-2 py-0.5 rounded border"
              :class="selectedId === item.id ? 'bg-[#39C5BB] text-[#05080D] font-bold border-[#6FF7EC]' : 'bg-[#05080D] text-[#7C9399] border-[#162436]'"
            >
              {{ item.badge }}
            </span>
          </div>

          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-[#39C5BB] font-semibold">{{ item.role }}</span>
            <span class="text-[#7C9399] text-[11px]">{{ item.period }}</span>
          </div>
        </button>
      </div>

      <!-- Right Column: Deep-Dive Dynamic Case Study (8 cols) -->
      <div class="lg:col-span-8">
        <div class="glass-surface p-6 sm:p-9 rounded-2xl sm:rounded-3xl border border-[#162436] space-y-6 animate-fade-in relative overflow-hidden">
          
          <!-- Case Study Top Header -->
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-[#162436]">
            <div>
              <div class="font-mono text-xs text-[#39C5BB] uppercase tracking-wider mb-1">
                {{ currentItem.category }}
              </div>
              <h3 class="font-display font-extrabold text-2xl sm:text-3xl text-[#EAF7F6]">
                {{ currentItem.company }} · <span class="text-[#6FF7EC]">{{ currentItem.role }}</span>
              </h3>
            </div>
            
            <div class="font-mono text-xs text-[#7C9399] bg-[#05080D] px-3 py-1.5 rounded-lg border border-[#162436] self-start sm:self-auto shrink-0">
              {{ currentItem.period }} · {{ currentItem.location }}
            </div>
          </div>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 font-mono">
            <div 
              v-for="metric in currentItem.metrics" 
              :key="metric.label"
              class="p-3 rounded-xl bg-[#05080D] border border-[#162436]"
            >
              <div class="text-[10px] text-[#7C9399] uppercase">{{ metric.label }}</div>
              <div class="text-xs sm:text-sm font-bold text-[#EAF7F6] mt-1">{{ metric.value }}</div>
            </div>
          </div>

          <!-- Deliverables & Achievements List -->
          <div class="space-y-3">
            <div class="text-xs font-mono text-[#EAF7F6] uppercase font-bold tracking-wider">
              {{ t.work.achievementsLabel }}
            </div>

            <div class="space-y-2.5">
              <div 
                v-for="(bullet, bIdx) in currentItem.description" 
                :key="bIdx"
                class="p-3.5 sm:p-4 rounded-xl bg-[#05080D] border border-[#162436] flex items-start gap-3 hover:border-[#39C5BB]/40 transition-colors"
              >
                <CheckCircle2 class="w-4 h-4 text-[#39C5BB] shrink-0 mt-0.5" />
                <div class="text-xs sm:text-sm text-[#EAF7F6]/90 leading-relaxed font-body">
                  {{ bullet }}
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Stack Badges Strip -->
          <div class="pt-4 border-t border-[#162436]">
            <div class="text-[11px] font-mono text-[#7C9399] uppercase mb-2">
              {{ t.work.techStackLabel }}
            </div>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in currentItem.tags" 
                :key="tag"
                class="px-3 py-1 rounded-lg bg-[#05080D] border border-[#162436] font-mono text-xs text-[#39C5BB] hover:text-[#6FF7EC] hover:border-[#39C5BB]/60 transition-colors cursor-default"
                @mouseenter="soundManager.playHover()"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>
