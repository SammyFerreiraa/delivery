import { Header } from '@/components/Header'
import { View, Text, FlatList, SectionList } from 'react-native'
import { Link } from 'expo-router'
import { CATEGORIES, MENU, ProductProps } from '@/utils/data/products'
import { useState, useRef } from 'react'
import { Product, CategoryButton } from '@/components'
import { useCartStore } from '@/stores/CardStore'

export default function App() {
  const [category , setCategory] = useState(CATEGORIES[0])
  const cartStore = useCartStore()

  const sectionListRef = useRef<SectionList<ProductProps>>(null)

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory)
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({ sectionIndex, itemIndex: 0, animated: true })
    }
  }

  const cartQuantityItems = cartStore.products.reduce((total, item) => total + item.quantity, 0)

  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantity={cartQuantityItems}/>

      <FlatList data={CATEGORIES} keyExtractor={(item) => item}  horizontal  renderItem={({ item }) => <CategoryButton title={item} onPress={() => handleCategorySelect(item)} isSelected={item === category} />} className='max-h-10 mt-5' contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }} showsHorizontalScrollIndicator={false} />

      <SectionList ref={sectionListRef} sections={MENU} keyExtractor={(item) => item.id} stickySectionHeadersEnabled={false} renderItem={({ item }) => <Link asChild href={`/product/${item.id}`}><Product data={item} /></Link>} renderSectionHeader={({ section }) => <Text className='text-xl text-white font-heading mt-8 mb-3'>{section.title}</Text>} className='flex-1 p-5' showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}/>
    </View>
  ) 
}