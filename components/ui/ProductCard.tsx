import { cn } from '@/lib/utils'
import { Badge } from './Badge'

type ProductCardProps = {
  name: string
  description: string
  status: 'live' | 'development'
  linkLabel: string
  href: string
  className?: string
}

export function ProductCard({
  name,
  description,
  status,
  linkLabel,
  href,
  className,
}: ProductCardProps) {
  const accentLine =
    status === 'live'
      ? 'linear-gradient(90deg, transparent, rgba(16,185,129,0.7), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(91,110,245,0.7), transparent)'

  const glowColor =
    status === 'live'
      ? 'rgba(16,185,129,0.18)'
      : 'rgba(91,110,245,0.22)'

  return (
    <article
      className={cn(
        'product-card group relative flex h-full flex-col rounded-[14px] border border-[color:var(--border)] bg-surface p-7 transition-colors duration-200 hover:border-[color:var(--border-hover)]',
        className,
      )}
      style={{ ['--card-accent-line' as string]: accentLine }}
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[90%] -translate-x-1/2 opacity-70"
        style={{
          background: `radial-gradient(ellipse, ${glowColor} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-4">
        <Badge status={status} />
        <h3 className="font-display text-[22px] font-bold leading-tight text-text">
          {name}
        </h3>
        <p className="text-[14px] leading-relaxed text-muted">{description}</p>
      </div>

      <div className="relative mt-8 pt-5">
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-subtle transition-colors duration-200 hover:text-accent"
        >
          {linkLabel}
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </article>
  )
}
