import { RouteObject } from 'react-router-dom'

import { eventLoader, eventsLoader } from '~/features/events/event.loader'
import Events from '~/pages/events'

import EventDetail from '../../pages/events/components/EventDetail'

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
      element: <EventDetail />,
      loader: eventLoader,
    },
  ],
}
