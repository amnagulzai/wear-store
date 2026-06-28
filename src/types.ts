// Core catalog types for the storefront.
// Edit src/data/products.ts and src/data/categories.ts to add your own catalog.

export interface Category {
  /** URL-safe identifier, e.g. "ready-to-wear". Used in /category/:slug. */
  slug: string
  /** Display name shown in nav and headings. */
  name: string
  /** Optional short blurb shown on the category page. */
  description?: string
  /** Optional tile image (path under /public, e.g. "/products/casuals.jpg"). */
  image?: string
}

export interface Product {
  /** Stable unique id. */
  id: string
  /** Display name. */
  name: string
  /** URL-safe identifier, used in /product/:slug. Must be unique. */
  slug: string
  /** Slug of the Category this product belongs to. */
  categorySlug: string
  /** Brand style/SKU code shown under the name (e.g. "WS-2401"). */
  styleCode: string
  /** Material / composition line (e.g. "100% Cotton"). */
  material: string
  /** Longer description shown on the product page. */
  description: string
  /** Image paths under /public (first is the primary/cover image). */
  images: string[]
  /** Available sizes, e.g. ["XS", "S", "M", "L", "XL"]. */
  sizes: string[]
  /** Price in PKR. Optional — leave undefined until pricing is decided. */
  price?: number
  /** Discounted price in PKR. When set (and below price), shown as a sale. */
  salePrice?: number
  /** Flags a product as a new arrival. */
  isNew?: boolean
  /** Flags a product as on sale (also implied when salePrice is set). */
  isSale?: boolean
}
