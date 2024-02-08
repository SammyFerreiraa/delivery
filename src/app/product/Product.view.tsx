import { Image, Text, View } from "react-native";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { Button, LinkButton } from "@/components";
import { Feather } from '@expo/vector-icons';
import { Redirect } from "expo-router";
import { useProductModel } from "./Product.model";

export const ProductView = ({ product, handleAddToCart } : ReturnType<typeof useProductModel>) => {

  if (!product) {
    return <Redirect href="/" />
  }

  return (
    <View className="flex-1">
      <Image source={product.cover} className="w-full h-52" resizeMode="cover" />


      <View className="p-5 mt-8 flex-1">
        <Text className="text-white text-xl font-heading">{product.title}</Text>
        <Text className="text-lime-400 text-xl font-heading my-2">{formatCurrency(product.price)}</Text>
        <Text className="text-slate-400 font-body text-base leading-6 mb-6">{product.description}</Text>

        {
          product.ingredients.map((ingredient) => (
            <Text key={ingredient} className="text-slate-400 leading-6 font-body text-base"> {'\u2022'} {ingredient}</Text>
          ))
        }
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={24}  />
          </Button.Icon>
          <Button.Text>Adicionar ao carrinho</Button.Text>
        </Button>

        <LinkButton title="Voltar para o cardápio" href="/" />
      </View>
    </View>
  )
}