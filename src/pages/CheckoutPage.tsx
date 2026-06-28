import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/useCart'
import { formatPrice } from '../lib/format'

export function CheckoutPage() {
  const { items, subtotal, clear } = useCart()
  const [placed, setPlaced] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setPlaced(true)
    clear()
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ink text-2xl text-marigold">
          ✓
        </div>
        <p className="eyebrow text-marigold">Order № WS-{Math.floor(Math.random() * 9000 + 1000)}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">Order received</h1>
        <p className="mt-3 leading-relaxed text-muted">
          Thanks for your order. This is a demo checkout — no payment was taken and no order was
          placed.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-ink px-8 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
        >
          Back to shopping
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight">Your bag is empty</h1>
        <Link to="/" className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.14em] text-woad hover:text-ink">
          ← Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header>
        <p className="eyebrow">Final cut</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Checkout</h1>
        <div className="cutline mt-6 text-ink" />
      </header>

      <p className="mt-6 rounded-sm border border-dashed border-ink/25 px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
        Demo checkout — payments aren't enabled. Submitting simulates an order without charging.
      </p>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset className="space-y-4">
            <legend className="eyebrow mb-2">Contact</legend>
            <Field label="Email" type="email" name="email" required />
            <Field label="Phone" type="tel" name="phone" required />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="eyebrow mb-2">Shipping address</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="firstName" required />
              <Field label="Last name" name="lastName" required />
            </div>
            <Field label="Address" name="address" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="City" name="city" required />
              <Field label="Postal code" name="postal" required />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-full bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
          >
            Place order
          </button>
        </form>

        <aside className="h-fit rounded-sm bg-ecru p-6">
          <h2 className="eyebrow">Summary</h2>
          <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
            {items.reduce((n, l) => n + l.qty, 0)} item(s)
          </p>
          <dl className="mt-4 space-y-2 border-t border-ink/15 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="font-mono tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-ink/20 bg-paper px-3 py-2.5 text-sm focus:border-woad focus:outline-none"
      />
    </label>
  )
}
