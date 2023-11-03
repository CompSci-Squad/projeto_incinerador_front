import { AxiosResponse } from 'axios'

export interface ProductsLoader {
  products: AxiosResponse<Array<Product>>
}

export interface Product {
  id: string
  title: string
  price: string
  description: string
  mainImage: string
  images: Array<string>
}
