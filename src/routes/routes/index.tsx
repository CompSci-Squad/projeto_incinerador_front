import { createBrowserRouter } from 'react-router-dom'

import Layout from '~/components/layout'
import Erro404 from '~/pages/404-error'
import Home from '~/pages/home'

import { catalogRoute } from './catalog'
import { collectiveRoute } from './collective'
import { historyRoute } from './history'
import { lojaRoute } from './loja'
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
      lojaRoute,
      collectiveRoute,
      historyRoute,
      supportRoute,
    ],
  },
  {
    path: '*',
    element: <Erro404 />,
  },
])
