import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { QuantityStepper } from '../components/QuantityStepper'
import { Price } from '../components/Price'
import { getProductById } from '../data'
import { useCart } from '../cart/useCart'
import { formatPrice } from '../lib/format'

export function CartPage() {
  const { items, subtotal, hasUnpricedItems, updateQty, removeLine } = useCart()
  const navigate = useNavigate()
  const [coupon, setCoupon] = useState('')
  const [couponMsg, setCouponMsg] = useState<string | null>(null)

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
        <p className="eyebrow">Your bag</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">Nothing cut yet</h1>
        <p className="mt-3 text-muted">Browse the latest pieces and add something you'll wear.</p>
        <Link
          to="/category/new-in"
          className="mt-8 inline-block rounded-full bg-ink px-8 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
        >
          Shop New In
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header>
        <p className="eyebrow">{items.reduce((n, l) => n + l.qty, 0)} items</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Your bag</h1>
        <div className="cutline mt-6 text-ink" />
      </header>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_20rem]">
        {/* Line items */}
        <ul className="divide-y divide-ink/10">
          {items.map((line) => {
            const product = getProductById(line.productId)
            if (!product) return null
            return (
              <li key={`${line.productId}-${line.size}`} className="flex gap-4 py-6">
                <Link to={`/product/${product.slug}`} className="shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-32 w-24 rounded-sm bg-ecru object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link to={`/product/${product.slug}`} className="font-display text-lg font-medium hover:text-woad">
                        {product.name}
                      </Link>
                      <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                        {product.styleCode} · Size {line.size}
                      </p>
                    </div>
                    <Price product={product} />
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <QuantityStepper qty={line.qty} onChange={(q) => updateQty(line.productId, line.size, q)} />
                    <button
                      type="button"
                      onClick={() => removeLine(line.productId, line.size)}
                      className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted transition-colors hover:text-madder"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        {/* Summary */}
        <aside className="h-fit rounded-sm bg-ecru p-6">
          <h2 className="eyebrow">Order summary</h2>

          <div className="mt-4">
            <label htmlFor="coupon" className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
              Coupon code
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter code"
                className="min-w-0 flex-1 rounded-sm border border-ink/20 bg-paper px-3 py-2 font-mono text-xs"
              />
              <button
                type="button"
                onClick={() => setCouponMsg(coupon ? 'Coupon codes activate at launch.' : null)}
                className="rounded-sm border border-ink/30 px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] hover:border-ink"
              >
                Apply
              </button>
            </div>
            {couponMsg && <p className="mt-2 text-xs text-muted">{couponMsg}</p>}
          </div>

          <dl className="mt-6 space-y-2.5 border-t border-ink/15 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="font-mono tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Shipping</dt>
              <dd className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-muted">At checkout</dd>
            </div>
          </dl>

          {hasUnpricedItems && (
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Some items aren't priced yet; the subtotal will update once pricing is set.
            </p>
          )}

          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
          >
            Checkout
          </button>
          <Link to="/" className="mt-3 block text-center font-mono text-[0.7rem] uppercase tracking-[0.12em] text-woad hover:text-ink">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
