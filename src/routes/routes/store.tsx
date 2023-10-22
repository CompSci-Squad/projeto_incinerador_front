import { RouteObject } from 'react-router-dom'

import Store from '~/pages/store'

export const storeRoute: RouteObject = {
  path: 'store',
  element: (
    <>
      <Store />
    </>
  ),
}
