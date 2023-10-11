import { RouteObject } from 'react-router-dom'

import History from '~/pages/history'

export const historyRoute: RouteObject = {
  path: 'history',
  element: (
    <>
      <History />
    </>
  ),
}
