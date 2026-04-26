import { useEffect, useState, useRef } from 'react'

export default function useCountUp(target, durationMs = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const elapsed = now - start
          const t = Math.min(1, elapsed / durationMs)
          const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
          setValue(Math.round(target * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      }
    }, { threshold: 0.4 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, durationMs])

  return [value, ref]
}
