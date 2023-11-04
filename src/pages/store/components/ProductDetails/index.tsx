import { useProductLoader } from '~/features/store/store.loader'

const ProductDetails = () => {
  const { product } = useProductLoader()
  console.log(product)
  return <main>test</main>
}

export default ProductDetails
