import { RouteObject } from 'react-router-dom'

import Support from '~/pages/support'

export const supportRoute: RouteObject = {
  path: 'support',
  element: (
    <>
      <Support />
    </>
  ),
}
