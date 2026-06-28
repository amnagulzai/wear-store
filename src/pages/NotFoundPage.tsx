import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6">
      <p className="eyebrow text-marigold">Off the bolt</p>
      <p className="mt-4 font-display text-7xl font-semibold tracking-tight text-ink">404</p>
      <h1 className="mt-3 font-display text-2xl font-medium">This page was never cut</h1>
      <p className="mt-3 text-muted">The page you're looking for doesn't exist or has moved.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-ink px-8 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </div>
  )
}
