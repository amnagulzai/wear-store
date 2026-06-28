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
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Your cart is empty</h1>
        <p className="mt-3 text-muted">Browse our latest pieces and add something you love.</p>
        <Link
          to="/category/new-in"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-soft"
        >
          Shop New In
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mb-8 font-display text-4xl font-semibold">Cart</h1>

      <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
        {/* Line items */}
        <ul className="divide-y divide-black/10">
          {items.map((line) => {
            const product = getProductById(line.productId)
            if (!product) return null
            return (
              <li key={`${line.productId}-${line.size}`} className="flex gap-4 py-5">
                <Link to={`/product/${product.slug}`} className="shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-28 w-22 rounded bg-cream object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link to={`/product/${product.slug}`} className="font-medium hover:text-accent">
                        {product.name}
                      </Link>
                      <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                        {product.styleCode} · Size {line.size}
                      </p>
                    </div>
                    <Price product={product} />
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <QuantityStepper
                      qty={line.qty}
                      onChange={(q) => updateQty(line.productId, line.size, q)}
                    />
                    <button
                      type="button"
                      onClick={() => removeLine(line.productId, line.size)}
                      className="text-sm text-muted underline-offset-2 hover:text-sale hover:underline"
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
        <aside className="h-fit rounded-lg bg-cream p-6">
          <h2 className="font-display text-xl font-semibold">Order summary</h2>

          <div className="mt-4">
            <label htmlFor="coupon" className="text-sm text-muted">
              Coupon code
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter code"
                className="min-w-0 flex-1 rounded-md border border-black/20 bg-white px-3 py-2 text-sm"
              />
              <button
                type="button"
                onClick={() => setCouponMsg(coupon ? 'Coupon codes activate at launch.' : null)}
                className="rounded-md border border-black/20 px-3 py-2 text-sm hover:border-brand"
              >
                Apply
              </button>
            </div>
            {couponMsg && <p className="mt-2 text-xs text-muted">{couponMsg}</p>}
          </div>

          <dl className="mt-6 space-y-2 border-t border-black/10 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="font-medium">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Shipping</dt>
              <dd className="text-muted">Calculated at checkout</dd>
            </div>
          </dl>

          {hasUnpricedItems && (
            <p className="mt-3 text-xs text-muted">
              Some items are not yet priced; the subtotal will update once pricing is set.
            </p>
          )}

          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-soft"
          >
            Proceed to checkout
          </button>
          <Link
            to="/"
            className="mt-3 block text-center text-sm text-accent hover:underline"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
