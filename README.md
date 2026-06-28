# WEAR — Clothing Store

A modern clothing storefront built with React, Vite, TypeScript and Tailwind CSS.
Browse categories, view products, pick a size, and add to a cart that persists in the
browser. Checkout is a demo placeholder — no backend and no real payments (yet).

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # lint with oxlint
```

## Adding your own catalog

Everything you need to manage is under `src/data/` and `public/products/`.

### 1. Categories — `src/data/categories.ts`
Each category needs a unique `slug` (used in the URL) and a `name`. Add an `image`
to show it as a tile on the homepage. `new-in` and `sale` are special: they're
populated automatically from product flags rather than `categorySlug`.

### 2. Products — `src/data/products.ts`
Copy an existing entry and edit the fields. Key points:
- `slug` and `id` must be unique. `slug` appears in the URL (`/product/<slug>`).
- `categorySlug` must match a category `slug`.
- `images`: put your photos in `public/products/` and reference them as
  `"/products/your-file.jpg"`. The first image is the cover.
- `price` / `salePrice` are **optional** — leave them off until pricing is decided.
  The UI shows "Coming soon" wherever a price is missing.
- `isNew` / `isSale` control the badges and the New In / Sale collections.

The schema is documented in `src/types.ts`.

### 3. Images
The placeholder images in `public/products/` are generated SVGs. Replace them with
real product photography (JPG/PNG/WebP). A ~4:5 portrait aspect ratio looks best.

## Project structure

```
src/
  components/   reusable UI (Header, Footer, ProductCard, Price, ...)
  pages/        routed pages (Home, Category, Product, Cart, Checkout, 404)
  data/         your catalog (categories, products) + query helpers
  cart/         cart state (Context + reducer, persisted to localStorage)
  lib/          helpers (price formatting)
  types.ts      catalog types
  index.css     Tailwind import + brand theme tokens
```

## Theming
Brand colors and fonts live as Tailwind theme tokens in `src/index.css` (the
`@theme` block). Change them there to restyle the whole store.

## Roadmap (not yet implemented)
- Real checkout / payments (e.g. Stripe) and order persistence — needs a backend.
- Final pricing.
- Optional migration of the catalog to a headless CMS.
