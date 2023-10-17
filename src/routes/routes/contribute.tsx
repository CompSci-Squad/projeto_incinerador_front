import { RouteObject } from 'react-router-dom'

import Contribute from '~/pages/contribute'

export const contributeRoute: RouteObject = {
  path: 'contribute',
  element: (
    <>
      <Contribute />
    </>
  ),
}
