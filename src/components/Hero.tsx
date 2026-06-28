import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/products/hero.svg"
        alt=""
        className="h-[60vh] min-h-[420px] w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <p className="text-xs uppercase tracking-[0.35em] text-white/80">Summer 2026</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">
          Effortless pieces, made to last
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/85">
          Ready-to-wear, unstitched fabrics and accessories — designed for everyday ease.
        </p>
        <Link
          to="/category/new-in"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-cream"
        >
          Shop New In
        </Link>
      </div>
    </section>
  )
}
