<script setup lang="ts">
import { currentLang, setLanguage, type Language } from '../i18n'
import { soundManager } from '../utils/sound'

const languages: { code: Language; label: string }[] = [
  { code: 'EN', label: 'EN' },
  { code: 'RU', label: 'RU' },
  { code: 'UZ', label: 'UZ' }
]

const switchLang = (code: Language) => {
  if (currentLang.value === code) return
  setLanguage(code)
  soundManager.playSynthNote(code === 'EN' ? 523.25 : code === 'RU' ? 659.25 : 783.99, 'sine', 0.2)
}
</script>

<template>
  <div class="inline-flex items-center p-0.5 sm:p-1 rounded-xl bg-[#0E1724] border border-[#162436] select-none shadow-sm">
    <button
      v-for="lang in languages"
      :key="lang.code"
      type="button"
      class="px-1.5 sm:px-2.5 py-1 rounded-lg font-mono text-[10px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none"
      :class="[
        currentLang === lang.code
          ? 'bg-[#39C5BB] text-[#05080D] shadow-[0_0_12px_rgba(57,197,187,0.45)] font-bold'
          : 'text-[#7C9399] hover:text-[#EAF7F6] hover:bg-[#162436]/40'
      ]"
      @click="switchLang(lang.code)"
    >
      {{ lang.label }}
    </button>
  </div>
</template>
