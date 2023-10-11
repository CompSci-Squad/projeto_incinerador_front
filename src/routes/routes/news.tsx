import { RouteObject } from 'react-router-dom'

import News from '~/pages/news'

export const newsRoute: RouteObject = {
  path: 'news',
  element: (
    <>
      <News />
    </>
  ),
}
