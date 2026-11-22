<script setup lang="ts">
import { t } from '../i18n'
import { Layout, Server, Cpu, Star } from 'lucide-vue-next'

type Skill = { name: string; featured: boolean }

const frontendSkills: Skill[] = [
  { name: 'Vue 3 (Composition API)', featured: true },
  { name: 'React', featured: true },
  { name: 'Next.js', featured: true },
  { name: 'TypeScript', featured: true },
  { name: 'JavaScript (ES6+)', featured: true },
  { name: 'Vuetify', featured: false },
  { name: 'HTML5 & CSS3', featured: false },
  { name: 'Feature-Sliced Design', featured: true }
]

const backendDataSkills: Skill[] = [
  { name: 'Node.js', featured: true },
  { name: 'Express.js', featured: false },
  { name: 'FastAPI', featured: false },
  { name: 'REST API Design', featured: true },
  { name: 'PostgreSQL', featured: true },
  { name: 'MySQL & MongoDB', featured: false }
]

const testInfraSkills: Skill[] = [
  { name: 'Vitest (Unit & Integration)', featured: true },
  { name: 'Pinia & Zustand', featured: true },
  { name: 'Docker Containers', featured: true },
  { name: 'Git, GitHub & GitLab CI', featured: true },
  { name: 'Nginx', featured: false }
]

const columns = [
  { icon: Layout, key: 'frontend' as const, sub: 'Client Architecture', skills: frontendSkills },
  { icon: Server, key: 'backend' as const, sub: 'APIs & Databases', skills: backendDataSkills },
  { icon: Cpu, key: 'devops' as const, sub: 'State & Testing Reliability', skills: testInfraSkills }
]
</script>

<template>
  <section id="capabilities" class="section-wrap">
    <div class="mb-12 max-w-2xl sm:mb-16">
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-5xl">
        {{ t.capabilities.titleMain }} <span class="text-accent">{{ t.capabilities.titleAccent }}</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted sm:text-lg">{{ t.capabilities.desc }}</p>
    </div>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div v-for="col in columns" :key="col.key" class="card card-hover p-6 sm:p-7">
        <div class="flex items-center gap-3.5 border-b border-line pb-5">
          <span class="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
            <component :is="col.icon" class="h-5 w-5" />
          </span>
          <div>
            <h3 class="font-display text-lg font-semibold leading-tight">{{ t.capabilities.columns[col.key] }}</h3>
            <span class="text-xs text-muted">{{ col.sub }}</span>
          </div>
        </div>

        <ul class="mt-5 space-y-1">
          <li
            v-for="skill in col.skills"
            :key="skill.name"
            class="flex items-center justify-between gap-3 rounded-lg px-2.5 py-2.5 text-sm transition-colors hover:bg-surface-2"
          >
            <span :class="skill.featured ? 'font-medium' : 'text-muted'">{{ skill.name }}</span>
            <Star v-if="skill.featured" class="h-3.5 w-3.5 shrink-0 fill-accent-solid text-accent-solid" aria-label="Core skill" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
