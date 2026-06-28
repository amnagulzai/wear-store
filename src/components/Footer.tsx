import { Link } from 'react-router-dom'
import { categories } from '../data'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold tracking-[0.2em] text-brand">WEAR</p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Thoughtfully made clothing — ready-to-wear, unstitched and accessories.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className="hover:text-ink">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Help</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Order Tracking</li>
            <li>Returns &amp; Exchanges</li>
            <li>FAQs</li>
            <li>Store Locator</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>support@wear.example</li>
            <li>+92 300 0000000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} WEAR. All rights reserved.
      </div>
    </footer>
  )
}
