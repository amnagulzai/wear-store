import { Link } from 'react-router-dom'
import type { Category } from '../types'

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative block overflow-hidden rounded-sm bg-ecru"
    >
      {category.image ? (
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="aspect-4/3 w-full object-cover object-top transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      ) : (
        <div className="aspect-4/3 w-full bg-ink" />
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-deep/70 via-deep/10 to-transparent p-5 text-paper">
        <h3 className="font-display text-2xl font-semibold">{category.name}</h3>
        <span className="mt-1 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-paper/80 transition-colors group-hover:text-marigold">
          Shop now <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
