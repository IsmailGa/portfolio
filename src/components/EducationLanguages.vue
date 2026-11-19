<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../i18n'
import { GraduationCap, Languages, Award } from 'lucide-vue-next'

const education = computed(() => t.value.education.items)
const languages = computed(() => t.value.education.languagesList)
</script>

<template>
  <section id="education" class="section-wrap">
    <div class="mb-12 max-w-2xl sm:mb-16">
      <div class="eyebrow mb-3">{{ t.education.eyebrow }}</div>
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-5xl">
        {{ t.education.titleMain }} <span class="text-accent">{{ t.education.titleAccent }}</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      <div class="space-y-4 lg:col-span-7">
        <div class="mb-2 flex items-center gap-2.5">
          <span class="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
            <GraduationCap class="h-4 w-4" />
          </span>
          <h3 class="font-display text-xl font-semibold">{{ t.education.degreesTitle }}</h3>
        </div>

        <div v-for="(edu, idx) in education" :key="idx" class="card card-hover p-6 sm:p-7">
          <div class="mb-2 flex flex-wrap items-start justify-between gap-3">
            <h4 class="font-display text-lg font-semibold sm:text-xl">{{ edu.degree }}</h4>
            <span class="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">{{ edu.status }}</span>
          </div>
          <div class="text-sm font-medium text-accent">{{ edu.institution }}</div>
          <div class="mt-1 text-sm text-muted">{{ edu.department }}</div>
          <div class="mt-4 border-t border-line pt-3 font-mono text-xs text-faint">{{ edu.period }}</div>
        </div>
      </div>

      <div class="space-y-4 lg:col-span-5">
        <div class="mb-2 flex items-center gap-2.5">
          <span class="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
            <Languages class="h-4 w-4" />
          </span>
          <h3 class="font-display text-xl font-semibold">{{ t.education.languagesTitle }}</h3>
        </div>

        <div class="card space-y-6 p-6 sm:p-7">
          <div v-for="lang in languages" :key="lang.name">
            <div class="mb-2 flex items-center justify-between gap-2">
              <span class="font-display text-base font-semibold">{{ lang.name }}</span>
              <span class="text-xs font-semibold text-accent">{{ lang.level }}</span>
            </div>
            <div
              class="h-2 w-full overflow-hidden rounded-full bg-surface-2"
              role="progressbar"
              :aria-valuenow="lang.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-label="lang.name"
            >
              <div
                class="h-full rounded-full bg-gradient-to-r from-accent-solid to-accent-hover transition-[width] duration-1000"
                :style="{ width: `${lang.percentage}%` }"
              />
            </div>
            <div class="mt-1.5 flex justify-between text-xs text-muted">
              <span>{{ lang.description }}</span>
              <span class="font-mono">{{ lang.percentage }}%</span>
            </div>
          </div>

          <div class="flex items-start gap-3 rounded-xl bg-surface-2 p-4">
            <Award class="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div class="text-sm leading-snug text-muted">
              <strong class="text-fg">{{ t.education.internationalBadge }}</strong> {{ t.education.internationalDesc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
