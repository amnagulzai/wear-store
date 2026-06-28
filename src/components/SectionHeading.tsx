import { Link } from 'react-router-dom'

export function SectionHeading({
  eyebrow,
  title,
  to,
  actionLabel = 'View all',
  tone = 'ink',
}: {
  eyebrow: string
  title: string
  to?: string
  actionLabel?: string
  tone?: 'ink' | 'madder'
}) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2
            className={
              'mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl ' +
              (tone === 'madder' ? 'text-madder' : 'text-ink')
            }
          >
            {title}
          </h2>
        </div>
        {to && (
          <Link
            to={to}
            className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-woad transition-colors hover:text-ink"
          >
            {actionLabel} →
          </Link>
        )}
      </div>
      <div className="cutline mt-5 text-ink" />
    </div>
  )
}
