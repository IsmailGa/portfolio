// Web Audio API high-precision synthesized micro-interactions
let audioCtx: AudioContext | null = null
let isMuted = false

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

export const soundManager = {
  isMuted: () => isMuted,
  setMuted: (muted: boolean) => {
    isMuted = muted
  },
  toggleMute: () => {
    isMuted = !isMuted
    if (!isMuted) {
      soundManager.playBlip(780, 0.08, 'sine')
    }
    return isMuted
  },

  // Subtle futuristic micro-click (like a mechanical synth key)
  playClick() {
    if (isMuted) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(800, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.06, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.045)
    } catch {
      // Ignore audio policy errors
    }
  },

  // Subtle hover tick (ultra quiet)
  playHover() {
    if (isMuted) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(1200, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.02)

      gain.gain.setValueAtTime(0.015, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.025)
    } catch {
      // ignore
    }
  },

  // Vocaloid frequency chime for special events (e.g. copy email, switch tab)
  playChime() {
    if (isMuted) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const freqs = [880, 1174.66, 1760] // A5, D6, A6 (Miku pulse triad)
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(f, ctx.currentTime + idx * 0.04)

        gain.gain.setValueAtTime(0.04, ctx.currentTime + idx * 0.04)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.04 + 0.2)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(ctx.currentTime + idx * 0.04)
        osc.stop(ctx.currentTime + idx * 0.04 + 0.22)
      })
    } catch {
      // ignore
    }
  },

  playBlip(freq = 600, duration = 0.05, type: OscillatorType = 'sine') {
    if (isMuted) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = type
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      gain.gain.setValueAtTime(0.04, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + duration + 0.01)
    } catch {
      // ignore
    }
  }
}
