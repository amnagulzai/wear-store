import clsx from 'clsx'
import type { Product } from '../types'
import { formatPrice } from '../lib/format'

/** Renders a product's price, handling sale prices and missing pricing. */
export function Price({
  product,
  className,
  size = 'sm',
}: {
  product: Pick<Product, 'price' | 'salePrice'>
  className?: string
  size?: 'sm' | 'lg'
}) {
  const onSale = product.salePrice != null && (product.price == null || product.salePrice < product.price)
  const big = size === 'lg'

  if (product.price == null && product.salePrice == null) {
    return (
      <span className={clsx('text-muted', big ? 'text-lg' : 'text-sm', className)}>Coming soon</span>
    )
  }

  return (
    <span className={clsx('inline-flex items-baseline gap-2', className)}>
      {onSale && (
        <span className={clsx('text-muted line-through', big ? 'text-base' : 'text-sm')}>
          {formatPrice(product.price)}
        </span>
      )}
      <span
        className={clsx(
          'font-medium',
          onSale && 'text-sale',
          big ? 'text-xl' : 'text-sm',
        )}
      >
        {formatPrice(onSale ? product.salePrice : product.price)}
      </span>
    </span>
  )
}
