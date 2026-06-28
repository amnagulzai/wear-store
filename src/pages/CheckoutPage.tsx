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
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cream text-3xl">
          ✓
        </div>
        <h1 className="font-display text-3xl font-semibold">Order received</h1>
        <p className="mt-3 text-muted">
          Thanks for your order. This is a demo checkout — no payment was taken and no order was
          placed.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-soft"
        >
          Back to shopping
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Your cart is empty</h1>
        <Link to="/" className="mt-6 inline-block text-accent hover:underline">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mb-2 font-display text-4xl font-semibold">Checkout</h1>
      <p className="mb-8 rounded-md bg-cream px-4 py-3 text-sm text-muted">
        Demo checkout — payments are not enabled. Submitting will simulate placing an order without
        charging anything.
      </p>

      <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset className="space-y-4">
            <legend className="font-display text-xl font-semibold">Contact</legend>
            <Field label="Email" type="email" name="email" required />
            <Field label="Phone" type="tel" name="phone" required />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display text-xl font-semibold">Shipping address</legend>
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
            className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-soft"
          >
            Place order
          </button>
        </form>

        <aside className="h-fit rounded-lg bg-cream p-6">
          <h2 className="font-display text-xl font-semibold">Summary</h2>
          <p className="mt-2 text-sm text-muted">
            {items.reduce((n, l) => n + l.qty, 0)} item(s)
          </p>
          <dl className="mt-4 space-y-2 border-t border-black/10 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="font-medium">{formatPrice(subtotal)}</dd>
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
    <label className="block text-sm">
      <span className="mb-1 block font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none"
      />
    </label>
  )
}
