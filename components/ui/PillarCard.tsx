import { cn } from '@/lib/utils'

type PillarCardProps = {
  icon: string
  title: string
  description: string
  className?: string
}

export function PillarCard({ icon, title, description, className }: PillarCardProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-4 rounded-[14px] border border-[color:var(--border)] bg-surface/60 p-5 transition-colors duration-200 hover:border-[color:var(--border-hover)]',
        className,
      )}
    >
      <div
        className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg text-[16px]"
        style={{ background: 'var(--accent-glow)' }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-[15px] font-semibold text-text">{title}</h3>
        <p className="text-[13px] leading-relaxed text-subtle">{description}</p>
      </div>
    </div>
  )
}
