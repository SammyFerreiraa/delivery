import { Header } from '@/components/Header'
import { View, Text, FlatList, SectionList } from 'react-native'
import { Link } from 'expo-router'
import { CATEGORIES, MENU } from '@/utils/data/products'
import { Product, CategoryButton } from '@/components'
import { useHomeModel } from './Home.model'

export default function Home({ handleCategorySelect, cartQuantityItems, sectionListRef, category }: ReturnType<typeof useHomeModel>) {
  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantity={cartQuantityItems}/>

      <FlatList data={CATEGORIES} keyExtractor={(item) => item}  horizontal  renderItem={({ item }) => <CategoryButton title={item} onPress={() => handleCategorySelect(item)} isSelected={item === category} />} className='max-h-10 mt-5' contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }} showsHorizontalScrollIndicator={false} />

      <SectionList ref={sectionListRef} sections={MENU} keyExtractor={(item) => item.id} stickySectionHeadersEnabled={false} renderItem={({ item }) => <Link asChild href={`/product/${item.id}`}><Product data={item} /></Link>} renderSectionHeader={({ section }) => <Text className='text-xl text-white font-heading mt-8 mb-3'>{section.title}</Text>} className='flex-1 p-5' showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}/>
    </View>
  ) 
}