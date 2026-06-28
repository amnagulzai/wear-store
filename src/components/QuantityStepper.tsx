export function QuantityStepper({
  qty,
  onChange,
  min = 1,
}: {
  qty: number
  onChange: (qty: number) => void
  min?: number
}) {
  return (
    <div className="inline-flex items-center rounded-sm border border-ink/20">
      <button
        type="button"
        className="px-3 py-2 text-lg leading-none text-ink transition-colors hover:text-woad disabled:opacity-30"
        aria-label="Decrease quantity"
        disabled={qty <= min}
        onClick={() => onChange(qty - 1)}
      >
        −
      </button>
      <span className="min-w-10 text-center font-mono text-sm tabular-nums" aria-live="polite">
        {qty}
      </span>
      <button
        type="button"
        className="px-3 py-2 text-lg leading-none text-ink transition-colors hover:text-woad"
        aria-label="Increase quantity"
        onClick={() => onChange(qty + 1)}
      >
        +
      </button>
    </div>
  )
}
