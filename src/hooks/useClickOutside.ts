'use client'

import { useEffect, RefObject } from 'react'

export function useClickOutside(ref: RefObject<HTMLElement>, handler: () => void, enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, handler, enabled])
}
