import { defer, useLoaderData } from 'react-router-dom'

import { productsList } from '~/services/endpoints/productsList'

import { ProductsLoader } from '../../interfaces/store/product.interface'

export const productsLoader = async () => {
  const products = await productsList()
  return defer({ products })
}

export const useProductsLoader = () => {
  return useLoaderData() as ProductsLoader
}
