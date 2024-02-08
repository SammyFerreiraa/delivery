import { useCartStore } from "@/stores/CardStore"
import { PRODUCTS } from "@/utils/data/products"
import { useLocalSearchParams, useNavigation } from "expo-router"

export const useProductModel = ({ id }: { id: string }) => {
  const navigation = useNavigation()
  const useStore = useCartStore()

  const product = PRODUCTS.find((product) => product.id === id)

  if (!product) {
    return {
      product
    }
  } 

  const handleAddToCart = () => {
    useStore.add(product)
    navigation.goBack()
  }

  return {
    product, handleAddToCart
  }
} 