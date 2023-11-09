import { defer, LoaderFunctionArgs, useLoaderData } from 'react-router-dom'

import {
  ProductLoader,
  ProductsLoader,
} from '~/interfaces/store/product.interface'
import { getProduct, productsList } from '~/services/endpoints/productsList'

export const productsLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)

  const limit = url.searchParams.get('limit')
  const page = url.searchParams.get('page')

  const queryParams = {
    _limit: limit || 8,
    _page: page,
  }
  const products = await productsList({ params: queryParams })
  return defer({ products })
}

export const useProductsLoader = () => {
  return useLoaderData() as ProductsLoader
}

export const productLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params

  const product = await getProduct(id as string)

  return defer({ product })
}

export const useProductLoader = () => {
  return useLoaderData() as ProductLoader
}
