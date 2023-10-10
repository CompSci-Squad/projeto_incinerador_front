import { createBrowserRouter } from 'react-router-dom'

import Layout from '~/components/layout'
import Erro404 from '~/pages/404-error'
import Home from '~/pages/home'

import { catalogRoute } from './catalog'
import { lojaRoute } from './loja'

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
    ],
  },
  {
    path: '*',
    element: <Erro404 />,
  },
])
