<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../i18n'
import { ShieldCheck, Cpu, Layers, GitBranch } from 'lucide-vue-next'

const iconMap = [ShieldCheck, Cpu, Layers, GitBranch]

const highlights = computed(() =>
  t.value.about.highlights.map((h, i) => ({ ...h, icon: iconMap[i % iconMap.length] }))
)
</script>

<template>
  <section id="about" class="section-wrap">
    <div class="mb-12 max-w-2xl sm:mb-16">
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-5xl">
        {{ t.about.titleMain }} <span class="text-accent">{{ t.about.titleAccent }}</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
      <div class="card p-6 sm:p-9 lg:col-span-5">
        <h3 class="font-display text-xl font-semibold leading-snug sm:text-2xl">{{ t.about.quote }}</h3>
        <p class="mt-4 text-[15px] leading-relaxed text-muted">{{ t.about.summary }}</p>

        <dl class="mt-7 divide-y divide-line border-t border-line text-sm">
          <div class="flex items-center justify-between gap-4 py-3.5">
            <dt class="text-muted">{{ t.about.degreeLabel }}</dt>
            <dd class="text-right font-semibold">KIUT ISE (2027)</dd>
          </div>
          <div class="flex items-center justify-between gap-4 py-3.5">
            <dt class="text-muted">{{ t.about.englishLabel }}</dt>
            <dd class="text-right font-semibold">C1 Advanced</dd>
          </div>
          <div class="flex items-center justify-between gap-4 py-3.5">
            <dt class="text-muted">{{ t.about.specializationLabel }}</dt>
            <dd class="text-right font-semibold text-accent">{{ t.about.specializationValue }}</dd>
          </div>
        </dl>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
        <div v-for="(item, idx) in highlights" :key="idx" class="card card-hover group p-6">
          <span class="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent-solid group-hover:text-on-accent">
            <component :is="item.icon" class="h-5 w-5" />
          </span>
          <h4 class="font-display text-lg font-semibold">{{ item.title }}</h4>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
