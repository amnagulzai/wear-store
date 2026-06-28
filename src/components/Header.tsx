import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { categories } from '../data'
import { useCart } from '../cart/useCart'

export function Header() {
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
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

        <Link to="/" className="font-display text-2xl font-bold tracking-[0.2em] text-brand">
          WEAR
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {categories.map((c) => (
            <NavLink
              key={c.slug}
              to={`/category/${c.slug}`}
              className={({ isActive }) =>
                clsx(
                  'text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent',
                  c.slug === 'sale' && 'text-sale',
                  isActive && 'text-accent',
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
            <span className="absolute -right-0 -top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs font-semibold text-white">
              {count}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="border-t border-black/10 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-2 sm:px-6">
            {categories.map((c) => (
              <li key={c.slug}>
                <NavLink
                  to={`/category/${c.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'block py-3 text-sm font-medium uppercase tracking-wide',
                      c.slug === 'sale' && 'text-sale',
                      isActive && 'text-accent',
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
