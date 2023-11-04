import { Product } from '~/interfaces/store/product.interface'

import HttpService from '../http'

export const productsList = async () => {
  return await HttpService.get<Array<Product>>({
    url: `${import.meta.env.VITE_BASE_URL}/products?_page=1&_limit=8`,
  })
}
