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
    <div className="inline-flex items-center rounded-md border border-black/20">
      <button
        type="button"
        className="px-3 py-2 text-lg leading-none disabled:opacity-30"
        aria-label="Decrease quantity"
        disabled={qty <= min}
        onClick={() => onChange(qty - 1)}
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm tabular-nums" aria-live="polite">
        {qty}
      </span>
      <button
        type="button"
        className="px-3 py-2 text-lg leading-none"
        aria-label="Increase quantity"
        onClick={() => onChange(qty + 1)}
      >
        +
      </button>
    </div>
  )
}
