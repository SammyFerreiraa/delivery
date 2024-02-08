import { ProductCartProps, useCartStore } from "@/stores/CardStore";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { Alert, Linking } from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";

const useCartModel = () => {
  const [address, setAddress] = useState('')
  const navigation = useNavigation()
  const cartStore = useCartStore()
  const number = 5511111111111
  const total = formatCurrency(cartStore.products.reduce((acc, product) => acc + (product.price * product.quantity), 0))

  const handleRemoveProduct = (product: ProductCartProps) => {
    Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`, [
      {
        text: "Cancelar",
      },
      {
        text: "Remover",
        onPress: () => cartStore.remove(product.id),
      }
    ])
  }

  const handleOrder = () => {
    if (address.trim().length === 0) {
      Alert.alert("Atenção", "Informe o endereço de entrega.")
      return
    }

    const products = cartStore.products.map((product) => (
      `\n ${product.quantity}x ${product.title}`
    )).join('')

    const message = `
    🍔 NOVO PEDIDO 🍔
    \n Entregar em: ${address}
    ${products}
    \n ${total}`

    Linking.openURL(`http://api.whatsapp.com/send?phone=${number}&text=${message}`)
    cartStore.clear()
    navigation.goBack()
  }

  return {
    cartStore, setAddress, total, handleRemoveProduct, handleOrder
  }
}

export default useCartModel