import { useEffect, useMemo, useReducer, type ReactNode } from 'react'
import { getProductById } from '../data'
import { effectivePrice } from '../lib/format'
import { CartContext, type CartLine } from './context'

const STORAGE_KEY = 'wear-store.cart'

type Action =
  | { type: 'add'; productId: string; size: string; qty: number }
  | { type: 'updateQty'; productId: string; size: string; qty: number }
  | { type: 'removeLine'; productId: string; size: string }
  | { type: 'clear' }

function sameLine(line: CartLine, productId: string, size: string): boolean {
  return line.productId === productId && line.size === size
}

function reducer(state: CartLine[], action: Action): CartLine[] {
  switch (action.type) {
    case 'add': {
      const existing = state.find((l) => sameLine(l, action.productId, action.size))
      if (existing) {
        return state.map((l) =>
          sameLine(l, action.productId, action.size) ? { ...l, qty: l.qty + action.qty } : l,
        )
      }
      return [...state, { productId: action.productId, size: action.size, qty: action.qty }]
    }
    case 'updateQty': {
      const qty = Math.max(1, action.qty)
      return state.map((l) =>
        sameLine(l, action.productId, action.size) ? { ...l, qty } : l,
      )
    }
    case 'removeLine':
      return state.filter((l) => !sameLine(l, action.productId, action.size))
    case 'clear':
      return []
  }
}

function init(): CartLine[] {
  if (typeof localStorage === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    // Keep only lines whose product still exists in the catalog.
    return parsed.filter(
      (l): l is CartLine =>
        l && typeof l.productId === 'string' && typeof l.size === 'string' && typeof l.qty === 'number' && getProductById(l.productId) != null,
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, undefined, init)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage failures (e.g. private mode)
    }
  }, [items])

  const value = useMemo(() => {
    let subtotal = 0
    let count = 0
    let hasUnpricedItems = false
    for (const line of items) {
      count += line.qty
      const product = getProductById(line.productId)
      const price = product ? effectivePrice(product) : undefined
      if (price == null) hasUnpricedItems = true
      else subtotal += price * line.qty
    }

    return {
      items,
      count,
      subtotal,
      hasUnpricedItems,
      add: (productId: string, size: string, qty = 1) =>
        dispatch({ type: 'add', productId, size, qty }),
      updateQty: (productId: string, size: string, qty: number) =>
        dispatch({ type: 'updateQty', productId, size, qty }),
      removeLine: (productId: string, size: string) =>
        dispatch({ type: 'removeLine', productId, size }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
