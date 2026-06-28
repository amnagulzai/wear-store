import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { categories } from '../data'
import { useCart } from '../cart/useCart'
import { Wordmark } from './Wordmark'

export function Header() {
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40">
      {/* Mill-ticket announcement strip */}
      <div className="bg-deep text-paper/80">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] sm:px-6">
          <span className="text-marigold">●</span>
          <span>Free tailoring on unstitched orders over Rs 15,000</span>
        </div>
      </div>

      <div className="border-b border-ink/10 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="-ml-2 p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <BurgerIcon open={menuOpen} />
          </button>

          <Link to="/" className="group">
            <Wordmark className="text-2xl leading-none" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {categories.map((c) => (
              <NavLink
                key={c.slug}
                to={`/category/${c.slug}`}
                className={({ isActive }) =>
                  clsx(
                    'relative font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:text-woad',
                    c.slug === 'sale' ? 'text-madder' : 'text-ink',
                    isActive && 'text-woad',
                  )
                }
              >
                {c.name}
              </NavLink>
            ))}
          </nav>

          <Link to="/cart" className="relative -mr-2 p-2" aria-label={`Cart, ${count} items`}>
            <CartIcon />
            {count > 0 && (
              <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-marigold px-1 font-mono text-[0.65rem] font-medium text-ink">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="border-b border-ink/10 bg-paper md:hidden">
          <ul className="flex flex-col px-4 py-2 sm:px-6">
            {categories.map((c) => (
              <li key={c.slug}>
                <NavLink
                  to={`/category/${c.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'block py-3 font-mono text-xs uppercase tracking-[0.15em]',
                      c.slug === 'sale' ? 'text-madder' : 'text-ink',
                      isActive && 'text-woad',
                    )
                  }
                >
                  {c.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
