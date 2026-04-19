import { cn } from '@/lib/utils'

type StatCardProps = {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        'rounded-[12px] border border-[color:var(--border)] bg-surface/60 px-4 py-4',
        className,
      )}
    >
      <div className="font-display text-[28px] font-bold leading-none text-text">
        {value}
      </div>
      <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
        {label}
      </div>
    </div>
  )
}
