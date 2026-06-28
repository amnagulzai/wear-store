import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { Price } from './Price'
import { Badge } from './Badge'

export function ProductCard({ product }: { product: Product }) {
  const onSale = product.isSale || product.salePrice != null

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-cream">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="aspect-4/5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.isNew && <Badge variant="new" />}
          {onSale && <Badge variant="sale" />}
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium leading-snug group-hover:text-accent">{product.name}</h3>
        <p className="text-xs uppercase tracking-wide text-muted">{product.styleCode}</p>
        <p className="text-xs text-muted">{product.material}</p>
        <Price product={product} className="pt-1" />
      </div>
    </Link>
  )
}
