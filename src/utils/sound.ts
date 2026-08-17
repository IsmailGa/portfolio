// Web Audio API Synthesizer Engine
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
      soundManager.playSynthNote(440, 'sine', 0.12)
    }
    return isMuted
  },

  // Subtle mechanical click
  playClick() {
    if (isMuted) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(640, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.035)

      gain.gain.setValueAtTime(0.04, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.04)
    } catch {
      // ignore
    }
  },

  // Soft hover tone
  playHover() {
    if (isMuted) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(880, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.02)

      gain.gain.setValueAtTime(0.012, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.025)
    } catch {
      // ignore
    }
  },

  // Play musical synth note (for interactive pads & visualizer)
  playSynthNote(freq: number, waveType: OscillatorType = 'sine', duration = 0.25) {
    if (isMuted) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const osc = ctx.createOscillator()
      const filter = ctx.createBiquadFilter()
      const gain = ctx.createGain()

      osc.type = waveType
      osc.frequency.setValueAtTime(freq, ctx.currentTime)

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(freq * 2.8, ctx.currentTime)
      filter.frequency.exponentialRampToValueAtTime(freq * 0.8, ctx.currentTime + duration)

      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + duration + 0.01)
    } catch {
      // ignore
    }
  },

  // Success chime on copy/download
  playChime() {
    if (isMuted) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const freqs = [587.33, 739.99, 880] // D5, F#5, A5
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(f, ctx.currentTime + idx * 0.04)

        gain.gain.setValueAtTime(0.035, ctx.currentTime + idx * 0.04)
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.04 + 0.22)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(ctx.currentTime + idx * 0.04)
        osc.stop(ctx.currentTime + idx * 0.04 + 0.24)
      })
    } catch {
      // ignore
    }
  }
}
