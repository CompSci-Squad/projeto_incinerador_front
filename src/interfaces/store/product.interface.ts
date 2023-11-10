import { AxiosResponse } from 'axios'

export interface ProductsLoader {
  products: AxiosResponse<Array<Product>>
}

export interface ProductLoader {
  product: AxiosResponse<Product>
}

export interface Product {
  id: string
  title: string
  price: string
  description: string
  images: Array<string>
}
