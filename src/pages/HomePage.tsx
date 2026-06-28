import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { CategoryTile } from '../components/CategoryTile'
import { ProductGrid } from '../components/ProductGrid'
import { categories, getNewArrivals, getSaleProducts } from '../data'

export function HomePage() {
  const tileCategories = categories.filter((c) => c.image)
  const newArrivals = getNewArrivals()
  const saleProducts = getSaleProducts()

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold">Shop by category</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {tileCategories.map((c) => (
            <CategoryTile key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {newArrivals.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold">New In</h2>
            <Link to="/category/new-in" className="text-sm font-medium text-accent hover:underline">
              View all
            </Link>
          </div>
          <ProductGrid products={newArrivals} />
        </section>
      )}

      {saleProducts.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-display text-3xl font-semibold text-sale">Sale</h2>
              <Link to="/category/sale" className="text-sm font-medium text-accent hover:underline">
                View all
              </Link>
            </div>
            <ProductGrid products={saleProducts} />
          </div>
        </section>
      )}
    </>
  )
}
