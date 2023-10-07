import { Outlet, RouteObject } from 'react-router-dom'

import Catalog from '~/pages/catalog'

export const catalogRoute: RouteObject = {
  path: 'catalogo',
  element: (
    <>
      <Catalog />
      <div id="detail">
        <Outlet />
      </div>
    </>
  ),
}