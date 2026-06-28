import { categories } from './categories'
import { products } from './products'
import type { Category, Product } from '../types'

export { categories, products }

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew)
}

export function getSaleProducts(): Product[] {
  return products.filter((p) => p.isSale || p.salePrice != null)
}

/**
 * Products for a category page. The virtual "new-in" and "sale" categories
 * map to their respective flags; everything else matches `categorySlug`.
 */
export function getProductsByCategory(slug: string): Product[] {
  if (slug === 'new-in') return getNewArrivals()
  if (slug === 'sale') return getSaleProducts()
  return products.filter((p) => p.categorySlug === slug)
}
