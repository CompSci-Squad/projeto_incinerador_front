import { Product } from '~/interfaces/store/product.interface'

import HttpService from '../http'
import { endpoint } from './endpoints'

export const productsList = async ({ params }: any) => {
  return await HttpService.get<Array<Product>>({
    url: endpoint.PRODUCT.LIST(),
    params,
  })
}

export const getProduct = async (id: string) => {
  return await HttpService.get<Product>({
    url: endpoint.PRODUCT.ONE(id),
  })
}
