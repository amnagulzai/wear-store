const formatter = new Intl.NumberFormat('en-PK', {
  style: 'currency',
  currency: 'PKR',
  maximumFractionDigits: 0,
})

/** Formats a price, or returns a placeholder when pricing isn't set yet. */
export function formatPrice(price?: number): string {
  if (price == null) return 'Coming soon'
  return formatter.format(price)
}

/** The effective price a customer pays (salePrice when it's lower). */
export function effectivePrice(product: {
  price?: number
  salePrice?: number
}): number | undefined {
  if (product.salePrice != null && (product.price == null || product.salePrice < product.price)) {
    return product.salePrice
  }
  return product.price
}
