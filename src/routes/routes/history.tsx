import { RouteObject } from 'react-router-dom'

import History from '~/pages/history'
import Incinerator from '~/pages/history/components/Incinerator'
import Occupation from '~/pages/history/components/Occupation'

export const historyRoute: RouteObject = {
  path: 'history',
  children: [
    {
      index: true,
      element: <History />,
    },
    {
      path: 'incinerator',
      element: <Incinerator />,
    },
    {
      path: 'occupation',
      element: <Occupation />,
    },
  ],
}
