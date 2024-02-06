import { Slot } from "expo-router";
import { SafeAreaView, SafeAreaViewBase } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  if (!fontsLoader) {
    return <Loading />
  }
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <Slot />
    </SafeAreaView>
  )
}