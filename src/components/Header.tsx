import { Image, View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import { Link } from "expo-router"; 

type HeaderProps = {
  title: string
  cartQuantity?: number
}

export function Header({ title, cartQuantity = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require('@/assets/logo.png')} className="h-6 w-32"/>
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cartQuantity > 0 && (
        <Link href="/cart" asChild>
          <TouchableOpacity className="relative" activeOpacity={0.7}>
              <View className="bg-lime-300 w-4 items-center justify-center h-4 z-10 rounded-full absolute -right-1.5 -top-1">
                <Text className="text-slate-900 text-xs font-bold">{cartQuantity}</Text>
              </View>
            <Feather name="shopping-bag" size={24} color={colors.white} />  
          </TouchableOpacity>
        </Link>
      )}


    </View>
  )
}