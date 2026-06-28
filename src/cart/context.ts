import { createContext } from 'react'

export interface CartLine {
  productId: string
  size: string
  qty: number
}

export interface CartContextValue {
  items: CartLine[]
  /** Total number of units in the cart. */
  count: number
  /** Sum of effective prices for lines that have a known price. */
  subtotal: number
  /** True when any line's product has no price set yet. */
  hasUnpricedItems: boolean
  add: (productId: string, size: string, qty?: number) => void
  updateQty: (productId: string, size: string, qty: number) => void
  removeLine: (productId: string, size: string) => void
  clear: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
