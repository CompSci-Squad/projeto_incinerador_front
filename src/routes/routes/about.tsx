import { RouteObject } from 'react-router-dom'

import About from '~/pages/about'

export const aboutRoute: RouteObject = {
  path: 'About',
  element: (
    <>
      <About />
    </>
  ),
}
