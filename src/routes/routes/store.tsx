import { RouteObject } from 'react-router-dom'

import { productsLoader } from '~/features/store/store.loader'
import Store from '~/pages/store'

export const storeRoute: RouteObject = {
  path: 'store',
  element: (
    <>
      <Store />
    </>
  ),
  loader: productsLoader,
}
