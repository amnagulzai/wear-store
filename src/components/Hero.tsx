import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep text-paper">
      {/* Woven indigo field */}
      <img
        src="/products/hero.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* Thesis */}
        <div>
          <p className="eyebrow reveal text-marigold" style={{ animationDelay: '0.05s' }}>
            SS26 · Lawn / Cambric / Linen
          </p>
          <h1
            className="reveal mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl"
            style={{ animationDelay: '0.12s' }}
          >
            Cloth,
            <br />
            considered.
          </h1>
          <p
            className="reveal mt-6 max-w-md text-base leading-relaxed text-paper/75"
            style={{ animationDelay: '0.2s' }}
          >
            Ready-to-wear cut with intent, and unstitched fabric sold by the metre — for the look
            you'll tailor yourself.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-3" style={{ animationDelay: '0.28s' }}>
            <Link
              to="/category/new-in"
              className="rounded-full bg-paper px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-transform hover:-translate-y-0.5"
            >
              Shop New In
            </Link>
            <Link
              to="/category/unstitched"
              className="rounded-full border border-paper/30 px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:border-marigold hover:text-marigold"
            >
              Unstitched
            </Link>
          </div>
        </div>

        {/* Signature: an offset swatch ticket */}
        <div className="reveal hidden justify-self-end lg:block" style={{ animationDelay: '0.36s' }}>
          <figure className="w-72 rotate-2 overflow-hidden rounded-sm bg-paper shadow-2xl ring-1 ring-black/5 transition-transform duration-500 hover:rotate-0">
            <img
              src="/products/unstitched-lawn.svg"
              alt="Featured fabric — Printed Lawn 3-Piece"
              className="aspect-4/5 w-full object-cover"
            />
            <figcaption className="flex items-center justify-between px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink">
              <span>Swatch № WS-2405</span>
              <span className="text-marigold">100% Lawn</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
