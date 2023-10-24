import { createBrowserRouter } from 'react-router-dom'

import Layout from '~/components/layout'
import Erro404 from '~/pages/404-error'
import Home from '~/pages/home'

import { aboutRoute } from './about'
import { catalogRoute } from './catalog'
import { collectiveRoute } from './collective'
import { contactRoute } from './contact'
import { contributeRoute } from './contribute'
import { eventsRoute } from './events'
import { historyRoute } from './history'
import { newsRoute } from './news'
import { storeRoute } from './store'
import { supportRoute } from './support'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      catalogRoute,
      storeRoute,
      collectiveRoute,
      historyRoute,
      supportRoute,
      newsRoute,
      contributeRoute,
      contactRoute,
      aboutRoute,
      eventsRoute,
    ],
  },
  {
    path: '*',
    element: <Erro404 />,
  },
])
