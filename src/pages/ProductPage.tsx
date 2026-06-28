import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Price } from '../components/Price'
import { SizeSelector } from '../components/SizeSelector'
import { QuantityStepper } from '../components/QuantityStepper'
import { getCategoryBySlug, getProductBySlug } from '../data'
import { useCart } from '../cart/useCart'

export function ProductPage() {
  const { slug = '' } = useParams()
  const product = getProductBySlug(slug)
  const { add } = useCart()

  const [size, setSize] = useState<string | null>(null)
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)
  const [error, setError] = useState(false)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Product not found</h1>
        <Link to="/" className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.14em] text-woad hover:text-ink">
          ← Back to home
        </Link>
      </div>
    )
  }

  const category = getCategoryBySlug(product.categorySlug)

  function handleAdd() {
    if (!size) {
      setError(true)
      return
    }
    add(product!.id, size, qty)
    setAdded(true)
    setError(false)
    window.setTimeout(() => setAdded(false), 2500)
  }

  const spec: [string, string][] = [
    ['Style', product.styleCode],
    ['Composition', product.material],
    ['Category', category?.name ?? '—'],
    ['Sizes', product.sizes.join(' · ')],
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <nav className="mb-8 font-mono text-[0.7rem] uppercase tracking-[0.13em] text-muted">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        {category && (
          <>
            <span className="px-2">/</span>
            <Link to={`/category/${category.slug}`} className="hover:text-ink">
              {category.name}
            </Link>
          </>
        )}
        <span className="px-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="overflow-hidden rounded-sm bg-ecru">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={
                    'h-20 w-16 overflow-hidden rounded-sm border ' +
                    (i === activeImage ? 'border-ink' : 'border-transparent')
                  }
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:pt-2">
          <p className="eyebrow text-marigold">{product.styleCode}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">{product.name}</h1>
          <div className="mt-4">
            <Price product={product} size="lg" />
          </div>

          <p className="mt-7 leading-relaxed text-muted">{product.description}</p>

          {/* Size */}
          <div className="mt-9">
            <div className="mb-3 flex items-center justify-between">
              <span className="eyebrow">Select size</span>
              {error && (
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-madder">
                  Choose a size
                </span>
              )}
            </div>
            <SizeSelector
              sizes={product.sizes}
              selected={size}
              onSelect={(s) => {
                setSize(s)
                setError(false)
              }}
            />
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityStepper qty={qty} onChange={setQty} />
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 rounded-full bg-ink px-8 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5 sm:flex-none"
            >
              Add to cart
            </button>
          </div>

          {added && (
            <p className="mt-4 rounded-sm bg-ecru px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.1em]" role="status">
              Added to cart ·{' '}
              <Link to="/cart" className="text-woad hover:text-ink">
                View cart →
              </Link>
            </p>
          )}

          {/* Mill-ticket spec table */}
          <dl className="mt-10 border-t border-ink/15">
            {spec.map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-ink/10 py-3">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">{k}</dt>
                <dd className="font-mono text-[0.78rem] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
