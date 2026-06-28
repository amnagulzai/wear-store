import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { CategoryTile } from '../components/CategoryTile'
import { ProductGrid } from '../components/ProductGrid'
import { ProductCard } from '../components/ProductCard'
import { SectionHeading } from '../components/SectionHeading'
import { Price } from '../components/Price'
import { categories, getNewArrivals, getSaleProducts } from '../data'

export function HomePage() {
  const tileCategories = categories.filter((c) => c.image)
  const newArrivals = getNewArrivals()
  const saleProducts = getSaleProducts()

  // Editorial split: lead the New In rail with one feature, rest in a rail.
  const [feature, ...rest] = newArrivals

  return (
    <>
      <Hero />

      {/* Shop by category */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="The collections" title="Shop by category" />
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {tileCategories.map((c) => (
            <CategoryTile key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* New In — editorial feature + rail */}
      {feature && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <SectionHeading eyebrow="Just cut" title="New In" to="/category/new-in" />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Feature */}
            <Link to={`/product/${feature.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-sm bg-ecru">
                <img
                  src={feature.images[0]}
                  alt={feature.name}
                  className="aspect-4/5 w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] lg:aspect-square"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-paper px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink">
                  Featured
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight group-hover:text-woad">
                    {feature.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.13em] text-muted">
                    {feature.styleCode} · {feature.material}
                  </p>
                </div>
                <Price product={feature} size="lg" className="shrink-0" />
              </div>
            </Link>

            {/* Supporting rail */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 self-start">
              {rest.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Atelier note — a quiet brand moment */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.6fr_1fr]">
          <p className="eyebrow text-marigold">By the metre</p>
          <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">
            Buy the cloth, keep the choice. Our unstitched fabrics ship with composition and width on
            every ticket — tailor them exactly to you.
          </p>
        </div>
      </section>

      {/* Sale */}
      {saleProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="While it lasts" title="Sale" to="/category/sale" tone="madder" />
          <div className="mt-8">
            <ProductGrid products={saleProducts} />
          </div>
        </section>
      )}
    </>
  )
}
