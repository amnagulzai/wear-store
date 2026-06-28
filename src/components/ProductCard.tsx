import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { Price } from './Price'
import { Badge } from './Badge'

export function ProductCard({ product }: { product: Product }) {
  const onSale = product.isSale || product.salePrice != null

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-sm bg-ecru">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="aspect-4/5 w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute left-2.5 top-2.5 flex gap-1.5">
          {product.isNew && <Badge variant="new" />}
          {onSale && <Badge variant="sale" />}
        </div>
      </div>

      <div className="mt-3.5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[1.05rem] font-medium leading-snug decoration-marigold decoration-2 underline-offset-4 group-hover:underline">
            {product.name}
          </h3>
          <Price product={product} className="shrink-0" />
        </div>
        <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.13em] text-muted">
          {product.styleCode} · {product.material}
        </p>
      </div>
    </Link>
  )
}
