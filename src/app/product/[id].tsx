import { useLocalSearchParams } from 'expo-router'
import { useProductModel } from './Product.model';
import { ProductView } from './Product.view';

export default function Home() {
  const { id } = useLocalSearchParams();
  const methodProduct = useProductModel({ id: id as string })

  return (
    <ProductView {...methodProduct} />
  )
}