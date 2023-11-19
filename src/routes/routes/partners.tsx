import { RouteObject } from 'react-router-dom'

import PartnersPage from '../../pages/partners'

export const partnersRoute: RouteObject = {
  path: 'partners',
  children: [
    {
      index: true,
      element: <PartnersPage />,
    },
  ],
}
