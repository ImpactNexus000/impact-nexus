import { cn } from '@/lib/utils'

type VisionCardProps = {
  title: string
  description: string
  className?: string
}

export function VisionCard({ title, description, className }: VisionCardProps) {
  return (
    <div
      className={cn(
        'rounded-[14px] border border-[color:var(--border)] bg-surface p-6 transition-colors duration-200 hover:border-[color:var(--border-hover)]',
        className,
      )}
    >
      <h3 className="font-display text-[16px] font-medium text-text">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-subtle">{description}</p>
    </div>
  )
}
