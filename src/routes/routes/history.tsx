import { RouteObject } from 'react-router-dom'

import History from '~/pages/history'
import Section1 from '~/pages/history/components/section1'
import Section2 from '~/pages/history/components/section2'

export const historyRoute: RouteObject = {
  path: 'history',
  children: [
    {
      index: true,
      element: <History />,
    },
    {
      path: 'section1',
      element: <Section1 />,
    },
    {
      path: 'section2',
      element: <Section2 />,
    },
  ],
}
