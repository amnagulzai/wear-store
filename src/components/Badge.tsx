import clsx from 'clsx'

type Variant = 'new' | 'sale'

export function Badge({ variant }: { variant: Variant }) {
  return (
    <span
      className={clsx(
        'rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide',
        variant === 'new' && 'bg-brand text-white',
        variant === 'sale' && 'bg-sale text-white',
      )}
    >
      {variant === 'new' ? 'New' : 'Sale'}
    </span>
  )
}
