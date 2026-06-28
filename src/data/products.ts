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
    images: ['/products/linen-shirt.jpg'],
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
  // Unstitched lawn 3-piece collection
  {
    id: 'p-wl01',
    name: 'Ivory Bloom Lawn 3-Piece',
    slug: 'ivory-bloom-lawn',
    categorySlug: 'unstitched',
    styleCode: 'WL-01',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A three-piece unstitched lawn suit — shirt, dupatta and trouser fabric — in a soft ivory ground scattered with a rose-and-gold floral spray.',
    images: ['/products/lawn-cream.jpg'],
    sizes: UNSTITCHED_SIZES,
    isNew: true,
  },
  {
    id: 'p-wl02',
    name: 'Marigold Garden Lawn 3-Piece',
    slug: 'marigold-garden-lawn',
    categorySlug: 'unstitched',
    styleCode: 'WL-02',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A vivid marigold three-piece unstitched lawn suit with an all-over white-and-pink garden print and a printed border panel.',
    images: ['/products/lawn-marigold.jpg'],
    sizes: UNSTITCHED_SIZES,
    isNew: true,
  },
  {
    id: 'p-wl03',
    name: 'Sage Rose Lawn 3-Piece',
    slug: 'sage-rose-lawn',
    categorySlug: 'unstitched',
    styleCode: 'WL-03',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A calming sage-green three-piece unstitched lawn suit printed with blush roses and trailing leaves.',
    images: ['/products/lawn-sage.jpg'],
    sizes: UNSTITCHED_SIZES,
  },
  {
    id: 'p-wl04',
    name: 'Rose Blush Lawn 3-Piece',
    slug: 'rose-blush-lawn',
    categorySlug: 'unstitched',
    styleCode: 'WL-04',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A romantic rose-pink three-piece unstitched lawn suit with a soft ivory floral spray and printed dupatta border.',
    images: ['/products/lawn-pink.jpg'],
    sizes: UNSTITCHED_SIZES,
    isNew: true,
  },
  {
    id: 'p-wl05',
    name: 'Lilac Trellis Lawn 3-Piece',
    slug: 'lilac-trellis-lawn',
    categorySlug: 'unstitched',
    styleCode: 'WL-05',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A three-piece unstitched lawn suit in a gentle lilac ground with a fine white floral trellis print.',
    images: ['/products/lawn-lilac.jpg'],
    sizes: UNSTITCHED_SIZES,
  },
  {
    id: 'p-wl06',
    name: 'Indigo Sprig Lawn 3-Piece',
    slug: 'indigo-sprig-lawn',
    categorySlug: 'unstitched',
    styleCode: 'WL-06',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A crisp white three-piece unstitched lawn suit hand screen-printed with an indigo-blue sprig motif.',
    images: ['/products/lawn-indigo.jpg'],
    sizes: UNSTITCHED_SIZES,
  },
  {
    id: 'p-wl07',
    name: 'Noir Floral Lawn 3-Piece',
    slug: 'noir-floral-lawn',
    categorySlug: 'unstitched',
    styleCode: 'WL-07',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A striking black-ground three-piece unstitched lawn suit with a rose, marigold and leaf floral print.',
    images: ['/products/lawn-noir.jpg'],
    sizes: UNSTITCHED_SIZES,
    isSale: true,
  },
  {
    id: 'p-wl08',
    name: 'Aqua Meadow Lawn 3-Piece',
    slug: 'aqua-meadow-lawn',
    categorySlug: 'unstitched',
    styleCode: 'WL-08',
    material: 'Hand Screen Print | 100% Lawn',
    description:
      'A fresh aqua three-piece unstitched lawn suit covered in a pink-and-white meadow floral with a printed border.',
    images: ['/products/lawn-aqua.jpg'],
    sizes: UNSTITCHED_SIZES,
    isSale: true,
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
    images: ['/products/silk-wrap.jpg'],
    sizes: ONE_SIZE,
    isSale: true,
  },
]
