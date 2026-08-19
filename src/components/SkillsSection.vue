<script setup lang="ts">
import { t } from '../i18n'
import { soundManager } from '../utils/sound'
import { Layout, Server, Cpu } from 'lucide-vue-next'

const frontendSkills = [
  { name: 'Vue 3 (Composition API)', level: 'Expert', featured: true },
  { name: 'React', level: 'Advanced', featured: true },
  { name: 'Next.js', level: 'Advanced', featured: true },
  { name: 'TypeScript', level: 'Advanced', featured: true },
  { name: 'JavaScript (ES6+)', level: 'Advanced', featured: true },
  { name: 'Vuetify', level: 'Advanced', featured: false },
  { name: 'HTML5 & CSS3 / BEM', level: 'Advanced', featured: false }
]

const backendDataSkills = [
  { name: 'Node.js', level: 'Advanced', featured: true },
  { name: 'Express.js', level: 'Intermediate', featured: false },
  { name: 'FastAPI', level: 'Intermediate', featured: false },
  { name: 'REST API Design', level: 'Advanced', featured: true },
  { name: 'TypeORM', level: 'Advanced', featured: true },
  { name: 'Drizzle ORM', level: 'Advanced', featured: true },
  { name: 'Pydantic', level: 'Intermediate', featured: false },
  { name: 'PostgreSQL', level: 'Advanced', featured: true },
  { name: 'MySQL & MongoDB', level: 'Intermediate', featured: false }
]

const testInfraSkills = [
  { name: 'Vitest (Unit & Integration)', level: 'Advanced', featured: true },
  { name: 'Pinia & Zustand', level: 'Advanced', featured: true },
  { name: 'Docker Containers', level: 'Advanced', featured: true },
  { name: 'Nginx & Apache', level: 'Intermediate', featured: false },
  { name: 'WordPress & amoCRM', level: 'Intermediate', featured: false }
]
</script>

