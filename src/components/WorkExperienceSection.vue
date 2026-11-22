<script setup lang="ts">
import { ref, computed } from 'vue'
import { t } from '../i18n'
import { soundManager } from '../utils/sound'
import { Check, X, ZoomIn } from 'lucide-vue-next'
import trustDashboard from '../assets/cases/trustbank/main-hero.png'
import trustAuth from '../assets/cases/trustbank/trust-auth.png'
import multicardAuth from '../assets/cases/multicard(rhmt)/mutlicard-auth.png'

type ShotKey = 'dashboard' | 'auth'
const shotsById: Record<string, { key: ShotKey; src: string; url: string }[]> = {
  trustbank: [
    { key: 'dashboard', src: trustDashboard, url: 'Trustbank DBO · Dashboard' },
    { key: 'auth', src: trustAuth, url: 'Trustbank DBO · Login' }
  ],
  multicard: [{ key: 'auth', src: multicardAuth, url: 'Rahmat Hub · Login' }]
}

const selectedId = ref('trustbank')

const items = computed(() => t.value.work.items)
const currentItem = computed(() => items.value.find((i) => i.id === selectedId.value) || items.value[0])

const shots = computed(() => shotsById[selectedId.value] ?? [])
const activeShot = ref(0)
const lightbox = ref(false)
const shot = computed(() => shots.value[activeShot.value] ?? shots.value[0])

const selectCompany = (id: string) => {
  selectedId.value = id
  activeShot.value = 0
  soundManager.playClick()
}
</script>

<template>
  <section id="work" class="section-wrap">
    <div class="mb-12 max-w-2xl sm:mb-16">
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-5xl">
        {{ t.work.titleMain }} <span class="text-accent">{{ t.work.titleAccent }}</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted sm:text-lg">{{ t.work.desc }}</p>
    </div>

    <div class="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
      <!-- Company selector -->
      <div class="lg:col-span-4 lg:sticky lg:top-28">
        <div class="mb-3 text-xs font-medium text-faint">{{ t.work.selectCompany }}</div>
        <div data-native-scroll class="flex gap-2.5 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="tablist">
          <button
            v-for="item in items"
            :key="item.id"
            type="button"
            role="tab"
            :aria-selected="selectedId === item.id"
            class="group w-[82vw] max-w-[340px] shrink-0 cursor-pointer rounded-2xl border p-4 text-left transition-all duration-200 lg:w-auto lg:max-w-none lg:shrink"
            :class="
              selectedId === item.id
                ? 'border-accent-solid bg-surface shadow-card ring-1 ring-accent-solid/30'
                : 'border-line bg-surface/50 hover:border-line-strong hover:bg-surface'
            "
            @click="selectCompany(item.id)"
          >
            <div class="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
              <h3 class="min-w-0 font-display text-lg font-semibold leading-snug">{{ item.company }}</h3>
              <span
                class="max-w-full rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                :class="selectedId === item.id ? 'bg-accent-solid text-on-accent' : 'bg-surface-2 text-muted'"
              >
                {{ item.badge }}
              </span>
            </div>
            <div class="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
              <span class="font-medium text-accent">{{ item.role }}</span>
              <span class="font-mono text-faint">{{ item.period }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Case study -->
      <div class="lg:col-span-8">
        <article :key="currentItem.id" class="card animate-fade-in space-y-8 p-6 sm:p-10" role="tabpanel">
          <header class="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {{ currentItem.company }}
                <span class="text-muted font-medium">· {{ currentItem.role }}</span>
              </h3>
            </div>
            <div class="shrink-0 rounded-lg bg-surface-2 px-3 py-2 font-mono text-xs text-muted">
              {{ currentItem.period }} · {{ currentItem.location }}
            </div>
          </header>

          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div v-for="metric in currentItem.metrics" :key="metric.label" class="rounded-xl bg-surface-2 p-4">
              <div class="text-xs text-muted">{{ metric.label }}</div>
              <div class="mt-1.5 font-display text-lg font-bold leading-tight">{{ metric.value }}</div>
            </div>
          </div>

          <div v-if="shots.length">
            <div class="mb-3 flex items-center justify-between gap-3">
              <h4 class="text-sm font-semibold">{{ t.work.screensLabel }}</h4>
              <div v-if="shots.length > 1" class="flex gap-1 rounded-full bg-surface-2 p-1">
                <button
                  v-for="(s, i) in shots"
                  :key="s.key"
                  type="button"
                  class="cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors"
                  :class="activeShot === i ? 'bg-accent-solid text-on-accent' : 'text-muted hover:text-fg'"
                  @click="activeShot = i; soundManager.playClick()"
                >
                  {{ t.work.shots[s.key] }}
                </button>
              </div>
            </div>
            <button
              type="button"
              class="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line bg-surface-2 text-left shadow-card"
              @click="lightbox = true"
            >
              <div class="flex items-center gap-3 border-b border-line bg-surface px-3 py-2">
                <span class="flex gap-1.5">
                  <i class="h-2.5 w-2.5 rounded-full bg-line-strong" /><i class="h-2.5 w-2.5 rounded-full bg-line-strong" /><i class="h-2.5 w-2.5 rounded-full bg-line-strong" />
                </span>
                <span class="min-w-0 flex-1 truncate rounded-md bg-surface-2 px-3 py-0.5 text-center font-mono text-[11px] text-faint">{{ shot.url }}</span>
              </div>
              <img :key="shot.src" :src="shot.src" :alt="t.work.shots[shot.key]" loading="lazy" class="animate-fade-in block w-full" />
              <span class="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-surface/90 text-fg opacity-0 shadow-card backdrop-blur transition-opacity group-hover:opacity-100">
                <ZoomIn class="h-4 w-4" />
              </span>
            </button>
          </div>

          <div>
            <h4 class="mb-4 text-sm font-semibold">{{ t.work.achievementsLabel }}</h4>
            <ul class="space-y-3">
              <li v-for="(bullet, bIdx) in currentItem.description" :key="bIdx" class="flex items-start gap-3">
                <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check class="h-3 w-3" stroke-width="3" />
                </span>
                <span class="text-sm leading-relaxed text-muted sm:text-[15px]">{{ bullet }}</span>
              </li>
            </ul>
          </div>

          <div class="border-t border-line pt-6">
            <div class="mb-3 text-xs font-medium text-faint">{{ t.work.techStackLabel }}</div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in currentItem.tags"
                :key="tag"
                class="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-fg"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="lightbox && shot"
        class="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
        @click="lightbox = false"
        @keydown.esc="lightbox = false"
      >
        <button type="button" class="absolute right-4 top-4 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">
          <X class="h-5 w-5" />
        </button>
        <img :src="shot.src" :alt="t.work.shots[shot.key]" class="max-h-[90vh] max-w-full rounded-lg shadow-2xl" />
      </div>
    </Teleport>
  </section>
</template>
