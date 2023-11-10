import { RouteObject } from 'react-router-dom'

import Collective from '~/pages/collective'
import Origin from '~/pages/collective/components/origin'
import Proposals from '~/pages/collective/components/proposals'

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
