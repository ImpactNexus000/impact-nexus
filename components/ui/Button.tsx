'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = {
  variant: 'primary' | 'ghost'
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  target?: string
  rel?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50'

const variants = {
  primary:
    'bg-accent text-white shadow-[0_0_24px_rgba(91,110,245,0.35)] hover:bg-[#6d80ff]',
  ghost:
    'bg-transparent border border-white/10 text-subtle hover:border-white/[0.14] hover:text-text',
}

export function Button({
  variant,
  children,
  href,
  onClick,
  className,
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
