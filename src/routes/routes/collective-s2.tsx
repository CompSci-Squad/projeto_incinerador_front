import { RouteObject } from 'react-router-dom'

import CollectiveS2 from '~/pages/collective-s2'

export const collectiveS2Route: RouteObject = {
  path: 'collective-s2',
  element: (
    <>
      <CollectiveS2 />
    </>
  ),
}
