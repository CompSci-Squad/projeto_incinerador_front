import { Outlet, RouteObject } from 'react-router-dom'

import { productLoader, productsLoader } from '~/features/store/store.loader'
import Store from '~/pages/store'
import ProductDetails from '~/pages/store/components/ProductDetails'

export const storeRoute: RouteObject = {
  path: 'store',
  element: (
    <>
      <Store />
      <Outlet />
    </>
  ),
  loader: productsLoader,
  children: [
    {
      path: 'details/:id',
      element: (
        <>
          <ProductDetails />
          <Outlet />
        </>
      ),
      loader: productLoader,
    },
  ],
}
