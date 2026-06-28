import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductGrid } from '../components/ProductGrid'
import { getCategoryBySlug, getProductsByCategory } from '../data'
import { effectivePrice } from '../lib/format'

type SortKey = 'featured' | 'price-asc' | 'price-desc'

export function CategoryPage() {
  const { slug = '' } = useParams()
  const category = getCategoryBySlug(slug)
  const allProducts = useMemo(() => getProductsByCategory(slug), [slug])

  const [sizeFilter, setSizeFilter] = useState<string | null>(null)
  const [sort, setSort] = useState<SortKey>('featured')

  const availableSizes = useMemo(() => {
    const set = new Set<string>()
    allProducts.forEach((p) => p.sizes.forEach((s) => set.add(s)))
    return [...set]
  }, [allProducts])

  const products = useMemo(() => {
    let list = sizeFilter ? allProducts.filter((p) => p.sizes.includes(sizeFilter)) : [...allProducts]
    if (sort !== 'featured') {
      list = list.sort((a, b) => {
        const pa = effectivePrice(a) ?? Infinity
        const pb = effectivePrice(b) ?? Infinity
        return sort === 'price-asc' ? pa - pb : pb - pa
      })
    }
    return list
  }, [allProducts, sizeFilter, sort])

  if (!category) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Category not found</h1>
        <Link to="/" className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.14em] text-woad hover:text-ink">
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Header */}
      <header>
        <p className="eyebrow">
          Collection · {String(allProducts.length).padStart(2, '0')} pieces
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {category.name}
        </h1>
        {category.description && (
          <p className="mt-3 max-w-xl text-muted">{category.description}</p>
        )}
        <div className="cutline mt-6 text-ink" />
      </header>

      {/* Filters */}
      <div className="mb-10 mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow mr-1">Size</span>
          <FilterChip active={sizeFilter === null} onClick={() => setSizeFilter(null)}>
            All
          </FilterChip>
          {availableSizes.map((size) => (
            <FilterChip key={size} active={sizeFilter === size} onClick={() => setSizeFilter(size)}>
              {size}
            </FilterChip>
          ))}
        </div>

        <label className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-sm border border-ink/20 bg-paper px-3 py-1.5 font-mono text-xs text-ink"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
      </div>

      {products.length === 0 ? (
        <p className="py-20 text-center font-mono text-sm uppercase tracking-[0.14em] text-muted">
          No pieces match your filters.
        </p>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        'rounded-full border px-3.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-colors ' +
        (active ? 'border-ink bg-ink text-paper' : 'border-ink/20 text-ink hover:border-ink')
      }
    >
      {children}
    </button>
  )
}
