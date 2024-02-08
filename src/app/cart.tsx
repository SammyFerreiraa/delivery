import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Product } from "@/components/Product";
import { ProductCartProps, useCartStore } from "@/stores/CardStore";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { View, Text, ScrollView, Alert, Linking } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/LinkButton";
import { useState } from "react";
import { useNavigation } from "expo-router";

export default function Cart() {
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

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu Carrinho"/>
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="p-5 flex-1">
          {cartStore.products.length > 0 ? (
            <View className="border-b border-slate-700">
              {
                cartStore.products.map((product) => (
                  <Product key={product.id} data={product} onPress={() => handleRemoveProduct(product)} />  
                  ))
                }
            </View>
          ) : (
            <Text className="text-slate-400 font-body text-center my-8">
              Seu carrinho está vazio.
            </Text>
              )
            }

          <View className="flex-row gap-2 items-center mb-4 mt-5">
            <Text className="text-white font-subtitle text-xl">Total:</Text>
            <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
          </View>

          <Input placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
           onChangeText={setAddress} onSubmitEditing={handleOrder} blurOnSubmit returnKeyType="next"/>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>Confirmar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Continuar comprando" href="/" />
      </View>
    </View>
  );
}