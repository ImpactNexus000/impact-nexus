import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionTagProps = {
  children: ReactNode
  className?: string
}

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <span
      className={cn(
        'text-[10px] font-semibold uppercase text-accent',
        className,
      )}
      style={{ letterSpacing: '1.8px' }}
    >
      {children}
    </span>
  )
}
