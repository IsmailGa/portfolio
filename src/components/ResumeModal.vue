<script setup lang="ts">
import { ref } from 'vue'
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
  const resumeText = `
ISMAIL GAYRATOV
Frontend / Full-Stack Developer
Tashkent, Uzbekistan | +998 77 488 7875 | gaismail777@gmail.com
GitHub: https://github.com/IsmailGa | LinkedIn: https://linkedin.com/in/ismail-gayratov | Telegram: @theiiisssaaa

SUMMARY
${portfolioData.summary}

EXPERIENCE
${portfolioData.experiences.map(e => `
${e.role} — ${e.company} (${e.period})
${e.location} | ${e.category}
${e.description.map(d => `• ${d}`).join('\n')}
Stack: ${e.tags.join(', ')}
`).join('\n')}

EDUCATION
${portfolioData.education.map(ed => `
${ed.degree} (${ed.period})
${ed.institution} — ${ed.department} ${ed.score ? `[${ed.score}]` : ''}
`).join('\n')}

LANGUAGES
${portfolioData.languages.map(l => `• ${l.name}: ${l.level} (${l.description})`).join('\n')}
  `.trim()

  try {
    await navigator.clipboard.writeText(resumeText)
    copied.value = true
    soundManager.playChime()
    emit('toast', 'Full resume text copied to clipboard!')
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
      class="relative w-full max-w-4xl max-h-[92vh] bg-[#0A1118] border border-[#162432] rounded-2xl sm:rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-left"
    >
      <!-- Modal Top Bar -->
      <div class="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#162432] bg-[#0E1722]/80">
        <div class="flex items-center gap-2.5 sm:gap-3">
          <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#05080D] border border-[#39C5BB]/40 flex items-center justify-center">
            <FileText class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#39C5BB]" />
          </div>
          <div>
            <h3 class="font-display font-bold text-xs sm:text-base text-[#EAF7F6]">
              Ismail_Gayratov_Resume.pdf
            </h3>
            <span class="font-mono text-[10px] sm:text-[11px] text-[#39C5BB] hidden xs:inline-block">
              Verified Candidate Dossier · 2026 Edition
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
            <span>Download PDF</span>
          </a>

          <!-- Copy Raw Text -->
          <button
            type="button"
            class="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono text-[#EAF7F6] bg-[#05080D] border border-[#162432] hover:border-[#39C5BB] transition-colors cursor-pointer"
            @click="copyRawResume"
            title="Copy plain text version"
          >
            <component :is="copied ? Check : Copy" class="w-3.5 h-3.5 text-[#39C5BB]" />
            <span class="hidden sm:inline">{{ copied ? 'Copied' : 'Copy' }}</span>
          </button>

          <!-- Print Button -->
          <button
            type="button"
            class="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono text-[#EAF7F6] bg-[#05080D] border border-[#162432] hover:border-[#39C5BB] transition-colors cursor-pointer"
            @click="handlePrint"
            title="Print"
          >
            <Printer class="w-3.5 h-3.5 text-[#39C5BB]" />
            <span>Print</span>
          </button>

          <!-- Close Modal -->
          <button
            type="button"
            class="p-1.5 sm:p-2 rounded-lg text-[#7C9399] hover:text-[#EAF7F6] hover:bg-[#05080D] transition-colors cursor-pointer"
            aria-label="Close modal"
            @click="emit('close'); soundManager.playClick()"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Resume Scrollable Content Body -->
      <div class="p-4 sm:p-8 md:p-10 overflow-y-auto space-y-6 sm:space-y-8 print:p-0 print:text-black">
        
        <!-- Resume Header -->
        <div class="border-b border-[#162432] pb-5 sm:pb-6">
          <h1 class="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#EAF7F6]">
            {{ portfolioData.name }}
          </h1>
          <div class="text-[#39C5BB] font-mono text-xs sm:text-base font-semibold mt-1">
            {{ portfolioData.role }}
          </div>
          <div class="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#7C9399] mt-3">
            <span>📍 {{ portfolioData.location }}</span>
            <span>📞 {{ portfolioData.phone }}</span>
            <span>✉️ {{ portfolioData.email }}</span>
            <span>✈️ {{ portfolioData.telegramHandle }}</span>
          </div>
        </div>

        <!-- Summary -->
        <div>
          <h4 class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase font-bold mb-2">
            // SUMMARY
          </h4>
          <p class="text-[#EAF7F6]/90 text-xs sm:text-sm md:text-base leading-relaxed font-body">
            {{ portfolioData.summary }}
          </p>
        </div>

        <!-- Experience -->
        <div>
          <h4 class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase font-bold mb-4">
            // EXPERIENCE
          </h4>
          <div class="space-y-5 sm:space-y-6">
            <div 
              v-for="exp in portfolioData.experiences" 
              :key="exp.id"
              class="border-l-2 border-[#162432] pl-3.5 sm:pl-4 space-y-2"
            >
              <div class="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                <div class="font-display font-bold text-sm sm:text-base md:text-lg text-[#EAF7F6]">
                  {{ exp.role }} <span class="text-[#39C5BB]">@ {{ exp.company }}</span>
                </div>
                <div class="font-mono text-[10px] sm:text-xs text-[#7C9399] bg-[#05080D] px-2 sm:px-2.5 py-0.5 rounded border border-[#162432]">
                  {{ exp.period }}
                </div>
              </div>
              <div class="text-[11px] sm:text-xs font-mono text-[#7C9399]">
                {{ exp.location }} · {{ exp.category }}
              </div>
              <ul class="space-y-1 sm:space-y-1.5 mt-2">
                <li 
                  v-for="(b, bIdx) in exp.description" 
                  :key="bIdx"
                  class="text-xs sm:text-sm text-[#7C9399] leading-relaxed flex items-start gap-2"
                >
                  <span class="text-[#39C5BB] font-mono mt-0.5">›</span>
                  <span>{{ b }}</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-1.5 pt-2">
                <span 
                  v-for="t in exp.tags" 
                  :key="t"
                  class="text-[9px] sm:text-[10px] font-mono text-[#39C5BB] bg-[#05080D] px-2 py-0.5 rounded border border-[#162432]"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Grid -->
        <div>
          <h4 class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase font-bold mb-3">
            // SKILLS & TOOLS
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div 
              v-for="cat in portfolioData.skillCategories" 
              :key="cat.code"
              class="p-3 rounded-xl bg-[#05080D] border border-[#162432]"
            >
              <div class="font-mono text-[11px] font-bold text-[#EAF7F6] mb-1">
                {{ cat.title }}:
              </div>
              <div class="text-[11px] sm:text-xs font-mono text-[#7C9399]">
                {{ cat.skills.map(s => s.name).join(', ') }}
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div>
          <h4 class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase font-bold mb-3">
            // EDUCATION
          </h4>
          <div class="space-y-2.5 sm:space-y-3">
            <div 
              v-for="(ed, idx) in portfolioData.education" 
              :key="idx"
              class="p-3 sm:p-3.5 rounded-xl bg-[#05080D] border border-[#162432] flex flex-wrap items-center justify-between gap-2"
            >
              <div>
                <div class="font-display font-semibold text-xs sm:text-sm text-[#EAF7F6]">
                  {{ ed.degree }}
                </div>
                <div class="font-mono text-[11px] sm:text-xs text-[#7C9399]">
                  {{ ed.institution }} — {{ ed.department }}
                </div>
              </div>
              <div class="text-right font-mono text-[11px] sm:text-xs">
                <div class="text-[#39C5BB]">{{ ed.period }}</div>
                <div v-if="ed.score" class="text-[#6FF7EC]">{{ ed.score }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div>
          <h4 class="font-mono text-xs text-[#39C5BB] tracking-wider uppercase font-bold mb-2">
            // LANGUAGES
          </h4>
          <div class="flex flex-wrap gap-2 sm:gap-3 text-xs font-mono text-[#EAF7F6]">
            <span v-for="l in portfolioData.languages" :key="l.name" class="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#05080D] border border-[#162432]">
              <strong class="text-[#39C5BB]">{{ l.name }}:</strong> {{ l.level }}
            </span>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
