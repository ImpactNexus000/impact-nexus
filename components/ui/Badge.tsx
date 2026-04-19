import { cn } from '@/lib/utils'

type BadgeProps = {
  status: 'live' | 'development'
  className?: string
}

const config = {
  live: {
    label: 'Live',
    classes: 'bg-green-500/10 border border-green-500/25 text-green-400',
    dot: 'bg-green-400',
    pulse: true,
  },
  development: {
    label: 'In Development',
    classes: 'bg-amber-500/10 border border-amber-500/25 text-amber-400',
    dot: 'bg-amber-400',
    pulse: false,
  },
}

export function Badge({ status, className }: BadgeProps) {
  const c = config[status]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]',
        c.classes,
        className,
      )}
    >
      <span
        className={cn(
          'inline-block h-1.5 w-1.5 rounded-full',
          c.dot,
          c.pulse && 'pulse-dot',
        )}
      />
      {c.label}
    </span>
  )
}
