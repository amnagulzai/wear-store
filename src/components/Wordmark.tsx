import clsx from 'clsx'

const HAPPINESS = 'Happiness'

/**
 * The "Wear Happiness" brand mark. "Happiness" is set in marigold with each
 * letter bouncing in a staggered wave. Animation pauses under reduced-motion
 * (handled globally in index.css).
 */
export function Wordmark({
  className,
  tone = 'ink',
}: {
  className?: string
  tone?: 'ink' | 'paper'
}) {
  return (
    <span
      className={clsx('font-display font-semibold tracking-tight', className)}
      aria-label="Wear Happiness"
    >
      <span aria-hidden="true">
        <span className={tone === 'paper' ? 'text-paper' : 'text-ink'}>Wear&nbsp;</span>
        <span className="text-marigold">
          {HAPPINESS.split('').map((ch, i) => (
            <span
              key={i}
              className="inline-block [animation:letter-jump_302s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {ch}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}
