import { RouteObject } from 'react-router-dom'

import Events from '~/pages/events'

export const eventsRoute: RouteObject = {
  path: 'events',
  element: (
    <>
      <Events />
    </>
  ),
}
