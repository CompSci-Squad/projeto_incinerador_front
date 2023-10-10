import { RouteObject } from 'react-router-dom'

import Loja from '~/pages/loja'

export const lojaRoute: RouteObject = {
  path: 'loja',
  element: (
    <>
      <Loja />
    </>
  ),
}
