import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router'
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { Button } from "@/components/Button";
import { Feather } from '@expo/vector-icons'
import { LinkButton } from "@/components/LinkButton";

export default function Product() {
  const id = useLocalSearchParams().id

  const product = PRODUCTS.filter((product) => product.id === id)[0]

  return (
    <View className="flex-1">
      <Image source={product.cover} className="w-full h-52" resizeMode="cover" />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-xl font-heading my-2">{formatCurrency(product.price)}</Text>
        <Text className="text-slate-400 font-body text-base leading-6 mb-6">{product.description}</Text>

        {
          product.ingredients.map((ingredient) => (
            <Text key={ingredient} className="text-slate-400 leading-6 font-body text-base"> {'\u2022'} {ingredient}</Text>
          ))
        }
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button>
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