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
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Product not found</h1>
        <Link to="/" className="mt-4 inline-block text-accent hover:underline">
          Back to home
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

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <nav className="mb-6 text-sm text-muted">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        {category && (
          <>
            {' / '}
            <Link to={`/category/${category.slug}`} className="hover:text-ink">
              {category.name}
            </Link>
          </>
        )}
        {' / '}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="overflow-hidden rounded-lg bg-cream">
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
                    'h-20 w-16 overflow-hidden rounded border ' +
                    (i === activeImage ? 'border-brand' : 'border-transparent')
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
        <div>
          <h1 className="font-display text-3xl font-semibold">{product.name}</h1>
          <p className="mt-1 text-sm uppercase tracking-wide text-muted">{product.styleCode}</p>
          <div className="mt-4">
            <Price product={product} size="lg" />
          </div>

          <p className="mt-6 leading-relaxed text-brand-soft">{product.description}</p>
          <p className="mt-4 text-sm text-muted">
            <span className="font-medium text-ink">Material:</span> {product.material}
          </p>

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Select size</span>
              {error && <span className="text-sm text-sale">Please choose a size</span>}
            </div>
            <SizeSelector sizes={product.sizes} selected={size} onSelect={(s) => { setSize(s); setError(false) }} />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityStepper qty={qty} onChange={setQty} />
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-soft sm:flex-none"
            >
              Add to cart
            </button>
          </div>

          {added && (
            <p className="mt-4 rounded-md bg-cream px-4 py-3 text-sm" role="status">
              Added to cart.{' '}
              <Link to="/cart" className="font-medium text-accent hover:underline">
                View cart
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
