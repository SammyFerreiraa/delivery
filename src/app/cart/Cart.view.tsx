import { View, Text, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import useCartModel from "./Cart.model";
import { Header, Button, Input, LinkButton, Product } from "@/components";

export default function CartView({ cartStore, setAddress, total, handleRemoveProduct, handleOrder } : ReturnType<typeof useCartModel>) {
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