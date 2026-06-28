import { Link } from 'react-router-dom'
import { categories } from '../data'
import { Wordmark } from './Wordmark'

export function Footer() {
  return (
    <footer className="mt-20 bg-deep text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {/* Selvedge top edge */}
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-paper/15" />
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-marigold">
            Cut · Cloth · Considered
          </span>
          <span className="h-px flex-1 bg-paper/15" />
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Wordmark className="text-3xl" tone="paper" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              An indigo house of ready-to-wear, unstitched cloth, and the accessories that finish a
              look.
            </p>
          </div>

          <FooterCol title="Shop">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className="text-paper/70 transition-colors hover:text-marigold">
                  {c.name}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Atelier">
            <li>Order tracking</li>
            <li>Returns &amp; exchanges</li>
            <li>Tailoring guide</li>
            <li>Store locator</li>
          </FooterCol>

          <FooterCol title="Contact">
            <li>hello@wear.example</li>
            <li>+92 300 0000000</li>
            <li className="pt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/50">
              Mon–Sat · 10–7
            </li>
          </FooterCol>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-paper/50 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} Wear Happiness</span>
          <span>Made with Happiness</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-paper/50">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-paper/70">{children}</ul>
    </div>
  )
}
