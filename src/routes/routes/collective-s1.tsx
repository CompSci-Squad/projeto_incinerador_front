import { RouteObject } from 'react-router-dom'

import CollectiveS1 from '~/pages/collective-s1'

export const collectiveS1Route: RouteObject = {
  path: 'collective-s1',
  element: (
    <>
      <CollectiveS1 />
    </>
  ),
}
