import { RouteObject } from 'react-router-dom'

import AboutUs from '~/pages/aboutUs'

export const aboutUsRoute: RouteObject = {
  path: 'about-us',
  element: (
    <>
      <AboutUs />
    </>
  ),
}
