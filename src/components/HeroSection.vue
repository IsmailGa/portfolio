<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { t } from '../i18n'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { FileDown, Send, ArrowUpRight, MapPin } from 'lucide-vue-next'

const isLoaded = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isLoaded.value = true
  })
})
</script>

<template>
  <section
    id="hero"
    class="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:min-h-screen sm:px-6 sm:pt-32 lg:px-12 xl:px-16"
  >
    <div data-parallax="0.12" class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <!-- Copy -->
      <div class="flex flex-col lg:col-span-7">
        

        <h1
          class="font-display font-bold leading-[0.95] tracking-[-0.03em] text-[clamp(2.75rem,8.5vw,6.25rem)] transition-all duration-700 delay-100"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          Ismail<br />
          <span class="gradient-text">Gayratov</span>
        </h1>

        <div
          class="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 transition-all duration-700 delay-200"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <span class="font-display text-lg font-semibold sm:text-xl">{{ t.hero.role }}</span>
          <span class="hidden h-1 w-1 rounded-full bg-line-strong sm:block" />
          <span class="text-base text-muted sm:text-lg">{{ t.hero.subRole }}</span>
        </div>

        <p
          class="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg transition-all duration-700 delay-300"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          {{ t.hero.pitch }}
        </p>

        <div
          class="mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 delay-[400ms]"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="btn-primary group inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold"
            @click="soundManager.playChime()"
          >
            <FileDown class="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            <span>{{ t.hero.downloadResume }}</span>
          </a>

          <a
            :href="portfolioData.telegram"
            target="_blank"
            rel="noopener"
            class="btn-ghost group inline-flex items-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-semibold"
            @click="soundManager.playClick()"
          >
            <Send class="h-4 w-4 text-accent" />
            <span>{{ t.hero.telegram }}</span>
            <ArrowUpRight class="h-4 w-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <!-- Stats -->
        <dl
          class="mt-12 grid max-w-xl grid-cols-3 divide-x divide-line border-t border-line pt-6 transition-all duration-700 delay-500"
          :class="isLoaded ? 'opacity-100' : 'opacity-0'"
        >
          <div class="pr-4">
            <dd class="font-display text-2xl font-bold sm:text-3xl">{{ t.hero.years }}</dd>
            <dt class="mt-1 text-xs text-muted">{{ t.hero.fintechExp }}</dt>
          </div>
          <div class="px-4">
            <dd class="font-display text-2xl font-bold text-accent sm:text-3xl">−70%</dd>
            <dt class="mt-1 text-xs text-muted">{{ t.hero.degreeGpa }}</dt>
          </div>
          <div class="pl-4">
            <dd class="font-display text-2xl font-bold sm:text-3xl">{{ t.hero.c1Level }}</dd>
            <dt class="mt-1 text-xs text-muted">{{ t.hero.englishLevel }}</dt>
          </div>
        </dl>
      </div>

      <!-- Portrait -->
      <div
        class="flex justify-center lg:col-span-5 lg:justify-end transition-all duration-700 delay-300"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="relative w-full max-w-[400px]">
          <div class="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-solid/25 via-transparent to-pink/25 blur-2xl" aria-hidden="true" />
          <div class="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-surface p-2 shadow-pop">
            <picture>
              <source srcset="/isa-photo.webp" type="image/webp" />
              <img
                src="/isa-photo.jpg"
                alt="Ismail Gayratov — Frontend & Full-Stack Developer"
                width="900"
                height="1200"
                class="h-full w-full rounded-[1.25rem] object-cover object-center"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </picture>
          </div>

          <div class="absolute -bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-card backdrop-blur-xl sm:left-auto sm:-left-6 sm:right-auto sm:min-w-[250px]">
            <div class="flex items-center gap-2.5">
              <span class="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent">
                <MapPin class="h-4 w-4" />
              </span>
              <div>
                <div class="text-sm font-semibold leading-tight">{{ t.hero.location }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
