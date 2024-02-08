import { useCartStore } from "@/stores/CardStore"
import { CATEGORIES, ProductProps } from "@/utils/data/products"
import { useState, useRef } from "react"
import { SectionList } from "react-native"

export const useHomeModel = () => {
  const [category , setCategory] = useState(CATEGORIES[0])
  const cartStore = useCartStore()

  const sectionListRef = useRef<SectionList<ProductProps>>(null)

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory)
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({ sectionIndex, itemIndex: 0, animated: true })
    }
  }

  const cartQuantityItems = cartStore.products.reduce((total, item) => total + item.quantity, 0)

  return {
    handleCategorySelect, cartQuantityItems, sectionListRef, category
  }
}