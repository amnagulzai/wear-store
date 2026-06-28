import type { Product } from '../types'

/*
 * YOUR CATALOG LIVES HERE.
 *
 * To add a product, copy one entry below and edit the fields:
 *   - id / slug      : must be unique. slug appears in the URL (/product/<slug>).
 *   - categorySlug   : must match a `slug` from src/data/categories.ts.
 *   - images         : drop your photos in /public/products and reference them
 *                      as "/products/your-file.jpg". First image is the cover.
 *   - sizes          : the sizes you stock for this item.
 *   - price/salePrice: OPTIONAL — leave undefined until pricing is decided.
 *                      The UI shows "Coming soon" when price is missing.
 *   - isNew/isSale   : badges shown on the product card.
 *
 * The placeholder images below are generated SVGs — replace them with real
 * product photography.
 */

const RTW_SIZES = ['XS', 'S', 'M', 'L', 'XL']
const UNSTITCHED_SIZES = ['Unstitched']
const ONE_SIZE = ['One Size']

export const products: Product[] = [
  {
    id: 'p-2401',
    name: 'Tailored Linen Shirt',
    slug: 'tailored-linen-shirt',
    categorySlug: 'ready-to-wear',
    styleCode: 'WS-2401',
    material: '100% European Linen',
    description:
      'A breathable, relaxed-fit linen shirt with a clean collar and mother-of-pearl buttons. An everyday staple that wears well from desk to dinner.',
    images: ['/products/linen-shirt.svg'],
    sizes: RTW_SIZES,
    isNew: true,
  },
  {
    id: 'p-2402',
    name: 'Embroidered Cotton Kurta',
    slug: 'embroidered-cotton-kurta',
    categorySlug: 'ready-to-wear',
    styleCode: 'WS-2402',
    material: '100% Cotton, Hand Embroidery',
    description:
      'A soft cotton kurta finished with subtle tonal embroidery at the neckline. Light, structured and easy to layer.',
    images: ['/products/cotton-kurta.svg'],
    sizes: RTW_SIZES,
    isNew: true,
  },
  {
    id: 'p-2403',
    name: 'Wide-Leg Trousers',
    slug: 'wide-leg-trousers',
    categorySlug: 'ready-to-wear',
    styleCode: 'WS-2403',
    material: 'Viscose Blend',
    description:
      'High-rise wide-leg trousers with a fluid drape and a concealed side zip. Designed to move with you.',
    images: ['/products/wide-trousers.svg'],
    sizes: RTW_SIZES,
  },
  {
    id: 'p-2404',
    name: 'Silk Tunic',
    slug: 'silk-tunic',
    categorySlug: 'ready-to-wear',
    styleCode: 'WS-2404',
    material: '100% Mulberry Silk',
    description:
      'A lustrous silk tunic with a relaxed silhouette and side slits. Quietly luxe, endlessly versatile.',
    images: ['/products/silk-tunic.svg'],
    sizes: RTW_SIZES,
    isSale: true,
  },
  {
    id: 'p-2405',
    name: 'Printed Lawn 3-Piece',
    slug: 'printed-lawn-3-piece',
    categorySlug: 'unstitched',
    styleCode: 'WS-2405',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A three-piece unstitched lawn suit — shirt, dupatta and trouser fabric — in a hand screen-printed summer motif.',
    images: ['/products/unstitched-lawn.svg'],
    sizes: UNSTITCHED_SIZES,
    isNew: true,
  },
  {
    id: 'p-2406',
    name: 'Cambric 2-Piece',
    slug: 'cambric-2-piece',
    categorySlug: 'unstitched',
    styleCode: 'WS-2406',
    material: '100% Cambric',
    description:
      'A two-piece unstitched cambric set with a soft hand-feel, ideal for transitional weather tailoring.',
    images: ['/products/unstitched-cambric.svg'],
    sizes: UNSTITCHED_SIZES,
  },
  {
    id: 'p-2407',
    name: 'Merino Wool Scarf',
    slug: 'merino-wool-scarf',
    categorySlug: 'accessories',
    styleCode: 'WS-2407',
    material: '100% Merino Wool',
    description:
      'A finely woven merino wool scarf with fringed ends. Warm, lightweight and endlessly wrappable.',
    images: ['/products/wool-scarf.svg'],
    sizes: ONE_SIZE,
  },
  {
    id: 'p-2408',
    name: 'Silk Wrap',
    slug: 'silk-wrap',
    categorySlug: 'accessories',
    styleCode: 'WS-2408',
    material: '100% Silk',
    description:
      'A featherweight silk wrap that doubles as a shawl or scarf. The finishing touch to any look.',
    images: ['/products/silk-wrap.svg'],
    sizes: ONE_SIZE,
    isSale: true,
  },
]
