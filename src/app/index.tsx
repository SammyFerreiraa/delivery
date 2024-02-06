import { CategoryButton } from '@/components/CategoryButton'
import { Header } from '@/components/Header'
import { View, Text, FlatList } from 'react-native'

import { CATEGORIES } from '@/utils/data/products'
import { useState } from 'react'

export default function App() {
  const [category , setCategory] = useState(CATEGORIES[0])

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory)
  }
  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantity={5}/>

      <FlatList data={CATEGORIES} keyExtractor={(item) => item}  horizontal  renderItem={({ item }) => <CategoryButton title={item} onPress={() => handleCategorySelect(item)} isSelected={item === category} />} className='max-h-10 mt-5' contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }} showsHorizontalScrollIndicator={false} />
    </View>
  ) 
}