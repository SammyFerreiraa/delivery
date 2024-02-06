import { Header } from '@/components/Header'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantity={5}/>
    </View>
  )
}