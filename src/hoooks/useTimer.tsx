import { useState, useEffect, useCallback } from 'react'

export function useTimer(initialSeconds: number) {
  const [time, setTime]       = useState(initialSeconds)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setTime(v => (v > 0 ? v - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [running])

  const toggle = useCallback(() => setRunning(r => !r), [])
  const reset  = useCallback(() => { setTime(initialSeconds); setRunning(false) }, [initialSeconds])

  const minutes = String(Math.floor(time / 60)).padStart(2, '0')
  const seconds = String(time % 60).padStart(2, '0')
  const progress = time / initialSeconds

  return { minutes, seconds, progress, running, toggle, reset }
}