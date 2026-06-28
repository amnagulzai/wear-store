import type { Category } from '../types'

// Edit this list to define your store's categories.
// `slug` must be URL-safe and is referenced by products via `categorySlug`.
export const categories: Category[] = [
  {
    slug: 'new-in',
    name: 'New In',
    description: 'The latest arrivals, fresh off the rack.',
  },
  {
    slug: 'ready-to-wear',
    name: 'Ready-to-Wear',
    description: 'Effortless, stitched pieces ready to step out in.',
    image: '/products/ready-to-wear.svg',
  },
  {
    slug: 'unstitched',
    name: 'Unstitched',
    description: 'Premium fabrics to tailor exactly to you.',
    image: '/products/unstitched.svg',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    description: 'Finishing touches — wraps, scarves and more.',
    image: '/products/accessories.svg',
  },
  {
    slug: 'sale',
    name: 'Sale',
    description: 'Limited-time markdowns while stocks last.',
  },
]
