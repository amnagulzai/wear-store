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
              'min-w-12 rounded-md border px-4 py-2 text-sm font-medium transition-colors',
              isSelected
                ? 'border-brand bg-brand text-white'
                : 'border-black/20 text-ink hover:border-brand',
            )}
          >
            {size}
          </button>
        )
      })}
    </div>
  )
}
