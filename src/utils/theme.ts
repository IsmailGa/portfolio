import { ref } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'user_theme'

const readStored = (): Theme | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

export const theme = ref<Theme>(readStored() ?? 'light')

const apply = (value: Theme) => {
  document.documentElement.setAttribute('data-theme', value)
}

export const setTheme = (value: Theme) => {
  theme.value = value
  const root = document.documentElement
  root.classList.add('theme-switching')
  apply(value)
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')))
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* storage unavailable */
  }
}

export const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

export const initTheme = () => {
  apply(theme.value)
}