<template>
  <section id="capabilities" class="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative scroll-mt-24">
    
    <!-- Section Header -->
    <div class="mb-10 sm:mb-14">
      <div class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase mb-2">
        {{ t.capabilities.eyebrow }}
      </div>
      <h2 class="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#EAF7F6] tracking-tight">
        {{ t.capabilities.titleMain }} <span class="text-[#39C5BB]">{{ t.capabilities.titleAccent }}</span>
      </h2>
      <p class="mt-3 text-[#7C9399] font-body text-sm sm:text-base max-w-2xl leading-relaxed">
        {{ t.capabilities.desc }}
      </p>
    </div>

    <!-- 3-Column Structured Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Col 1: Frontend & UI -->
      <div class="glass-surface p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#162436] hover:border-[#39C5BB]/40 transition-all duration-200 flex flex-col justify-between space-y-6">
        <div>
          <div class="flex items-center gap-3 pb-4 border-b border-[#162436]">
            <div class="w-9 h-9 rounded-xl bg-[#05080D] border border-[#39C5BB]/40 flex items-center justify-center text-[#39C5BB]">
              <Layout class="w-4 h-4" />
            </div>
            <div>
              <h3 class="font-display font-bold text-lg text-[#EAF7F6]">
                {{ t.capabilities.columns.frontend }}
              </h3>
              <span class="font-mono text-[10px] text-[#39C5BB]">Client Architecture</span>
            </div>
          </div>

          <div class="space-y-2 pt-4">
            <div
              v-for="skill in frontendSkills"
              :key="skill.name"
              class="p-2.5 rounded-xl bg-[#05080D] border border-[#162436] flex items-center justify-between font-mono text-xs text-[#EAF7F6] hover:border-[#39C5BB]/50 hover:text-[#6FF7EC] transition-colors cursor-default"
              @mouseenter="soundManager.playHover()"
            >
              <div class="flex items-center gap-2">
                <span class="text-[#39C5BB] text-[10px]">›</span>
                <span class="font-medium">{{ skill.name }}</span>
              </div>
              <span v-if="skill.featured" class="text-[10px] text-[#FF6FA5] font-semibold">★ Core</span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-[#162436]/60 flex items-center justify-between font-mono text-[11px] text-[#7C9399]">
          <span>Production Ready</span>
          <span class="text-[#39C5BB]">7 Frameworks</span>
        </div>
      </div>

      <!-- Col 2: Backend & Data -->
      <div class="glass-surface p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#162436] hover:border-[#39C5BB]/40 transition-all duration-200 flex flex-col justify-between space-y-6">
        <div>
          <div class="flex items-center gap-3 pb-4 border-b border-[#162436]">
            <div class="w-9 h-9 rounded-xl bg-[#05080D] border border-[#39C5BB]/40 flex items-center justify-center text-[#39C5BB]">
              <Server class="w-4 h-4" />
            </div>
            <div>
              <h3 class="font-display font-bold text-lg text-[#EAF7F6]">
                {{ t.capabilities.columns.backend }}
              </h3>
              <span class="font-mono text-[10px] text-[#39C5BB]">APIs, ORM & Databases</span>
            </div>
          </div>

          <div class="space-y-2 pt-4">
            <div
              v-for="skill in backendDataSkills"
              :key="skill.name"
              class="p-2.5 rounded-xl bg-[#05080D] border border-[#162436] flex items-center justify-between font-mono text-xs text-[#EAF7F6] hover:border-[#39C5BB]/50 hover:text-[#6FF7EC] transition-colors cursor-default"
              @mouseenter="soundManager.playHover()"
            >
              <div class="flex items-center gap-2">
                <span class="text-[#39C5BB] text-[10px]">›</span>
                <span class="font-medium">{{ skill.name }}</span>
              </div>
              <span v-if="skill.featured" class="text-[10px] text-[#6FF7EC] font-semibold">★ Key</span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-[#162436]/60 flex items-center justify-between font-mono text-[11px] text-[#7C9399]">
          <span>REST & Microservices</span>
          <span class="text-[#39C5BB]">9 Tools</span>
        </div>
      </div>

      <!-- Col 3: Testing & DevOps -->
      <div class="glass-surface p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#162436] hover:border-[#39C5BB]/40 transition-all duration-200 flex flex-col justify-between space-y-6">
        <div>
          <div class="flex items-center gap-3 pb-4 border-b border-[#162436]">
            <div class="w-9 h-9 rounded-xl bg-[#05080D] border border-[#39C5BB]/40 flex items-center justify-center text-[#39C5BB]">
              <Cpu class="w-4 h-4" />
            </div>
            <div>
              <h3 class="font-display font-bold text-lg text-[#EAF7F6]">
                {{ t.capabilities.columns.devops }}
              </h3>
              <span class="font-mono text-[10px] text-[#39C5BB]">State & Testing Reliability</span>
            </div>
          </div>

          <div class="space-y-2 pt-4">
            <div
              v-for="skill in testInfraSkills"
              :key="skill.name"
              class="p-2.5 rounded-xl bg-[#05080D] border border-[#162436] flex items-center justify-between font-mono text-xs text-[#EAF7F6] hover:border-[#39C5BB]/50 hover:text-[#6FF7EC] transition-colors cursor-default"
              @mouseenter="soundManager.playHover()"
            >
              <div class="flex items-center gap-2">
                <span class="text-[#39C5BB] text-[10px]">›</span>
                <span class="font-medium">{{ skill.name }}</span>
              </div>
              <span v-if="skill.featured" class="text-[10px] text-[#39C5BB] font-semibold">★ Certified</span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-[#162436]/60 flex items-center justify-between font-mono text-[11px] text-[#7C9399]">
          <span>Zero-Regression</span>
          <span class="text-[#39C5BB]">CI/CD Active</span>
        </div>
      </div>

    </div>

  </section>
</template>
