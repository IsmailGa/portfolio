<script setup lang="ts">
import { ref } from 'vue'
import { t } from '../i18n'
import { portfolioData } from '../data/portfolioData'
import { soundManager } from '../utils/sound'
import { X, Printer, Copy, Check, FileText, Download } from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'toast', msg: string): void
}>()

const copied = ref(false)

const handlePrint = () => {
  soundManager.playClick()
  window.print()
}

const copyRawResume = async () => {
  const trans = t.value
  const resumeText = `
ISMAIL GAYRATOV
${trans.hero.role}
Tashkent, Uzbekistan | +998 77 488 7875 | gaismail777@gmail.com
GitHub: https://github.com/IsmailGa | LinkedIn: https://linkedin.com/in/ismail-gayratov | Telegram: @theiiisssaaa

${trans.modal.summary}
${trans.about.summary}

${trans.modal.experience}
${trans.experience.items.map(e => `
${e.role} — ${e.company} (${e.period})
${e.location} | ${e.category}
${e.description.map(d => `• ${d}`).join('\n')}
Stack: ${e.tags.join(', ')}
`).join('\n')}

${trans.modal.education}
${trans.education.items.map(ed => `
${ed.degree} (${ed.period})
${ed.institution} — ${ed.department} ${ed.score ? `[${ed.score}]` : ''}
`).join('\n')}

${trans.modal.languages}
${trans.education.languagesList.map(l => `• ${l.name}: ${l.level} (${l.description})`).join('\n')}
  `.trim()

  try {
    await navigator.clipboard.writeText(resumeText)
    copied.value = true
    soundManager.playChime()
    emit('toast', 'Resume text copied to clipboard!')
    setTimeout(() => {
      copied.value = false
    }, 3000)
  } catch {
    // ignore
  }
}
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 sm:p-6 overflow-y-auto bg-[#05080D]/90 backdrop-blur-xl animate-fade-in"
    @click.self="emit('close'); soundManager.playClick()"
  >
    <div 
      class="relative w-full max-w-4xl max-h-[92vh] bg-[#0A1118] border border-[#162436] rounded-2xl sm:rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-left"
    >
      <!-- Modal Top Bar -->
      <div class="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#162436] bg-[#0E1724]/80">
        <div class="flex items-center gap-2.5 sm:gap-3">
          <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#05080D] border border-[#39C5BB]/40 flex items-center justify-center">
            <FileText class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB]" />
          </div>
          <div>
            <h3 class="font-display font-bold text-xs sm:text-base text-[#EAF7F6]">
              {{ t.modal.fileName }}
            </h3>
            <span class="font-mono text-[10px] sm:text-[11px] text-[#39C5BB] hidden xs:inline-block">
              {{ t.modal.dossierSub }}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-1.5 sm:gap-2">
          <!-- Direct PDF Download Link Button -->
          <a
            href="/Ismail_Gayratov_Resume.pdf"
            download="Ismail_Gayratov_Resume.pdf"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold text-[#05080D] bg-[#39C5BB] hover:bg-[#6FF7EC] transition-all cursor-pointer shadow-[0_0_12px_rgba(57,197,187,0.35)]"
            @click="soundManager.playChime()"
            title="Download PDF file"
          >
            <Download class="w-3.5 h-3.5" />
            <span>{{ t.modal.downloadPdf }}</span>
          </a>

          <!-- Copy Button -->
          <button
            type="button"
            class="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono text-[#EAF7F6] bg-[#05080D] border border-[#162436] hover:border-[#39C5BB] hover:text-[#6FF7EC] transition-all cursor-pointer"
            @click="copyRawResume"
          >
            <component :is="copied ? Check : Copy" class="w-3.5 h-3.5 text-[#39C5BB]" />
            <span class="hidden sm:inline">{{ copied ? t.modal.copied : t.modal.copyText }}</span>
          </button>

          <!-- Print Button -->
          <button
            type="button"
            class="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#7C9399] bg-[#05080D] border border-[#162436] hover:text-[#EAF7F6] transition-all cursor-pointer"
            @click="handlePrint"
            title="Print Resume"
          >
            <Printer class="w-3.5 h-3.5" />
            <span>{{ t.modal.print }}</span>
          </button>

          <!-- Close Button -->
          <button
            type="button"
            class="p-1.5 rounded-lg bg-[#05080D] border border-[#162436] hover:border-[#FF6FA5] text-[#7C9399] hover:text-[#FF6FA5] transition-all cursor-pointer"
            @click="emit('close'); soundManager.playClick()"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Modal Body / ATS Document Preview -->
      <div class="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8 font-body text-[#EAF7F6]/90 text-sm leading-relaxed">
        
        <!-- Header Section -->
        <div class="pb-6 border-b border-[#162436]">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 class="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#EAF7F6]">
                ISMAIL GAYRATOV
              </h1>
              <div class="font-mono text-xs sm:text-sm font-semibold text-[#39C5BB] mt-1">
                {{ t.hero.role }}
              </div>
            </div>
            <div class="font-mono text-xs text-[#7C9399] space-y-0.5 sm:text-right">
              <div>Tashkent, Uzbekistan</div>
              <div>+998 77 488 7875 · gaismail777@gmail.com</div>
              <div class="text-[#39C5BB]">github.com/IsmailGa · @theiiisssaaa</div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="space-y-2">
          <h2 class="font-mono text-xs font-bold text-[#39C5BB] tracking-wider uppercase">
            {{ t.modal.summary }}
          </h2>
          <p class="text-xs sm:text-sm text-[#7C9399] leading-relaxed">
            {{ t.about.summary }}
          </p>
        </div>

        <!-- Experience -->
        <div class="space-y-4">
          <h2 class="font-mono text-xs font-bold text-[#39C5BB] tracking-wider uppercase">
            {{ t.modal.experience }}
          </h2>

          <div class="space-y-5">
            <div 
              v-for="exp in t.experience.items" 
              :key="exp.id"
              class="p-4 sm:p-5 rounded-xl bg-[#05080D] border border-[#162436] space-y-2"
            >
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span class="font-bold text-[#EAF7F6] text-sm">{{ exp.role }}</span>
                  <span class="text-[#7C9399]"> — </span>
                  <span class="font-semibold text-[#39C5BB] text-sm">{{ exp.company }}</span>
                </div>
                <div class="font-mono text-xs text-[#7C9399]">
                  {{ exp.period }}
                </div>
              </div>

              <div class="font-mono text-[11px] text-[#7C9399]/80">
                {{ exp.location }} · {{ exp.category }}
              </div>

              <ul class="space-y-1.5 pt-2 text-xs sm:text-sm text-[#7C9399]">
                <li v-for="(bullet, bIdx) in exp.description" :key="bIdx" class="flex items-start gap-2">
                  <span class="text-[#39C5BB] font-mono shrink-0 mt-0.5">•</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px] text-[#7C9399]">
                <span class="text-[#39C5BB]">Stack:</span>
                <span v-for="tag in exp.tags" :key="tag" class="text-[#EAF7F6]/80 bg-[#0E1724] px-2 py-0.5 rounded border border-[#162436]">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="space-y-3">
          <h2 class="font-mono text-xs font-bold text-[#39C5BB] tracking-wider uppercase">
            {{ t.modal.skills }}
          </h2>
          <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] space-y-2 font-mono text-xs">
            <div v-for="cat in portfolioData.skillCategories" :key="cat.code" class="flex flex-wrap items-baseline gap-2">
              <span class="font-bold text-[#39C5BB] min-w-[140px]">{{ cat.title }}:</span>
              <span class="text-[#EAF7F6]/80">{{ cat.skills.map(s => s.name).join(', ') }}</span>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="space-y-3">
          <h2 class="font-mono text-xs font-bold text-[#39C5BB] tracking-wider uppercase">
            {{ t.modal.education }}
          </h2>
          <div class="space-y-2">
            <div 
              v-for="(edu, idx) in t.education.items" 
              :key="idx"
              class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex flex-col sm:flex-row sm:items-center justify-between gap-1"
            >
              <div>
                <div class="font-bold text-sm text-[#EAF7F6]">{{ edu.degree }}</div>
                <div class="text-xs text-[#7C9399]">{{ edu.institution }} — {{ edu.department }}</div>
              </div>
              <div class="font-mono text-xs text-[#39C5BB] sm:text-right">
                <div>{{ edu.period }}</div>
                <div v-if="edu.score" class="text-[#6FF7EC] font-semibold">{{ edu.score }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="space-y-3">
          <h2 class="font-mono text-xs font-bold text-[#39C5BB] tracking-wider uppercase">
            {{ t.modal.languages }}
          </h2>
          <div class="p-4 rounded-xl bg-[#05080D] border border-[#162436] flex flex-wrap gap-4 font-mono text-xs">
            <div v-for="lang in t.education.languagesList" :key="lang.name">
              <span class="font-bold text-[#39C5BB]">{{ lang.name }}:</span>
              <span class="text-[#EAF7F6] ml-1">{{ lang.level }}</span>
              <span class="text-[#7C9399] ml-1">({{ lang.description }})</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-3.5 border-t border-[#162436] bg-[#0E1724]/80 flex items-center justify-between font-mono text-xs text-[#7C9399]">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#39C5BB]" />
          <span>Status: Verified ATS Standard</span>
        </div>
        <div class="text-[#39C5BB]">
          Ismail Gayratov · 2026
        </div>
      </div>
    </div>
  </div>
</template>
