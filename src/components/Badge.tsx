import clsx from 'clsx'

type Variant = 'new' | 'sale'

export function Badge({ variant }: { variant: Variant }) {
  return (
    <span
      className={clsx(
        'rounded-sm px-2 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.16em]',
        variant === 'new' && 'bg-ink text-paper',
        variant === 'sale' && 'bg-madder text-paper',
      )}
    >
      {variant === 'new' ? 'New' : 'Sale'}
    </span>
  )
}
