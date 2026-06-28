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
            Wear Your
            <br />
            Happiness
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

        {/* Featured lookbook image, framed on the indigo field */}
        <div
          className="reveal flex justify-center lg:block lg:justify-self-end"
          style={{ animationDelay: '0.36s' }}
        >
          <figure className="w-64 overflow-hidden rounded-sm border-4 border-marigold bg-paper shadow-2xl sm:w-72 lg:w-80">
            <img
              src="/products/hero-model.jpg"
              alt="SS26 lookbook — blue floral embroidered gown"
              className="aspect-3/4 w-full object-cover"
            />
            <figcaption className="flex items-center justify-between px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink">
              <span>SS26 Lookbook</span>
              <span className="text-marigold">Blue Floral</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
