import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="font-display text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">The page you're looking for doesn't exist or has moved.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-soft"
      >
        Back to home
      </Link>
    </div>
  )
}
