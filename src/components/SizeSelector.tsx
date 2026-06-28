import clsx from 'clsx'

export function SizeSelector({
  sizes,
  selected,
  onSelect,
}: {
  sizes: string[]
  selected: string | null
  onSelect: (size: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isSelected = size === selected
        return (
          <button
            key={size}
            type="button"
            onClick={() => onSelect(size)}
            aria-pressed={isSelected}
            className={clsx(
              'min-w-12 rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors',
              isSelected
                ? 'border-ink bg-ink text-paper'
                : 'border-ink/20 text-ink hover:border-ink',
            )}
          >
            {size}
          </button>
        )
      })}
    </div>
  )
}
