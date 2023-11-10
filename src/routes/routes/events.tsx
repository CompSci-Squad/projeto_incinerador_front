import { RouteObject } from 'react-router-dom'

import { eventLoader, eventsLoader } from '~/features/events/event.loader'
import Events from '~/pages/events'

export const eventsRoute: RouteObject = {
  path: 'events',
  children: [
    {
      index: true,
      element: <Events />,
      loader: eventsLoader,
    },
    {
      path: 'details/:id',
      element: <h1>sla</h1>,
      loader: eventLoader,
    },
  ],
}
