import { Link } from 'react-router-dom'
import type { Category } from '../types'

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative block overflow-hidden rounded-lg bg-cream"
    >
      {category.image ? (
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="aspect-4/3 w-full bg-brand-soft" />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-center text-white transition-colors group-hover:bg-black/35">
        <h3 className="font-display text-2xl font-semibold">{category.name}</h3>
        <span className="mt-2 text-xs uppercase tracking-[0.2em]">Shop now</span>
      </div>
    </Link>
  )
}
