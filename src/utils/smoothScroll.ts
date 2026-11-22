/**
 * Inertial ("Lenis-style") wheel scrolling + scroll parallax. No dependencies.
 * - Wheel is smoothed with a lerp; touch / keyboard / scrollbar stay native.
 * - Elements with [data-parallax="0.2"] drift at a fraction of scroll speed.
 */
export function initSmoothScroll(): () => void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return () => {}

  const root = document.documentElement
  const ease = 0.085
  let target = window.scrollY
  let current = window.scrollY
  let running = false
  let programmatic = false

  const maxScroll = () => root.scrollHeight - window.innerHeight
  const clamp = (v: number) => Math.max(0, Math.min(maxScroll(), v))

  const parallaxEls = () => Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
  let pEls: HTMLElement[] = []

  const applyParallax = (y: number) => {
    for (const el of pEls) {
      const speed = parseFloat(el.dataset.parallax || '0')
      el.style.transform = `translate3d(0, ${(y * speed).toFixed(2)}px, 0)`
    }
  }

  const tick = () => {
    const diff = target - current
    if (Math.abs(diff) < 0.1) {
      current = target
      running = false
    } else {
      current += diff * ease
    }
    programmatic = true
    window.scrollTo(0, current)
    programmatic = false
    applyParallax(current)
    if (running) requestAnimationFrame(tick)
  }
  const start = () => {
    if (!running) {
      running = true
      requestAnimationFrame(tick)
    }
  }

  const onWheel = (e: WheelEvent) => {
    if (e.ctrlKey || e.defaultPrevented) return
    // let nested scrollable areas (e.g. horizontal tab strip) behave natively
    const el = e.target as HTMLElement | null
    if (el?.closest('[data-native-scroll]')) return
    e.preventDefault()
    const unit = e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? window.innerHeight : 1
    if (!running) current = window.scrollY
    target = clamp((running ? target : window.scrollY) + e.deltaY * unit)
    start()
  }

  // Native scrolls (keyboard, scrollbar drag, anchor jumps, touch) -> resync
  const onScroll = () => {
    if (programmatic) return
    if (!running) {
      current = target = window.scrollY
      applyParallax(current)
    }
  }

  // Smooth in-page anchors through the same lerp
  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null
    if (!a || a.getAttribute('href') === '#') return
    const dest = document.querySelector(a.getAttribute('href')!)
    if (!dest) return
    e.preventDefault()
    const offset = parseFloat(getComputedStyle(dest).scrollMarginTop) || 0
    current = window.scrollY
    target = clamp(dest.getBoundingClientRect().top + window.scrollY - offset)
    start()
  }

  root.style.scrollBehavior = 'auto'
  requestAnimationFrame(() => {
    pEls = parallaxEls()
    applyParallax(window.scrollY)
  })
  window.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClick)

  return () => {
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', onClick)
    root.style.scrollBehavior = ''
  }
}
