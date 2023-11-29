import { RouteObject } from 'react-router-dom'

import Collective from '~/pages/collective'
import Origin from '~/pages/collective/components/Origin'
import Proposals from '~/pages/collective/components/Proposals'

export const collectiveRoute: RouteObject = {
  path: 'collective',
  children: [
    {
      index: true,
      element: <Collective />,
    },
    {
      path: 'origin',
      element: <Origin />,
    },
    {
      path: 'proposals',
      element: <Proposals />,
    },
  ],
}
