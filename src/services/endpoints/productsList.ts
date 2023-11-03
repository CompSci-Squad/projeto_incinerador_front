import { Product } from '~/interfaces/store/product.interface'

import HttpService from '../http'

export const productsList = async ({ limit, page }) => {
  return await HttpService.get<Array<Product>>({
    url: `${import.meta.env.VITE_BASE_URL}/products?_limit=${}`,
  })
}
