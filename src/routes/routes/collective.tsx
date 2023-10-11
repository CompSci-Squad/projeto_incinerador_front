import { RouteObject } from 'react-router-dom'

import Collective from '~/pages/collective'

export const collectiveRoute: RouteObject = {
  path: 'collective',
  element: (
    <>
      <Collective />
    </>
  ),
}
