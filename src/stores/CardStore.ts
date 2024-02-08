import { ProductProps } from '@/utils/data/products'
import { create } from 'zustand'
import * as CartInMemory from './helpers/CartInMemory'

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  add: (product: ProductProps) => void
  remove: (productId: string) => void
}

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  add: (product: ProductProps) => set((state) => ({
    products: CartInMemory.add(state.products, product)
  })),
  remove: (productId: string) => set((state) => ({
    products: CartInMemory.remove(state.products, productId)
  }))
}))