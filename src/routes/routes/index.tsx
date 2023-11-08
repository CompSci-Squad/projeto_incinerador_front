import { createBrowserRouter } from 'react-router-dom'

import Layout from '~/components/layout'
import Erro404 from '~/pages/404-error'
import Home from '~/pages/home'

import { aboutRoute } from './about'
import { aboutUsRoute } from './aboutUs'
import { collectiveRoute } from './collective'
import { collectiveS1Route } from './collective-s1'
import { collectiveS2Route } from './collective-s2'
import { contactRoute } from './contact'
import { contributeRoute } from './contribute'
import { eventsRoute } from './events'
import { historyRoute } from './history'
import { newsRoute } from './news'
import { storeRoute } from './store'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      storeRoute,
      collectiveRoute,
      historyRoute,
      newsRoute,
      contributeRoute,
      contactRoute,
      aboutRoute,
      eventsRoute,
      aboutUsRoute,
      collectiveS1Route,
      collectiveS2Route,
    ],
  },
  {
    path: '*',
    element: <Erro404 />,
  },
])
